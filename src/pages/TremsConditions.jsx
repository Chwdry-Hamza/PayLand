import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function TermsCnditions({ mode }) {
  const bgColor = mode === "dark" ? "#0d0d0d" : "#f9f9f9";
  const textColor = mode === "dark" ? "#e0e0e0" : "#212121";
  const headingColor = mode === "dark" ? "#ffffff" : "#000000";
  const mutedColor = mode === "dark" ? "#bbbbbb" : "gray";

  return (
    <Box sx={{ py: 6, backgroundColor: bgColor, transition: "0.3s ease" }}>
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
              Terms and Conditions for Website Use
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
              Please read this document to familiarize yourself with how Praxis Tech operates
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
                    General Terms
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    By accessing http://praxis.tech (the “Website”) you confirm that you agree and are bound by the terms and conditions
                    outlined below (the “T&Cs”). The Website is operated by Praxis Tech Ltd., a company incorporated and existing under
                    the laws of the Republic of Cyprus with registration number HE 410576 (“Praxis”). These T&Cs apply to the entire Website
                    and any email and/or other type of communication between you and Praxis. Any person who does not want to accept these T&Cs
                    should not be using the Website.
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
                    Security
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    To ensure that the Website remains available to all users, Praxis may monitor network traffic to identify unauthorized attempts 
                    to upload and/or change information and/or otherwise cause damage to the Website and/or for any other reason as deemed necessary 
                    by Praxis. Anyone using the Website expressly consents to such monitoring.<br/><br/> Unauthorized attempts to modify, alter, deface,
                     destroy, or corrupt any information stored on this Website or its system to defeat and/or circumvent any security features, to probe,
                      scan and/or test vulnerabilities, breach security and/or authentication measures, forge TCP/IP headers, install or attempt to install 
                      unauthorized software, utilize the Website other than its intended purposes are expressly prohibited and may result in criminal conviction.
                      <br/><br/> Any possible unauthorized activity will be reported together with any evidence that may be gathered to the appropriate authorities.
                  </Typography>
                </Box>
              </Box>

              {/* Section 3 */}
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
                    Disclaimer of liability
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
          Every effort is made to provide useful, accurate and complete information to this Website. However, Praxis cannot guarantee that
          there are or there will not be any errors. Praxis makes no claims, promises, guarantees and/or anything of similar nature to the
           aforesaid relating to the accuracy, completeness, usefulness and/or adequacy of the contents of the Website and expressly disclaims 
           liability for any errors and/or omissions in its content.<br/><br/> Neither Praxis nor its employees, contractors, associates make any 
           warranty, expressed, implies or statutory including but not limited to any warranty that third party rights or titles have not been infringed
            or merchantability or fitness for any particular purpose.<br/><br/> No warranty of any sort is made with respect to the content of third party 
            websites that have links for this Website and all liability of every sort is expressly disclaimed.<br/><br/> Praxis is not and cannot be held 
            liable in any circumstance for special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data, revenue
             of profits whether in an action of contract, negligence or otherwise arising in connection with any use of the information and/or services 
             available on the Website.    
                  </Typography>
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
                    Disclaimer of endorsement
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    This Website and documents posted in it, may contain hypertext links or points to information created and maintained
                     by other public and/or private organizations. Praxis does not guarantee the accuracy, relevance, usefulness, timeliness
                      or completeness of any linked information.<br/><br/>

The inclusion of links or pointers to other websites is not intended to (a) assign importance to those websites and the information contained
 in them, (b) endorse, recommend, or favour any views expressed or commercial products or services offered on those links or websites or the
  organizations sponsoring such websites by trade name, trademark, manufacture or anything of similar nature.<br/><br/>

Reference in this Website to any specific commercial products, processes or services or use of any trade, firm or corporation name is for the
 information and convenience of the Website’s visitors and does not constitute endorsement, recommendation or favouring by Praxis, unless expressly
  provided otherwise.
                  </Typography>
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
                    Copyright
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                  All contents of this Website and any documents included in it, provided to visitors or users or clients, constitute a property
                   of Praxis Tech, unless expressly provided otherwise. No user and/or visitor and/or client may copy, modify, publish, transfer,
                    sell, reproduce, create derivative works and/or in any way exploit any of the content, wholly or partially of this Website, unless
                     the express written consent of Praxis is given.
                  </Typography>
                </Box>
              </Box>

               {/* Section 6 */}
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
                  6.
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
                    Free Services
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Praxis may provide from time to time certain free services such as weekly newsletters, white papers and/or anything similar.
                     No user of the Website becomes client of Praxis by receiving any of the aforesaid free services. Praxis is not and cannot be 
                     held liable in any way using such free service from anyone.
                  </Typography>
                </Box>
              </Box>

 {/* Section 7 */}
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
                  7.
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
                    Severability
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Notwithstanding clause 9 of these T&Cs, if any of these T&Cs are at any time held in any jurisdiction to be void,
                     invalid or unenforceable, then they shall be treated as modified only to the minimum extent to align it with the 
                      laws of that jurisdiction and prevent them from being void and they shall be binding in that modified form.
                  </Typography>
                </Box>
              </Box>

               {/* Section 8 */}
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
                  8.
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
                    No waiver
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
               Any delay or non-exercise by Praxis of any right, power and/or provision of these T&Cs shall not operate and/or be interpreted
                as a waiver of any right and/or any other related right.
                  </Typography>
                </Box>
              </Box>

               {/* Section 9 */}
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
                  9.
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
                    Governing law
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    These T&Cs shall be governed and construed in accordance with the laws of the Republic of Cyprus and any user of the 
                    Website explicitly accepts and submits to the exclusive jurisdiction of the Court of the Republic of Cyprus for any 
                    matter arising from, directly and/or indirectly, the use of the Website. Accordingly, each Website user explicitly 
                    waives all and any rights to bring any action relating to the Website itself and/or its use in any court anywhere in 
                    the world.
                  </Typography>
                </Box>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
