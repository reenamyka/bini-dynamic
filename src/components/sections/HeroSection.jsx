import { CLOUDFRONT_URL } from "@/data/data";
import { theme } from "@/pages/_app";
import { Box, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import BiniPollButton from "../BiniPollButton";

const HeroSection = (data) => {
  const isSmallMobile = useMediaQuery("(max-width: 600px)");
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isLargeScreenSize = useMediaQuery(theme.breakpoints.isLargeScreen);
  const isLaptopView = useMediaQuery("(max-width: 1100px)");
  const [imgSrc, setImgSrc] = useState(`${CLOUDFRONT_URL}/banner-cot-web.jpg`);
  useEffect(() => {
    let mediaItemUrl = data?.data?.page?.biniHomepage?.heroBanner;
    if (!mediaItemUrl) {
      mediaItemUrl = {
        mobileBanner: `${CLOUDFRONT_URL}/banner-cot-mobile.jpg`,
        desktopBanner: `${CLOUDFRONT_URL}/banner-cot-web.jpg`,
      };
    } else {
      mediaItemUrl = {
        mobileBanner: mediaItemUrl.mobileImage?.mediaItemUrl,
        desktopBanner: mediaItemUrl.desktopImage?.mediaItemUrl,
      };
    }
    if (isSmallMobile) {
      setImgSrc(mediaItemUrl.mobileBanner);
    } else if (isTabletView) {
      setImgSrc(mediaItemUrl.mobileBanner);
    } else {
      setImgSrc(mediaItemUrl.desktopBanner);
    }
  }, [data, isTabletView, isSmallMobile]);
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: "2600px",
        marginX: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={imgSrc}
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        alt="bini"
        quality={100}
        priority
      />
      {isLaptopView && (
        <Button
          href="https://uat-fandom-web.abs-cbn.com/"
          target="_blank"
          variant="contained"
          rel="noreferrer"
          sx={{
            width: "fit-content",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "white",
            textTransform: "capitalize",
            padding: "4px 14px",
            fontSize: "16px",
            lineHeight: "normal",
            "&:hover": {
              backgroundColor: "white",
              boxShadow: "none",
            },
            fontWeight: "500",
            color: "#58C9D4",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textWrap: "nowrap",
          }}
        >
          Exclusive Membership
        </Button>
      )}

      {!isLaptopView && <BiniPollButton />}

      {!isLaptopView && <SocialMediaIcons />}
    </Box>
  );
};
export default HeroSection;
