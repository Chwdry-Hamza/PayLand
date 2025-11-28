import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import gateway from '../../src/gateway.png';
import iban from '../../src/iban.png';
import cryptotocard from '../../src/cryptotocard.png';
import Tradeing from '../../src/Tradeing.png';
import iGaming from '../../src/iGaming.png';
import Ecommerce from '../../src/Ecommerce.png';
// Updated navLinks: Removed "Company", Added "About Us"
const navLinks = [
  { label: "Products", dropdown: "products" },
  { label: "Industries", dropdown: "industries" },
  // { label: "About Us", dropdown: "about" },
  { label: "About Us", href: "/about/who-we-are" },
  { label: "Developers", href: "#developers" },
];

const productBoxes = [
  {
    title: "Card Payment Gateway",
    subtitle: "Request Integration → Coming Soon",
    img: gateway,
    slug: "Card-Payment-Gateway",
    description:
      "Experience the future of global payments. Payland Gateway connects businesses to the world through secure, compliant, and lightning-fast transactions. Accept Visa, Mastercard, and alternative methods with precision, trust, and global scalability.",
  },
  {
    title: "IBAN Solutions",
    subtitle: "Open Your IBAN → Coming Soon",
    img: iban,
    slug: "IBAN-Solutions",
    description:
      "Your dedicated banking identity — anywhere in the world. Gain exclusive access to personalized IBAN accounts for effortless transfers, settlements, and international fund management — all within Payland’s trusted financial infrastructure.",
  },
  {
    title: "Crypto to Card Service",
    subtitle: "Apply Your Card → Coming Soon",
    img: cryptotocard,
    slug: "Crypto-to-Card-Servise",
    description:
      "Seamless bridge between digital assets and real-world spending. Convert crypto into fiat instantly and enjoy true financial freedom. Spend globally with your Payland Card — powered by Visa and Mastercard, designed for the next generation of finance.",
  },
];

const industryBoxes = [
  {
    title: "Trading (High-Volume Payments)",
    subtitle: "Empower Traders → Coming Soon",
    img: Tradeing,
    slug: "trading",
    description:
      "Payland provides fast, secure, and scalable payment solutions for high-volume businesses. Manage global transactions effortlessly and accelerate your growth.",
  },
  {
    title: "iGaming (Gaming & Betting)",
    subtitle: "Enable iGaming Payments → Coming Soon",
    img: iGaming,
    slug: "igaming",
    description:
      "Tailored payment infrastructure for iGaming operators — offering high approval rates, fast settlements, and a seamless player payment experience.",
  },
  {
    title: "E-commerce (Online Retail)",
    subtitle: "Simplify Online Payments → Coming Soon",
    img: Ecommerce,
    slug: "ecommerce",
    description:
      "Flexible and secure payment options for online retailers. Enable smooth checkout experiences with multiple currencies and quick integration.",
  },
];

// NEW: About Us Boxes
const aboutBoxes = [
  {
    title: "Who We Are",
    subtitle: "OUR MISSION & VISION",
    img: "/PaylandDemo.png", // Replace with real image if needed
    slug: "who-we-are",
    description:
      "Payland is a next-generation fintech platform revolutionizing global payments. We empower businesses with secure, fast, and scalable financial infrastructure to thrive in the digital economy.",
  },
  {
    title: "Careers",
    subtitle: "JOIN OUR TEAM",
    img: "/PaylandDemo.png", // Replace with real image if needed
    slug: "careers",
    description:
      "Be part of a fast-growing team shaping the future of payments. We’re hiring passionate innovators in engineering, product, compliance, and more. Grow with us.",
  },
  {
    title: "Contact Us",
    subtitle: "GET IN TOUCH",
    img: "/PaylandDemo.png", // Replace with real image if needed
    slug: "contact",
    description:
      "Have questions? Need integration support? Our team is here 24/7. Reach out via email, phone, or schedule a demo. We’d love to hear from you.",
  },
];

