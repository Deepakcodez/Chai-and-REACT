import { useContext } from 'react';
import { Data } from './Comp1';

export default function Comp3() {
  const message = useContext(Data);

  return (
    <>
      <h1>Comp3: {message}</h1>
    </>
  );
}
