import Footer from "./Footer";
import Header from "./Header";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";

function Layout({ children }) {
  const bodyMinHeight = window.innerHeight - 70;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Body $MinHeight={bodyMinHeight}>{children}</Body>
      <Footer />
    </>
  );
}

export default Layout;

const Body = styled.div`
  top: 4.375rem;
  min-height: ${(props) => props.$MinHeight}px;
`;
