import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Link,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
import { useLocation, useNavigate } from "react-router-dom";
function FooterCol({ title, items }) {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {items.map((it, idx) => (
          <Link
            key={idx}
            href={it.href || "#"}
            underline="none"
            sx={{
              color: "text.secondary",
              fontSize: 14,
              transition: "color 0.2s",
              "&:hover": { color: "primary.main" },
            }}
          >
            {it.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default function Footer({ mode, toggleMode }) {
  const theme = useTheme();
const location = useLocation();
const navigate = useNavigate();
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon fontSize="small" />,
      url: "https://www.linkedin.com/in/paylandgateway",
      hoverBg: "#0077B5",
    },
    {
      name: "X (Twitter)",
      icon: <TwitterIcon fontSize="small" />,
      url: "https://twitter.com/praxistech",
      hoverBg: "#000000",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon fontSize="small" />,
      url: "https://www.instagram.com/payland_official/",
      hoverBg: "#E4405F",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon fontSize="small" />,
      url: "https://www.facebook.com/profile.php?id=61581868289945",
      hoverBg: "#1877F2",
    },
    {
      name: "Gmail",
      icon: <EmailIcon fontSize="small" />,
      url: "https://www.gmail.com",
      hoverBg: "#1877F2",
    },
  ];
const handleLogoClick = (e) => {
  if (location.pathname === "/home") {
    e.preventDefault(); // Prevent navigation
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  } else {
    navigate("/home"); // Navigate normally
  }
};
  const bgColor = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffffff, #f0c392ff)";
  return (
    
    <Box
      component="footer"
      sx={{
        background: bgColor,
        color: "text.primary",
        py: { xs: 6, md: 8 },
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 4 } }}>
        <Grid container spacing={6}>
          {/* Left Column: Logo + Description + Social */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1.5} mb={2}>
             <Box
  component="button"
  onClick={handleLogoClick}
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    textDecoration: "none",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    mb: 2,
  }}
>
              <Box
                component="img"
                src="/PaylandLogo1.png"
                alt="PayLand logo"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  objectFit: "contain",
                  bgcolor: "background.default",
                  p: 0.5,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  letterSpacing: "-0.5px",
                }}
              >
                <span>Pay</span>
                <span style={{ color: "#ff5722" }}>Land</span>
              </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mt: 1.5,
                maxWidth: 300,
                lineHeight: 1.6,
              }}
            >
              Powering businesses to optimize their send and receive transactions
              through an enhanced checkout experience.
            </Typography>

            {/* Social Icons - Aligned Left */}
            <Box
              mt={3}
              display="flex"
              gap={1.5}
              sx={{
                "& .social-icon": {
                  bgcolor: "action.hover",
                  color: "text.primary",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  transition:
                    "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.1)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                  },
                  "& svg": {
                    fontSize: "1.3rem",
                  },
                },
              }}
            >
              {socialLinks.map((social) => (
                <Tooltip
                  key={social.name}
                  title={social.name}
                  arrow
                  placement="top"
                >
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    sx={{
                      "&:hover": {
                        bgcolor: social.hoverBg,
                        color: "white",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Grid>

          {/* Right Columns: Links */}
          <Grid item xs={12} md={8} style={{marginTop: '12px'}}>
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              <Grid item xs={6} sm={4} md={3}>
                <FooterCol
                  title="Products"
                  items={[
                    { label: "Card Payment Gateway", href: "/product/Card-Payment-Gateway" },
                    { label: "IBAN Solutions", href: "/product/IBAN-Solutions" },
                    { label: "Crypto to Card Service", href: "/product/Crypto-to-Card-Servise" },
                  ]}
                />
              </Grid>

              <Grid item xs={6} sm={4} md={3}>
                <FooterCol
                  title="Industries"
                  items={[
                    { label: "Trading (High-Volume Payments)", href: "/industry/trading" },
                    { label: "iGaming (Gaming & Betting)", href: "/industry/igaming" },
                    { label: "E-commerce (Online Retail)", href: "/industry/ecommerce" },
                  ]}
                />
              </Grid>

              <Grid item xs={6} sm={4} md={3}>
                <FooterCol
                  title="About Us"
                  items={[
                    { label: "Who We Are", href: "/about/who-we-are" },
                    // { label: "Careers", href: "/about/careers" },
                    { label: "Contact Us", href: "/contact" },
                  ]}
                />
              </Grid>

              <Grid item xs={6} sm={4} md={3}>
                <FooterCol
                  title="Developers"
                  items={[
                    { label: "Documentation", href: "https://docs.praxis.tech" },
                    { label: "PayLand Cashier API", href: "/api/cashier" },
                    { label: "Hosted Payment Fields API", href: "/api/fields" },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ my: 5, borderColor: "divider" }} />

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © 2016–{new Date().getFullYear()} PayLand Tech Ltd. All rights reserved.
          </Typography>

          <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
            <Link
              href="/terms-and-conditions"
              sx={{
                color: "text.secondary",
                fontSize: 14,
                "&:hover": { color: "primary.main" },
              }}
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy-policy"
              sx={{
                color: "text.secondary",
                fontSize: 14,
                "&:hover": { color: "primary.main" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/Cookies"
              sx={{
                color: "text.secondary",
                fontSize: 14,
                "&:hover": { color: "primary.main" },
              }}
            >
              Cookies Settings
            </Link>
             <Link
              href="/Information Security Policy"
              sx={{
                color: "text.secondary",
                fontSize: 14,
                "&:hover": { color: "primary.main" },
              }}
            >
              Information Security Policy
            </Link>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


