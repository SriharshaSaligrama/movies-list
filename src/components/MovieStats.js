import { useSelector } from "react-redux"
import { Table } from 'react-bootstrap'

const MovieStats= props=>{
    const {movieList}=useSelector(state=>state)
    const sortedMovieRating=movieList.sort((a, b)=>{return b.IMDBRating-a.IMDBRating}).slice(0,5)

    return(
        <div style={{marginLeft: '10px'}}>
            <h2>Movie Stats</h2><br/>
            <h3>Total movies - {movieList.length}</h3><br/>
            <p># Top Ranked 5 Movies</p>
            <Table striped bordered hover style={{marginRight: '20px'}}> 
                <tbody>
                    {sortedMovieRating.map((movie,i)=>{
                        return <tr key={movie.id}> 
                            {/* <td>{i+1}</td> */}
                            <td>{movie.movieName}</td>
                            <td>{movie.IMDBRating}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default MovieStats