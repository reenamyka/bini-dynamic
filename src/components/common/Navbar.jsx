import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import {
  FaTiktok,
  FaSpotify,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { CLOUDFRONT_URL } from "@/data/data";

import { useSearchParams } from "next/navigation";
import Alert from "@mui/material/Alert";
import { theme } from "@/pages/_app";
import { useRouter } from "next/router";
import { sora } from "@/utils/fonts";

const NavLinks = [
  {
    id: "/#artistProfile",
    name: "Profile",
  },
  {
    id: "/#artistMusic",
    name: "Music",
  },
  {
    id: "/#artistVideos",
    name: "Videos",
  },
  {
    id: "/#artistGallery",
    name: "Gallery",
  },
  {
    id: "/#artistStore",
    name: "Shop",
  },
  {
    id: "/#artistTour",
    name: "Events",
  },
  {
    id: "/articles",
    name: "Articles",
  },
  {
    id: "/#artistSubscribe",
    name: "Subscribe",
  },
];

const Navbar = () => {
  const isLaptopView = useMediaQuery("(max-width: 1100px)");
  const isMobileView = useMediaQuery("(max-width: 900px)");
  const isLargeScreenSize = useMediaQuery("(min-width: 1680px)");
  const [isNavReady, setIsNavReady] = useState(false);

  const [showAlert, setShowAlert] = React.useState(false);
  const [isAlready, setIsAlready] = React.useState(false);
  const [isVerified, setIsVerified] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchParams = useSearchParams();
  const verified = searchParams.get("verified");
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    setIsNavReady(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (verified !== null) {
      if (verified) {
        setIsVerified(verified === "true");
        setIsAlready(verified === "already");
        setShowAlert(true);
        turnOffAlert();
        if (typeof window !== undefined) {
          window.history.replaceState(null, "", "/");
        }
      }
    }
  }, [verified]);

  const turnOffAlert = async () => {
    const timeout = (delay) => {
      return new Promise((res) => setTimeout(res, delay));
    };
    await timeout(5000);
    setShowAlert(false);
  };

  const bgColor = scrolled ? "#7ACAD2" : "transparent";

  if (!isNavReady) {
    return (
      <Box
        sx={{
          width: "100%",
          height: isLaptopView ? "59px" : "72px",
          background: bgColor,
          position: "fixed",
          top: "0",
          zIndex: "90",
        }}
      ></Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        background: bgColor,
        position: "fixed",
        top: "0",
        zIndex: "90",
        transition: "background 0.2s ease-in-out",
      }}
    >
      <Stack
        maxWidth="1192px"
        marginX="auto"
        direction="row"
        sx={{
          display: "flex",
          justifyContent: isLaptopView ? "space-between" : "space-between",
          gap: "2rem",
          alignItems: "center",
          padding: isLaptopView ? "8px 24px" : "8px",
        }}
      >
        <Link
          href="/"
          style={{
            marginRight: isLaptopView ? "0" : "96px",
          }}
        >
          <Image
            src={`${CLOUDFRONT_URL}/bini-logo-allwhite.png`}
            width={isLaptopView ? 60 : 73}
            height={isLaptopView ? 39 : 50}
            alt="bini-logo"
          />
        </Link>

        {isNavReady &&
          (isLaptopView ? (
            <Sidebar links={NavLinks} />
          ) : (
            <DesktopNavLinks navlinks={NavLinks} />
          ))}
      </Stack>

      {showAlert && (
        <Alert severity={isVerified || isAlready ? "success" : "warning"}>
          {isVerified
            ? "Email verified"
            : isAlready
            ? "Email already subscribed"
            : "Invalid verification link"}
        </Alert>
      )}
    </Box>
  );
};

const DesktopNavLinks = ({ navlinks }) => {
  const isLaptopView = useMediaQuery(theme.breakpoints.isLaptopView);

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={isLaptopView ? "1rem" : "24px"}
          marginTop={"5px"}
        >
          {navlinks.map((link) => (
            <Typography
              component="a"
              href={link?.id}
              sx={{
                fontSize: "16px",
                textDecoration: "none",
              }}
              key={link?.id}
              color="#FFF"
              fontWeight="300"
              className={sora.className}
            >
              {link?.name}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Button
        href="https://uat-fandom-web.abs-cbn.com/"
        target="_blank"
        variant="contained"
        sx={{
          width: "fit-content",
          border: "none",
          borderRadius: "18px",
          boxShadow: "none",
          backgroundColor: "white",
          textTransform: "capitalize",
          padding: "4px 14px",
          fontSize: "16px",
          lineHeight: "normal",
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "none",
          },
          fontWeight: "300",
          color: "#58C9D4",
        }}
        className={sora.className}
      >
        Exclusive Membership
      </Button>
    </>
  );
};

export default Navbar;
