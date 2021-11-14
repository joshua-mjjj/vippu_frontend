import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
// import { Form } from 'semantic-ui-react'
import ReactCrop from 'react-image-crop'
import FolderIcon from '@material-ui/icons/Folder';
import { getProvider_photo } from "../actions/form.js";
import Spinner from '../assets/home_load.gif';
import 'react-image-crop/dist/ReactCrop.css'

const classes = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  button:{
    marginLeft: '60px',
    marginTop: '10px',
    alignItems: 'center',
    color: '#FF3D00',
    justifyContent: 'center',
    backgroundColor: '#fff!important',
    border: '1.5px solid #FF3D00',
    borderRadius: '50px',
    "&:hover": {
         backgroundColor: '#F0FFF0!important',
        }
  }
}));

// const classes = useStyles();

class PicUploadNoCrop extends Component {

  constructor(props) {
        super(props)
        this.state = {
            open: false,
            fullWidth: true,
            maxWidth: 'xs',

            src: null,
            crop: {
                unit: "%",
                width: 90,
                aspect: 0
            },
            croppedImageUrl: null,
        }

         this.handleClickOpen           = this.handleClickOpen.bind(this)
         this.handleClose               = this.handleClose.bind(this)
         this.handleMaxWidthChange      = this.handleMaxWidthChange.bind(this)
         this.handleFullWidthChange     = this.handleFullWidthChange.bind(this)

         this.handleFile                = this.handleFile.bind(this)
         this.handleSubmit              = this.handleSubmit.bind(this)
         this.onImageLoaded             = this.onImageLoaded.bind(this)
         this.onCropChange              = this.onCropChange.bind(this)
         this.onCropComplete            = this.onCropComplete.bind(this)
         this.getCroppedImg             = this.getCroppedImg.bind(this)
         this.dataURLtoFile             = this.dataURLtoFile.bind(this)

    }


     handleFile = e => {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
          this.setState({ src : fileReader.result })
      }   
      fileReader.readAsDataURL(e.target.files[0])
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.croppedImage)
        this.props.setting(this.state.croppedImage)      
    }

    onImageLoaded = image => {
       this.imageRef = image
    }

    onCropChange = (crop) => {
       this.setState({ crop });
    }

    onCropComplete = crop => {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
            this.setState({ croppedImageUrl })
        }
    }


    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )

        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, 'cropped.jpg')
            }
        })
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage }) 
    }


   handleClickOpen(){
     this.setState({open: true })
  };

   handleClose(){
    this.setState({open: false })
  };

   handleMaxWidthChange(event){
    this.setState({ maxWidth : event.target.value  })
  };

   handleFullWidthChange(event){
    this.setState({ fullWidth : event.target.checked })
  };

  componentDidMount() {
       console.log(this.props.form.photos_loading)
       this.props.getProvider_photo();
  }

  render() {

     const { crop, profile_pic, src } = this.state

    return (
      <React.Fragment>
        <Button variant="outlined" style={{ 'marginBottom' : '10px', display: "flex", maxWidth: '120px', maxHeight: '35px', minWidth: '120px', minHeight: '35px'}} color="primary" onClick={this.handleClickOpen}>
           {"upload"}   {
              this.props.form.photos_loading === true ? (
                <div style={{
                   marginLeft:'10px',
                   marginTop: '5px'
              }}>
                <img src={Spinner} alt="" height="25px" width="25px" /> 
             </div>) : null
            }
        </Button>
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Upload a profile image</DialogTitle>

          <DialogContent>

            <div> 
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="profile_pic"></label>
                  {src && (
                      <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                       /> 
                  )}
                  <br/>
                  <input 
                      type='file' 
                      id='profile_pic'
                      style={{ border: '2px solid #cfd7de', display: "block", }}
                      value={profile_pic} 
                      onChange={this.handleFile} 
                  />
                  <br/>
                   <Button  
                        type="submit" 
                        onClick={this.handleClose}
                        variant="outlined"
                        style={{  display: "block", }} >
                    save
                  </Button>
              </form>
           </div>

          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  auth: state.auth,
  form: state.forms,
});

export default connect(mapStateToProps, { getProvider_photo })(PicUploadNoCrop);
