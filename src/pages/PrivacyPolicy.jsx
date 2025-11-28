import React from "react";
import { Box, Container,Link, Typography, Grid } from "@mui/material";

export default function PrivacyPolicy({ mode }) {
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
              Privacy Policy
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
            Please read this privacy statement if you would like to know more about the way PayLand Tech collects and further process your personal data.
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
                    General
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   This privacy notice sets out how PayLand Tech Ltd a company incorporated and existing under the laws of the Republic
                    of Cyprus with registration number HE 410576 (“PayLand” or “we” or “us” or “our” or “Company”) processes data, whether 
                    on individuals (including personal data in respect of individuals who are clients, intermediaries or other third parties 
                    that the Company interacts with, or any individual who is connected to those parties) or otherwise. Where the data held 
                    are on individuals, this document also sets out the rights of those individuals in respect of that personal data.<br/><br/>

“You” in this Privacy Policy may refer to a visitor of our website (the “Visitor”), who intends to use or already uses, directly or
 indirectly, our products or services including inter alia any shareholders, beneficial owners, principals, directors, staff members,
  merchants and customers of merchants accessing our website available at {" "}
  <Link
    href="https://www.payland.info/"
    target="_blank"
    rel="noopener noreferrer"
    underline="hover"
    sx={{ color:
              mode === "dark"
                ? "white"
                : "black", fontWeight: 600 }}
  >
    https://www.payland.info/
  </Link>{" "} (the “Website”).<br/><br/>

This privacy notice has been prepared in accordance with the provisions of the EU General Data Protection Regulation (“GDPR”). Any questions
 relating to this Privacy Notice or requests in respect of personal data should be directed to our Data Protection Officer (DPO) at dpo@PayLand.
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
                    Who We Are
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
               The Company offers inter alia a payment orchestration platform, processing management software and other services, gathers
                and processes your personal information in accordance with this privacy notice and in compliance with GDPR and laws. This
                 notice provides you with the necessary information regarding your rights and our obligations, and explains how, why and
                  when we process your personal data.    
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
                    Information That We Collect
                  </Typography>

                     <Grid container spacing={3} justifyContent="left">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
            >
              We collect the following information:- 
            </Typography>


            <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                 Information and documentation that You as a Visitor, provide by filling in the Application form or the Contact Us form
                  available at the Website. Such information may include Your name, surname, e-mail address, telephone number, website and
                   other information which You provide;
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              Information and documentation that You as a client provide to us in order to conclude an agreement. Such information may include,
               but is not limited to, Your name, date of birth, home, work or other physical address, country, telephone number, e-mail address,
                company name, company number, current position, passport or ID data, utility bill and/or proof of address, corporate documents of 
                the company, payment account number, business bank statement, information regarding the beneficial ownership in other companies;
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                A record of correspondence / communication and/or the telephone call in the event You contact us. Such record may include 
                Your name, surname, e-mail address, telephone number, name of Your company and other personal data You may disclose to us 
                during such communication;
                </Typography>
                </Box>
              </Box>
                {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  d.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              Where You as a client have been granted access to the client portal  – details of Your visits, including, but not limited to,
               location data, weblogs, other communication data and the resources that are accessed by You;
                </Typography>
                </Box>
              </Box>
                {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  e.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              Where You as a client use the cashier in order to initiate a transaction and/or the Visitor initiates a transfer of funds to
               You – Your personal data, including, but not limited to, name, surname, e-mail address, telephone number, details of Your payment 
               instrument, including, but not limited to, card number, card expiry date, CVC/CVV code, credit/financial institution and/or issuer 
               details and information relating to the purchased products or services, including the location and time of the transaction;
                </Typography>
                </Box>
              </Box>
                {/* Section 6 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  f.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              Information about You as a client or as a merchant, which we receive from other sources, including, but not limited to, our business
               partners, service providers and subcontractors. Such information may include the data provided by the card organisations, payment
                service providers, credit reference agencies and other third parties, as well as publicly available information.
                </Typography>
                </Box>
              </Box>
              </Box>
              </Grid>
              </Grid>
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
                    Failure to provide personal data.
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Where we need to comply with our legal obligations under laws and regulations or under the terms of a contract and
                     you fail to provide any requested personal data, PayLand may not be able to accept you as a customer or continue our
                      business relationship and will inform you in this regard.
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
                    Other data:
                  </Typography>

                <Grid container spacing={3} justifyContent="left">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
            >
              We may also collect non-personal information about You, which does not identify You as a specific individual.
               Such non-personal information that we may collect includes:
            </Typography>


            <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                 Browser and device data, for instance, IP address, operating system and browser type. This is statistical data about
                  the Website users’ browsing actions and patterns and does not identify any individual;
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
             Cookie data, such as time spent on the Website, pages visited, language preferences, and other anonymous traffic data;
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                Company data, such as a company’s name, product and service offerings, jurisdiction.
                </Typography>
                </Box>
              </Box>
              </Box>
              </Grid>
              </Grid>

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
                    How long we keep your information for
                  </Typography>

                  <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                 How long we keep your information will depend on the purpose for which we use it and so may vary. We will only retain your
                  information for as long as is necessary for the purposes set out in this Privacy Policy and as is necessary to comply with 
                  our legal obligations. We do not keep more information than we need for the particular purpose.
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
             Where we have provided you with a product or service, we will keep an archived record of your personal data for a period of up to 6 years after 
             termination (unless a longer period is prescribed by law) for the purposes of responding to legal disputes and legal or regulatory enquiries or 
             investigations only, but will not use this data for any other purpose.
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                If you ask us to stop sending direct marketing communications to you (see section 8, below), we will keep the minimum amount of information
                 necessary (such as your name and email address) to ensure that we are able to adhere to your request. We also routinely seek to minimise the
                  amount of personal data we hold where any marketing contact is deemed inactive. We deem a contact to be inactive if we have not been able to
                   identify any engagement (e.g. through opening an email or visiting our website) for a period of 12 months or if an email is not delivered due 
                   to a hard bounce. In such circumstances we will anonymise all relevant data for aggregation purposes, with the exception of an email address.
                </Typography>
                </Box>
              </Box>
              </Box>
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
                    How We Use Personal Data
                  </Typography>

                  <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                We use Your personal data in order to provide our services/products to You, in the capacity of a Merchant, and to respectively 
                conclude contracts and carry out our contractual obligations. In this regard, we rely on a contract entered into by You and PayLand
                 as the valid ground for the processing of Your personal data.
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
             We use Your personal data to enable You, in the capacity of a Customer, to make use of our services/products which we provide to 
             the Merchant. In this regard, we rely on the legitimate interests pursued by us.
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
               We are also required by law to constantly carry out various activities for the prevention of fraud, money laundering and terrorism 
               financing, as well as for compliance with other legal obligations. In this regard, we rely on the necessity to comply with legal 
               obligations as the valid ground for the processing of Your personal data.
                </Typography>
                </Box>
              </Box>
               {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  d.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              In addition, we process personal data in order to carry out various marketing activities and in this regard, we rely on Your consent 
              as the valid ground for the processing of Your personal data.
                </Typography>
                </Box>
              </Box>
               {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  e.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
          Examples of how we may use Your personal data include:
                </Typography>
                 <Box>

                  <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  1.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                to verify Your identity for legal and/or compliance purposes;
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  2.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
             in order to start the onboarding process, including the review and approval of the Compliance team based on the internal policies of Praxis;
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  3.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
               to provide You with information, products or services requested from us;
                </Typography>
                </Box>
              </Box>
               {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  4.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
              to provide You with information, which we feel may interest You, provided that You have consented to be contacted for such purposes;
                </Typography>
                </Box>
              </Box>
               {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  5.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
         to notify You about changes to our products or services;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 6 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  6.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
         to process transactions/payments;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 7 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  7.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
         to ensure that content from the Website is presented in the most effective manner and to keep our Website safe and secure;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 8 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  8.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
       to allow You to use interactive features of our Website;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 9 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  9.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
       to administer our Website;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 10 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  10.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
       to conduct monitoring against any possible fraud, money laundering, terrorism financing or crime risks;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 11 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  11.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
      to respond to Your inquiries and provide customer support;
                </Typography>
                
                </Box>
              </Box>
               {/* Section 12 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  12.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
  to conduct market research and carry out marketing activities.
                </Typography>
                
                </Box>
              </Box>
              </Box>
                </Box>
                </Box>
                
              </Box>
              </Box>
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
                    Your Rights when we process your personal data for marketing purposes
                  </Typography>

                    <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                You have the right to decide whether we can process your personal data for general marketing purposes. We will ask for 
                your consent in advance if we intend to use your personal data for marketing purposes or if we intend to disclose your 
                personal data to any third party for such purposes. You can withdraw a consent given for the use of your personal data 
                for marketing purposes at any time.
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
            Besides, we may use your personal data for direct marketing purposes (e.g. to inform you about our products or services similar to 
            those you have purchased from us) based on our legitimate interests. You can ask us to stop using your personal data for direct marketing 
            purposes at any time.
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                You are also able at any time to withdraw any consent to receive marketing communications that you have given to us. You can do 
                this by contacting us at hello@PayLand or by writing to us at:
                </Typography>
                 <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                39 Kolonakiou Avenue, Frema Plaza, 2nd Floor, Office 201 Ayios Athanasios, 4103 Limassol, Cyprus.
                </Typography>
                </Box>
              </Box>
              </Box>
               <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
            >
              Please provide us with your full name, address and other contact details to enable us to find your records. Sometimes 
              we may also need to contact you further to ask you for additional information so that we can comply with your request.
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
                    Your other rights
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    When we process your personal data under this Privacy Notice, you have the right to require us to:
                  </Typography>
                    <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                 provide you with further details on the use we make of your information;
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
             provide you with a copy of your personal data that we hold;
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                update any inaccuracies in the personal data we hold;
                </Typography>
                </Box>
              </Box>
               {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  d.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                delete any personal data that we no longer have a lawful ground to use;
                </Typography>
                </Box>
              </Box>
               {/* Section 5 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  e.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                where processing is based on consent, withdraw your consent so that we stop that particular processing;
                </Typography>
                </Box>
              </Box>
               {/* Section 6 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  f.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                object to any processing based on the legitimate interests ground unless our reasons for undertaking that processing 
                outweigh any prejudice to your data protection rights;
                </Typography>
                </Box>
              </Box>
               {/* Section 7 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  g.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                restrict how we use your information whilst a complaint is being investigated;.
                </Typography>
                </Box>
              </Box>
               {/* Section 8 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  h.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                not be subject to profiling or decisions based on automated decisions that could result in adverse effects; and
                </Typography>
                </Box>
              </Box>
               {/* Section 9 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  i.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                transfer your personal data to a legitimate party of your choice, if possible, in a readily usable format.
                </Typography>
                </Box>
              </Box>
                 <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                If you believe that we hold any incomplete or inaccurate data about you, you have the right to ask us to correct and/or complete
                 the information and we will strive to do so as quickly as possible; unless there is a valid reason for not doing so, at which point
                  you will be notified.<br/><br/>


You also have the right to request erasure of your personal data or to restrict processing (where applicable) in accordance with the data 
protection laws; as well as to object to any direct marketing from us. Where applicable, you have the right to data portability of your information
 and the right to be informed about any automated decision-making we may use. If we receive a request from you to exercise any of the above rights, 
 we may ask you to verify your identity before acting on the request; this is to ensure that your data is protected and kept secure.
                  </Typography>
              </Box>
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
                    How do We exchange Your data
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
             To effectively run Our Service, We must partner with third parties and, therefore, We may exchange Your data with:
                  </Typography>
                   <Box sx={{ maxWidth: "100%", mx: "auto", py: 4 }}>

              {/* Section 1 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  a.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
               Payment account providers ("Partners");
                </Typography>
                </Box>
              </Box>
  {/* Section 2 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  b.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                Third parties and service You choose to Use in connection with the services;
                </Typography>
                </Box>
              </Box>
  {/* Section 3 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  c.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
               Our trusted data aggregation Partners;
                </Typography>
                </Box>
              </Box>
                {/* Section 4 */}
              <Box sx={{ display: "flex", gap: 2 , mb: 2}}>
                <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
                  d.
                </Typography>

                <Box>
               <Typography
                  variant="h4"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "0.6rem", md: "1rem" },
                  }}
                >
         Potentially, other third parties, if we have to do so to fulfil our legal obligations.
                </Typography>
                </Box>
              </Box>
             
              </Box>
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
                    Security: How We Protect & Store Personal Information
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                  The security of your personal information is important to Us. We take legal, technical and organizational measures that it 
                  considers necessary in order to maintain the confidentiality and security of your personal information, with due regard to 
                  the applicable obligations and exceptions under the legislation in force.<br/><br/>

