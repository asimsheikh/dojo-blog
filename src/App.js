import NavBar from './Navbar'
import Home from './Home'
import './index.css'

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <Home />
            </div>
        </div>
      );
}

export default App;
