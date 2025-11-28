import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function InformationSecurityPolicy({ mode }) {
const bgColor = mode === "dark" ? "#000" : "linear-gradient(90deg, #f0c392ff, #ffecd7ff, #f0c392ff)";
  const textColor = mode === "dark" ? "#e0e0e0" : "#212121";
  const headingColor = mode === "dark" ? "#ffffff" : "#000000";
  const mutedColor = mode === "dark" ? "#bbbbbb" : "gray";

  return (
    <Box sx={{ py: 6, background: bgColor, transition: "0.3s ease" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="left">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "3.5rem" },
                textAlign: "left",
                color: headingColor,
              }}
            >
              Information Security Policy
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: mutedColor,
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", md: "1rem" },
                mt: 1,
              }}
            >
              Please review this document to understand how PayLand  operates and its commitment to information security.
            </Typography>

            <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: headingColor,
                    minWidth: "40px",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  1.
                </Typography>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: headingColor,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                    }}
                  >
                    Our Commitment
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   PayLand is dedicated to safeguarding the confidentiality, integrity, and availability of information. 
                   We achieve this by implementing and continuously enhancing a robust Information Security Management System (ISMS) 
                   in alignment with the ISO 27001 standard and our strategic business goals.
                  </Typography>
                </Box>
              </Box>

              {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: headingColor,
                    minWidth: "40px",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  2.
                </Typography>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: headingColor,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                    }}
                  >
                    Scope
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                      mb: 2
                    }}
                  >
              Our ISMS encompasses the following key areas:

                    </Typography>
                     {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Providing a secure technological platform for online payments for merchants.
                  </Typography>
              </Box>
                     {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Enabling seamless integration with Payment Service Providers for merchants.
                  </Typography>
              </Box>

              
                </Box>
              </Box>

              {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: headingColor,
                    minWidth: "40px",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  3.
                </Typography>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: headingColor,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                    }}
                  >
                    Our Objectives
                  </Typography>

                 <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                      mb: 2
                    }}
                  >
              We strive to:

                    </Typography>
                     {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Inspire confidence in all stakeholders, including clients, partners, and employees.
                  </Typography>
              </Box>
                     {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Minimize the risk of data breaches, protecting sensitive information from unauthorized access and disclosure.
                  </Typography>
              </Box>
                {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Ensure the confidentiality, integrity, and availability of information, maintaining its accu- racy, completeness, and accessibility.
                  </Typography>
              </Box>
                {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  d.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Continuously improve the effectiveness of our ISMS, adapting to evolving threats and best practices.
                  </Typography>
              </Box>
                {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  e.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Comply with all applicable legal, regulatory, and contractual security obligations.
                  </Typography>
              </Box>

                </Box>
              </Box>

 {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: headingColor,
                    minWidth: "40px",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  4.
                </Typography>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: headingColor,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                    }}
                  >
                    Our Approach
                  </Typography>
  {/* Section 1 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    a.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Resources:</strong> We allocate the necessary financial, technical, and human resources to support and enhance our information security efforts.
  </Typography>
</Box>
  {/* Section 2 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    b.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong> Risk Management:</strong> We employ a comprehensive risk management methodology to identify, assess, and mitigate potential threats to information security. This includes regular risk assessments and reviews.
  </Typography>
</Box>
  {/* Section 3 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    c.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Clear Roles and Responsibilities:</strong> We define and assign clear roles and responsibilities for the operation, maintenance, control, and improvement of our ISMS.
  </Typography>
</Box>
  {/* Section 4 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    d.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Policies and Procedures:</strong> We develop and implement comprehensive security policies and procedures that are readily accessible to all employees.
  </Typography>
</Box>
  {/* Section 5 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    e.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Monitoring and Measurement:</strong> We continuously monitor, measure, and evaluate the effectiveness of our ISMS against predefined goals and metrics.
  </Typography>
</Box>
  {/* Section 6 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    f.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Internal Audits and Corrective Actions:</strong> We conduct regular internal audits to identify and address any security gaps or deviations.
  </Typography>
</Box>
  {/* Section 7 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    g.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Incident Management:</strong> We have established procedures for managing security incidents effectively.
  </Typography>
</Box>
  {/* Section 8 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    h.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Business Continuity and Disaster Recovery:</strong> We maintain and regularly test business continuity and disaster recovery plans to ensure business resilience.
  </Typography>
</Box>
  {/* Section 9 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    i.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Supplier Evaluation:</strong> We evaluate our suppliers' adherence to information security principles.
  </Typography>
</Box>
  {/* Section 10 */}
<Box sx={{ display: "flex", gap: 2, mb: 2 }}>
  <Typography
    variant="h4"
    sx={{
      color: headingColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
    }}
  >
    j.
  </Typography>
  <Typography
    sx={{
      color: textColor,
      fontSize: { xs: "0.6rem", md: "1rem" },
      lineHeight: 1.7,
    }}
  >
    <strong>Training and Awareness:</strong> We provide regular training and awareness programs to all personnel on information security best practices.
  </Typography>
</Box>
 


                </Box>
              </Box>

               {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: headingColor,
                    minWidth: "40px",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  5.
                </Typography>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: headingColor,
                      fontSize: { xs: "1.5rem", md: "2.5rem" },
                      mb: 2,
                    }}
                  >
                    Policy Adherence
                  </Typography>
        {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   All employees, clients, suppliers, and other interested parties of PayLand. are required to adhere to this policy 
                   which is communicated to them by posting it to our website. It is reviewed annually by the Information Security Committee 
                   & Management Board to ensure its continued applicability and suitability.
                  </Typography>
              </Box>
                     {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: headingColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Questions, comments and requests regarding this Information Security Policy should be addressed to support@PayLand.info. Alternatively, 
                   you can write to us at: PayLand TECH LTD, 39 Kolonakiou Avenue, Frema Plaza, 2nd Floor, Office 201 Ayios Athanasios, 4103 Limassol, Cyprus.
                  </Typography>
              </Box>
                </Box>
              </Box>


            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
