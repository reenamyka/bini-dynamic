import { sora } from "@/utils/fonts";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CLOUDFRONT_URL } from "@/data/data";

const BiniPollButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href="https://bini.global/poll" 
      target="_blank" rel="noreferrer">
      <Stack
        position="absolute"
        alignItems="center"
        sx={{
          left: "7rem",
          bottom: "1.5rem",
          transform: isHovered ? "scale(1.01)" : "scale(1)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
            repeatDelay: 3,
          }}
          style={{ display: "inline-block" }}
        >
          <Image 
            src={`${CLOUDFRONT_URL}/flower.png`}
            width={60} 
            height={60} 
            alt="flower" 
          />
        </motion.div>
        <Typography
          component="p"
          sx={{
            fontSize: "16px",
            textDecoration: "none",
          }}
          color="#FFF"
          fontWeight="300"
          className={sora.className}
        >
          BINI Poll
        </Typography>
      </Stack>
    </Link>
  );
};

export default BiniPollButton;
