import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./Components/Authentication/AuthProvider";

ReactDOM.render(
  // <ChakraProvider>
    // <BrowserRouter>
      // <AuthProvider>
        <App />,
      // </AuthProvider>
    // </BrowserRouter>
  // </ChakraProvider>
  document.getElementById("root")
);
