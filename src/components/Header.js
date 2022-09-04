import styled from "styled-components";
import { useScore } from "./util/Score";
import { Theme } from "./util/Theme";

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

const Text = styled.h1`
  color: ${Theme.fontColor};
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
  const [{ currentScore, setCurrentScore }] = useScore(0);
  const [, { highScore, setHighScore }] = useScore(0);

  return (
    <Wrapper>
      <Text>PokeMemory</Text>
      <ScoreBoard>
        <CurrentScore>Current score: {currentScore}</CurrentScore>
        <HighScore>High score: {highScore}</HighScore>
      </ScoreBoard>
    </Wrapper>
  );
};
