import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function Cookies({ mode }) {
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
              Cookies Policy
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
              Please read this document to familiarize yourself with how PayLand Tech uses cookies
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
                    Introduction
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Our website uses cookies for its proper operation as well as the best experience of its visitors. Your Choice. 
                   When you accessed this website, our cookies were sent to your web browser and stored on your computer or device. 
                   By using our website, you agree to the use of cookies and similar technologies.
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
                    What are Cookies?
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                It is a common practice for almost all professional websites to use cookies, similar to what our company uses. 
                Cookies are small text files that are downloaded to your computer or device, by uniquely identifying your browser 
                and / or device to improve your experience. The information used by browsers can help improve the functioning of the 
                website enabling it to recognize the user's preferences each time the user returns to the website. Other technologies, 
                including the data we store on your browser or device, the information associated with your device, and other software,
                 are used for similar purposes.<br/><br/>

                Our website does not request personal information from its visitors while navigating its content, but rathe collects personal 
                information of its visitors and users only when they voluntarily provide it. Personal information is the data that can be used 
                to identify or communicate with an individual, as well as other information relating to that person. Therefore, the information 
                we collect from you or about you differs depending on the service you choose to use through our website.<br/><br/>

                We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of 
                the sites functionality.

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
                    How we Use Cookies
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                  We use cookies for a variety of reasons, including the following: store information about your preferences and tailor our 
                  website for you; help us run ads of interest to you; help us analyze the use and performance of our website and services; 
                  we use the information available to us to verify accounts and activities and to promote security, whether within or outside 
                  the services, by investigating, for example, suspicious activity or violations of our terms or policies; and store your preferences 
                  in relation to the use of cookies in general. 
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
                    Types of cookies we use
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Strictly necessary cookies: these are essential in order to enable you to use certain features of the website, 
                   such as submitting forms on the website. Third-party cookies: these are cookies used by third parties, such as social 
                   networks to track your visits to the various sites they advertise. The site administrator has no control over these 
                   third-party cookies. Specifically, we use the following third party cookies:
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
                    Google analytics
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                  Google Analytics is Google’s analytics tool that helps our website to understand how visitors engage with their properties. 
                  It may use a set of cookies to collect information and report website usage statistics without personally identifying individual 
                  visitors to Google. The main cookie used by Google Analytics is the ‘__ga’ cookie.<br/><br/>

                  In addition to reporting website usage statistics, Google Analytics can also be used, together with some of the advertising cookies, 
                  to help show more relevant ads on Google properties (like Google Search) and across the web and to measure interactions with the ads 
                  Google shows.
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
                    HubSpot cookies
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    We utilize HubSpot, an integrated marketing and customer relationship management (CRM) platform, to enhance your experience on our 
                    website. HubSpot may use cookies and similar tracking technologies to collect and analyze information about your interactions with 
                    our site, such as pages visited and actions taken. The data gathered through HubSpot helps us improve our marketing efforts, personalize 
                    content, and streamline communication.
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
                    How long will the cookies stay on my device?
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    For how long a cookie will remain on your computer or on a mobile device depends on whether it is a persistent cookie or a 
                    session cookie. Session cookies will remain on your device only until you stop browsing. Permanent cookies remain on your computer 
                    or mobile device until they expire or are deleted.
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
                    How do I manage or delete information about me?
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
               The data is stored for as long as necessary to provide services to you and other users, including those described above. The information 
               related to you will remain stored until you request for deletion.
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
                    Disabling cookies
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                  The installation of "cookies" is only allowed with the consent of the visitor / user and after appropriate updating.  
                  The user can modify the browser settings to block some or all the cookies.<br/><br/>

                  Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling 
                  the functionality and features they add to the website. It is recommended that you leave on all cookies if you are not 
                  sure whether you need them or not, in case they are used to provide a service that you use. You can prevent the setting 
                  of cookies by adjusting the settings on your browser (see your browser’s “Help” option on how to do this).<br/><br/>

                  Be aware that disabling cookies may affect the functionality of this and many other websites that you visit. Therefore, 
                  it is recommended that you do not disable cookies.
                  </Typography>
                </Box>
              </Box>

{/* Section 10 */}
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
                  10.
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
                    Use of IP Addresses
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
              An IP address is a numeric code that identifies your computer on the Internet. We might use your IP address and browser type to help 
              analyze usage patterns and diagnose problems on this website and to improve the service we offer to you. But without additional information 
              your IP address does not identify you as an individual.
                  </Typography>
                </Box>
              </Box>

              {/* Section 11 */}
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
                  11.
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
                    General Information
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
               Hopefully the above information has clarified things for you. As it was previously mentioned, if you are not sure whether you want 
               to allow the cookies or not, it is usually safer to leave cookies enabled in case it interacts with one of the features you use on 
               our site. However, if you are still looking for more information, then feel free to contact us via email at support@PayLand.info.
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
