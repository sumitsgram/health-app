import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../TapHealthInfo/TapHealthInfo.css";

const comments = [
  { text: "Tap Health made my life so much easier!", author: "John Doe" },
  {
    text: "I love the convenience and privacy it offers.",
    author: "Jane Smith",
  },
  { text: "Best health app I've used so far.", author: "Alice Johnson" },
  // Add more comments as needed
];

const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  border: "5px solid #e0e0e0",
  borderRadius: "50px",
  backgroundColor: "blanchedalmond",
  margin: "10px",
  marginBottom: "80px",
});

const SliderContainer = styled(Box)({
  width: "80%",
  margin: "0 auto",
});

const VideoContainer = styled(Box)({
  marginTop: "40px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
});

const CurvedBorderIframe = styled("iframe")({
  borderRadius: "25px",
  overflow: "hidden",
  border: "10px solid #e0e0e0",
});

const TapHealthInfo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container className="container" maxWidth="100%" sx={{ paddingTop: "20px" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Care Nest is easy and private.
      </Typography>

      <SliderContainer sx={{ marginTop: "20px" }}>
        <Slider {...settings}>
          {comments.map((comment, index) => (
            <Box key={index} sx={{ padding: "20px", textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                "{comment.text}"
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                - {comment.author}
              </Typography>
            </Box>
          ))}
        </Slider>
      </SliderContainer>

      <VideoContainer>
        <CurvedBorderIframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bxY8MOT64AE?si=cf5zX1n0_jwFm4kk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></CurvedBorderIframe>
      </VideoContainer>

      <Grid container spacing={2} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={3}>
          <InfoBox>
            <Typography variant="h6" gutterBottom>
              Illnesses types
            </Typography>
            <Typography variant="h4" color="primary">
              50+
            </Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <InfoBox>
            <Typography variant="h6" gutterBottom>
              Medical categories
            </Typography>
            <Typography variant="h4" color="primary">
              20+
            </Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <InfoBox>
            <Typography variant="h6" gutterBottom>
              Happy users
            </Typography>
            <Typography variant="h4" color="primary">
              1000+
            </Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={12} md={3}>
          <InfoBox>
            <Typography variant="h6" gutterBottom>
              App rating
            </Typography>
            <Typography variant="h4" color="primary">
              4.8/5
            </Typography>
          </InfoBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TapHealthInfo;
