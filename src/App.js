import Main from './components/Main/Main';
import Posts from './components/Posts/Posts';
import Photos from './components/Photos/Photos';
import Contacts from './components/Contacts/Contacts';
import {HashRouter as Router, Switch, Route, NavLink, Redirect} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div className='nav'>
          <NavLink to='/main' activeClassName='active-nav'>Home</NavLink>
          <NavLink to='/posts' activeClassName='active-nav'>Posts</NavLink>
          <NavLink to='/photos' activeClassName='active-nav'>Photos</NavLink>
          <NavLink to='/contacts' activeClassName='active-nav'>Contacts</NavLink>
        </div>
        <Switch>
          <Route path='/main' component={Main} />
          <Route path='/posts' component={Posts} />
          <Route path='/photos' component={Photos} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/' exact render={() => <Redirect to='/main' />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
