import React from "react";
import { Box, Container, Typography,Button, Stack, Grid } from "@mui/material";
import  Person  from "../../src/Boss.jpg";
import Payland from "../../src/Payland.jpg";
import PaylandVideo from "../../src/PaylandVideo.mp4"
const offices = [
  { name: "CYPRUS OFFICE", location: "Limassol", flag: "CY" },
  { name: "DUBAI OFFICE", location: "Dubai", flag: "AE" },
  { name: "KOSOVO OFFICE", location: "Pristina", flag: "XK" },
];

export default function GlobalPresence({ mode = "light" }) {
  const isDark = mode === "dark";
  const bg = isDark ? "#0a0a0a" : "#ffffff";
  const text = isDark ? "#ffffff" : "#000000";
  const accent = "#ff5722"; // PayLand Orange
  const boxBg = isDark ? "#111111" : "#f8f8f8";
  const borderColor = accent;
const formBgColor = isDark ? "#1e1e1e" : "#f5f5f5"; // Light gray in light mode
  return (
    <Box sx={{ bgcolor: bg, color: text, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", maxWidth: 1300, mx: "auto" }}>

          {/* MAIN TITLE */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: "0.05em",
              color: accent,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              textTransform: "uppercase",
            }}
          >
            Our Global Presence
          </Typography>

          {/* SUBTEXT */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 900,
              mx: "auto",
              mb: 6,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: isDark ? "#aaa" : "#444",
            }}
          >
            Founded in 2014 as a startup and completely bootstrapped, Praxis has evolved into
            an international fintech company with a diverse global team.
          </Typography>

          {/* OFFICE CARDS */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {offices.map((office) => (
              <Box
                key={office.name}
                sx={{
                  flex: 1,
                  minHeight: 220,
                  bgcolor: boxBg,
                  border: `3px solid ${borderColor}`,
                  borderRadius: "12px",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  "&:hover": {
                    bgcolor: accent,
                    color: "#fff",
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(255,87,34,0.3)",
                    "& .location": { color: "#fff" },
                    "& .flag-bg": { bgcolor: "#fff" },
                    "& .flag-text": { color: accent },
                  },
                }}
              >

                {/* FLAG CIRCLE */}
                <Box
                  className="flag"
                  sx={{
                    position: "relative",
                    width: 60,
                    height: 60,
                    mb: 2,
                    overflow: "hidden",
                    borderRadius: "50%",
                    boxShadow: "0 4px 12px rgba(255,87,34,0.3)",
                  }}
                >
                  {/* Background Layer */}
                  <Box
                    className="flag-bg"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: accent,
                      transition: "background-color 0.3s ease",
                    }}
                  />

                  {/* Flag Text */}
                  <Typography
                    className="flag-text"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      color: "#fff",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {office.flag}
                  </Typography>
                </Box>

                {/* OFFICE NAME */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                    mb: 1,
                    fontSize: "1.3rem",
                  }}
                >
                  {office.name}
                </Typography>

                {/* LOCATION */}
                <Typography
                  className="location"
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: isDark ? "#999" : "#555",
                    fontSize: "1.1rem",
                  }}
                >
                  {office.location}
                </Typography>
              </Box>
            ))}
          </Stack>

           <Box
                component="form"
                sx={{
                  maxWidth: { xs: 600, sm: 800, md: 1200 },
                  mx: "auto",
                  p: { xs: 3, sm: 5 },
                  borderRadius: 3,
                  bgcolor: formBgColor, // Applied light gray here
                  boxShadow: isDark
                    ? "0 10px 30px rgba(0,0,0,0.4)"
                    : "0 10px 30px rgba(0,0,0,0.1)",
                  border: `1px solid ${borderColor}`,
                  marginTop: "30px"
                }}
              >
      <Grid container spacing={3} alignItems="flex-start">
        {/* LEFT: IMAGE */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={Person}
            alt="Header"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: 100, md: 200 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* RIGHT: TEXT — LEFT ALIGNED */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "left", // ← Left aligned
            }}
          >
            OUR JOURNEY
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ textAlign: "left" }} // ← Left aligned
          >
            Before we became payment software providers, we were merchants ourselves.<br/> 
            With extensive experience in Forex trading and iGaming, we saw the gap in <br/>the market and built the software we wanted to use ourselves.
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" ,fontSize:"22px" ,fontWeight:"bold"}} // ← Left aligned
          >
            Ozgur Ozcakmak
          </Typography>
           <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left",  fontWeight:"bold"}} // ← Left aligned
          >
           Co-Founder and Director
          </Typography>
          
        </Grid>
      </Grid>
