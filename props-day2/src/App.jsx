  import './App.css';
import Card from './Components/Card'
import movies from './moviesData'

function App() {

  let moviesData = (movie) =>{
    console.log(movie);

    return(
      <Card title={movie.Title} img={movie.Poster}/>
    )

  }

  return (
    <>
          <h1 className='bg-slate-700 py-3 text-center text-lime-50  text-4xl font-extrabold'>Top Movies</h1>

    <div className=" min-h-full h-[auto]  flex 	justify-evenly  flex-wrap p-5  bg-slate-500">
    {/* <Card title={movies[0].Title} Plot= {movies[0].Plot} img = {movies[0].Poster}/>
    <Card title={movies[1].Title} Plot= {movies[1].Plot} img = {movies[1].Poster}/>
    <Card title={movies[2].Title} Plot= {movies[2].Plot} img = {movies[2].Poster}/>
    <Card title={movies[3].Title} Plot= {movies[3].Plot} img = {movies[3].Poster}/>
    <Card title={movies[4].Title} Plot= {movies[4].Plot} img = {movies[4].Poster}/>
    <Card title={movies[5].Title} Plot= {movies[5].Plot} img = {movies[5].Poster}/>
    <Card title={movies[6].Title} Plot= {movies[6].Plot} img = {movies[6].Poster}/>
    <Card title={movies[7].Title} Plot= {movies[7].Plot} img = {movies[7].Poster}/> */
    movies.map(moviesData)
    }

    
    </div>
  
    </>
  );
}

export default App;