PayLand regularly reviews its policies regarding the collection, storage and processing of your personal information, 
including physical security measures, to prevent alteration, loss, query, use or fraudulent or unauthorized access of your personal information.<br/><br/>

PayLand has put in place procedures to deal with personal information breach and will notify you and any applicable regulator or 
authority of a breach where we are legally required to do so.
                  </Typography>
                </Box>
              </Box>
                 {/* Section 12 */}
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
                  12.
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
                Cookie policy
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    Please refer to our cookie policy which is available at our Website. We will not share Your cookies with third parties, without Your authorisation.
                  </Typography>
                </Box>
              </Box>
                 {/* Section 13 */}
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
                  13.
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
                    Changes To the Privacy Policy
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    We may change or update this Privacy Policy. Any changes we may make to this Privacy Policy in the future will be 
                    posted on the Website and any such changes will be effective starting from the date when we post the revised Privacy Policy.
                    <br/><br/>
                    We may provide You with notifications regarding the changes in the Privacy Policy by posting them on our Website.
                  </Typography>
                </Box>
              </Box>
                 {/* Section 14 */}
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
                  14.
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
                  Contact
                  </Typography>

                  <Typography
                    sx={{
                      color: textColor,
                      fontSize: { xs: "0.6rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                   Questions, comments and requests regarding this Privacy Policy should be addressed to dpo@PayLand . Alternatively,
                    you can write to us at: PayLand LTD, 39 Kolonakiou Avenue, Frema Plaza, 2nd Floor, Office 201 Ayios Athanasios, 4103 Limassol, Cyprus.
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
