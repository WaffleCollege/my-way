import { Button } from "@mui/material";
import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImageUpload = () => {
    const OnFileUploadToFirebase=()=>{

    };
    return (
      <div className="outerBox">
        
        <Button className="postBox_addImage"><AddPhotoAlternateIcon/><input className="imageUploadInput" type="file" onChange={OnFileUploadToFirebase} accept=".png .jpeg .jpg" />
        </Button>
      </div>
    );
  };
  export default ImageUpload;