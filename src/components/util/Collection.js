import { useContext, createContext, useState } from "react";
import Score from "./Score";

const CollectionContext = createContext();

export const useCollection = () => {
  return useContext(CollectionContext);
};

const Collection = ({ children }) => {
  const [collection, setCollection] = useState([]);

  return (
    <CollectionContext.Provider value={[collection, setCollection]}>
      <Score>{children}</Score>
    </CollectionContext.Provider>
  );
};

export default Collection;
