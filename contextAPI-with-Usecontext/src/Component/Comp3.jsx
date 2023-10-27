import { useContext } from 'react';
import { Context } from './Comp1';

export default function Comp3() {
  const data = useContext(Context);
  console.log('>>>>>>>>>>>', data)

  return (
    <>
      <h1>Comp3: {data.message}</h1>
    </>
  );
}
