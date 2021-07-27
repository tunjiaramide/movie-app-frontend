import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Addmovie from "./pages/addmovie/Addmovie";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <main className={styles.root_cover}>
        <section className={styles.leftside}>
          <Sidebar />
        </section>
        <section className={styles.rightside}>
          <Main>
            <Switch>
              <Route exact path="/">
                  <Home />
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
  );
}

export default App;
