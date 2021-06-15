import React  from 'react';
// import Title from './comps/Title';
// import UploadForm from "./comps/UploadForm";
// import ImageGrid from "./comps/ImageGriid";
// import Modal from "./comps/Modal";
import Navbar from "./comps/Navbar";
import Home from "./pages/Home";
import Footer from "./comps/Footer";

function App() {
  // const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">

        <Navbar/>
      {/*<Title/>*/}
      {/*  <UploadForm/>*/}
      {/*  <ImageGrid setSelectedImage={setSelectedImage} />*/}
      {/*{ selectedImage &&  <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}*/}
      <Home/>
        <Footer/>
    </div>
  );
}

export default App;
