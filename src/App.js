import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGriid";
import Modal from "./comps/Modal";
import Navbar from "./comps/Navbar";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">

        <Navbar/>
      <Title/>
        <UploadForm/>
        <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage &&  <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
