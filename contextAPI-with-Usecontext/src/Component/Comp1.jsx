import { createContext } from 'react';
import Comp2 from './Comp2';

const Data = createContext();

export default function Comp1() {
  return (
    <Data.Provider value={"message from Comp1 to comp3"}>
      <Comp2 />
    </Data.Provider>
  );
}

export { Data };
