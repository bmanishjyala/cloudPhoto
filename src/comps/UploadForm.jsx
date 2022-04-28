import React from 'react'
import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)
    const types=['image/png','image/jpeg','image/jpg']
    const changeHandler=(e)=>{
       let selected=e.target.files[0];
       if(selected && types.includes(selected.type)){
           setFile(selected);
           setError('')
       }
       else{
           setFile(null);
           setError('Please select an image file (png,jpeg,jpg)')
       }
    }
  return (
    <form>
       <div className='d-flex justify-content-center'>
       <label for="img" class="btn btn-outline-info fw-bold " style={{width:"60%"}}>Upload Image</label>
       <input type="file" id="img" style={{display:"none"}}  onChange={changeHandler} />
       </div>
        <div className="output">
            {error && <div className='error text-center text-danger'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
        </form>
  )
}
