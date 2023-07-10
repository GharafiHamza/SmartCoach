import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import SmartCoach from './Pages/SmartCoach';
import SignUp from './Pages/Sign_Up/SignUp';
import Home from './Pages/Home/Home';
import CoachHome from './Pages/CoachHome/CoachHome';
import Practice from './Pages/Practice/Practice';
import Pose from './Pages/Pose/Pose';
import SelectSport from './Pages/SelectSport/SelectSport';
import Train from './Pages/Train/Train';
import AddCoach from './Pages/AddCoach/AddCoach';
import ListCoach from './Pages/ListCoach/ListCoach';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/CoachHome" element={<CoachHome/>}/>
          <Route path="/CoachHome/Practice" element={<Practice/>}/>
          <Route path="/CoachHome/Pose" element={<Pose/>}/>
          <Route path="/Home/Train" element={<Train/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/addCoach" element={<AddCoach/>}/>
          <Route path="/listCoach" element={<ListCoach/>}/>
          <Route exact path="/smartcoach" element={<SmartCoach/>}/>
          <Route exact path="/SelectSport" element={<SelectSport/>}/>
        </Routes>
    </Router>


    </div>
  );
}

export default App; 
