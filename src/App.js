import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import {useState} from 'react'

function App() {
  const [imgsrc, setImgsrc] = useState( null)
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setImgsrc={setImgsrc} />
     {imgsrc && < Modal imgsrc={imgsrc} setImgsrc={setImgsrc} /> } 
    </div>
  );
}

export default App;
