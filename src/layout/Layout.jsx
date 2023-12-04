import Footer from "./Footer";
import Header from "./Header";
import GlobalStyle from "../styles/GlobalStyle";

function Layout({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
