import './App.css';
import TopNavbar from "./components/TopNavbar"
import SideNav from "./components/SideNav"
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <div className="mainTopContent">      
        <SideNav/>
        <Search/>
      </div>
    </div>

  );
}

export default App;
