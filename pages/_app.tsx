import {  CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { theme } from "../assets/muiTheme/theme";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/index.css";
import store from "../assets/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix clone</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <CssBaseline />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
