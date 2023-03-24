//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ImageList from './components/image_list';
import UploadFile from './components/upload_file';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" caseSensitive={false} element={<ImageList/>} />
        <Route path="/addImage" caseSensitive={false} element={<UploadFile/>} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
