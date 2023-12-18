import { useState } from "react";
import styled from "styled-components";

import color from "../../styles/color";
import font from "../../styles/font";
import Input from "../common/Input";
import Button from "../common/Button";
import Text from "../common/Text";
import { useLoginMutation } from "../../api/auth/mutation";
import { useEffect } from "react";

function LoginModal({ isOpen, onClose }) {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginMutate = useLoginMutation({ userId, userPassword });

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = async () => {
    loginMutate.mutate({ userId, userPassword });
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <Container>
          <Content>
            <CloseBtn onClick={() => onClose()}>
              <StyledImg src="images/Icon/CloseIcon.svg" alt="닫기" />
            </CloseBtn>
            <TitleArea>
              <Text $fontType={"H2Bold"}>관리자 계정으로 로그인</Text>
            </TitleArea>

            <InfoForm>
              <Input
                $fontType={"SubHeadBold"}
                style={{ color: `${color.gray600}` }}
                type="text"
                id="userId"
                name="id"
                placeholder={"아이디"}
                onChange={handleUserIdChange}
              />
              <Input
                $fontType={"SubHeadBold"}
                style={{ color: `${color.gray600}` }}
                type="password"
                id="userPassword"
                name="password"
                placeholder={"비밀번호"}
                onChange={handleUserPasswordChange}
              />

              <ButtonArea>
                <Button onClick={handleLogin}>로그인</Button>
              </ButtonArea>
            </InfoForm>
          </Content>
        </Container>
      ) : null}
    </>
  );
}

export default LoginModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 250;

  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 40rem;
  height: 43rem;

  background-color: white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseBtn = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  align-self: flex-end;
  margin: 72px 63px 0px 0px;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  background-color: white;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: flex-start;
  margin: 1rem 0rem 3.3rem 3.88rem;
`;

const InfoForm = styled.div`
  width: 31.6rem;
  display: flex;
  flex-direction: column;
  gap: 41px;
`;

const ButtonArea = styled.div`
  margin-top: 4.5rem;
  align-self: center;
`;
