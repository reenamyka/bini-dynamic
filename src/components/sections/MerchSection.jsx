import { CLOUDFRONT_URL } from "@/data/data";
import { corsiva } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MerchSection = (data) => {
  const isMobileView = useMediaQuery("(max-width: 800px)");
  const shopData= data?.data?.page?.biniHomepage?.shopBlock;

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
        padding: isMobileView ? "32px 24px 32px 24px" : "60px",
        position: "relative",
      }}
    >
      <Box
        id="artistStore"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>

      <Stack direction="column">
        <Typography
          component="p"
          fontSize={isMobileView ? "32px" : "46px"}
          textAlign="center"
          color="#324B4E"
          className={corsiva.className}
        >
          {shopData?.blockTitle}
        </Typography>

        <Stack
          gap="8px"
          marginTop="24px"
          maxWidth={isMobileView ? "100%" : "855px"}
        >
          <Typography
            width={isMobileView ? "60%" : "100%"}
            component="p"
            fontSize={isMobileView ? "16px" : "20px"}
            textAlign="center"
            color="#454545"
            lineHeight="normal"
            fontWeight="600"
            marginX="auto"
          >
          </Typography>

          <Typography
            component="div"
            fontSize={isMobileView ? "16px" : "20px"}
            textAlign="center"
            color="#454545"
            lineHeight="normal"
            sx={{
              '& p': {
                margin: 0,
              },
              '& h4': {
                margin: 0,
              },
            }}
          >
            <div dangerouslySetInnerHTML={{__html: shopData.shopDescription}}></div>
          </Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "100%",
          maxWidth: isMobileView ? "366px" : "636px",
          height: isMobileView ? "206px" : "358px",
          position: "relative",
          aspectRatio: "auto",
        }}
      >
        <Image
          src={shopData.shopCoverImage?.mediaItemUrl}
          alt="bini merch"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Button
        href= {shopData.shopLink?.url}
        target="_blank"
        variant="contained"
        rel="noreferrer"
        sx={{
          width: "fit-content",
          border: "none",
          borderRadius: "20px",
          boxShadow: "none",
          backgroundColor: "#7ACAD2",
          padding: isMobileView ? "2px 16px" : "4px 16px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#7ACAD2",
          },
        }}
      >
        {shopData.shopLink?.title}
      </Button>
    </Container>
  );
};

export default MerchSection;
