import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards, Navigation, Pagination } from "swiper";
import { BINI_MEMBERS_BIO } from "@/data/data";
//import { useQuery } from "@apollo/client";
import { theme } from "@/pages/_app";
import removeTypename from "@/utils/removeTypename";
//import getBiographyQuery from "@/queries/getBiographyQuery";
import objectNullModifier from "@/utils/objectNullModifier";
import { corsiva, roboto } from "@/utils/fonts";

SwiperCore.use([EffectCards, Navigation, Pagination]);

const BiographySection = (data) => {
  //const { loading, error, data } = useQuery(getBiographyQuery);

  const BIOGRAPHY_WP_DATA =
    data?.data?.page?.biniHomepage?.artistBlock?.artistProfile;

  // If data from Wordpress is available convert it to array
  // else, use the data from data.js
  // let DATA_ARRAY = BIOGRAPHY_WP_DATA
  //   ? Object.values(BIOGRAPHY_WP_DATA).map((value) => {
  //       return value;
  //     })
  //   : BINI_MEMBERS_BIO;
  let DATA_ARRAY = BIOGRAPHY_WP_DATA ?? BINI_MEMBERS_BIO;

  DATA_ARRAY = objectNullModifier(DATA_ARRAY, BINI_MEMBERS_BIO);

  const isMobileView = useMediaQuery("(max-width: 910px)");
  const isTabletView = useMediaQuery(theme.breakpoints.isTabletView);
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);
  const [selectedBio, setSelectedBio] = useState(DATA_ARRAY[0]);
  const swiperRef = useRef();

  const handleSlideChange = (swiper) => {
    const cardIndex = isMobileView ? 0 : 1;

    for (let bio of DATA_ARRAY) {
      if (
        bio.fullName?.toLowerCase() ===
        swiper.visibleSlides?.[cardIndex]?.id.toLowerCase()
      ) {
        setSelectedBio(bio);
      }
    }
  };

  useEffect(() => {
    setSelectedBio(DATA_ARRAY[0]);
  }, [data]);

  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        padding: isMobileView ? "2rem 24px" : "60px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        id="artistProfile"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>

      <Grid container gap={isTabletView ? "24px" : 10} justifyContent="center">
        {/* Members */}
        {isTabletView && (
          <Grid item xs={isLaptopView ? 12 : 4} alignContent="center">
            <RenderMembers
              DATA_ARRAY={DATA_ARRAY}
              selectedBio={selectedBio}
              setSelectedBio={setSelectedBio}
              swiperRef={swiperRef}
            />
          </Grid>
        )}

        <Grid item xs={isMobileView ? 4 : 6}>
          <Box component="div" position="relative">
            <KeyboardArrowLeftIcon
              onClick={() => swiperRef.current.swiper.slidePrev()}
              sx={{
                fontSize: "1.7rem",
                color: "#324B4E",
                position: "absolute",
                transform: "translateY(-50%)",
                left: isMobileView ? "0" : isTabletView ? "35%" : "42%",
                bottom: isMobileView ? "3%" : "2.2%",
                zIndex: 20,
                cursor: "pointer",
              }}
            />

            <Swiper
              ref={swiperRef}
              effect={"cards"}
              centeredSlides
              allowTouchMove={false}
              loop
              initialSlide={0}
              slidesPerView={"auto"}
              pagination={{
                enabled: true,
                type: "fraction",
              }}
              cardsEffect={{
                slideShadows: false,
                perSlideOffset: 10,
              }}
              onSlideChangeTransitionStart={handleSlideChange}
            >
              {DATA_ARRAY?.map((bio) => (
                <SwiperSlide
                  id={bio.fullName}
                  key={bio.fullName}
                  style={{
                    width: "fit-content",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      padding: isMobileView
                        ? "10px 10px 60px 10px"
                        : "24px 24px 80px 24px",
                      backgroundColor: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "6px",
                    }}
                  >
                    <Image
                      src={
                        bio.artistProfileImage?.mediaItemUrl || bio.image || ""
                      }
                      width={478}
                      height={570}
                      style={{
                        width: isMobileView
                          ? "270px"
                          : isLaptopView
                          ? "378px"
                          : "478px",
                        height: isMobileView
                          ? "370px"
                          : isLaptopView
                          ? "470px"
                          : "570px",
                        objectFit: "cover",
                        aspectRatio: "3/4",
                      }}
                      alt={bio?.fullName}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            <KeyboardArrowRightIcon
              onClick={() => swiperRef.current.swiper.slideNext()}
              sx={{
                fontSize: "1.7rem",
                color: "#324B4E",
                position: "absolute",
                transform: "translateY(-50%)",
                right: isMobileView ? "0" : isTabletView ? "35%" : "42%",
                bottom: isMobileView ? "3%" : "2.2%",
                zIndex: 20,
                cursor: "pointer",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={isLaptopView ? 12 : 4} alignContent="center">
          <Stack
            direction={isLaptopView ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
            gap={"24px"}
          >
            {/* About BINI */}
            <BioDetails selectedBio={selectedBio} />

            {!isLaptopView && (
              <Box
                component="div"
                sx={{
                  width: "1px",
                  height: "380px",
                  backgroundColor: "#93767A",
                }}
              ></Box>
            )}

            {/* Members */}
            {!isTabletView && (
              <RenderMembers
                DATA_ARRAY={DATA_ARRAY}
                selectedBio={selectedBio}
                setSelectedBio={setSelectedBio}
                swiperRef={swiperRef}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

const BioDetails = ({ selectedBio }) => {
  const isTabletView = useMediaQuery(theme.breakpoints.isTabletView);
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const descriptions = selectedBio?.description?.split("\r\n\r\n");
  const isDefaultBio = selectedBio?.nickName?.includes("default");

  return (
    <Stack
      minWidth={isMobileView ? "100%" : "306px"}
      direction="column"
      justifyContent="center"
    >
      <Stack
        direction={isMobileView ? "row" : "column"}
        justifyContent="center"
        alignItems={isTabletView ? "center" : "start"}
        gap={isMobileView && "8px"}
      >
        {!isDefaultBio && (
          <Typography
            component="p"
            sx={{
              fontSize: isMobileView ? "24px" : "2rem",
              color: "#94B0B3",
              fontWeight: "800",
            }}
          >
            {selectedBio?.artistTitle}
          </Typography>
        )}

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: isMobileView ? "32px" : "46px",
            color: isDefaultBio ? "#324B4E" : "#7ACAD2",
            fontWeight: isDefaultBio ? "400" : "800",
            textAlign: isMobileView ? "center" : "left",
          }}
          className={isDefaultBio ? corsiva.className : roboto.className}
        >
          {isDefaultBio ? selectedBio?.fullName : selectedBio?.nickName}
        </Typography>
      </Stack>

      <Stack
        flexDirection="column"
        gap={1}
        sx={{ marginTop: isMobileView || isDefaultBio ? "1rem" : "2rem" }}
      >
        {!isDefaultBio && (
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent={isMobileView ? "center" : "flex-start"}
          >
            <Stack gap="10px">
              <Typography
                component="p"
                sx={{
                  color: "#324B4E",
                  fontWeight: "600",
                }}
                textAlign={isMobileView ? "right" : "left"}
              >
                Full Name
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "#324B4E",
                  fontWeight: "600",
                }}
                textAlign={isMobileView ? "right" : "left"}
              >
                Date of Birth
              </Typography>
            </Stack>

            <Stack gap={"16px"}>
              <Typography
                component="p"
                sx={{
                  color: "#454545",
                  lineHeight: "18.75px",
                }}
              >
                {selectedBio?.fullName}
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "#454545",
                  lineHeight: "18.75px",
                }}
              >
                {selectedBio?.birthday}
              </Typography>
            </Stack>
          </Stack>
        )}

        {isDefaultBio && (
          <Stack
            gap={"1rem"}
            sx={{
              color: "#454545",
              lineHeight: "18.75px",
            }}
            textAlign={isTabletView ? "center" : "left"}
            maxWidth={isMobileView ? "100%" : "306px"}
          >
            <div
              dangerouslySetInnerHTML={{ __html: selectedBio?.description }}
            ></div>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

const RenderMembers = ({
  DATA_ARRAY,
  selectedBio,
  setSelectedBio,
  swiperRef,
}) => {
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);

  return (
    <Stack
      direction={isLaptopView ? "row" : "column"}
      flexWrap={isLaptopView ? "wrap" : "nowrap"}
      justifyContent={"center"}
      sx={{
        position: "relative",
        zIndex: 50,
      }}
    >
      {DATA_ARRAY?.filter((d) => !d.nickName?.includes("default")).map(
        (member, index) => {
          const isSelected =
            selectedBio.nickName?.toLowerCase() ===
            member.nickName?.toLowerCase();

          const borderStyle =
            index !==
            DATA_ARRAY?.filter((d) => !d.nickName?.includes("default")).length -
              1
              ? "1px solid #93767A"
              : "none";
          return (
            <Typography
              key={member?.fullName + member?.birthday}
              component="p"
              sx={{
                cursor: "pointer",
                fontWeight: isSelected ? "600" : "400",
                color: isSelected ? "#7ACAD2" : "#324B4E",
                padding: isLaptopView ? "0 8px" : "8px 0",
                borderRight: isLaptopView && borderStyle,
                marginBottom: isLaptopView ? "1rem" : "0",
              }}
              onClick={() => {
                swiperRef.current.swiper.slideTo(DATA_ARRAY.indexOf(member));

                setSelectedBio(member);
              }}
            >
              {member?.nickName}
            </Typography>
          );
        }
      )}
    </Stack>
  );
};

export default BiographySection;
