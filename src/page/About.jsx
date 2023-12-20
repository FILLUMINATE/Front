import Layout from "../layout/Layout";
import Text from "../components/common/Text";
import styled from "styled-components";
import color from "../styles/color";

import { useEffect } from "react";

const { kakao } = window;

const EEDATexts = [
  {
    id: 0,
    First: "E",
    Second: "ducational Technology",
    Third: "교육공학",
  },
  {
    id: 1,
    First: "E",
    Second: "ngineering",
    Third: "공학",
  },
  {
    id: 2,
    First: "D",
    Second: "esign",
    Third: "디자인",
  },
  {
    id: 3,
    First: "A",
    Second: "rts",
    Third: "예술",
  },
];

function GoalBoxComponent(props) {
  return (
    <GoalBox>
      <GoalboxTextDiv>
        <div>
          <Text $fontType={"H3Bold"}>{props.first}</Text>
          <div />
          <Text $fontType={"H3Bold"}>{props.second}</Text>
          <div />
          <Text $fontType={"H3Bold"}>{props.third}</Text>
        </div>
      </GoalboxTextDiv>
      <GoalboxImg src={props.image} alt="img" />
    </GoalBox>
  );
}

const GoalBox = styled.div`
  width: 372px;
  height: 292px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 6px 0px #b7cda5;
`;

const GoalboxImg = styled.img`
  width: 77px;
  height: 77px;
  margin-left: 244px;
  margin-bottom: 29px;
`;

const GoalboxTextDiv = styled.div`
  margin-top: 60px;
  margin-left: 44px;
  width: 292px;
`;

const KakaoMap = () => {
  useEffect(() => {
    // Kakao Map 초기화
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(35.15436, 129.1179),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);

    // 확대/축소 컨트롤 추가
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    // 중앙 위치 표시 마커 추가
    const markerPosition = new window.kakao.maps.LatLng(
      35.1543361,
      129.1178883
    );
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: "1157px", height: "763px" }} />;
};

function About() {
  return (
    <Layout>
      <All>
        <AboutDiv>
          <Text
            $fontType={"H1Bold"}
            style={{
              margin: "0 auto",
            }}
          >
            ABOUT EEDA
          </Text>
          <Box>
            <LogoImage src={process.env.PUBLIC_URL + `/images/Logo.svg`} alt="Logo" />
            <EEDATextBox>
              {EEDATexts.map((data) => (
                <EEDAText>
                  <div>
                    <Text
                      $fontType={"H2Bold"}
                      alt="text"
                      style={{ color: "#332D2B" }}
                    >
                      {data.First}
                    </Text>
                    <Text
                      $fontType={"H2Bold"}
                      alt="text"
                      style={{ color: "#000" }}
                    >
                      {data.Second}
                    </Text>
                  </div>
                  <Text
                    $fontType={"H3"}
                    alt="text"
                    style={{ color: `${color.gray300}` }}
                  >
                    {data.Third}
                  </Text>
                </EEDAText>
              ))}
            </EEDATextBox>
          </Box>
        </AboutDiv>
        <DescriptionDiv>
          <Description>
            <Text $fontType={"H2Bold"} style={{ marginTop: "12px" }}>
              다양한 전문가가 모이다
            </Text>
            <div>
              <Text
                $fontType={"H3"}
                style={{ marginTop: "30px", marginBottom: "19px" }}
              >
                EEDA는 교육공학, 공학, 디자인, 예술 등의 다양한 전문가가 만나
                구성된 인적 네트워크 그룹이에요. 예술과학융합교육을 연구하고
                실천하고자
              </Text>
              <div />
              <Text $fontType={"H3"}>2017년 12월 15일 설립되었어요.</Text>
            </div>
          </Description>
          <img src={process.env.PUBLIC_URL + `/images/Icon/ExpertIcon.svg`} alt="icons" />
        </DescriptionDiv>
        <GoalDiv>
          <Text $fontType={"H2Bold"}>EEDA의 목표</Text>
          <GoalBoxes>
            <GoalBoxGroup style={{ marginRight: "266px" }}>
              <GoalBoxComponent
                first="지역기반 인재 중심"
                second="인적·물적 네트워크 활성화"
                third="     "
                image={process.env.PUBLIC_URL + `/images/Icon/GoalIconLocation.svg`}
              />
              <GoalBoxComponent
                first="문화예술기반의 교육, 전시,"
                second="융합 컨텐츠 개발 및 설계로"
                third="지역 사회에 공헌"
                image={process.env.PUBLIC_URL + `/images/Icon/GoalIconProfile.svg`}
              />
            </GoalBoxGroup>
            <GoalBoxGroup style={{ marginLeft: "266px" }}>
              <GoalBoxComponent
                first="예술실천공동체로서의"
                second="창의융합인재 양성"
                third="     "
                image={process.env.PUBLIC_URL + `/images/Icon/GoalIconcloud.svg`}
              />
              <GoalBoxComponent
                first="지역사회 발전에 기여하며"
                second="세계시민의식을 가지고"
                third="해외교육프로그램 개발 및 설계"
                image={process.env.PUBLIC_URL + `/images/Icon/GoalIconExplore.svg`}
              />
            </GoalBoxGroup>
          </GoalBoxes>
        </GoalDiv>
        <MapDiv>
          <MapTextbox>
            <Text $fontType={"H2Bold"}>오시는 길</Text>
            <Text $fontType={"H2"}>부산 수영구 광남로 146, 광안갤러리 2F</Text>
          </MapTextbox>
          <KakaoMap />
        </MapDiv>
        <ContactDiv>
          <Text $fontType={"H2Bold"}>연락처</Text>
          <ContactContainer>
            <ContactBox>
              <img src={process.env.PUBLIC_URL + `/images/Icon/PhonecallIcon.svg`} alt="img" />
              <Text $fontType={"H3Bold"}>010-3614-1385</Text>
            </ContactBox>
            <ContactBox>
              <img src={process.env.PUBLIC_URL + `/images/Icon/MailIcon.svg`} alt="img" />
              <Text $fontType={"H3Bold"}>amaeahn@naver.com</Text>
            </ContactBox>
          </ContactContainer>
        </ContactDiv>
      </All>
    </Layout>
  );
}
export default About;

const All = styled.div`
  display: flex;
  flex-direction: column;
  gap: 402px;
  align-items: center;
  justify-content: space-between;
`;
//Contact
const ContactBox = styled.div`
  display: flex;
  width: 550px;
  height: 166px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 4px 0px #b7cda5;
`;
const ContactContainer = styled.div`
  height: 166px;
  display: flex;
  gap: 31px;
  align-items: center;
  justify-content: space-between;
`;
const ContactDiv = styled.div`
  width: 1131px;
  height: 245px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 355px;
`;

//Map
const MapTextbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 40px;
`;
const MapDiv = styled.div`
  width: 1157px;
  height: 901px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

// Goal
const GoalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 1147px;
`;
const GoalBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 56px;
`;

const GoalBoxGroup = styled.div`
  height: 292px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

// Description
const DescriptionDiv = styled.div`
  width: 1160px;
  display: flex;

  margin-top: 200px;

  justify-content: space-between;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 460px;
`;

// AboutDiv
const EEDATextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 225px;
  justify-content: center;
`;

const EEDAText = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const AboutDiv = styled.div`
  width: 1007px;
  margin-top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 94px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 225px;
  width: 343px;
`;
