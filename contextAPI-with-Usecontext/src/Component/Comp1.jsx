import Comp2 from './Comp2';
import Context from './Context'

export default function Comp1(props) {
  const state={
    message:"this is message from comp3"
  }
  return (
    <Context.Provider value={state} >
      <Comp2 />
      {props.children}
    </Context.Provider>
  );
}

export { Context };
