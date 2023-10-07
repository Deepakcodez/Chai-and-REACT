import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <>
    <div className="container h-[100vh] max-h-[auto] flex  p-5  bg-slate-500">
    <Card userName="Deepak"/>
    <Card userName="Deepak"/>
    <Card userName="Deepak"/>
    </div>
  
    </>
  );
}

export default App;
