import React from "react";
import '..//Footer/Footer.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import logo from '../assets/logo.jpeg'
import "../Footer/Footer.css";

const FooterContainer = styled(Box)({
  backgroundColor: "#252F4A",
  padding: "20px 0",
  borderTop: "1px solid #e7e7e7",
});

const DescriptionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const LinksContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "100px",
});

const FooterLink = styled(Link)({
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "150px", marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DescriptionContainer>
              <Typography variant="body1">
                Tap Health is simplifying access to health advice and medical
                services. Our AI-powered platform provides preliminary illness
                diagnosis, personalized healthcare guidance and seamless
                connectivity with healthcare providers. Tapfinity Technologies
                pvt ltd WeWork Platina Tower, Gurugram, 122002, Haryana, India
              </Typography>
            </DescriptionContainer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography>© 2024 Tap Health. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <LinksContainer>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <FooterLink href="https://tap.health/about-us/">
                    About Us
                  </FooterLink>
                </li>
                <br />
                <li>
                  <FooterLink href="https://tap.health/blog/">Blog</FooterLink>
                </li>
                <br />
                <li>
                  <FooterLink href="https://tap.health/contact-us/">
                    Contact Us
                  </FooterLink>
                </li>
                <br />
                <li>
                  <FooterLink href="https://tap.health/privacy-policy/">
                    Privacy Policy
                  </FooterLink>
                </li>
                <br />
                <li>
                  <FooterLink href="https://tap.health/return-policy/">
                    Return / Shipping Policy
                  </FooterLink>
                </li>
              </ul>
            </LinksContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1">
              Subscribe to our mailing list & never miss an update
            </Typography>
            <br />
            <TextField
              label="Enter your email address"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                sx: {
                  "& fieldset": {
                    border: "1px solid white",
                    borderRadius: "25px",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                margin: "20px 0",
                input: {
                  color: "white",
                },
              }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="body2">Terms and Conditions</Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
