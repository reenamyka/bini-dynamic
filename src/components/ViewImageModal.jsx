"use client";
import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ViewImageModal = ({ images = [] }) => {
  const isMobileView = useMediaQuery("(max-width: 800px)");
  const isLaptopView = useMediaQuery("(max-width: 1200px)");
  const [modalState, setModalState] = useState({
    isOpen: false,
    chosenImg: {},
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const topSwiperRef = useRef();
  const bottomSwiperRef = useRef();

  // useEffect(() => {
  //   setThumbsSwiper(bottomSwiperRef.current.swiper);
  // }, []);

  useEffect(() => {
    // Allow swipable slide in mobile view
    if (isMobileView) {
      topSwiperRef.current.swiper.allowTouchMove = true;
    } else {
      topSwiperRef.current.swiper.allowTouchMove = false;
    }
  }, [isMobileView]);

  useEffect(() => {
    // topSwiperRef.current.swiper.slideTo(images?.indexOf(modalState?.chosenImg?.mediaItemUrl));

    topSwiperRef.current.swiper.slideTo(images.map(i => i.mediaItemUrl).indexOf(modalState.chosenImg.mediaItemUrl));
  }, [modalState?.chosenImg?.mediaItemUrl]);

  useEffect(() => {
    if (modalState?.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to revert overflow when component unmounts or modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalState?.isOpen]);

  return (
    <>
      {/* IMAGE GRID */}
      <ImageList
        sx={{
          width: "fit-content",
          minHeight: "540px",
          margin: "auto",
        }}
        cols={isMobileView ? 2 : isLaptopView ? 3 : 4}
        gap={0}
      >
        {images?.map((img) => (
          <ImageListItem
            key={img.mediaItemUrl}
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={img.mediaItemUrl}
              width={269}
              height={isMobileView ? 200 : 269}
              alt={img.altText}
              style={{
                width: isMobileView ? "100%" : "269px",
                height: "auto",
                aspectRatio: "1/1",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setModalState({ isOpen: true, chosenImg: img })}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal part */}
      <Box
        component="div"
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          position: "fixed",
          top: "0",
          zIndex: "100",
          display: modalState?.isOpen ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            padding: isMobileView ? "0" : "20px 126px",
            position: isMobileView ? "unset" : "relative",
          }}
        >
          <Stack direction="column" gap="16px">
            {/* Close button */}
            <Stack
              sx={{ width: "98%" }}
              direction="row"
              justifyContent="flex-end"
              position={isMobileView ? " absolute" : "relative"}
              top={isMobileView ? "1.5rem" : "0"}
              right={isMobileView ? "1.5rem" : "0"}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap="8px"
                sx={{ cursor: "pointer" }}
                onClick={() => setModalState({ isOpen: false, chosenImg: "" })}
              >
                <Typography component="p" color="white" fontWeight="300">
                  Close
                </Typography>
                <CloseIcon sx={{ color: "white" }} />
              </Stack>
            </Stack>

            {/* Top swiper */}
            <Container
              maxWidth="lg"
              sx={{
                padding: 0,
                position: "relative",
              }}
            >
              {!isMobileView && (
                <IconButton
                  onClick={() => topSwiperRef.current.swiper.slidePrev()}
                  size="small"
                  sx={{
                    padding: "3px",
                    height: "fit-content",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "-2%",
                    zIndex: 20,
                    backgroundColor: "none",
                    "&:disabled": {
                      opacity: 0.5,
                    },
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{
                      fontSize: "2rem",
                      color: "white",
                    }}
                  />
                </IconButton>
              )}

              <Swiper
                autoHeight={true}
                ref={topSwiperRef}
                thumbs={{
                  swiper: thumbsSwiper?.destroyed ? null : thumbsSwiper,
                }}
              >
                {images?.map((image) => (
                  <SwiperSlide key={image.mediaItemUrl}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={image.mediaItemUrl}
                        priority
                        width={isMobileView ? 366 : 1076}
                        height={556}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "556px",
                          objectFit: isMobileView ? "cover" : "contain",
                          backgroundColor: "black",
                        }}
                        alt="Gallery image"
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>

              {!isMobileView && (
                <IconButton
                  onClick={() => topSwiperRef.current.swiper.slideNext()}
                  size="small"
                  sx={{
                    padding: "3px",
                    height: "fit-content",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "-2%",
                    zIndex: 20,
                    backgroundColor: "none",
                    "&:disabled": {
                      opacity: 0.5,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{
                      fontSize: "2rem",
                      color: "white",
                    }}
                  />
                </IconButton>
              )}
            </Container>

            {/* Bottom Swiper */}
            <Container maxWidth="lg" sx={{ padding: 0 }}>
              <Swiper
                ref={bottomSwiperRef}
                onSwiper={setThumbsSwiper}
                slidesPerView={"auto"}
                spaceBetween={10}
                freeMode
                watchSlidesProgress
              >
                {images?.map((image) => (
                  <SwiperSlide
                    key={Math.random()}
                    style={{
                      width: "fit-content",
                      opacity: "0.5",
                    }}
                  >
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        src={image.mediaItemUrl}
                        width={isMobileView ? 74 : 196}
                        height={isMobileView ? 42 : 110}
                        style={{
                          objectFit: "cover",
                          backgroundColor: "black",
                        }}
                        alt="Gallery image"
                      />
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ViewImageModal;
