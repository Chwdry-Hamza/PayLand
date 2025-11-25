'use client';

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from "@mui/icons-material/Lock";
import BoltIcon from "@mui/icons-material/Bolt";
import CategoryIcon from "@mui/icons-material/Category";  
import { useParams, Link } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import Api from "../../src/APi.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const countries = [
  { name: "Turkey", flag: "🇹🇷", top: "10%", left: "70%" },
  { name: "Vietnam", flag: "🇻🇳", top: "25%", left: "80%" },
  { name: "Indonesia", flag: "🇮🇩", top: "45%", left: "68%" },
  { name: "Brazil", flag: "🇧🇷", top: "70%", left: "75%" },
  { name: "India", flag: "🇮🇳", top: "55%", left: "60%" },
  { name: "Bangladesh", flag: "🇧🇩", top: "75%", left: "60%" },
  { name: "Colombia", flag: "🇨🇴", top: "30%", left: "55%" },
];
/* ──────────────────────  DATA  ────────────────────── */
const chartData = [
  { name: "1", value: 400 },
  { name: "2", value: 300 },
  { name: "3", value: 600 },
  { name: "4", value: 800 },
  { name: "5", value: 900 },
  { name: "7", value: 700 },
];
 const features = [
    {
      icon: PublicIcon,
      title: "High Success Rates",
      desc: "Enjoy up to 95% success rates with our cutting-edge payment solution",
      color: "linear-gradient(135deg, #1e88e5, #42a5f5)",
    },
    {
      icon: LockIcon,
      title: "Advanced Security",
      desc: "Secure transactions with our state-of-the-art security features",
      color: "linear-gradient(135deg, #e91e63, #f06292)",
    },
    {
      icon: BoltIcon,
      title: "Fast & Free Onboarding",
      desc: "Get started swiftly with our fast and free onboarding process",
      color: "linear-gradient(135deg, #ffb300, #ffca28)",
    },
    {
      icon: CategoryIcon,
      title: "Innovative Technology",
      desc: "Leverage the latest technology for reliable and efficient payment processing",
      color: "linear-gradient(135deg, #7b1fa2, #9c27b0)",
    },
  ];
const products = [
  {
    id: 1,
    title: "Praxis Cashier",
    subtitle: "Hosted checkout for faster conversions",
    img: "https://via.placeholder.com/600x360?text=Cashier",
    tags: ["Payments", "Hosted"],
  },
  {
    id: 2,
    title: "Praxis Direct",
    subtitle: "Direct integrations with PSPs and banks",
    img: "https://via.placeholder.com/600x360?text=Direct",
    tags: ["Integration", "API"],
  },
  {
    id: 3,
    title: "Hosted Payment Fields",
    subtitle: "PCI-safe card fields for your site",
    img: "https://via.placeholder.com/600x360?text=HPF",
    tags: ["PCI", "Security"],
  },
  {
    id: 4,
    title: "Praxis Safe",
    subtitle: "Tokenization & vaulting for cards",
    img: "https://via.placeholder.com/600x360?text=Safe",
    tags: ["Tokenization", "Vault"],
  },
];

