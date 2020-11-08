import React from "react";
import { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default CustomApp;
