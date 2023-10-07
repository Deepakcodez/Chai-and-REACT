import './App.css';
import Card from './Components/Card'
import movies from './moviesData'

function App() {
  return (
    <>
          <h1 className='bg-slate-700 py-3 text-center text-lime-50  text-4xl font-extrabold'>Top Movies</h1>

    <div className=" min-h-full h-[auto]  flex 	justify-evenly  flex-wrap p-5  bg-slate-500">
    <Card title={movies[0].Title} Plot= {movies[0].Plot} img = {movies[0].Images[1]}/>
    <Card title={movies[1].Title} Plot= {movies[1].Plot} img = {movies[1].Images[1]}/>
    <Card title={movies[2].Title} Plot= {movies[2].Plot} img = {movies[2].Images[1]}/>
    <Card title={movies[3].Title} Plot= {movies[3].Plot} img = {movies[3].Images[1]}/>
    <Card title={movies[4].Title} Plot= {movies[4].Plot} img = {movies[4].Images[1]}/>
    <Card title={movies[5].Title} Plot= {movies[5].Plot} img = {movies[5].Images[1]}/>
    <Card title={movies[6].Title} Plot= {movies[6].Plot} img = {movies[6].Images[1]}/>
    <Card title={movies[7].Title} Plot= {movies[7].Plot} img = {movies[7].Images[1]}/>
    
    </div>
  
    </>
  );
}

export default App;
