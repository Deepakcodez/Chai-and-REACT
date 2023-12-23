import React, { Suspense } from "react";
import "./App.css";

//it is method of using fun from other folder
try {
  import("./component/SomeFunction").then((result) => {
    console.warn(result.add(3, 4));
  });
} catch (error) {
  console.error("Error during dynamic import:", error);
}

const HeavyTask = React.lazy(() => import("./component/SomeheavyComp"));

function App() {
  return (
    <>
      <Suspense fallback={<div>loading.......</div>}>
        <HeavyTask/>
      </Suspense>
    </>
  );
}

export default App;
