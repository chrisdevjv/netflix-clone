import './App.css';
import Row from "./components/Row";
import categories from './api';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {
  return (<div className="App">
    {/*Navbar */}
    {/*destaques */}
    {/*em alta */}
    <Nav></Nav>
    <Banner></Banner>
    {categories.map((category) => {
        return <Row 
        key={category.name} 
        title={category.title} 
        path={category.path}
        isLarge={category.isLarge}
        />
    })}
  </div> 
  );
}

export default App;
