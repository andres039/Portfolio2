import React from "react";
import { Container, Divider, Fab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  typography: {
    fontFamily: "fangsong",
    fontSize: 18,
  },
});

const Nav = ({ children }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ my: 2 }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">
          <Divider>
            <Link href="/">
              <Typography variant="h4">AB</Typography>
            </Link>
          </Divider>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              👋
            </Fab>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <a href={"https://github.com/andres039"}>Github</a>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <a href={"https://www.linkedin.com/in/andresbeltrangarcia/"}>
                LinkedIn
              </a>
            </MenuItem>
          </Menu>
        </Typography>
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default Nav;
