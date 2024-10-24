import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { sora } from "@/utils/fonts";
import moment from "moment";

const ArticleCard = ({ article }) => {
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const [convertedDate, setConvertedDate] = useState("");

  useEffect(() => {
    setConvertedDate(moment(article?.pubDate).format("ll"));
  }, []);

  return (
    <Box
      component="a"
      href={article?.link}
      target="_blank"
      rel="noreferrer"
      sx={{
        textDecoration: "none",
        color: "black",
        width: "100%",
      }}
    >
      <Stack
        direction="column"
        sx={{
          backgroundColor: "#68686840",
          color: "white",
          borderRadius: "8px",
          overflow: "hidden",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 0 20px 0px rgba(104, 104, 104, 0.25)",
          "&:hover": {
            backgroundColor: "white",
            color: "#324B4E",
            scale: "1.03",
            transition: "0.3s ease-in-out",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            minHeight: "210px",
            maxHeight: "210px",
            position: "relative",
          }}
        >
          <Image
            src={article?.image}
            unoptimized
            fill
            style={{
              objectFit: "cover",
            }}
            alt={article?.title}
          />
        </Box>

        <Stack paddingX="16px" paddingY="10px">
          <Typography
            component="p"
            lineHeight="normal"
            minHeight="100px"
            marginTop="4px"
            className={sora.className}
          >
            {article?.title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="p"
              fontWeight="300"
              fontSize={isMobileView ? "14px" : "14px"}
              className={sora.className}
            >
              {convertedDate}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap="4px"
            >
              <OpenInNewIcon
                sx={{
                  fontSize: "14px",
                  marginTop: "-2px",
                }}
              />
              <Typography
                component="p"
                fontWeight="300"
                fontSize={isMobileView ? "14px" : "14px"}
                className={sora.className}
              >
                {article?.source?.toUpperCase()}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ArticleCard;
