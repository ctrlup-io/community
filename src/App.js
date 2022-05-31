import React from "react";
import { Grid, Stack, Typography, Container, Box, Link } from "@mui/material";
import { colors, ThemeProvider, theme } from "@ctrlup/rainbow-react";
import { createTheme } from "@mui/material/styles";
import QRCode from "qrcode.react";

const muiTheme = createTheme(theme);

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Container
        bgcolor="background.default"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Stack spacing={2}>
          <Box mt={8}>
            <Typography
              component="h1"
              fontWeight={700}
              fontSize={32}
              lineHeight={1}
            >
              We are
              <Typography
                component="span"
                sx={{
                  lineHeight: 1,
                  display: "block",
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
            </Typography>
            <Typography component="h2" fontSize={32} lineHeight={1}>
              [tek] [kɔ̃tʁol]
            </Typography>
          </Box>
          <Typography fontWeight={700} fontSize={32}>
            La communauté tech de Ctrl Up
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} p={4}>
              <Box component="a" target="_blank" href="https://discord.gg/2BYRdBF6JK">
                <QRCode
                  value="https://discord.gg/2BYRdBF6JK"
                  renderAs="svg"
                  size={null}
                  bgColor="transparent"
                  fgColor="url(#rainbow)"

                />
              </Box>
              <Typography textAlign="center">
                Rendez-vous sur notre Discord !{" "}
                <span role="img" aria-label="photo">
                  📸
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} p={4}>
              <Box component="a" target="_blank" href="https://www.meetup.com/tech-ctrl/">
                <QRCode
                  value="https://www.meetup.com/tech-ctrl/"
                  renderAs="svg"
                  size={null}
                  bgColor="transparent"
                  fgColor="url(#rainbow)"
                />
              </Box>
              <Typography textAlign="center">
                Tenez vous au courant de nos événement sur Meetup !{" "}
                <span role="img" aria-label="photo">
                  📸
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
