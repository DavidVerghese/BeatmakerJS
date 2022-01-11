
import './App.css';
import { useState, useEffect } from "react";
import { verifyUser } from './services/users'
import { Route } from "react-router-dom";
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import SignUp from "./screens/SignUp/SignUp";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  const [user, setUser] = useState(false);
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
      <Header user={user}/>
      <Route exact path="/blog"><Blog/></Route>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/sign-up"><SignUp setUser={setUser}/></Route>
      <Route exact path="/sign-in"><Home /></Route>
      <Footer/>
    </div>
  );
}

export default App;
