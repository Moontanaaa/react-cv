import './homePage.css';
import AboutComponent from '../../components/About/AboutComponent';

function App() {


  return (
    <>
      <div className="responsive-container">
        <div className="background-image">
          <div className="centered">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button>En savoir plus</button>
          </div>
        </div>
      </div>
      <AboutComponent />
    </>
  )
}

export default App
