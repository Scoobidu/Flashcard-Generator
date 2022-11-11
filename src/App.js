import "./App.css";
import logo from "./Images/logo.png";
import Header from "./Components/Header";
import NewCardUpper from "./Components/NewCardUpper";
import NewCardLower from "./Components/NewCardLower";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";

function App() {
  return (
    <div>
      {/* ---------navbar--------- */}
      <nav className='fixed bg-white'>
        <img className='p-5' src={logo} alt='' width='180' height='180' />
      </nav>
      <div className='bg-bgcol ' style={{ height: "100%" }}>
        <Header />
        {/* <NewCardUpper />
        <NewCardLower />
        <CardDetails /> */}
        <Cards />
      </div>
    </div>
  );
}

export default App;
