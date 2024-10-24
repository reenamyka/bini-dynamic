import { ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";
import "@/styles/bini.css";
import { ThemeProvider, createTheme } from "@mui/material";
// import apolloClient from "@/utils/apoloClient";

export const theme = createTheme({
  breakpoints: {
    isMobileView: "(max-width: 800px)",
    isTabletView: "(max-width: 1150px)",
    isLaptopView: "(max-width: 1300px)",
    isLargeScreen: "(min-width: 1680px)",
  },
});

export default function App({ Component, pageProps }) {
  return (
    // <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    // </ApolloProvider>
  );
}
