import AddTask from './AddTask';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDetails from './TaskDetails';
 
function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/add" element={<AddTask />}/>
            <Route exact path="/tasks/:id" element={<TaskDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
