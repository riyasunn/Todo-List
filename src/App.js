import { Routes, Route } from "react-router-dom";
import LandingPage from "./routes/landing-page/landing-page.component";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
// import Todo from './routes/todo/to-do.component';
// import AddTodo from "./routes/add-todo/add-todo.component";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/navigation" element={<Navigation />} >
          <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

