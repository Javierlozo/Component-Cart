import './App.css';
import TopNavbar from "./components/TopNavbar"
import SideNav from "./components/SideNav"
import Search from "./components/Search"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* Router will go here - Components will be factored into Views/Pages and removed here */}
      <TopNavbar/>
      <div className="mainTopContent">      
        <SideNav/>
        <Search/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
