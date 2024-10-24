import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { sora } from "@/utils/fonts";
import moment from "moment";

const ArticleCardLong2 = ({ article }) => {
  const isMobileView = useMediaQuery("(max-width: 900px)");
  const [convertedDate, setConvertedDate] = useState("");

  useEffect(() => {
    setConvertedDate(moment(article?.pubDate).format("ll"));
  }, []);

  return (
    <Box
      data-aos="fade-up"
      data-aos-duration={1000}
      component="a"
      href={article?.link}
      target="_blank"
      rel="noreferrer"
      sx={{
        textDecoration: "none",
        color: "black",
        width: {
          xs: "auto",
          sm: "100%",
          md: "100%",
        },
      }}
    >
      <Stack
        direction={{
          xs: "column",
          sm: "row",
          md: "row",
        }}
        sx={{
          maxWidth: {
            xs: "376px",
            sm: "100%",
            md: "100%",
            lg: "100%",
          },
          // height: "100%",
          marginX: "auto",
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
        {isMobileView && (
          <Box
            component="div"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                md: "60%",
              },
              minHeight: {
                xs: "210px",
                sm: "300px",
                md: "384px",
              },
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
        )}

        <Stack
          height={{
            xs: "100%",
            sm: "auto",
            md: "auto",
          }}
          width={{ xs: "auto", md: "40%" }}
          padding={{
            xs: "16px",
            md: "32px",
          }}
          justifyContent={{
            xs: "space-between",
            sm: "center",
            md: "center",
          }}
          gap="24px"
        >
          <Typography
            component="p"
            // fontWeight="600"
            lineHeight="normal"
            marginTop="4px"
            fontSize={{
              xs: "16px",
              md: "24px",
            }}
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
              fontSize={{
                xs: "14px",
                md: "16px",
              }}
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
                  fontSize: "16px",
                  marginTop: "-2px",
                }}
              />
              <Typography
                component="p"
                fontWeight="300"
                fontSize={{
                  xs: "14px",
                  md: "16px",
                }}
                className={sora.className}
              >
                {article?.source?.toUpperCase()}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {!isMobileView && (
          <Box
            component="div"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                md: "60%",
              },
              minHeight: {
                xs: "210px",
                sm: "300px",
                md: "384px",
              },
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
        )}
      </Stack>
    </Box>
  );
};

export default ArticleCardLong2;
