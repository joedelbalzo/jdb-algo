import React from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "../assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>AlgoRhythm</title>
        <meta name="description" content="Study app" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
