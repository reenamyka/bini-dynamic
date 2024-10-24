import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ArticlesSection from "@/components/sections/ArticlesSection";
import { CLOUDFRONT_URL } from "@/data/data";
import { sora } from "@/utils/fonts";
import { Box, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import xml2js from "xml2js";
import { theme } from "./_app";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import moment from "moment";

// export async function getServerSideProps() {
//   const res = await axios
//     .get(
//       "https://uat-news-content-api.abs-cbn.com/uat/rss/tag/bini?brand=news&pageSize=50&searchType=exact"
//     )
//     .catch((err) => console.log("error fetching articles", err));

//   if (!res) {
//     return { props: { data: [] } };
//   }

//   const data = xml2js
//     .parseStringPromise(res.data)
//     .then((result) => {
//       return result.rss.channel[0].item;
//     })
//     .catch((err) => console.log("Error converting xml to json", err));

//   return { props: { data: (await data) || [] } };
// }

export async function getServerSideProps() {
  const res = await axios
    .get(`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/feed/articles.json`)
    .catch((err) => console.log("error fetching articles", err));

  const sortedArticles = res?.data?.sort((a, b) => {
    const dateA = moment(a?.pubDate);
    const dateB = moment(b?.pubDate);
    return dateB - dateA;
  });

  return { props: { data: sortedArticles || [] } };
}

export default function Articles({ data }) {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const backgroundImg = isMobileView
    ? "bg-articles-mobile.png"
    : "bg-articles-web.png";

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
        <link href="/binicon-main.png" rel="icon"/>
      </Head>
      <main className={sora.className} id="biniBody">
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
          <ArticlesSection data={data} />

          <Footer />
        </Box>
      </main>
    </>
  );
}
