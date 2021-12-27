import "../src/styles/globals.css";
import { LayoutContainer } from "../src/components/index";
import { Provider } from "react-redux";
import { store } from "../src/state/app";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </Provider>
  );
}

export default MyApp;
