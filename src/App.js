import React from "react";
import {
  Stack,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import {
  colors,
  ThemeProvider,
  theme,
  DiscordIcon,
  NpmIcon,
  Card,
} from "@ctrlup/rainbow-react";
import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme(theme);

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <Container
          component="main"
          bgcolor="background.default"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
          maxWidth="md"
        >
          <Stack spacing={4}>
            <Box mt={8}>
              <Typography component="h1" fontSize={32} lineHeight={1}>
                Nous sommes
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1,
                  display: "inline-block",
                  background: colors.RAINBOW,
                  fontWeight: 900,
                  fontSize: 64,
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozTextFillColor: "transparent",
                }}
              >
                Tech Ctrl
              </Typography>
              <Typography component="h2" fontSize={32} lineHeight={1}>
                [tek] [kɔ̃tʁol]
              </Typography>
            </Box>
            <Typography>La communauté tech de Ctrl Up.</Typography>
            <Typography>
              L’équipe de développement de Ctrl Up a pour philosophie le partage
              de connaissance c’est pourquoi elle s’organise en une communauté
              technique interne mais a aussi initié une communauté réunissant
              des passionnés et acteurs du dév bordelais (mais pas que). <br />
              L'objectif est de fournir à tout le monde un espace de partage de
              connaissances et d'expériences.
            </Typography>
          </Stack>
        </Container>
        <Grid container spacing={4} px={4}>
          <Grid item xs={12} md={4}>
            <Card
              title="Discord"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  Échanges quotidiennement avec la communauté : trouves du
                  support, suis nos live-conding, partages tes meilleurs
                  articles, etc.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  target="_blank"
                  href="https://discord.gg/2BYRdBF6JK"
                >
                  Rejoindre notre Discord
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              title="Meetup"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  Assistes (et présente) des sujets tech lors de nos meetups.
                  Rendez-vous dans nos bureaux à Darwin.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  target="_blank"
                  href="https://www.meetup.com/tech-ctrl/"
                >
                  Venir à nos Meetups
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              title="Calendrier"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography>
                  Tiens-toi au courant des événements tech bordelais. Nous
                  t'avons préparer une sélection aux petits oignons !
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  target="_blank"
                  href="https://calendar.google.com/calendar/u/0?cid=Y18xN2Q3YjI0MzRkNDlkYWMxYTY5OTYwZWYxMGE3ZDY4MDM2OTViNGEzOWExNmU2YmQ1ZGQ5YzdjZjA0OWNmZTA1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                >
                  Ajouter le calendrier
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <footer>
          <Box component="nav" p={8} display="flex">
            <Box flexGrow={1} />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Box
                component="ul"
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                p={0}
              >
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Ctrl Up sur LinkedIn"
                    href="https://www.linkedin.com/company/ctrlup/"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <LinkedIn
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Ctrl Up Team sur Instagram"
                    href="https://www.instagram.com/ctrlup_team/"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <Instagram
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Tech Ctrl sur Discord"
                    href="https://discord.gg/5NPXddG9jx"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <DiscordIcon
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Ctrl Up sur GitHub"
                    href="https://github.com/ctrlup-io"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <GitHub
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Ctrl Up sur Npm"
                    href="https://www.npmjs.com/org/ctrlup"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <NpmIcon
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
                <Box component="li" sx={{ listStyle: "none" }}>
                  <IconButton
                    aria-label="Ctrl Up sur YouTube"
                    href="https://www.youtube.com/@ctrlup"
                    target="_blank"
                    sx={{ p: 1 }}
                  >
                    <YouTube
                      sx={{
                        fill: colors.WHITE[50],
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Typography p={4} textAlign="center">
                Fait avec{" "}
                <span role="img" aria-label="heart">
                  ❤️
                </span>{" "}
                par notre équipe.
              </Typography>
            </Box>
          </Box>
        </footer>
        <Box
          component="img"
          src="topographicalLines5.svg"
          alt="topographical lines"
          position="absolute"
          bottom={-100}
          right={0}
          width="100%"
          zIndex={-1}
        />
      </Box>
    </ThemeProvider>
  );
}
