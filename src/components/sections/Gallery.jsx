import React, { useEffect, useState } from "react";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import CustomPagination from "../shared/CustomPagination";
import usePagination from "@/hooks/usePagination";
import ViewImageModal from "../ViewImageModal";
import { corsiva } from "@/utils/fonts";
import { theme } from "@/pages/_app";

const GallerySection = (data) => {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);
  const itemsPerPage = isMobileView ? 8 : 12;
  const galleryData= data?.data?.page?.biniHomepage?.galleryBlock?.artistsGallery;
  const blockData=data?.data?.page?.biniHomepage?.galleryBlock;
  const {
    currentPage,
    totalPages,
    displayedData,
    handleNextPage,
    handlePrevPage,
  } = usePagination({ data: galleryData, itemsPerPage });

  return (
    <>
      <Container
        component="section"
        id="artistGallery"
        maxWidth="lg"
        sx={{ padding: isMobileView ? "60px 0" : "80px " }}
      >
        <Stack direction="column" alignItems="center" gap="32px">
          <Typography
            component="p"
            fontSize={isMobileView ? "32px" : "46px"}
            textAlign="center"
            className={corsiva.className}
            color="#324B4E"
          >
            {blockData?.blockTitle}
          </Typography>

          <ViewImageModal images={displayedData} />

          <CustomPagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            sectionId="#artistGallery"
          />
        </Stack>
      </Container>
    </>
  );
};

export default GallerySection;