</Box>
        <Box sx={{ textAlign: "center", maxWidth: 1300, mx: "auto" }}>
  {/* MAIN TITLE */}
  <Typography
    variant="h3"
    sx={{
      fontWeight: 900,
      letterSpacing: "0.05em",
      color: accent,
      mb: 2,
      fontSize: { xs: "2rem", md: "3rem" },
      textTransform: "uppercase",
      mt: "30px",
    }}
  >
    What We Offer
  </Typography>

  {/* SUBTEXT */}
  <Typography
    variant="body1"
    sx={{
      maxWidth: 900,
      mx: "auto",
      mb: 6,
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: isDark ? "#aaa" : "#444",
    }}
  >
    Aligned with your objectives.
  </Typography>

  {/* FIRST ROW: 2 BOXES */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: { xs: 3, sm: 4 },
      width: "100%",
      maxWidth: "100%",
      mx: "auto",
      px: { xs: 2, sm: 4, md: 6 },
      mb: { xs: 3, sm: 4 },
    }}
  >
    {/* Box 1 */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        p: { xs: 3, sm: 4 },
        borderRadius: 2,
        border: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "#222" : "#f9f9f9",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        textAlign: "left",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: accent,
          fontSize: { xs: "1.4rem", sm: "1.5rem" },
        }}
      >
        Compliance and Security
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? "#ddd" : "#555",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
       We have a Level 1 PCI DSS compliance certification, prioritizing data security and regulatory standards.   </Typography>
    </Box>

    {/* Box 2 */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        p: { xs: 3, sm: 4 },
        borderRadius: 2,
        border: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "#222" : "#f9f9f9",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        textAlign: "left",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: accent,
          fontSize: { xs: "1.4rem", sm: "1.5rem" },
        }}
      >
        Localized Payments
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? "#ddd" : "#555",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
  By understanding regional nuances, we offer payment methods that resonate on a local level while delivering global reach.    </Typography>
    </Box>
  </Box>

  {/* SECOND ROW: 2 MORE BOXES */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: { xs: 3, sm: 4 },
      width: "100%",
      maxWidth: "100%",
      mx: "auto",
      px: { xs: 2, sm: 4, md: 6 },
    }}
  >
    {/* Box 3 */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        p: { xs: 3, sm: 4 },
        borderRadius: 2,
        border: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "#222" : "#f9f9f9",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        textAlign: "left",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: accent,
          fontSize: { xs: "1.4rem", sm: "1.5rem" },
        }}
      >
        Dedicated 24/7 Support
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? "#ddd" : "#555",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
     Our commitment goes beyond technology. With dedicated teams and 24/7 support, we ensure our clients always have an expert by their side.  </Typography>
    </Box>

    {/* Box 4 */}
    <Box
      sx={{
        flex: 1,
        width: "100%",
        p: { xs: 3, sm: 4 },
        borderRadius: 2,
        border: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "#222" : "#f9f9f9",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        textAlign: "left",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: accent,
          fontSize: { xs: "1.4rem", sm: "1.5rem" },
        }}
      >
        Multi-Currency Support
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? "#ddd" : "#555",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
     Our system's ability to handle 200+ currencies ensures a seamless transaction experience, irrespective of geographical borders.  </Typography>
    </Box>
  </Box>
</Box>
         <Box
                component="form"
                sx={{
                  maxWidth: { xs: 600, sm: 800, md: 1200 },
                  mx: "auto",
                  p: { xs: 3, sm: 5 },
                  borderRadius: 3,
                  bgcolor: formBgColor, // Applied light gray here
                  boxShadow: isDark
                    ? "0 10px 30px rgba(0,0,0,0.4)"
                    : "0 10px 30px rgba(0,0,0,0.1)",
                  border: `1px solid ${borderColor}`,
                  marginTop: "30px"
                }}
              >
      <Grid container spacing={3} alignItems="flex-start">
       

        {/* RIGHT: TEXT — LEFT ALIGNED */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "left", // ← Left aligned
            }}
          >
            Our Mission
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ textAlign: "left" ,fontSize:"20px",fontWeight:"bold"}} // ← Left aligned
          >
       Payland was created to support every online business towards <br/>achieving sustainable growth and global scalability. Through <br/>sophisticated payment orchestration, we enable them to manage <br/>and optimize their global payment processes.    </Typography>

        </Grid>
         {/* LEFT: IMAGE */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={Payland}
            alt="Header"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: 100, md: 200 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
</Box>
   <Box sx={{ textAlign: "center", maxWidth: 1300, mx: "auto" }}>
  {/* MAIN TITLE */}
  <Typography
    variant="h3"
    sx={{
      fontWeight: 900,
      letterSpacing: "0.05em",
      color: accent,
      mb: 2,
      fontSize: { xs: "2rem", md: "3rem" },
      textTransform: "uppercase",
      mt: "30px",
    }}
  >
    Join Our Team
  </Typography>
  {/* FIRST ROW: 2 BOXES */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      gap: { xs: 3, sm: 4 },
      width: "100%",
      maxWidth: "100%",
      mx: "auto",
      px: { xs: 2, sm: 4, md: 6 },
      mb: { xs: 3, sm: 4 },
    }}
  >
    {/* Box 1 */}
   <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    width: '100%',
    p: { xs: 3, sm: 4 },
    borderRadius: 2,
    border: `1px solid ${borderColor}`,
    backgroundColor: isDark ? '#222' : '#f9f9f9',
    boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    },
  }}
>
  {/* Centered Text */}
  <Typography
    variant="body2"
    sx={{
      color: isDark ? '#ddd' : '#555',
      lineHeight: 1.8,
      fontSize: '1rem',
      mb: 3, // space before button
    }}
  >
    We have a Level 1 PCI DSS compliance certification, prioritizing data security and regulatory standards.
  </Typography>

  {/* Centered Button */}
  <Button
    variant="contained"
    size="large"
    href="/careers"
    target="_blank"
    rel="noopener"
    sx={{
      backgroundColor: accent,
      color: '#fff',
      fontWeight: 600,
      px: 4,
      py: 1.5,
      borderRadius: 2,
      textTransform: 'none',
      fontSize: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: `${accent}ee`,
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
      },
    }}
  >
    View Open Positions
  </Button>
</Box>

    {/* Box 2 */}
<Box
  sx={{
    flex: 1,
    width: "100%",
    p: { xs: 3, sm: 4 },
    borderRadius: 2,
    border: `1px solid ${borderColor}`,
    backgroundColor: isDark ? '#222' : '#f9f9f9',
    boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    },
  }}
>
  {/* Payland Video - Centered & Responsive */}
  <video
    src={PaylandVideo} // e.g., public/videos/payland-logo.mp4
    autoPlay
    muted
    loop
    playsInline
    alt="Payland Logo Animation"
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
    }}
  />
</Box>
  </Box>

</Box>
        </Box>
      </Container>
    </Box>
  );
}