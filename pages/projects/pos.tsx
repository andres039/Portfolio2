import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import Nav from "../Nav";

const pos = () => {
  return (
    <Container sx={{ my: "3rem" }}>
      <Nav>
        <Typography variant="h6">Sigmacare POS application</Typography>
        <Typography variant="subtitle1">
          Stack: React, Bootstrap and Bulma.
        </Typography>
        <Container sx={{ my: "1rem", p: 2 }}>
          <Typography paragraph>
            This application is my first ‘live’ creation, and it will be used by
            the cashiers and administrators at a pharmacy. Currently, the
            pharmacy is using an outdated application and our job was to make a
            more modern and practical version. I was presented with the chance
            to build the whole front end and I chose to use and test my React
            skills. We are a team composed of four people, a designer, two Java
            engineers and myself. Thanks to Github and Jira we have been able to
            maintain a standard work flow through open communication. We work
            from a private Github repo, so if you are interested in looking at
            the source code or seeing the product in action please message me, I
            will be very happy to give you a tour.
          </Typography>

          <Typography paragraph>
            The back end is being built with Java, and the back end engineers
            communicate logistics to the team with the help of Swagger. Our
            application calls the API to display different kinds of data: the
            users name, the users role, the history of receipts, bills and past
            transactions. It is also possible to include new users or to remove
            existing ones.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Image
              src="/images/usuarios.png"
              height={500}
              width={964}
              alt="cashiers list with the option to add or delete an email"
            />
          </Card>
          <Typography paragraph>
            For the first time I have implemented a ‘forgot my password’
            section, which allows the user to reset their password. This has
            been one of the biggest challenges for the whole application.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Image
              src="/images/forgot.png" // Route of the image file
              height={500} // Desired size with correct aspect ratio
              width={964} // Desired size with correct aspect ratio
              alt="forgot your password input form"
            />
          </Card>
          <Typography paragraph>
            Using modals through the application in order to display detailed
            tables of information and search utilities were challenging, but it
            was ultimately satisfying to clearly organize the information and
            create a minimal, user friendly interface. The implementation of
            search bars which made requests to the endpoint was another
            achievement I’m quite proud of.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Image
              src="/images/modal.png" // Route of the image file
              height={500} // Desired size with correct aspect ratio
              width={964} // Desired size with correct aspect ratio
              alt="Modal displaying a list of customers and search options at the top"
            />
          </Card>
          <Typography paragraph>
          One of the requirements from the client was to avoid using the standard scroll bars when running up and down through the product table. To comply with this request, I built a button with a custom hook and using the powers of Bulma, I made the button visible only when the user reached either end of the table. (These scroll buttons are at the bottom right)            
          </Typography>
          <Card sx={{ my: 4 }}>
            <Image
              src="/images/button.png" // Route of the image file
              height={500} // Desired size with correct aspect ratio
              width={964} // Desired size with correct aspect ratio
              alt="General view of the application and the custom scroll buttons "
            />
          </Card>
          <Typography paragraph>
            We are still finishing a few details before deployment, but we hope
            to have it soon working and available for users.
          </Typography>
        </Container>{" "}
      </Nav>
    </Container>
  );
};

export default pos;
