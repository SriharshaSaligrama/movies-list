import { Card } from "react-bootstrap";
import AddMovie from "./components/AddMovie";
import MovieSearch from "./components/MovieSearch";
import MovieStats from "./components/MovieStats";

const App= props=>{

  return (
    <div>
      <h2>Movie listing App</h2><br/>
      <div style={{display: 'flex', columnGap: '100px'}}>
        <MovieSearch />
        <div>
          <AddMovie /><br/>
          <Card border="dark" style={{width: '400px'}}><MovieStats /></Card>
        </div>
      </div><br/>
      
    </div>
  )
}

export default App;
