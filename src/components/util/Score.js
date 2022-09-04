import { useContext, createContext, useState } from "react";

const ScoreContext = createContext();

export const useScore = () => {
  return useContext(ScoreContext);
};

const Score = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={[
        { currentScore, setCurrentScore },
        { highScore, setHighScore },
      ]}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default Score;
