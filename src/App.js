import logo from "./logo.svg";
import "./App.css";
import { Search } from "./component/Header/Description";
import { Assingto } from "./component/Header/Assingto";
import { Nav } from "./component/Header/Nav";
import { ListContainer } from "./component/List/ListContainer";
import { Title } from "./component/Header/Title";
import "./component/container.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <Nav />
        <hr className="hr"/>
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
