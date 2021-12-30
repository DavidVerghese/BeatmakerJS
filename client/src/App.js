
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileWarning from './components/MobileWarning/MobileWarning';
import MusicMaker  from './components/MusicMaker/MusicMaker';

function App() {
  return (
    <div className="app">
      <Header />
      <MobileWarning/>
      <MusicMaker/>
      <Footer/>
    </div>
  );
}

export default App;
