import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Details from 'pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/itegraflix" exact>
        <Home />
      </Route>
      <Route path="/itegraflix/moviedetails/:movieId">
        <Details />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
