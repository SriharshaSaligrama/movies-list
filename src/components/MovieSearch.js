import MovieList from "./MovieList"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchMovie } from "../actions/MovieSearchActions"
import { Card } from "react-bootstrap"

const MovieSearch= props=>{
    const [sortMovie, setSortMovie]=useState('')
    const {movieSearch}=useSelector(state=>state)
    const {movieList}=useSelector(state=>state)
    //const [movies, setMovies]=useState([])
    const dispatch=useDispatch()

    // useEffect(()=>{
    //     setMovies(JSON.parse(localStorage.getItem('movies'))||[])
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('movies', JSON.stringify(movieList))
    // }, [movieList])

    // const addMovie= movie=>{
    //     setMovies([movie, ...movies])
    // }
    
    const searchedMovie=movieList.filter(movie=>{return movie.movieName.toLowerCase().includes(movieSearch)})

    const handleChange= e=>{
        if(e.target.name==='searchMovie') dispatch(setSearchMovie(e.target.value))
        else if(e.target.name==='sortMovie') setSortMovie(e.target.value)
    }

    //logic for sorting name and IMDB
    if(sortMovie==='IMDB Ratings(High-Low)') {
        movieList.sort((a, b)=>{return b.IMDBRating-a.IMDBRating})
    }
    else if(sortMovie==='IMDB Ratings(Low-High)') {
        movieList.sort((a, b)=>{return a.IMDBRating-b.IMDBRating})
    }
    else if(sortMovie==='Movie name (asc)') {
        movieList.sort((a,b)=>{
            const movieA=a.movieName.toLowerCase()
            const movieB=b.movieName.toLowerCase()
            if (movieA < movieB) return -1
            if (movieA > movieB) return 1
            return 0
        })
    }
    else if(sortMovie==='Movie name (desc)') {
        movieList.sort((a,b)=>{
            const movieA=a.movieName.toLowerCase()
            const movieB=b.movieName.toLowerCase()
            if (movieA < movieB) return 1
            if (movieA > movieB) return -1
            return 0
        })
    }
    else if(sortMovie==='') {
        movieList.sort((a, b)=>{return a.id-b.id})
    }

    return(
        <div style={{marginLeft: '10px'}}>
            <h2>Movies list</h2>
            <Card border="dark" style={{width: '650px'}}>
                <div style={{display: 'flex'}}>
                <input 
                    type='text' 
                    placeholder='Search by name...' 
                    value={movieSearch} 
                    onChange={handleChange} 
                    name='searchMovie'
                    style={{width: '300px', margin: '10px 10px 0px 10px'}}
                    />
                <select value={sortMovie} name='sortMovie' onChange={handleChange} style={{margin: '10px 10px 0px 10px', height: '30px'}}>
                    <option value=''>--sort by--</option>
                    <option value='Movie name (asc)'>Movie name (asc)</option>
                    <option value='Movie name (desc)'>Movie name (desc)</option>
                    <option value='IMDB Ratings(High-Low)'>IMDB Ratings (High-Low)</option>
                    <option value='IMDB Ratings(Low-High)'>IMDB Ratings (Low-High)</option>
                </select>
                </div>
                <MovieList searchedMovie={searchedMovie} />
            </Card>
        </div>
    )
}

export default MovieSearch