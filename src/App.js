import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Addmovie from "./pages/addmovie/Addmovie";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { createContext } from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';


export const InTheatresContext = createContext();


function App() {

  const [ allMovies, setAllMovies ] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [ filterdData, setFilterdData ] = useState([]);

  const getAllMovies = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('/movies');
      setAllMovies(data);
      setFilterdData(data);
      setLoading(false)
    } catch(err) {
      setError(err)
    }
  }

  useEffect(() => {
    getAllMovies();
  }, [])
  
  const inTheatres = (ans) => {
      const newData = [...allMovies];
      const comingSoon = newData.filter((item) => item.inTheaters === ans)
      setFilterdData(comingSoon);
  }

  const inCategory = (value) => {
    const newData = [...allMovies];
    const category = newData.filter((item) => item.genre === value.toString())
    setFilterdData(category);
  }

  const inCountry = (value) => {
    const newData = [...allMovies];
    const country = newData.filter((item) => item.country === value.toString())
    setFilterdData(country);
  }

  const stateProvider = {
    data: allMovies,
    inTheatres,
    inCategory,
    inCountry
  }

  return (

    <InTheatresContext.Provider value={stateProvider}>
      <Router>
          <main className={styles.root_cover}>
            <section className={styles.leftside}>
              <Sidebar />
            </section>
            <section className={styles.rightside}>
              <Main>
                <Switch>
                  <Route exact path="/">
                      <Home isError={error} isLoading={loading} data={filterdData}/>
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/movie/addmovie">
                    <Addmovie />
                  </Route> 
                  <Route>
                    <Single exact path="/movie/:id" />
                  </Route>
                </Switch>       
              </Main>
            </section> 
          </main>
        </Router>
      </InTheatresContext.Provider>
  );
}

export default App;
