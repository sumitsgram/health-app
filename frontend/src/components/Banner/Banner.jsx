import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  animation: `${fadeIn} 2s ease-in-out`,
  padding: "20px",
});

const TextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  maxWidth: "50%",
  marginLeft:"70px",
});

const AnimationContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px", // Mobile size width
  height: "150px", // Reduced height
  zIndex: 1,
});

const AnimatedTypography = styled(Typography)({
  animation: `${slideInUp} 2s ease-in-out`,
});

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        overflow: "hidden",
        position: "relative",
      }}>
      <video
        width="100%"
        height="auto"
        loop
        autoPlay
        muted
        style={{ display: "block" }}>
        <source
          src="https://tap.health/wp-content/themes/taphealth/assets/img/video/tap-healthmp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Overlay>
        <TextContainer>
          <AnimatedTypography variant="h2" gutterBottom>
            Welcome to Care Nest
          </AnimatedTypography>
          <AnimatedTypography variant="body1" gutterBottom>
            Discover the best health services at your fingertips.
          </AnimatedTypography>
          <Button
            variant="contained"
            color="primary"
            href="/"
            sx={{ marginTop: 2 }}>
            Download App
          </Button>
        </TextContainer>
        <AnimationContainer>
          <video
            width="100%"
            height="auto"
            loop
            autoPlay
            muted
            style={{
              display: "block",
              borderRadius: "38px",
              marginLeft: "-180px",
              border: "10px solid darkgrey ",
            }}>
            <source
              src="https://tap.health/wp-content/themes/taphealth/assets/img/video/animation-videoss.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </AnimationContainer>
      </Overlay>
    </Box>
  );
};

export default Banner;
