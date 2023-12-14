import styled from "styled-components";
import color from "../styles/color";
import font from "../styles/font";

function Footer() {
  return (
    <FooterBox>
      <LogoBox src="images/Logo.svg" alt="로고" />
      <FooterInfoBox>
        <H1Bold>EEDA</H1Bold>
        <SubHeading>
          TEL. 010-3614-1385
          <br />
          E-MAIL. amaeahn@naver.com
          <br />
          ADDRESS. 부산 수영구 광남로 146, 광안갤러리 2F
          <br />
        </SubHeading>
      </FooterInfoBox>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.div`
  bottom: 0;
  width: 100%;
  height: 22.5rem;
  background-color: ${color.gray50};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 5.95rem;
`;

const LogoBox = styled.img`
  width: 17.6rem;
  height: 11.6rem;

  margin-left: 8.69rem;
`;

const FooterInfoBox = styled.div`
  width: auto;
  height: 8.5rem;

  display: flex;
  flex-direction: column;
`;

const H1Bold = styled.h1`
  ${font.H1Bold};
  color: ${color.gray600};

  margin-bottom: 0.6rem;
`;

const SubHeading = styled.p`
  ${font.SubHead};
  color: ${color.gray600};
`;
