import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Skeleton from '@material-ui/lab/Skeleton';


import { DropzoneDialog } from "material-ui-dropzone";
import {
  sendCertificate,
  getCertificate,
  deleteCertificate,
} from "../actions/form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  imageSelector: {
    fontSize: "8rem",
  },
  line: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    width: "100%",
    borderRadius: "10px",
    paddingLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& > label": {
      paddingLeft: theme.spacing(2),
    },
  },
  helpText: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
  },
  selectEmpty: {
    float: "left",
    width: "100%",
    borderRadius: "10px",
    height: "auto!important",
    "& > label": {
      paddingLeft: theme.spacing(1),
    },
  },
  addRowButton: {
    marginTop: theme.spacing(4),
  },
  selectFormControl: {
    width: "100%",
  },
  serviceTitle: {
    marginBottom: theme.spacing(1),
    color: "black",
  },
  dropzone: {
    marginTop: theme.spacing(1),
  },
  cardContainer: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(0, 0, 1),
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    borderRadius: '5px',
    paddingTop: "56.25%", // 16:9
  },
  delete: {
    marginLeft: "auto",
  },
  input:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
inputSelect:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    width: '100%',
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
inputBio:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1, 2, 1, 1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
radioLabel:{
    "& span":{
        fontSize: '13px!important',
        color: '#1b1f23',
    },
},
wizardContainer:{
    margin: theme.spacing(4, 'auto', 12),
},
form: {
    margin: 'auto',
    '& > *': {
        margin: theme.spacing(1),
    },
},
formHeader:{
    margin: theme.spacing(2, 'auto', 4),
    textAlign: 'center',
},
formLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    marginBottom: theme.spacing(1),
},
formLabelPetPrefs:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    margin: theme.spacing(1, 0),
},
formLabelPetExperience:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    lineHeight: '2.5em',
},
formGroupLabel:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    margin: theme.spacing(3, 0, 1),
},
formGroupLabelPetPrefs:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    marginBottom: theme.spacing(4),
},
formGroup:{
    marginBottom: theme.spacing(3),
},
formGroupProfileSection:{
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
},
imageSelector: {
    fontSize: "8rem",
    paddingLeft: theme.spacing(0),
},
selector:{
    paddingLeft: theme.spacing(0),
},
instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
},
button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#663399!important',
},
buttonBack: {
    marginRight: theme.spacing(1),
    marginLeft: 'auto',
},
buttonNext: {
    marginLeft: theme.spacing(1),
    backgroundColor: '#663399!important',
    marginRight: 'auto',
},
buttonSection:{
    margin: 'auto',
    float: 'right',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
},
buttonCertificate:{
  margin: theme.spacing(2, 0, 1),
  backgroundColor: '#FF3D00!important',
},
fieldSetRadio:{
    marginLeft: theme.spacing(1),
},
adornment:{
    "& p":{
        fontSize: '13px',
    },
},
cardHeader:{
  "& span":{
    fontSize: '14px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '225px',
  },
},
}));

function PetExperiencesSection(props) {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const [openDropzone, setOpenDropzone] = React.useState(false);
  const [showCertificate, setShowCertificate] = React.useState(true);
  const certificateResults = props.certificates;

  function loadCertificate() {
    let x;
    do {
      if (count === undefined || certificateResults < 1) {
        x = 500;
        setTimeout(() => {
          props.getCertificate();
        }, x);
      }
      x = x + 500;
    } while (x > 10000);
  }
 // loadCertificate();
  
  function handleDeleteCertificate(certificate){
    props.deleteCertificate(certificate.id);
    setTimeout(() => {
      props.getCertificate();
    }, 500);
  }

  function handleDropzoneChange(e) {
    setCount(e.length);
    setShowCertificate(true);
    if (e[count] !== undefined) {
      props.sendCertificate(e[count]);
    }
    setTimeout(() => {
      props.getCertificate();
    }, 500);
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroup}>
            <FormLabel component="label" className={classes.formGroupLabel}>Pet experience</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Years</FormLabel>
                  <Input 
                  onChange={(e) => props.setYears(e.target.value)}
                  id="years"
                  defaultValue={props.years}
                  disableUnderline 
                  fullWidth
                  placeholder="0" 
                  type="number"
                  inputProps={{ 'aria-label': 'description' }} 
                  endAdornment={<InputAdornment position="start" className={classes.adornment}>Year(s)</InputAdornment>}
                  className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Months</FormLabel>
                  <Input 
                  onChange={(e) => props.setMonths(e.target.value)}
                  id="months"
                  defaultValue={props.months}
                  disableUnderline 
                  fullWidth
                  placeholder="0" 
                  type="number"
                  inputProps={{ 'aria-label': 'description' }} 
                  endAdornment={<InputAdornment position="start" className={classes.adornment}>Month(s)</InputAdornment>}
                  className={classes.inputSmall} />
              </Grid>
            </Grid>
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <Grid item xs={12} className={classes.dropzone}>
              <FormLabel component="label" className={classes.formLabelPetExperience}>Do you have any professional certificates working with pets?</FormLabel>
              <div>
                <Button className={classes.buttonCertificate} variant="contained" color="primary" onClick={() => setOpenDropzone(true)}>
                  Add Certificate
                </Button>
                <DropzoneDialog
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  onChange={(e) => handleDropzoneChange(e)}
                  cancelButtonText={"cancel"}
                  submitButtonText={"submit"}
                  maxFileSize={10000000}
                  open={openDropzone}
                  onClose={() => setOpenDropzone(false)}
                  onSave={(files) => {
                    //console.log('Files:', files);
                    handleDropzoneChange(files);
                    setOpenDropzone(false);
                  }}
                //showPreviews={true}
                //showFileNamesInPreview={true}
                />
              </div>
            </Grid>
            <FormLabel component="label" className={classes.formGroupLabel}>Certificates Submitted</FormLabel>
            <Grid
            container
            spacing={2}
            className={classes.cardContainer}
            >
              {certificateResults !== null && certificateResults !== undefined
                ? certificateResults.map((certificate) =>
                    certificate.certificate !== null ? (
                      <Grid item xs={12} sm={6} md={4} key={certificate.id} >
                        <Card className={classes.cardRoot}>
                          <CardMedia
                            className={classes.media}
                            image={certificate.certificate}
                            title={certificate.certificate
                              .substring(63)
                              .split("?")
                              .shift()}
                          />
                          <CardActions disableSpacing>
                            <IconButton
                              className={classes.delete}
                              aria-label="delete"
                              onClick={() => {
                                handleDeleteCertificate(certificate)
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={6} md={4} key={certificate.id}>
                        <Card className={classes.cardRoot}>
                          <CardHeader
                            title="No Name"
                            subheader={certificate.created.split("T").shift()}
                          />
                          <CardMedia
                            className={classes.media}
                            image={certificate.certificate}
                            title="No Name"
                          />
                          <CardActions disableSpacing>
                            <IconButton
                              className={classes.delete}
                              aria-label="delete"
                            >
                              <DeleteIcon
                                onClick={() =>
                                  handleDeleteCertificate(certificate)
                                }
                              />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  )
                : 
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.cardRoot}>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="100%"/>
                  </Card>
                </Grid>
                }
            </Grid>
            
          </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token,
  certificates: state.certificates.results,
});

export default connect(mapStateToProps, {
  sendCertificate,
  getCertificate,
  deleteCertificate,
})(PetExperiencesSection);
