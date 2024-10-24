import { corsiva } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const LivestreamSection = () => {
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{ padding: { xs: "60px 2px", md: "80px" } }}
    >
      <Box
        id="livestream"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>

      <Stack direction="column" alignItems="center" gap="32px">
        <Typography
          component="p"
          className={corsiva.className}
          sx={{
            fontSize: { xs: "32px", md: "46px" },
            textAlign: "center",
            color: "#324B4E",
          }}
        >
          Livestream
        </Typography>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ofUSveopNw4"
          title="Kapamilya Online Live | October 24, 2024"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ aspectRatio: "16/9", maxWidth: "1104px" }}
        ></iframe>
      </Stack>
    </Container>
  );
};

export default LivestreamSection;
