import { Container } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import About from "./About";
import Nav from "./Nav";
import Image from "next/image";
import { useState } from 'react'
const Home: NextPage = () => {

  const [hover, setHover] = useState<boolean>(false);
  const [hover2, setHover2] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Andrés Beltrán</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />x{" "}
      </Head>
      <Container sx={{ my: "3rem" }}>
        <Nav>
          <About />

          <Typography variant="h5">Projects:</Typography>

          <Grid container>
            <Link href="/projects/trash_panda">
              <Grid item md={6} sx={{ minHeight: "20%" }}>
                <Card
                  sx={{ m: 2, minHeight: "43rem", p: 2 }}
                  raised={hover}
                  onMouseOver={()=> setHover(true)}
                  onMouseOut={() => setHover(false)}
                >
                  <Image
                    src="/images/welcome.png" // Route of the image file
                    height={500} // Desired size with correct aspect ratio
                    width={544} // Desired size with correct aspect ratio
                    alt="choosing an item"
                  />
                  <CardContent>
                    <Typography variant="h6">Trash Panda</Typography>
                    <Typography paragraph>
                      An application to help people notify other users on a map
                      about their discarded but still useful furniture, in an
                      effort to reduce the amount of garbage in the city of
                      Montreal.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
            <Link href="/projects/pos">
              <Grid item md={6}>
                <Card sx={{ m: 2, minHeight: "43rem", p: 2 }}
                 raised={hover2}
                 onMouseOver={()=> setHover2(true)}
                 onMouseOut={() => setHover2(false)}
                >
                  <Image
                    src="/images/Login.png" // Route of the image file
                    height={500} // Desired size with correct aspect ratio
                    width={544} // Desired size with correct aspect ratio
                    alt="choosing an item"
                  />
                  <CardContent>
                    <Typography variant="h6">Point Of Sale</Typography>
                    <Typography paragraph>
                      A point of sale application for a pharmacy in Panama,
                      built with React, Bootstrap and Bulma.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Link>
          </Grid>
        </Nav>
      </Container>
    </div>
  );
};

export default Home;
