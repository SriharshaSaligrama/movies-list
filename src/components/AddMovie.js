import { useState } from "react"
//import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setMovie } from "../actions/MovieListActions"
// import { useFormik } from 'formik'

// export const AddingMovie= props=>{
//     const dispatch=useDispatch()
//     const formik=useFormik({
//         initialValues: {id: '', movieName: '', IMDBRating: ''},
//         onSubmit: (values)=>{
//             dispatch(setMovie(values))
//             console.log(values)
//         }
//     })
//     return(
//         <div>
//             <h2>Add movie</h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <input type='text' name='movieName' value={formik.values.movieName} onChange={formik.handleChange} placeholder='Enter movie name'/><br/>
//                 <br/><input type='number' name='IMDBRating' value={formik.values.IMDBRating} onChange={formik.handleChange} placeholder='IMDB Rating'/><br/>
//                 <br/><button type="submit">Add</button>
//             </form>
//         </div>
//     )
// }
const AddMovie= props=>{
    const [movieName, setMovieName]=useState('')
    const [IMDBRating, setIMDBRating]=useState('')
    const dispatch=useDispatch()

    const handleChange= e=>{
        if(e.target.name==='movieName') setMovieName(e.target.value)
        else if(e.target.name==='IMDBRating') setIMDBRating(e.target.value)
    }

    const handleSubmit= e=>{
        e.preventDefault()
        const formData={id: Number(new Date()), movieName, IMDBRating}
        dispatch(setMovie(formData))
        setMovieName('')
        setIMDBRating('')
    }

    return(
        <div style={{marginLeft: '10px'}}>
            <h2>Add movie</h2>
            {/* <Card border="dark" style={{ width: '11.9rem' }} > */}
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter movie name' value={movieName} onChange={handleChange} name='movieName' required style={{width:'400px'}} /><br/><br/>
                    <input type='number' placeholder='IMDB Rating' value={IMDBRating} onChange={handleChange} name='IMDBRating' required min={'0'} max={'10'} style={{width:'400px'}} step='0.1'/><br/><br/>
                    <input type='submit' value='Add' />
                </form>
            {/* </Card> */}
        </div>
    )
}

export default AddMovie