import { corsiva } from "@/utils/fonts";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const ShopSection = (data) => {
  const shopData = data?.data?.page?.biniHomepage?.shopBlock;

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
        padding: { xs: "32px 24px 32px 24px", lg: "60px" },
        position: "relative",
      }}
    >
      <Box
        id="artistStore"
        component={"span"}
        sx={{
          position: "absolute",
          top: "-4rem",
        }}
      ></Box>

      <Stack direction="column">
        <Typography
          component="p"
          fontSize={{ xs: "32px", lg: "46px" }}
          textAlign="center"
          color="#324B4E"
          className={corsiva.className}
        >
          {/* {shopData?.blockTitle} */}
          Shop
        </Typography>

        <Stack
          gap="8px"
          marginTop="24px"
          maxWidth={{ xs: "100%", lg: "855px" }}
        >
          <Typography
            width={{ xs: "100%", lg: "60%" }}
            component="p"
            fontSize={{ xs: "16px", lg: "20px" }}
            textAlign="center"
            color="#454545"
            lineHeight="normal"
            fontWeight="600"
            marginX="auto"
          ></Typography>

          <Typography
            component="div"
            fontSize={{ xs: "16px", lg: "20px" }}
            textAlign="center"
            color="#454545"
            lineHeight="normal"
            sx={{
              "& p": {
                margin: 0,
              },
              "& h4": {
                margin: 0,
              },
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: shopData.shopDescription }}
            ></div>
          </Typography>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", lg: "636px" },
          height: { xs: "206px", lg: "358px" },
          position: "relative",
          aspectRatio: "auto",
        }}
      >
        <Image
          src={shopData.shopCoverImage?.mediaItemUrl}
          alt="bini merch"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Button
        href={shopData.shopLink?.url}
        target="_blank"
        variant="contained"
        rel="noreferrer"
        sx={{
          width: "fit-content",
          border: "none",
          borderRadius: "20px",
          boxShadow: "none",
          backgroundColor: "#7ACAD2",
          padding: { xs: "8px 16px", lg: "12px 24px" },
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#7ACAD2",
          },
        }}
      >
        {shopData.shopLink?.title}
      </Button>
    </Container>
  );
};

export default ShopSection;
