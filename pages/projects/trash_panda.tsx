import { Card, Container, Typography } from "@mui/material";
import React, { Suspense } from "react";
import Nav from "../Nav";
import Image from "next/image";
const trash_panda = () => {
  return (
    <Container sx={{ my: "3rem" }}>
      <Nav>
        <Typography variant="h6">Trash panda</Typography>
        <Typography variant="subtitle1">
          Stack: React.js, Sass, Express, PostgreSQL
        </Typography>
        <a href={"https://github.com/andres039/Upcycle-Cradle-Montreal"}>
          Source Code
        </a>
        <Container sx={{ my: "1rem", p: 2 }}>
          <Typography paragraph>
            {" "}
            An application created with the intention to reduce the amount of
            furniture headed to the landfill in the city of Montreal. As a
            student hub, Montreal has a large amount of useful furniture sitting
            curbside. Trash Panda is a map based application that allows users
            to notify others about available furniture, their details and
            location.
          </Typography>{" "}
          <Typography paragraph>
            As a final project for Lighthouse Labs, Trash Panda was created in a
            team of three developers. We were able to go through many aspects of
            the developments of the application together, however we had to
            somewhat specialize to speed up the process. My main contribution to
            the project was on the backend, connecting to the database and
            creating the endpoints that allow for the rest of the application to
            create, update and delete records. Initially I tried to set up
            Prisma to handle the database, but since we had a limited amount of
            time I had to keep the system that we learned at Lighthouse Labs,
            which was straight up PostgreSQL connected to Express with the help
            of the PG library.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Image
                src="/images/demo.gif" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={964} // Desired size with correct aspect ratio
                alt="Overview of Trash Panda"
              />
            </Suspense>
          </Card>
          <Typography paragraph>
            {" "}
            My main contribution to the project was on the backend, connecting
            to the database and creating the endpoints that allow for the rest
            of the application to create, update and delete records. Initially I
            tried to set up Prisma to handle the database, but since we had a
            limited amount of time I had to keep the system that we learned at
            Lighthouse Labs, which was straight up PostgreSQL connected to
            Express with the help of the PG library.{" "}
          </Typography>{" "}
          <Typography paragraph>
            {" "}
            We have a simple Registration and Login system, using the users
            email and a password that we hashed into the database.
          </Typography>{" "}
          <Typography paragraph>
            {" "}
            The application is built with React and the CSS is completely
            custom, using Sass to make our lives easier. The main challenge with
            React was the use of the Context API.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Image
                src="/images/available_item.png" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={964} // Desired size with correct aspect ratio
                alt="Select an item"
              />
            </Suspense>
          </Card>
          <Typography paragraph>
            {" "}
            We really enjoy adding the map and its functionality, connecting to
            an API was very exiting, and being able to see the furniture with a
            picture, location and description in the map, along with the
            functionalities of creating, updating and deleting a pin was
            delightful.{" "}
          </Typography>{" "}
          <Typography paragraph>
            There were many challenges and leaning opportunities during the
            process, but I must say that working as a team was both the biggest
            challenge and greatest gain during the process. I couldn’t believe
            how much I learned by working as a team, keeping track of our
            activities in Trello, connecting through Slack, an updating our repo
            with different branches on Github, as well as supporting each other.
          </Typography>
          <Card sx={{ my: 4 }}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Image
                src="/images/create_new_item.png" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={764} // Desired size with correct aspect ratio
                alt="Create new item"
              />
            </Suspense>
          </Card>
        </Container>
      </Nav>
    </Container>
  );
};

export default trash_panda;