/* ──────────────────────  HOVERCARD  ────────────────────── */
const HoverCard = ({ children, sx, mode }) => {
  const bgGradient = mode === "dark"
    ? "linear-gradient(180deg, #1a1a1a, #111)"
    : "linear-gradient(180deg, #ffffff, #f9f9f9)";

  const borderHoverColor = "#ff8c00";
  const shadowHoverColor = mode === "dark"
    ? "rgba(255, 140, 0, 0.4)"
    : "rgba(255, 140, 0, 0.25)";

  return (
    <Card
      sx={{
        borderRadius: 4,
        background: bgGradient,
        color: mode === "dark" ? "#fff" : "inherit",
        boxShadow: mode === "dark"
          ? "0 4px 20px rgba(0,0,0,0.4)"
          : "0 4px 20px rgba(0,0,0,0.05)",
        border: "2px solid transparent",
        transition: "all 0.3s ease",
        transform: "translateY(0)",
        "&:hover": {
          borderColor: borderHoverColor,
          boxShadow: `0 8px 30px ${shadowHoverColor}`,
          transform: "translateY(-6px)",
        },
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};

/* ──────────────────────  MAIN COMPONENT  ────────────────────── */
export default function Home({ mode, toggleMode }) {
    const isDark = mode === "dark";
  // Theme-aware colors (same as Product page)
const bgColor =
  mode === "dark"
    ? "#000"
    : "linear-gradient(90deg, #f0c392ff, #ffffff, #f0c392ff)";

  const textColor = mode === "dark" ? "#fff" : "#212121";
  const mutedColor = mode === "dark" ? "#ccc" : "#666";
  const cardBg = mode === "dark" ? "#1a1a1a" : "#fff";
  const borderColor = mode === "dark" ? "#333" : "#eee";
const formBgColor = isDark ? "#1e1e1e" : "#f5f5f5"; // Light gray in light mode
  const accentHover  = "#e64a19";
    const accent       = "#ff5722";

  return (
    <Box
      component="main"
      sx={{
        background: bgColor,
        color: textColor,
        py: { xs: 4, md: 8 },
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* HERO SECTION */}
        <Box
          sx={{
            width: "100%",
            marginTop: { xs: 0, md: -7 },
            minHeight: { xs: "auto", md: "85vh" },
            background:
              mode === "dark"
                ? "linear-gradient(135deg, #1a1a1a 0%, #2c3e50 70%, #000 150%)"
                : "linear-gradient(135deg, #ff8c00 0%, #e63946 70%, #1d1d1d 150%)",
            borderRadius: { xs: 2, md: 4 },
            position: "relative",
            overflow: "hidden",
            py: { xs: 6, md: 10 },
            px: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                mode === "dark"
                  ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\") bottom no-repeat"
                  : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\") bottom no-repeat",
              backgroundSize: "cover",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            <Box sx={{ color: "#fff", textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.8rem", md: "4rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Seamless
                <br />
                <Box component="span" sx={{ color: "#0288d1" }}>
                  Payments
                </Box>
                <br />
                Settled Instantly
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  maxWidth: { xs: "100%", md: 560 },
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  opacity: 0.9,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                PayLand is a global payment aggregator helping businesses accept
                100+ local payment methods and process payouts instantly,
                securely, efficiently, and at scale.
              </Typography>

       <Button
  component={Link}
  to="/contact"  // your target route
  variant="contained"
  size="large"
  sx={{
    mt: 4,
    px: { xs: 3, md: 4 },
    py: { xs: 1, md: 1.5 },
    borderRadius: 50,
    fontWeight: 600,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    "&:hover": { backgroundColor: "#000" },
  }}
>
  Contact Now
</Button>
            </Box>

            {/* STAT CARDS */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
                mt: { xs: 4, md: 4 },
              }}
            >
<HoverCard mode={mode} sx={{ gridColumn: { sm: "1 / -1" } }}>
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Transaction graphic
                  </Typography>
                  <Box sx={{ height: { xs: 100, sm: 130 } }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                       <CartesianGrid strokeDasharray="3 3" stroke={mode === "dark" ? "#333" : "#f0f0f0"} />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#0288d1"
                          strokeWidth={3}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                    $ 6,220,342.00
                  </Typography>
                </CardContent>
              </HoverCard>
              <HoverCard mode={mode}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0288d1, #4fc3f7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mr: 1,
                      }}
                    >
                      💰
                    </Box>
                    <Typography variant="subtitle2" color={mutedColor}>Sales</Typography>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: textColor }}>
                    $ 6,351,420.67
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    78,411 Total payments
                  </Typography>
                </CardContent>
              </HoverCard>

              <HoverCard mode={mode}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #4caf50, #81c784)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mr: 1,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography variant="subtitle2" color={mutedColor}>Success rate</Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#2e7d32" }}
                  >
                    99.99%
                  </Typography>
                </CardContent>
              </HoverCard>

              <HoverCard mode={mode} sx={{ gridColumn: { sm: "1 / -1" } }}>
                <CardContent>
                  <Typography variant="subtitle2" color={mutedColor} gutterBottom>
                    Partner
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: mutedColor }}>
                    Trusted by over 6,000 merchants
                  </Typography>
                  <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                    {["🌐", "💳", "💳", "💳", "VISA"].map((icon, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: mode === "dark" ? "#333" : "#f5f5f5",
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: icon === "VISA" ? "#fff" : mutedColor,
                          fontWeight: icon === "VISA" ? 600 : "inherit",
                          backgroundColor: icon === "VISA" ? "#1a237e" : undefined,
                        }}
                      >
                        {icon}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </HoverCard>
            </Box>
          </Box>
        </Box>


     {/* who we servwe */}
 <Box
  sx={{
    marginTop: 4,
    width: "100%",
    minHeight: { xs: "auto", md: "85vh" },
    background:
      mode === "dark"
        ? "linear-gradient(135deg, #0d0d0d 0%, #1f1f1f 40%, #2c2c2c 100%)"
        : "linear-gradient(135deg, #dcdcdc 0%, #a0a0a0 70%, #7a7a7a 150%)",
    position: "relative",
    overflow: "hidden",
    py: { xs: 8, md: 12 },
    px: { xs: 3, sm: 6, md: 8 },
    borderRadius: { xs: 2, md: 4 },
  }}
>
  {/* Wave Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
        mode === "dark"
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.08' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E") bottom no-repeat`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000000' fill-opacity='0.2' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'/%3E%3C/svg%3E") bottom no-repeat`,
      backgroundSize: "cover",
      opacity: 1,
      zIndex: 0,
    }}
  />

  {/* Text Content */}
  <Box
    sx={{
      marginTop: 4,
      position: "relative",
      zIndex: 1,
      maxWidth: 500,
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 800,
        color: "#f68b12ff",
        mb: 2,
      }}
    >
      Who We Serve
    </Typography>

    <Typography
      sx={{
        color: mode === "dark" ? "#e0e0e0" : "black",
        lineHeight: 1.6,
        mb: 4,
        fontSize: "26px",
      }}
    >
      PayLand empowers emerging businesses with fast, reliable global payments.
      With 100+ local methods—bank transfers, e-wallets, and virtual accounts—we
      help you reach customers worldwide while ensuring seamless checkout and
      secure settlements.
    </Typography>

    {/* Stats */}
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 6 }}
      sx={{ mt: 8 }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: mode === "dark" ? "#fff" : "black",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          6000+
        </Typography>
        <Typography
          sx={{
            color: mode === "dark" ? "#ccc" : "black",
            fontSize: "0.9rem",
          }}
        >
          Merchants
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: mode === "dark" ? "#fff" : "black",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          200 Million
        </Typography>
        <Typography
          sx={{
            color: mode === "dark" ? "#ccc" : "black",
            fontSize: "0.9rem",
          }}
        >
          Transactions/month
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: mode === "dark" ? "#fff" : "black",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          100+
        </Typography>
        <Typography
          sx={{
            color: mode === "dark" ? "#ccc" : "black",
            fontSize: "0.9rem",
          }}
        >
          Payment methods
        </Typography>
      </Box>
    </Stack>
  </Box>

{/* Animated Country Flags */}
{/* Desktop: floating absolute | Mobile: 2 per row grid below text */}
<Box
  sx={{
    mt: { xs: 6, md: 0 },
    position: { xs: "relative", md: "absolute" },
    top: { md: 0 },
    left: { md: 0 },
    right: { md: 0 },
    bottom: { md: 0 },
    zIndex: 0,
    width: "100%",
    pointerEvents: "none", // Prevents interference on desktop
  }}
>
  {/* Mobile Grid */}
  <Box
    sx={{
      display: { xs: "grid", md: "none" },
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 2,
      justifyItems: "center",
      px: { xs: 2, md: 0 },
    }}
  >
    {countries.map((country, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "999px",
            px: 1.6,
            py: 0.6,
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            width: "fit-content",
          }}
        >
          <span style={{ fontSize: "1.3rem", marginRight: "6px" }}>
            {country.flag}
          </span>
          <Typography variant="body2" sx={{ color: "black", fontWeight: 600 }}>
            {country.name}
          </Typography>
        </Box>
      </motion.div>
    ))}
  </Box>

  {/* Desktop Floating Flags */}
  <Box
    sx={{
      display: { xs: "none", md: "block" },
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    {countries.map((country, i) => (
      <motion.div
        key={i}
        initial={{ y: 0 }}
        animate={{
          y: [0, -10, 0],
          x: [0, i % 2 === 0 ? 10 : -10, 0],
        }}
        transition={{
          duration: 6 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: country.top,
          left: country.left,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: "999px",
            px: 1.6,
            py: 0.6,
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <span style={{ fontSize: "1.3rem", marginRight: "6px" }}>
            {country.flag}
          </span>
          <Typography variant="body2" sx={{ color: "black", fontWeight: 600 }}>
            {country.name}
          </Typography>
        </Box>
      </motion.div>
    ))}
  </Box>
</Box>
</Box>

{/* ──────────────────────  NEW DESIGN BOX – PAYOK FEATURES (EXACT IMAGE MATCH)  ────────────────────── */}

  <Box
  sx={{
    marginTop: 4,
    width: "100%",
    minHeight: { xs: "auto", md: "85vh" },
    background:
      mode === "dark"
      ? "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)"
      : "linear-gradient(145deg, #ffffff 0%, #8a8282ff 100%)",
    position: "relative",
    overflow: "hidden",
    py: { xs: 8, md: 12 },
    px: { xs: 3, sm: 6, md: 8 },
    borderRadius: { xs: 2, md: 4 },
  }}
>
  {/* Background Wave */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "100%",
      background: mode === "dark"
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top no-repeat`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000000' fill-opacity='0.03' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top no-repeat`,
      backgroundSize: "cover",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  
   {/* ── WHY CHOOSE PAYOK – TWO BOXES IN ONE ROW ── */}
 <Grid container spacing={3} alignItems="flex-start">
  {/* LEFT – Text */}
  <Grid item xs={12}>
    
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2.5rem", md: "3.2rem" },
          lineHeight: 1.1,
          mb: 2,
          color: mode === "dark" ? "#fff" : "#000",
        }}
      >
        Why Choose{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(90deg, #ff6b35, #ff8c00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          PayLand
        </Box>
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.7,
          color: mode === "dark" ? "#ddd" : "#555",
        }}
      >
        Merchants choose PayLand for instant settlements, 99.99% success rates, and licensed compliance under FINTRAC. Built for high-growth industries, we provide secure, efficient, and borderless payments—optimized to help your business expand confidently.
      </Typography>
  </Grid>
</Grid>

    {/* Feature Cards Row */}
    <Grid container spacing={3} sx={{ mt: 6 }}>
      {features.map((feature, i) => {
        const IconComponent = feature.icon;
        return (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  background: feature.color,
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  border: "none",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 30, color: "white" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.9, fontSize: "0.875rem" }}
                  >
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  
</Box>


   {/* Seamless API Integration */}
    
<Box
  sx={{
    marginTop: 4,
    width: "100%",
    minHeight: { xs: "auto", md: "85vh" },
    background:
      mode === "dark"
        ? "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)"
        : "linear-gradient(145deg, #db9d4bff 0%, #f15858ff 100%)",
    position: "relative",
    overflow: "hidden",
    py: { xs: 8, md: 12 },
    px: { xs: 3, sm: 6, md: 8 },
    borderRadius: { xs: 2, md: 4 },
  }}
>
  {/* Background Wave */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background: mode === "dark"
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.03' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top/cover no-repeat`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23000000' fill-opacity='0.03' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top/cover no-repeat`,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
    <Grid container spacing={3} justifyContent="center">
      {/* Titles */}
      <Grid item xs={12} textAlign="center">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            color: "white",
          }}
        >
          Easy Integrations
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: mode === "dark" ? "orange" : "#000",
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Seamless API Integration
        </Typography>
      </Grid>

      {/* Main Card – Image + Text + PLUS Section */}
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            mt: 4,
            p: { xs: 3, sm: 5 },
            borderRadius: 3,
            bgcolor: mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: 3,
            border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
          }}
        >
         <Grid container spacing={3} alignItems="flex-start">
        {/* LEFT: IMAGE */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={Api}
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
            variant="h6"
            component="h2"
            gutterBottom
            sx={{
              // fontWeight: "bold",
              mb: 2,
              textAlign: "left", // ← Left aligned
            }}
          >
                 Integrate effortlessly with our powerful API.Connect your <br/>applications in minutes with
              comprehensive documentation <br/>and real-time support.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ textAlign: "left" }} // ← Left aligned
          >
            Our RESTful API is designed for developers — secure, scalable, and easy to <br/>implement.
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
                    // bgcolor: accentColor,
                    color: mode === "dark" ? "#000" : "#fff",
                    "&:hover": {
                      bgcolor:
                        mode === "dark"
                          ? "rgba(255, 255, 255, 0.2)"
                          : "#ad5151ff",
                    },
                  }}
                >
                  Start Integrating
                  <ArrowForwardIcon sx={{ color: "#ff5722", fontSize: "1.8rem" }} />
                </Button>    
        </Grid>
      </Grid>

          {/* PLUS → SDK Section – Fully Responsive */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              p: { xs: 3, md: 4 },
              background: mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
              borderRadius: 3,
              borderLeft: "4px solid #ff5722",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                letterSpacing: "-0.5px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 1.5, sm: 2 },
                lineHeight: 1.4,
              }}
            >
              <Box component="span" sx={{ color: "#ff5722", fontSize: { xs: "3.5rem", sm: "4.5rem" }, fontWeight: 900 }}>
                PLUS
              </Box>

              <ArrowForwardIcon
                sx={{
                  color: "#ff5722",
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  alignSelf: "center",
                  mt: { xs: 1, sm: 0 },
                }}
              />

              <Box component="span" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, mt: { xs: 1, sm: 0 } }}>
                Integrate quickly with our <strong>PHP</strong> and <strong>Java SDKs</strong>, designed to streamline your deposit processes and provide comprehensive support.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>


{/* Payment Services */}
<Box
  sx={{
    marginTop: 4,
    width: "100%",
    minHeight: { xs: "auto", md: "85vh" },
    background: mode === "dark"
      ? "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)"
      : "linear-gradient(145deg, #db9d4bff 0%, #f15858ff 100%)",
    position: "relative",
    overflow: "hidden",
    py: { xs: 10, md: 14 },
    px: { xs: 3, sm: 6, md: 8 },
    borderRadius: { xs: 2, md: 4 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Subtle Wave */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background: mode === "dark"
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.06' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top/cover no-repeat`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.25' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") top/cover no-repeat`,
      pointerEvents: "none",
      zIndex: 0,
    }}
  />

  <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Box sx={{ textAlign: "center", color: mode === "dark" ? "white" : "white" }}>  {/* Always white – looks good on both gradients */}
          
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: mode === "dark" ? "orange":"#fff",
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: mode === "dark" ? "#fff":"#000",
              fontWeight: 900,
              fontSize: { xs: "2.6rem", md: "4.2rem", lg: "4.8rem" },
              lineHeight: 1.1,
              my: 3,
            }}
          >
            We're Here to Help
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: mode === "dark" ? "#fff" :"#000",
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              lineHeight: 1.8,
              opacity: 0.95,
              maxWidth: "820px",
              mx: "auto",
              mb: 6,
            }}
          >
            Our dedicated account managers are here to provide personalized service tailored to your needs. 
            Reach out to us for assistance or to learn more about our solutions.
          </Typography>

          {/* Button that works perfectly in both themes */}
          <Button
          component="a"
  href="/contact"
            variant="contained"
            size="large"
            sx={{
              borderRadius: 50,
              px: { xs: 5, sm: 7 },
              py: 2,
              fontSize: "1.15rem",
              fontWeight: 700,
              background: "#f15858",
              color: "#ffffffee",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              "&:hover": {
                background: "orange",
                transform: "translateY(-3px)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>




{/* <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
  <Container maxWidth="lg">
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          Powerful Solutions
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "orange",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", md: "2rem" },
            mt: 1,
          }}
        >
          End-to-End Payment Services Made Simple
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box> */}

     
      </Container>
    </Box>
  );
}