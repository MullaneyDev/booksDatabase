import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";

import { useState } from "react";

function App() {
const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <h1>Mullaney Book Database</h1>
      <h3>For all your book searching needs...</h3>
      
      <CardContainer books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
