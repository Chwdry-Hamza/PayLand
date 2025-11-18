import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function ContactUs({ mode }) {
  const bgColor = mode === "dark" ? "#000" : "#f8f9fa";
  const textColor = mode === "dark" ? "#fff" : "#212121";
  const mutedColor = mode === "dark" ? "#ccc" : "#424242";
  const accentColor = "#ff5722";

  return (
    <Box
      component="main"
      sx={{
        minHeight: "50vh",
        maxHeight: "80vh",
        bgcolor: bgColor,
        color: textColor,
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 12 } }}>
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 0 } }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 8 }}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* TEXT ONLY */}
              <Box
                sx={{
                  flex: { md: 1 },
                  maxWidth: { md: "50%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    lineHeight: 1.1,
                    color: accentColor,
                  }}
                >
                  Contact Us
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    color: textColor,
                  }}
                >
                  Have questions? Need integration support?
                  Our team is here 24/7. Reach out via email, phone, or schedule a demo. We’d love to hear from you.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ mb: 4, color: mutedColor, fontWeight: 600 }}
                >
                  GET IN TOUCH
                </Typography>

                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    bgcolor: accentColor,
                    color: mode === "dark" ? "#000" : "#fff",
                    "&:hover": {
                      bgcolor: mode === "dark" ? "rgba(255,255,255,0.2)" : "#e0e0e0",
                    },
                  }}
                >
                  Get in Toucha
                </Button>
              </Box>

              {/* EMPTY IMAGE AREA */}
              <Box sx={{ flex: { md: 1 }, maxWidth: { md: "50%" } }} />
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
