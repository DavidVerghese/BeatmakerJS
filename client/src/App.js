
import './App.css';

import { useState } from "react";
import { Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="app">
      <Header/>
      <Route exact path="/blog"><Blog/></Route>
      <Route exact path="/"><Home /></Route>
      <Footer/>
    </div>
  );
}

export default App;
