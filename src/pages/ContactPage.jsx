// src/pages/ContactPage.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  useTheme,
} from "@mui/material";

export default function ContactPage({ mode }) {
  const theme = useTheme();                 // <-- get MUI theme (light/dark)
  const isDark = mode === "dark";

  // ---------- Colours ----------
  const bgColor      = isDark ? "#111" : "#fff";
  const textColor    = isDark ? "#e0e0e0" : "#212121";
  const secondary    = isDark ? "#bbb" : "#555";
  const borderColor  = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const accent       = "#ff5722";
  const accentHover  = "#e64a19";

  // ---------- Form state ----------
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
        bgcolor: isDark ? "#000" : "#f8f9fa",
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

          {/* ---- Form ---- */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 900,
              mx: "auto",
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              bgcolor: bgColor,
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 10px 30px rgba(0,0,0,0.1)",
              border: `1px solid ${borderColor}`,
            }}
          >
            <Stack spacing={4}>
              {/* ==== General Information ==== */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: textColor }}>
                  General Information
                </Typography>

                <Stack spacing={3}>
                  {/* First & Last Name */}
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 2 }}>
                    <TextField
                      fullWidth
                      label="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: secondary } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          bgcolor: isDark ? "#222" : "#fafafa",
                          "& fieldset": { borderColor: borderColor },
                          "&:hover fieldset": { borderColor: accent },
                        },
                        "& .MuiInputBase-input": { color: textColor },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: secondary } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          bgcolor: isDark ? "#222" : "#fafafa",
                          "& fieldset": { borderColor: borderColor },
                          "&:hover fieldset": { borderColor: accent },
                        },
                        "& .MuiInputBase-input": { color: textColor },
                      }}
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    InputLabelProps={{ style: { color: secondary } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& fieldset": { borderColor: borderColor },
                        "&:hover fieldset": { borderColor: accent },
                      },
                      "& .MuiInputBase-input": { color: textColor },
                    }}
                  />

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <FormControl fullWidth>
                      <InputLabel id="country-label" sx={{ color: secondary }}>
                        Country *
                      </InputLabel>
                      <Select
                        labelId="country-label"
                        name="country"
                        value={formData.country}
                        label="Country *"
                        onChange={handleChange}
                        required
                        sx={{
                          borderRadius: 2,
                          bgcolor: isDark ? "#222" : "#fafafa",
                          "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                          "& .MuiSelect-select": { color: textColor },
                        }}
                      >
                        <MenuItem value="US">United States</MenuItem>
                        <MenuItem value="CA">Canada</MenuItem>
                        <MenuItem value="GB">United Kingdom</MenuItem>
                        <MenuItem value="DE">Germany</MenuItem>
                        <MenuItem value="FR">France</MenuItem>
                        <MenuItem value="AE">United Arab Emirates</MenuItem>
                        <MenuItem value="IN">India</MenuItem>
                        <MenuItem value="AU">Australia</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: secondary } }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          bgcolor: isDark ? "#222" : "#fafafa",
                          "& fieldset": { borderColor: borderColor },
                          "&:hover fieldset": { borderColor: accent },
                        },
                        "& .MuiInputBase-input": { color: textColor },
                      }}
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    label="Job title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{ style: { color: secondary } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& fieldset": { borderColor: borderColor },
                        "&:hover fieldset": { borderColor: accent },
                      },
                      "& .MuiInputBase-input": { color: textColor },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Website URL"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    InputLabelProps={{ style: { color: secondary } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& fieldset": { borderColor: borderColor },
                        "&:hover fieldset": { borderColor: accent },
                      },
                      "& .MuiInputBase-input": { color: textColor },
                    }}
                  />
                </Stack>
              </Box>

              {/* ==== Business Information ==== */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: textColor }}>
                  Business Information
                </Typography>

                <Stack spacing={3}>
                  {/* Business Type */}
                  <FormControl fullWidth>
                    <InputLabel id="business-type-label" sx={{ color: secondary }}>
                      Business type *
                    </InputLabel>
                    <Select
                      labelId="business-type-label"
                      name="businessType"
                      value={formData.businessType}
                      label="Business type *"
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                        "& .MuiSelect-select": { color: textColor },
                      }}
                    >
                      <MenuItem value="ecommerce">E-commerce</MenuItem>
                      <MenuItem value="saas">SaaS</MenuItem>
                      <MenuItem value="marketplace">Marketplace</MenuItem>
                      <MenuItem value="services">Professional Services</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Company Size */}
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1, color: secondary }}>
                      Company size *
                    </Typography>
                    <RadioGroup row name="companySize" value={formData.companySize} onChange={handleChange}>
                      {["less25", "25-149", "150+"].map((val) => {
                        const label = val === "less25" ? "Less than 25" : val === "25-149" ? "25 - 149" : "150+";
                        return (
                          <FormControlLabel
                            key={val}
                            value={val}
                            control={<Radio />}
                            label={label}
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: radioColor(val),
                              },
                              background: radioBg(val),
                              borderRadius: 50,
                              px: 2,
                              py: 0.5,
                              mx: 0.5,
                              transition: "all 0.2s",
                            }}
                          />
                        );
                      })}
                    </RadioGroup>
                  </Box>

                  {/* Country of HQ */}
                  <FormControl fullWidth>
                    <InputLabel id="country-hq-label" sx={{ color: secondary }}>
                      Country of HQ *
                    </InputLabel>
                    <Select
                      labelId="country-hq-label"
                      name="countryHQ"
                      value={formData.countryHQ}
                      label="Country of HQ *"
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                        "& .MuiSelect-select": { color: textColor },
                      }}
                    >
                      <MenuItem value="US">United States</MenuItem>
                      <MenuItem value="CA">Canada</MenuItem>
                      <MenuItem value="GB">United Kingdom</MenuItem>
                      <MenuItem value="DE">Germany</MenuItem>
                      <MenuItem value="FR">France</MenuItem>
                      <MenuItem value="AE">United Arab Emirates</MenuItem>
                      <MenuItem value="IN">India</MenuItem>
                      <MenuItem value="AU">Australia</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Interested In */}
                  <FormControl fullWidth>
                    <InputLabel id="interested-in-label" sx={{ color: secondary }}>
                      I am interested in *
                    </InputLabel>
                    <Select
                      labelId="interested-in-label"
                      name="interestedIn"
                      value={formData.interestedIn}
                      label="I am interested in *"
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                        "& .MuiSelect-select": { color: textColor },
                      }}
                    >
                      <MenuItem value="payments">Payment Processing</MenuItem>
                      <MenuItem value="fraud">Fraud Prevention</MenuItem>
                      <MenuItem value="payouts">Payout Solutions</MenuItem>
                      <MenuItem value="integration">API Integration</MenuItem>
                      <MenuItem value="pricing">Pricing Inquiry</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Geographies */}
                  <FormControl fullWidth>
                    <InputLabel id="geographies-label" sx={{ color: secondary }}>
                      Geographies targeting *
                    </InputLabel>
                    <Select
                      labelId="geographies-label"
                      name="geographiesTargeting"
                      value={formData.geographiesTargeting}
                      label="Geographies targeting *"
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                        "& .MuiSelect-select": { color: textColor },
                      }}
                    >
                      <MenuItem value="na">North America</MenuItem>
                      <MenuItem value="eu">Europe</MenuItem>
                      <MenuItem value="ap">Asia Pacific</MenuItem>
                      <MenuItem value="me">Middle East</MenuItem>
                      <MenuItem value="la">Latin America</MenuItem>
                      <MenuItem value="global">Global</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Hear About Us */}
                  <FormControl fullWidth>
                    <InputLabel id="hear-about-us-label" sx={{ color: secondary }}>
                      How did you hear about us? *
                    </InputLabel>
                    <Select
                      labelId="hear-about-us-label"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      label="How did you hear about us? *"
                      onChange={handleChange}
                      required
                      sx={{
                        borderRadius: 2,
                        bgcolor: isDark ? "#222" : "#fafafa",
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: borderColor },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: accent },
                        "& .MuiSelect-select": { color: textColor },
                      }}
                    >
                      <MenuItem value="search">Search Engine</MenuItem>
                      <MenuItem value="social">Social Media</MenuItem>
                      <MenuItem value="referral">Referral</MenuItem>
                      <MenuItem value="event">Event / Conference</MenuItem>
                      <MenuItem value="partner">Partner</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>

              {/* ==== Consent & Newsletter ==== */}
              <FormGroup>
                <FormControlLabel
                  required
                  control={
                    <Checkbox
                      checked={formData.consent}
                      onChange={handleChange}
                      name="consent"
                      sx={{
                        color: isDark ? "#777" : "#555",
                        "&.Mui-checked": { color: accent },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ fontSize: "0.85rem", color: secondary }}>
                      By clicking "Submit", you consent to the collection and use of your information for purposes related to your request, in particular, you authorize us to contact you at the email address and/or phone number provided to follow up on this request. For more information on how we manage personal information, please see our{" "}
                      <a href="#" style={{ color: accent, textDecoration: "underline" }}>
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" style={{ color: accent, textDecoration: "underline" }}>
                        Privacy Policy
                      </a>
                      .
                    </Typography>
                  }
                />
              </FormGroup>

              {/* ==== Submit Button ==== */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!formData.consent}
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1.2,
                    background: accent,
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    "&:hover": { background: accentHover },
                    "&:disabled": { background: "#ccc", color: "#666" },
                  }}
                >
                  Submit      
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}