import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./View/Home";
import CreateBlog from "./View/CreateBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create/new-blog' element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
