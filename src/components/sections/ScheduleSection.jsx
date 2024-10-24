import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomPagination from "../shared/CustomPagination";
import usePagination from "@/hooks/usePagination";
import { corsiva } from "@/utils/fonts";
import { SCHEDULES } from "@/data/data";

const ITEMS_PER_PAGE = 7;

const ScheduleSection = (data) => {
  const isMobileView = useMediaQuery("(max-width: 800px)");
  const eventsData = data?.data?.page?.biniHomepage?.eventsBlock?.eventsLists;
  const eventData = data?.data?.page?.biniHomepage?.eventsBlock;
  
  const {
    currentPage,
    totalPages,
    displayedData,
    handleNextPage,
    handlePrevPage,
  } = usePagination({ data: eventsData, itemsPerPage: ITEMS_PER_PAGE });
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  const mobilePadding = isAnimationReady ? "16px" : "0";
  const desktopPadding = isAnimationReady ? "24px" : "0";

  const handleScroll = () => {
    // If the arrangement of components in "index.js" is changed, update this threshold too
    const threshold = isMobileView ? 4000 : 4700;
    setIsAnimationReady(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileView]);

  return (
    <Box
      component="section"
      sx={{
        padding: isMobileView ? "60px 0 40px 0" : "60px 0",
        position: "relative",
      }}
    >
      <Box
        id="artistTour"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobileView ? "32px" : "60px",
        }}
      >
        <Typography
          component="p"
          fontSize={isMobileView ? "32px" : "46px"}
          textAlign="center"
          color="#324B4E"
          className={corsiva.className}
        >
          {eventData?.blockTitle}
        </Typography>

        <Stack
          width="100%"
          minHeight="min-content"
          direction="column"
          gap="24px"
        >
          {displayedData.map((schedule, index) => (
            <Stack
              key={schedule.eventStartDate + schedule.eventVenue}
              direction={isMobileView ? "column" : "row"}
              alignItems="center"
              gap={isMobileView ? "16px" : "0"}
              width="100%"
              sx={{
                borderBottom:
                  index !== displayedData.length - 1
                    ? "1px solid #94B0B3"
                    : "none",
                paddingBottom: isMobileView ? mobilePadding : desktopPadding,
                transition: "padding ease-in-out 0.8s",
              }}
            >
              <Stack
                direction={isMobileView ? "column" : "row"}
                alignItems="center"
                gap={isMobileView ? "8px" : "60px"}
                textAlign={isMobileView ? "center" : "left"}
                flex="1"
              >
                <Typography
                  width={isMobileView ? "100%" : "10%"}
                  component="p"
                  fontSize="20px"
                  fontWeight="400"
                  color="#454545"
                >
                  {schedule.eventStartDate}
                </Typography>
                <Typography
                  width={isMobileView ? "100%" : "20%"}
                  component="p"
                  fontSize="20px"
                  fontWeight="700"
                  color="#454545"
                >
                  {schedule.eventTitle}
                </Typography>
                <Typography
                  component="p"
                  fontSize="20px"
                  color="#454545"
                  textAlign="center"
                >
                  {schedule.eventVenue}
                </Typography>
              </Stack>
              <Typography
                fontSize="14px"
                fontWeight="500"
                component="a"
                href={schedule.eventDetails?.url}
                target="_blank"
                rel="noreferrer"
                color="#94B0B3"
              >
                See Details
              </Typography>
            </Stack>
          ))}
        </Stack>

        {eventsData.length > ITEMS_PER_PAGE && (
          <CustomPagination
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            sectionId={"#artistTour"}
          />
        )}
      </Container>
    </Box>
  );
};

export default ScheduleSection;
