import React from "react";

// import Script from "next/script";
const Header = () => {
  return (
    <>
      <head className="">
        <title>Placeable</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />
        <link rel="icon" href="./Logo.svg"></link>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </head>
    </>
  );
};

export default Header;