export default function PayLandNavbar({ mode, toggleMode }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownType, setDropdownType] = React.useState(null); // "products" | "industries" | "about"
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const open = Boolean(anchorEl);

  const handleClick = (e, type) => {
    setAnchorEl(e.currentTarget);
    setDropdownType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropdownType(null);
  };

  // ---------- Colors ----------
  const bgColor = mode === "dark" 
  ? "#000" 
  : {
      background: "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)",
    };
  const textColor = mode === "dark" ? "#fff" : "#212121";
  const linkColor = mode === "dark" ? "#e0e0e0" : "#424242";
  const borderColor = mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const contactBg = mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)";
  const contactBorder = mode === "dark" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)";

  // ---------- Desktop Nav ----------
  const DesktopNav = (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      {navLinks.map((l) => {
        if (l.dropdown) {
          return (
            <Button
              key={l.label}
              onClick={(e) => handleClick(e, l.dropdown)}
              sx={{
                color: linkColor,
                fontWeight: 500,
                textTransform: "none",
                fontSize: "1rem",
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 0,
                  height: 2,
                  bgcolor: "#ff5722",
                  transition: "width 0.3s",
                },
                "&:hover:after": { width: "100%" },
                "&:hover": { color: mode === "dark" ? "#fff" : "#000" },
              }}
            >
              {l.label}
            </Button>
          );
        }
        return (
          <Button
            key={l.label}
            href={l.href}
            sx={{
              color: linkColor,
              fontWeight: 500,
              textTransform: "none",
              fontSize: "1rem",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: 0,
                height: 2,
                bgcolor: "#ff5722",
                transition: "width 0.3s",
              },
              "&:hover:after": { width: "100%" },
              "&:hover": { color: mode === "dark" ? "#fff" : "#000" },
            }}
          >
            {l.label}
          </Button>
        );
      })}
      {/* Theme Toggle */}
      <IconButton onClick={toggleMode} sx={{ color: linkColor, ml: 1 }}>
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      {/* Contact Us */}
      <Button
        variant="outlined"
        href="/contact"
        sx={{
          color: textColor,
          bgcolor: contactBg,
          border: contactBorder,
          borderRadius: 8,
          px: 3,
          py: 1,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.95rem",
          "&:hover": {
            bgcolor: mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );

  // ---------- Card Renderer (Supports Products, Industries, About) ----------
  const renderCards = (boxes) => (
    <>
      {boxes.map((box) => (
        <Link
          key={box.title}
          to={`/${
            dropdownType === "products"
              ? "product"
              : dropdownType === "industries"
              ? "industry"
              : "about"
          }/${box.slug}`}
          style={{ textDecoration: "none", width: "100%" }}
          onClick={() => {
            handleClose();
            if (isMobile) setDrawerOpen(false);
          }}
        >
          <Box
            sx={{
              minWidth: isMobile ? "100%" : 260,
              width: isMobile ? "100%" : 260,
              minHeight: isMobile ? 220 : "auto",
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "background.paper",
              transition: "all .25s ease",
              cursor: "pointer",
              position: "relative",
              border: `2px solid ${mode === "dark" ? "#444" : "#e0e0e0"}`,
              p: isMobile ? 2.5 : 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              mx: isMobile ? 0 : "auto",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                borderColor: mode === "dark" ? "#666" : "#bbb",
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={box.img}
              alt={box.title}
              sx={{
                width: "100%",
                height: isMobile ? 180 : 160,
                objectFit: "cover",
                transition: "opacity 0.3s ease",
              }}
              className="card-image"
            />
            {/* Text Content */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: mode === "dark" ? "#ccc" : "black",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  fontWeight: 600,
                }}
              >
                {box.subtitle}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? "1.25rem" : "1.1rem",
                  color: "#ff6d00",
                }}
              >
                {box.title}
              </Typography>
            </Box>
            {/* Hover Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                p: 2.5,
                bgcolor: mode === "dark" ? "rgba(0,0,0,0.88)" : "rgba(255,255,255,0.94)",
                color: mode === "dark" ? "#fff" : "#212121",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }}
              className="card-text"
            >
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 1, color: "#ff6d00" }}>
                {box.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: mode === "dark" ? "#ccc" : "black",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {box.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.85rem", lineHeight: 1.45, maxWidth: "90%" }}>
                {box.description}
              </Typography>
            </Box>
            {/* CSS Hover Effect */}
            <style jsx>{`
              .card-image { opacity: 1; }
              .card-text { opacity: 0; }
              div:hover > .card-image { opacity: 0; }
              div:hover > .card-text { opacity: 1; }
            `}</style>
          </Box>
        </Link>
      ))}
    </>
  );

  return (
    <>
      {/* ------------------- NAVBAR ------------------- */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: bgColor,
          borderBottom: `1px solid ${borderColor}`,
          py: 1.5,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1200,
            px: { xs: 3, md: 0 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: 72,
            }}
          >
            {/* LOGO (LEFT) */}
            <Box display="flex" alignItems="center" gap={0.8}>
                  <Link
      to="/home"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        textDecoration: "none",
      }}
    >
              <Box
                component="img"
                src="/PaylandLogo1.png"
                alt="PayLand logo"
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: textColor,
                  fontSize: "1.35rem",
                  letterSpacing: "-0.5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>Pay</span>
                <span style={{ color: "#ff5722" }}>Land</span>
              </Typography>
              </Link>
            </Box>
            {/* DESKTOP NAV (RIGHT) */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>{DesktopNav}</Box>
            {/* MOBILE MENU */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: "none" }, color: textColor }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ------------------- DROPDOWN POPOVER ------------------- */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: isMobile ? "left" : "center",
        }}
        transformOrigin={{
          vertical: isMobile ? "top" : "top",
          horizontal: isMobile ? "left" : "center",
        }}
        PaperProps={{
          sx: {
            mt: isMobile ? 0 : 1,
            bgcolor: mode === "dark" ? "#111" : "#fff",
            borderRadius: isMobile ? 0 : 3,
            overflow: "hidden",
            boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
            p: isMobile ? 2 : 3,
            width: isMobile ? "100vw" : "auto",
            maxWidth: isMobile ? "100vw" : 1200,
            height: isMobile ? "auto" : "auto",
            maxHeight: isMobile ? "1000vh" : "none",
            left: isMobile ? "0 !important" : "50% !important",
            transform: isMobile ? "none !important" : "translateX(-50%) !important",
            top: isMobile ? "0 !important" : "auto",
          },
        }}
        disableRestoreFocus
      >
        {isMobile && (
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${borderColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: mode === "dark" ? "#000" : "#f8f9fa",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: textColor }}>
              {dropdownType === "products" ? "Products" : dropdownType === "industries" ? "Industries" : "About Us"}
            </Typography>
            <IconButton onClick={handleClose} sx={{ color: textColor }}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 3,
            alignItems: "center",
            justifyContent: "center",
            py: isMobile ? 2 : 1,
            overflowY: isMobile ? "auto" : "visible",
            "&::-webkit-scrollbar": isMobile ? { display: "none" } : { height: 6 },
            "&::-webkit-scrollbar-thumb": isMobile
              ? {}
              : {
                  bgcolor: mode === "dark" ? "#444" : "#ccc",
                  borderRadius: 3,
                },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {dropdownType === "products"
            ? renderCards(productBoxes)
            : dropdownType === "industries"
            ? renderCards(industryBoxes)
            : renderCards(aboutBoxes)}
        </Box>
      </Popover>

      {/* ------------------- MOBILE DRAWER ------------------- */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{
            width: 300,
            p: 3,
            height: "100%",
            bgcolor: bgColor,
            color: textColor,
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Box component="div" sx={{ width: 32, height: 32 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8L16 16L8 24" stroke="#ff5722" strokeWidth="3" />
                  <path d="M16 8L24 16L16 24" stroke="#ff5722" strokeWidth="3" />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                PayLand
              </Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: textColor }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  href={link.href || "#"}
                  onClick={link.dropdown ? (e) => handleClick(e, link.dropdown) : undefined}
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    fontWeight: 500,
                    color: textColor,
                  }}
                >
                  {link.label}
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <ListItemButton
                href="/contact"
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  fontWeight: 600,
                  bgcolor: contactBg,
                  color: textColor,
                  border: contactBorder,
                  "&:hover": {
                    bgcolor: mode === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
                  },
                }}
              >
                Contact Us
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={toggleMode} sx={{ color: textColor }}>
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography variant="body2">
              {mode === "dark" ? "Light Mode" : "Dark Mode"}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}