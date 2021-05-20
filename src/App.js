
import './StyleSheets/App.css';
import MoviesContainer from './components/MoviesContainer';

function App() {
  return (
    <div className="App">
      <div className="app_title">
          <i className="fas fa-film"></i>
          BIG MOVIE LIST 
      </div>
      <MoviesContainer/>
    </div>
  );
}

export default App;
