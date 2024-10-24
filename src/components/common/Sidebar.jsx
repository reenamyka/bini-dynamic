import * as React from "react";
import { Menu, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import {
  FaTiktok,
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

export default function Sidebar({ links }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box component="div">
      <Menu
        onClick={toggleDrawer(true)}
        sx={{
          fontSize: "35px",
          color: "white",
          marginBottom: "-8px",
        }}
      />
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <DrawerList
          toggleDrawer={toggleDrawer}
          links={links}
          setOpen={setOpen}
        />
      </Drawer>
    </Box>
  );
}

const DrawerList = ({ toggleDrawer, links, setOpen }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: "100%",
        padding: 2,
        background: "#58C9D4",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box component="div" display="flex" justifyContent="flex-end">
        <Close sx={{ color: "white" }} onClick={() => setOpen(false)} />
      </Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {links.map((link, index) => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton sx={{ padding: 0 }}>
              <Link
                href={link?.id}
                style={{
                  width: "100%",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <ListItemText primary={link.name} sx={{ color: "white" }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton sx={{ padding: 0 }}>
            <Link
              href="https://bini.global/poll"
              target="_blank"
              style={{
                width: "100%",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <ListItemText primary={"BINI Poll"} sx={{ color: "white" }} />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ paddingX: 0 }}>
          {/* REDIRECT LINK HERE */}
          <Button
            href="https://uat-fandom-web.abs-cbn.com/"
            target="_blank"
            variant="contained"
            sx={{
              width: "100%",
              border: "none",
              borderRadius: "20px",
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
              fontWeight: "500",
              color: "#58C9D4",
            }}
          >
            Exclusive Membership
          </Button>
        </ListItem>

        <ListItem>
          <Stack
            direction={"row"}
            alignItems="center"
            gap={"1rem"}
            fontSize="20px"
          >
            <Link
              href="https://www.instagram.com/bini_ph"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <AiFillInstagram fontSize="25px" color="white" />
            </Link>
            <Link
              href="https://www.facebook.com/BINIph.official/"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaFacebook fontSize="21px" color="white" />
            </Link>
            <Link
              href="https://www.tiktok.com/@bini_ph"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaTiktok color="white" />
            </Link>
            <Link
              href="https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaSpotify color="white" />
            </Link>
            <Link
              href="https://x.com/BINI_ph"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaXTwitter color="white" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaYoutube fontSize="24px" color="white" />
            </Link>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
