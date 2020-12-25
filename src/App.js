
import { Container } from "@material-ui/core";
import Navbar from "./presentational/Navbar"
import SearchField from "./presentational/SearchField"
import {useState} from "react"
import UserList from "./container/UserList";

function App() {


  const [term, setTerm] = useState("")
  return (
    <div className="App">
      <Container>
      <Navbar />
      <SearchField setTerm={(input) => setTerm(input)}/>
      <UserList term={term}/>
      </Container>
      
    </div>
  );
}

export default App;
