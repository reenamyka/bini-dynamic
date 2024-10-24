import { CLOUDFRONT_URL } from "@/data/data";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const isMobileView = useMediaQuery("(max-width: 800px)");

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #7ACAD2" }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        padding={isMobileView ? "16px" : "16px 4rem"}
        gap="8px"
      >
        <Stack
          direction={isMobileView ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          gap={isMobileView ? "8px" : "32px"}
        >
          <Stack direction="row" gap={"8px"} alignItems="center">
            <Image
              src={`${CLOUDFRONT_URL}/privacy-seal.png`}
              width={20}
              height={38}
              alt="NPC Seal"
            />
            <Typography
              component="a"
              href={process.env.NEXT_PUBLIC_SEAL_URL}
              target="_blank"
              rel="noreferrer"
              fontSize="14px"
              color={"#7ACAD2"}
              sx={{ textDecoration: "none" }}
            >
              NPC Seal of Registration
            </Typography>
          </Stack>
          <Typography
            component="a"
            href={process.env.NEXT_PUBLIC_TERMS_URL}
            target="_blank"
            rel="noreferrer"
            fontSize="14px"
            color={"#7ACAD2"}
            sx={{ textDecoration: "none" }}
          >
            Terms & Conditions
          </Typography>
          <Typography
            component="a"
            href={process.env.NEXT_PUBLIC_PRIVACY_URL}
            target="_blank"
            rel="noreferrer"
            fontSize="14px"
            color={"#7ACAD2"}
            sx={{ textDecoration: "none" }}
          >
            Privacy Policy
          </Typography>
          <Typography
            fontSize="14px"
            color={"#7ACAD2"}
            sx={{ textDecoration: "none" }}
          >
            Do Not Sell My Personal Information
          </Typography>
        </Stack>

        <Typography fontSize="14px" color={"#7ACAD2"} textAlign="center">
          © 2024 ABS-CBN Corporation. All Rights Reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
