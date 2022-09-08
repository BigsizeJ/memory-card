import styled from "styled-components";
import { shuffleArray } from "./util/CardUtil";
import { useCollection } from "./util/Collection";
import { useScore } from "./util/Score";

const Card = ({ name, image, pokemons, setPokemons }) => {
  const [collection, setCollection] = useCollection();
  const [{ currentScore, setCurrentScore }] = useScore();
  const [, { highScore, setHighScore }] = useScore();

  const handleClick = (e) => {
    const selected = e.target.parentNode.lastChild.textContent;
    setCollection((prev) => [...prev, selected]);

    if (collection.includes(selected)) {
      alert("Game Over!");
      setCurrentScore(0);
      setCollection([]);
      return;
    } else {
      const newScore = currentScore + 1;
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      setCurrentScore(newScore);
    }
    setPokemons(shuffleArray(pokemons));
  };

  return (
    <Wrapper onClick={(e) => handleClick(e)}>
      <Image src={image}></Image>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transition: 200ms ease;
      transform: scale(1.1);
    }
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`;

const Name = styled.p`
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: whitesmoke;
  text-align: center;
`;

export default Card;
