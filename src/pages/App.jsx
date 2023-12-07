import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AddTask from './AddTask';
import TaskDetails from '../components/TaskDetails';
 
function App() {
  return(
    <Router>
      <div className = "App">
        <Navbar />
        <div className = "content">
          <Routes>
            <Route exact path = "/" element = { <Home /> }/>
            <Route exact path = "/add" element = { <AddTask /> }/>
            <Route exact path = "/tasks/:id" element = { <TaskDetails /> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
