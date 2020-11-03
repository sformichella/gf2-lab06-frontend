import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import DataList from './DataList.js';

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
          </Switch>
        </Router>
    </div>
  );
}

export default App;
