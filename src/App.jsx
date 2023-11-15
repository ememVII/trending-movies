import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Pages/Navbar/Navbar"
import Home from './Components/Pages/Home/Home';
import Movies from './Components/Pages/Movies/Movies';
import TvShows from "./Components/Pages/TvShows/TvShows";
import About from "./Components/Pages/About/About";
import Login from "./Validation/Login/Login";
import Register from "./Validation/Register/Register";
import NotFound from './Components/Pages/NotFound/NotFound';
import ProtectedRoute from "./Validation/ProtectedRoute/ProtectedRoute";
import MovieDetails from "./Components/Pages/SingleMediaDetails/MovieDetails/MovieDetails";
import TvDetails from "./Components/Pages/SingleMediaDetails/TvDetails/TvDetails";
import Celebs from "./Components/Pages/Celebs/Celebs";
import Search from "./Components/Pages/Search/Search";

function App() {
  
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/movies" element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
          {/* MovieDetails */}
            <Route path="/movieDetails">
              <Route path=":id" element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
            </Route>
          {/* TvDetails */}
            <Route path="/tvDetails">
              <Route path=":id" element={<ProtectedRoute><TvDetails/></ProtectedRoute>}/>
            </Route>
          <Route path="/tvShows" element={<ProtectedRoute><TvShows/></ProtectedRoute>}/>
          {/* <Route path="/people" element={<ProtectedRoute><People/></ProtectedRoute>}/> */}
          {/* <Route path="/celebs" element={<ProtectedRoute><Celebs/></ProtectedRoute>}/> */}
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
          <Route path="/search" element={<ProtectedRoute><Search/></ProtectedRoute>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App