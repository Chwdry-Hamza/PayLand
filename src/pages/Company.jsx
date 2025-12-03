import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,

} from "@mui/material";

export default function Company({ mode }) {
  const isDark = mode === "dark";

  const bgColor = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";
  const textColor    = isDark ? "#e0e0e0" : "#212121";
  const secondary    = isDark ? "#bbb" : "#555";
  const borderColor  = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const accent       = "#ff5722";
  const accentHover  = "#e64a19";

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "", phone: "",
    jobTitle: "", website: "", businessType: "", companySize: "",
    countryHQ: "", interestedIn: "", geographiesTargeting: "",
    hearAboutUs: "", consent: false, newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("You must consent to data collection to submit the form.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f0d89692-bb53-4dac-8bf0-068c83c50d73",
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent!");
        setFormData({
          firstName: "", lastName: "", email: "", country: "", phone: "",
          jobTitle: "", website: "", businessType: "", companySize: "",
          countryHQ: "", interestedIn: "", geographiesTargeting: "",
          hearAboutUs: "", consent: false, newsletter: false,
        });
      } else {
        alert("Error. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    }
  };

  // ---------- Helper for radio background ----------
  const radioBg = (val) => (formData.companySize === val ? accent : "transparent");
  const radioColor = (val) => (formData.companySize === val ? "#fff" : textColor);

  return (
    <Box
      component="main"
      sx={{
        py: { xs: 6, md: 12 },
        background: bgColor,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: textColor, mb: 1 }}>
            Contact Us
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            sx={{ mb: 3, fontWeight: 800, color: accent }}
          >
            Want to learn more about our payment solutions?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: secondary }}>
            Fill out the form and our team will get back to you as soon as possible!
          </Typography>

       
        </Box>
      </Container>
    </Box>
  );
}