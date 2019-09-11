import React, { Component } from 'react';
import './sidebar.css';


class Sidebar extends Component {

  handleClick(e) {
    console.log("Click")
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    console.log(file);
    this.setState({file}); /// if you want to upload latter
    
    var pdffile=document.getElementById("myInput").files[0];
    var pdffile_url=URL.createObjectURL(pdffile);
    //$('#viewer').attr('src',pdffile_url);
    document.getElementById("viewer").src=pdffile_url
  }

  render() {
    return (
      <div class="sidenav">
        <div class="logo"></div>
        <span class="file-text">File</span>
        <ul>
          <li class="active"><i class="fa fa-file-text file-icon-light-color"></i> Document 1<span>How are you?</span></li>
          <li class=""><i class="fa fa-file-text file-icon-light-color"></i> Document 2<span>How are you?</span></li>
        </ul>
        <button class="upload-btn" onClick={()=>{this.upload.click()}}><i class="fa fa-cloud-upload"></i>  Upload File</button>
        <input id="myInput"
           type="file"
           ref={(ref) => this.upload = ref}
           style={{display: 'none'}}
           onChange={this.onChangeFile.bind(this)}
        />
      </div>
    );
  }
}

export default Sidebar;
