import Footer from "./Footer";
import Header from "./Header";
import GlobalStyle from "../styles/GlobalStyle";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
