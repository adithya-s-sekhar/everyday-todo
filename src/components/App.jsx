import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddTask from './AddTask';
import TaskManage from './TaskManage';
 
function App() {
  return(
    <Router>
      <div className = "App">
        <Navbar />
        <div className = "content">
          <Routes>
            <Route exact path = "/" element = { <Home /> }/>
            <Route exact path = "/add" element = { <AddTask /> }/>
            <Route exact path = "/tasks/:id" element = { <TaskManage /> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
