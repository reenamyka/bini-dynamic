import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import { corsiva } from "@/utils/fonts";
import { SONGS_DATA } from "@/data/data";
import { theme } from "@/pages/_app";
SwiperCore.use([EffectCoverflow, Navigation]);
const MusicSection = (data) => {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);
  const isTabletView = useMediaQuery(theme.breakpoints.isTabletView);
  const MUSIC_DATA = data?.data?.page?.biniHomepage?.discographyBlock?.discographyAlbums;
  const musicBlock = data?.data?.page?.biniHomepage?.discographyBlock;
  return (
    <Container
      component="section"
      id="artistMusic"
      maxWidth="lg"
      sx={{ padding: isMobileView ? "60px 0" : "60px" }}
    >
      <Stack direction="column" alignItems="center" gap="32px">
        <Typography
          data-aos="fade-up"
          data-aos-duration="1500"
          component="p"
          fontSize={isMobileView ? "32px" : "46px"}
          textAlign="center"
          className={corsiva.className}
          color="#324B4E"
          width={"100%"}
        >
          {musicBlock?.blockTitle}
        </Typography>
        <Container maxWidth="lg" sx={{ padding: 0 }}>
          <MusicSwiper
            songs = {MUSIC_DATA}
            isMobileView={isMobileView}
            isLaptopView={isLaptopView}
            isTabletView={isTabletView}
          />
        </Container>
        <Button
          href= {musicBlock.moreMusic.url}
          target="_blank"
          variant="contained"
          rel="noreferrer"
          sx={{
            width: "120px",
            border: "none",
            borderRadius: "20px",
            boxShadow: "none",
            backgroundColor: "#7ACAD2",
            padding: "4px 0",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#7ACAD2",
            },
            fontWeight: "500",
          }}
        >
          {musicBlock.moreMusic?.title || "More Music"}
        </Button>
      </Stack>
    </Container>
  );
};
// SWIPER
const MusicSwiper = ({ songs,isMobileView, isLaptopView, isTabletView }) => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const swiperRef = useRef();
  useEffect(() => {
    setSelectedSong(songs[0]);
  }, []);
  const handleSlideChange = (swiper) => {
    for (let song of songs) {
      if (
        song.albumName.toLowerCase() === swiper.visibleSlides[1]?.id.toLowerCase()
      ) {
        setSelectedSong(song);
      }
    }
  };
  return (
    <Box component="div" position="relative">
      <KeyboardArrowLeftIcon
        onClick={() => swiperRef.current.swiper.slidePrev()}
        sx={{
          fontSize: "2.5rem",
          color: "#324B4E",
          position: "absolute",
          top: !isTabletView && "45%",
          transform: "translateY(-50%)",
          left: isTabletView ? "10px" : "-5rem",
          bottom: isTabletView ? "0" : "0",
          zIndex: 20,
          cursor: "pointer",
        }}
      />
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        allowTouchMove={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        className="musicSectionSwiper"
        onSlideChangeTransitionStart={handleSlideChange}
        style={{
          padding: isMobileView ? "0" : "0 0",
        }}
      >
        {songs.map((song) => (
          <SwiperSlide key={song?.albumName + song?.albumReleasedDate} id={song?.albumName}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              position="relative"
              className="albumCard"
            >
              <MusicOverlay song={song} swiperRef={swiperRef} />
              <Image
                alt={song?.albumCover?.altText}
                src={song?.albumCover?.mediaItemUrl}
                width={isMobileView ? "300" : "400"}
                height={isMobileView ? "300" : "400"}
              />
            </Stack>
          </SwiperSlide>
        ))}
        <Stack
          width="100%"
          direction="column"
          alignItems="center"
          gap={"8px"}
          marginTop={"24px"}
        >
          <Typography
            fontSize="24px"
            fontWeight="500"
            color={"#324B4E"}
            sx={{
              textAlign: "center",
              width: isMobileView ? "80%" : "auto",
            }}
          >
            {selectedSong?.albumName}
          </Typography>
          <Stack direction="row" alignItems="center" gap="8px">
            <Typography color={"#454545"}>{selectedSong?.albumType || 'Album'}</Typography>
            <Typography color={"#454545"}>•</Typography>
            <Typography color={"#454545"}>{selectedSong?.albumReleasedDate}</Typography>
            <Typography color={"#454545"}>•</Typography>
            <Typography color={"#454545"}>
              {selectedSong?.tracksList}
            </Typography>
          </Stack>
        </Stack>
      </Swiper>
      <KeyboardArrowRightIcon
        onClick={() => swiperRef.current.swiper.slideNext()}
        sx={{
          fontSize: "2.5rem",
          color: "#324B4E",
          position: "absolute",
          top: !isTabletView && "45%",
          transform: "translateY(-50%)",
          right: isTabletView ? "10px" : "-5rem",
          bottom: isTabletView ? "0" : "0",
          zIndex: 20,
          cursor: "pointer",
        }}
      />
    </Box>
  );
};
const MusicOverlay = ({ song, swiperRef }) => {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isMobileView) {
      setIsActive(
        song?.albumName?.toLowerCase() ===
          swiperRef?.current?.swiper.visibleSlides[1]?.id.toLowerCase()
      );
    } else {
      setIsActive(false);
    }
  }, [swiperRef?.current?.swiper.visibleSlides[1]?.id, isMobileView]);
  return (
    <div
      id="albumOverlay"
      style={{
        position: "absolute",
        top: isActive ? "-15%" : 0,
        // left: "-2.9rem",
        width: "400px",
        height: "400px",
        backgroundColor: isActive ? "transparent" : "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: isActive ? 1 : 0,
        visibility: isActive ? "visible" : "hidden",
      }}
    >
      <Button
        href={song?.streamNow?.url}
        target="_blank"
        variant="contained"
        size="small"
        rel="noreferrer"
        sx={{
          borderRadius: "20px",
          paddingX: "1rem",
          backgroundColor: "white",
          color: "black",
          textTransform: "capitalize",
          fontWeight: "400",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        {song?.streamNow?.title || "Stream Now"}
      </Button>
    </div>
  );
};
export default MusicSection;