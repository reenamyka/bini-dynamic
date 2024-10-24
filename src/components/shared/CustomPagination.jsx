import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CustomPagination = ({
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
  sectionId = "",
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      component="div"
      gap="32px"
    >
      <IconButton
        href={sectionId}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        sx={{
          color: "#324B4E",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:disabled": {
            opacity: 0.5,
          },
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <Typography component="p" color="#554940">
        Page {currentPage} of {totalPages}
      </Typography>
      <IconButton
        href={sectionId}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        sx={{
          color: "#324B4E",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:disabled": {
            opacity: 0.5,
          },
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  );
};

export default CustomPagination;
