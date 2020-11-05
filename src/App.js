import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import DataList from './DataList.js';
import CreatePage from './CreatePage.js';

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route 
              path="/"
              exact
              render = {(routerProps) => <DataList {...routerProps}/>}
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
