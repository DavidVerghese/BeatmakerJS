
import './App.css';
import { useState, useEffect } from "react";
import { verifyUser } from './services/users'
import { Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import AddPost from './components/AddPost/AddPost';
import SignUp from "./screens/SignUp/SignUp";
import SignOut from './components/SignOut/SignOut';
import SignIn from './screens/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  const [user, setUser] = useState(false);
  const [musicMakerStarted, setMusicMakerStarted] = useState(false);
  const clearUser = () => setUser(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  return (
    <div className="app">
      <Header musicMakerStarted={musicMakerStarted} user={user}/>
      <Route exact path="/blog"><Blog user={user}/></Route>
      <Route exact path="/"><Home setMusicMakerStarted={setMusicMakerStarted}/></Route>
      <Route exact path="/sign-up"><SignUp setUser={setUser}/></Route>
      <Route exact path="/sign-in"> <SignIn setUser={setUser} /></Route>
      <Route exact path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser}/>
      </Route>
      <Route exact path="/add-post"><AddPost user={user}/></Route>
      <Footer/>
    </div>
  );
}

export default App;
