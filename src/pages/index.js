import Head from "next/head";
import { Roboto } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import MerchSection from "@/components/sections/MerchSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/common/Footer";
import MusicSection from "@/components/sections/MusicSection";
import VideosSection from "@/components/sections/VideosSection";
import BiographySection from "@/components/sections/BiographySection";
import HeroSection from "@/components/sections/HeroSection";
import GallerySection from "@/components/sections/Gallery";
import ArticlesSection from "@/components/sections/ArticlesSection";
import getBiographyQueryAxios from "../queries/getBiographyQueryAxios";
import getHeroQueryAxios from "../queries/getHeroQueryAxios";
import getMusicQueryAxios from "@/queries/getMusicQueryAxios";
import getVideosQueryAxios from "@/queries/getVideosQueryAxios";
import getGalleryQueryAxios from "@/queries/getGalleryQueryAxios";
import getShopQueryAxios from "@/queries/getShopQueryAxios";
import getEventsQueryAxios from "@/queries/getEventsQueryAxios";
import axios from "axios";
import { useEffect } from "react";
import AOS from "aos";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";
import { CLOUDFRONT_URL } from "@/data/data";
import { theme } from "./_app";
import Image from "next/image";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const queries = [getHeroQueryAxios, getBiographyQueryAxios, getMusicQueryAxios, getVideosQueryAxios, getGalleryQueryAxios, getShopQueryAxios, getEventsQueryAxios];
export async function getServerSideProps() {
  let data = {};
  if (process.env.NEXT_PUBLIC_GQL_ENDPOINT != "") {
    for (const item of queries) {
      await axios({
        url: process.env.NEXT_PUBLIC_GQL_ENDPOINT+item.queryid,
          method: "get",
        headers: {
          "Authorization": "Basic " + process.env.NEXT_PUBLIC_GQL_AUTH
        },
        data: {
          query: item.query,
        },
      }).then(
        (result) => {
          data[item.name] = result.data.data;
        },
        (error) => {
          console.error("GQL for " + item.name + " failed!", error);
        }
      );
    }
  }
  return { props: { data } };
}
export default function Home({ data }) {  
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const backgroundImg = isMobileView ? "bg2-mobile.png" : "bg2.png";
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Official BINI Members Profiles | BINI Concert 2024</title>
        <meta
          name="description"
          content="Get to know BINI members' age,  BINI Pantropiko concert dates (2024), & exclusive BINI members profile you won't find anywhere else. Be part of the craze today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NEXT_PUBLIC_PROD_LIVE == "false" && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <link href="/binicon-main.png" rel="icon" />
      </Head>
      <main className={roboto.className} id="biniBody">
        {/* Background Image */}
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            zIndex: "1",
          }}
        >
          <Image
            alt="Background-img"
            src={`${CLOUDFRONT_URL}/${backgroundImg}`}
            quality={100}
            fill
            sizes="100vw;"
            style={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        </Box>
        {/* Main Body */}
        <Box
          component="div"
          sx={{
            position: "relative",
            zIndex: "100",
          }}
        >
          <Navbar />
          <HeroSection data={data.heroBanner} />
          <BiographySection data={data.biographySection} />
          <MusicSection data={data.musicGallery}/>
          <VideosSection data={data.videosSection}/>
          <GallerySection data = {data.galleryBlock}/>
          <MerchSection data = {data.shopSection}/>
          <ScheduleSection data={data.eventsSection}/>
          {/* <ArticlesSection /> */}
          <Newsletter />
          <Footer />
        </Box>
      </main>
    </>
  );
}