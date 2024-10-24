import { Box, Stack, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  {
    link: "https://www.instagram.com/bini_ph",
    icon: <AiFillInstagram fontSize="25px" color="#58C9D4" />,
  },
  {
    link: "https://www.facebook.com/BINIph.official/",
    icon: <FaFacebook fontSize="21px" color="#58C9D4" />,
  },
  {
    link: "https://www.tiktok.com/@bini_ph",
    icon: <FaTiktok color="#58C9D4" />,
  },
  {
    link: "https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga",
    icon: <FaSpotify color="#58C9D4" />,
  },
  {
    link: "https://x.com/BINI_ph",
    icon: <FaXTwitter color="#58C9D4" />,
  },
  {
    link: "https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ",
    icon: <FaYoutube fontSize="24px" color="#58C9D4" />,
  },
];

const SocialMediaIcons = () => {
  const isLaptopView = useMediaQuery("(max-width: 1100px)");

  return (
    <Box
      sx={{
        textAlign: "center",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        position: "absolute",
        right: "7rem",
        bottom: "1.5rem",
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        gap={isLaptopView ? "8px" : "1rem"}
        fontSize="20px"
      >
        {SOCIALS?.map((social) => (
          <Link
            key={social.link}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              // padding: "2px 4px",
              width: "30px",
              height: "30px",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            {social.icon}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default SocialMediaIcons;
