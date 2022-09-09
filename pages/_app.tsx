import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../assets/muiTheme/theme";
import Navbar from "../components/Navbar";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix clone</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{ height: "1000px" }}></Box>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
