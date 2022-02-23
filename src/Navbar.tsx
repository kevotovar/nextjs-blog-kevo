import Link from "next/link";
import { AppBar, Toolbar, Container, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Container maxWidth="md" sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kevo
          </Typography>
          <Link href="/acerca-de" passHref>
            <Button color="inherit" LinkComponent="a">
              Acerca de
            </Button>
          </Link>
          <Button color="inherit" LinkComponent="a">
            Blog
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
