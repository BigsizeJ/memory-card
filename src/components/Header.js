import styled from "styled-components";
import { useScore } from "./util/Score";
import { Theme } from "./util/Theme";
import logo from "../asset/pokeball.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.headerColor};
  padding: 15px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 40px;
`;

const Text = styled.h1`
  color: ${Theme.fontColor};
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScoreBoard = styled.div`
  display: flex;
  gap: 20px;
`;

const Score = styled.div`
  padding: 10px 15px;
  border-radius: 15px;
  font-weight: 700;
  color: ${Theme.fontColor};
`;

const CurrentScore = styled(Score)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const HighScore = styled(Score)`
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Header = () => {
  const [{ currentScore }] = useScore(0);
  const [, { highScore }] = useScore(0);

  return (
    <Wrapper>
      <HeaderTitle>
        <Logo src={logo}></Logo>
        <Text>PokeMemory</Text>
      </HeaderTitle>
      <ScoreBoard>
        <CurrentScore>Current score: {currentScore}</CurrentScore>
        <HighScore>High score: {highScore}</HighScore>
      </ScoreBoard>
    </Wrapper>
  );
};
