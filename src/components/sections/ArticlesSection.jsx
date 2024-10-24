import React, { useState } from "react";
import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { sora, tiltWarp } from "@/utils/fonts";
import ArticleCard from "../ArticleCard";
import ArticleCardLong from "../ArticleCardLong";
import ArticleCardLong2 from "../ArticleCardLong2";

const ArticlesSection = ({ data }) => {
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const [visibleArticles, setVisibleArticles] = useState(14);

  const loadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 14);
  };

  if (data?.length === 0) {
    return (
      <Stack
        direction="column"
        gap="32px"
        color="white"
        id="artistArticles"
        sx={{
          maxWidth: "1200px",
          minHeight: "100vh",
          marginX: "auto",
          padding: isMobileView ? "20px" : "60px 20px",
        }}
      >
        <Typography
          component="p"
          fontSize={isMobileView ? "32px" : "46px"}
          className={tiltWarp.className}
          fontWeight=""
          sx={{
            marginX: "auto",
          }}
        >
          Something went wrong!
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack
      direction="column"
      gap="32px"
      color="white"
      id="artistArticles"
      sx={{
        maxWidth: "1200px",
        minHeight: "100vh",
        marginX: "auto",
        padding: {
          xs: "20px",
          md: "60px 20px",
        },
        marginTop: "4rem",
      }}
    >
      <Stack
        data-aos="fade-right"
        data-aos-duration={1000}
        width="100%"
        direction="column"
      >
        <Typography
          component="p"
          fontSize={{
            xs: "32px",
            md: "46px",
          }}
          className={tiltWarp.className}
          fontWeight=""
        >
          BINI NEWS
        </Typography>
        <Typography component="p" className={sora.className} fontWeight="300">
          Stay updated with the latest news and stories about BINI.
        </Typography>
      </Stack>

      <Grid
        container
        justifyContent="center"
        columnGap={{ xs: 2, lg: 4 }}
        rowGap={{ xs: 2, lg: 4 }}
      >
        {data.slice(0, visibleArticles).map((article, index) => {
          if (index % 7 === 0) {
            if (index === 7 || (index - 7) % 14 === 0) {
              return (
                <ArticleCardLong2 key={article?.title} article={article} />
              );
            } else {
              return <ArticleCardLong key={article?.title} article={article} />;
            }
          }

          return (
            <Grid
              data-aos="fade-up"
              data-aos-duration={400 * index}
              container
              maxWidth={{
                xs: "376px",
                sm: "306px",
                md: "300px",
                lg: "376px",
              }}
              alignItems="center"
              key={article?.title}
              style={{
                padding: "0",
                margin: "0 ",
              }}
            >
              <ArticleCard article={article} />
            </Grid>
          );
        })}
      </Grid>

      {visibleArticles < data.length && (
        <Button
          onClick={loadMore}
          variant="contained"
          sx={{
            width: "fit-content",
            border: "none",
            borderRadius: "16px",
            boxShadow: "none",
            backgroundColor: "white",
            textTransform: "capitalize",
            fontSize: "16px",
            lineHeight: "normal",
            "&:hover": {
              backgroundColor: "white",
              boxShadow: "none",
            },
            fontWeight: "300",
            color: "#77CBD3",
            marginX: "auto",
          }}
          className={sora.className}
        >
          Load More
        </Button>
      )}
    </Stack>
  );
};

export default ArticlesSection;
