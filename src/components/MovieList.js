import { setRemovedMovie } from "../actions/MovieListActions"
import { useDispatch, useSelector } from "react-redux"
//import DataTable from 'react-data-table-component';
import { Button, Card } from "react-bootstrap";
//import { useEffect } from "react"

const MovieList= props=>{
    const {searchedMovie}=props
    const {movieList}=useSelector(state=>state)
    const {movieSearch}=useSelector(state=>state)
    const dispatch=useDispatch()

    const listedMovies=JSON.parse(localStorage.getItem('movieList'))||movieList
    localStorage.setItem('movieList', JSON.stringify(listedMovies))

    const handleRemove= id=>{
        const removedMovie=movieList.filter(movie=>{return movie.id!==id})
        dispatch(setRemovedMovie(removedMovie))
    }

    // const columns = [
    //     {
    //         name: 'Movie Name',
    //         selector: row => row.movieName,
    //         sortable: true,
    //     },
    //     {
    //         name: 'IMDB rating',
    //         selector: row=>row.IMDBRating,
    //         sortable: true,
    //     },
    //     {
    //         name: 'action',
    //         cell: (row) => <Button primary='true' onClick={()=>{handleRemove(row.id)}}>Remove</Button>,
    //     },
    // ];
    
    return(
        <div>
            <br/>
            {movieSearch.length>0?
                searchedMovie.map(ele=>(
                    <Card key={ele.id} border='dark' style={{ width: '300px', height: '100px', margin: '10px', display: 'inline-block' }}>
                        <Card.Body>
                            <Card.Title>{ele.movieName}</Card.Title>
                            <Card.Text>IMDBRating - {ele.IMDBRating} <Button onClick={()=>{handleRemove(ele.id)}}>remove</Button></Card.Text>
                        </Card.Body>
                    </Card> // <DataTable columns={columns} data={searchedMovie} pagination/>
                )):
                movieList.map(ele=>(
                    <Card key={ele.id} border='dark' style={{ width: '300px', height: '100px', margin: '10px', display: 'inline-block' }}>
                        <Card.Body>
                            <Card.Title>{ele.movieName}</Card.Title>
                            <Card.Text>IMDBRating - {ele.IMDBRating} <Button onClick={()=>{handleRemove(ele.id)}}>remove</Button></Card.Text>
                        </Card.Body>
                    </Card> // <DataTable columns={columns} data={movieList} pagination/>
                ))
            }
        </div>
    )
}

export default MovieList