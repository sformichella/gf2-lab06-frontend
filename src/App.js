import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import DataList from './DataList.js';
import CreatePage from './CreatePage.js';
import Home from './Home.js';
import UpdatePage from './UpdatePage.js';

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render = {(routerProps) => <Home {...routerProps}/>}
            />
            <Route 
              path="/theorems"
              exact
              render = {(routerProps) => <DataList {...routerProps}/>}
            />
            <Route 
              path="/theorems/:id"
              exact
              render = {(routerProps) => <UpdatePage {...routerProps}/>}
            />
            <Route 
              path="/create"
              exact
              render = {(routerProps) => <CreatePage {...routerProps}/>}
            />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
