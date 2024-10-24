import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { corsiva } from "@/utils/fonts";
import { VIDEOS } from "@/data/data";
import { theme } from "@/pages/_app";
SwiperCore.use([Navigation]);
const VideosSection = (data) => {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const isTabletView = useMediaQuery(theme.breakpoints.isTabletView);
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);
  const swiperRef = useRef();
  const videosData = data?.data?.page?.biniHomepage?.videosBlock?.videosList;
  const videosBlock = data?.data?.page?.biniHomepage?.videosBlock;
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{ padding: isMobileView ? "0" : "31px", position: "relative" }}
    >
      <Box
        id="artistVideos"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>
      <Stack
        data-aos="fade-up"
        data-aos-duration="1000"
        direction="column"
        alignItems="center"
        gap="32px"
      >
        <Typography
          component="p"
          fontSize={isMobileView ? "32px" : "46px"}
          textAlign="center"
          color="#324B4E"
          className={corsiva.className}
        >
          {videosBlock?.blockTitle ?? "Videos"}
        </Typography>
        <Container maxWidth="lg" sx={{ position: "relative", padding: 0 }}>
          <KeyboardArrowLeftIcon
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            sx={{
              fontSize: "2.5rem",
              color: "#324B4E",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: isMobileView ? "0" : isTabletView ? "2rem" : "-3rem",
              zIndex: 20,
              cursor: "pointer",
            }}
          />
          <Swiper ref={swiperRef} allowTouchMove={false} loop>
            {videosData.map((video) => (
              <SwiperSlide key={video.videoEmbed}>
                <VideoContainer
                  video={video}
                  isMobileView={isMobileView}
                  isTabletView={isTabletView}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <KeyboardArrowRightIcon
            onClick={() => swiperRef.current?.swiper.slideNext()}
            sx={{
              fontSize: "2.5rem",
              color: "#324B4E",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: isMobileView ? "0" : isTabletView ? "2rem" : "-3rem",
              zIndex: 20,
              cursor: "pointer",
            }}
          />
        </Container>
        <Button
          href={
            videosBlock.moreVideos?.url ||
            "https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ"
          }
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
          {videosBlock.moreVideos?.title || "More Videos"}
        </Button>
      </Stack>
    </Container>
  );
};
const VideoCaption = ({ video, isMobileView }) => {
  return (
    <Stack direction="column" margin={"24px"}>
      <Typography
        component="p"
        fontSize={isMobileView ? "24px" : "32px"}
        color={isMobileView ? "#554940" : "white"}
        fontWeight={"600"}
        textAlign={isMobileView ? "center" : "left"}
        sx={{
          textShadow: !isMobileView
            ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
            : "none",
        }}
      >
        {video?.videoTitle}
      </Typography>
      <Typography
        component="p"
        fontSize={isMobileView ? "24px" : "32px"}
        color={isMobileView ? "#554940" : "white"}
        fontWeight={"600"}
        textAlign={isMobileView ? "center" : "left"}
        sx={{
          textShadow: !isMobileView
            ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
            : "none",
        }}
      >
        Video | BINI
      </Typography>
    </Stack>
  );
};
const VideoContainer = ({ isMobileView, video, isTabletView }) => {
  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <iframe
          width={"100%"}
          // height={isMobileView ? "233" : isTabletView ? "400" : "606"}
          src={video?.videoEmbed}
          title={video?.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          style={{ border: "none", aspectRatio: "16/9" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Stack>
      {/* {isMobileView && (
        <VideoCaption isMobileView={isMobileView} video={video} />
      )} */}
    </>
  );
};
export default VideosSection;
