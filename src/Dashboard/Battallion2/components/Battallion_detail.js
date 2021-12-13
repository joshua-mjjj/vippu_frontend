import * as React from 'react';
import { Box, Card, Container, Grid, Typography } from '@mui/material'; 
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../../GlobalComponents/Alert';

// import { statusVariants, titleVariants, departmentVariants, leaveVariants, educationVariants, shiftVariants } from './utils';

const useStyles = makeStyles((theme) => ({
   label: {
     fontSize: '16px',
     fontWeight: '800',
     fontFamily: 'Dosis'
   },
   value: {
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Dosis',
    color: 'grey',
    textAlign: 'start',
   },
   typo: {
    '& .MuiTypography-subtitle1' : {
      textAlign: 'start'
    }
   },
   flex: {
     display: 'flex',
     justifyContent: 'space-evenly'
   }
   
}));



export default function Battallion_detail(props){
  const classes = useStyles();
  const { employee } = props;

  const control_bool_error = () => {
    console.log("Ok")
  }

 //  const statusVariant = statusVariants.find(
 //       (variant) => variant.value === employee.status
 //     );
  // const departmentVariant = departmentVariants.find(
  //     (variant) => variant.value === employee.department
  // );
  // const titleVariant = titleVariants.find(
 //        (variant) => variant.value === employee.title
 //     );
  // const leaveVariant = leaveVariants.find(
 //        (variant) => variant.value === employee.on_leave
 //     );
  // const educationVariant = educationVariants.find(
 //        (variant) => variant.value === employee.education_level
 //     );
  // const shiftVariant = shiftVariants.find(
 //        (variant) => variant.value === employee.shift
 //     );
  return(
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 2,
      }}
    >
       <Grid md={10}xs={12}>
          {
            employee.notify_leave ? 
            (
              <Alert content={`This is an alert to notify you that ${employee.first_name}'s leave time ellapsed!`} control_bool={control_bool_error} status="error" />
            ) : null
          }
        </Grid>
      <Container maxWidth="lg">
        <div className={classes.flex} >
          <Grid md={8}xs={12}>
          <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2}>
                 <span className={classes.label}>First name</span>
              </Grid>
              <Grid container spacing={2}>
                  <Typography variant="subtitle1" className={classes.value} >{employee.first_name}</Typography>
                </Grid>
            </Card> 

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} >
                 <span className={classes.label}>Last name</span>
              </Grid>
              <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.last_name}</Typography>
                </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>File number</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.file_number}</Typography>
               </Grid>
            </Card>

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Tin number</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.tin_number}</Typography>
               </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>IPPS</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.ipps}</Typography>
               </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Rank</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.rank}</Typography>
               </Grid>
            </Card>

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Title</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.title}</Typography>
               </Grid>
            </Card>
            {
              employee.education_level === "Other" ? 
              (<Card
                sx={{
                  display: 'grid',
                  gap: 2,
                  mb: 0,
                  p:2
                }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Education level</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.other_education_level}</Typography>
               </Grid>
            </Card>) : 
              (<Card
                sx={{
                  display: 'grid',
                  gap: 2,
                  mb: 0,
                  p:2
                }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Education level</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.education_level}</Typography>
               </Grid>
            </Card>)
            }
          </Grid>



          <Grid md={8}xs={12}>
          <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2}>
                 <span className={classes.label}>Sex</span>
              </Grid>
              <Grid container spacing={2}>
                  <Typography variant="subtitle1" className={classes.value} >{employee.sex}</Typography>
                </Grid>
            </Card> 

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} >
                 <span className={classes.label}>NIN</span>
              </Grid>
              <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.nin}</Typography>
                </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Tel contact</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.contact}</Typography>
               </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Bank</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.bank}</Typography>
               </Grid>
            </Card>

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Account number</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.account_number}</Typography>
               </Grid>
            </Card>

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Armed</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.armed}</Typography>
               </Grid>
            </Card>
            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Department</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.department}</Typography>
               </Grid>
            </Card>
          </Grid>

           <Grid md={8}xs={12}>
           <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Status</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.status}</Typography>
               </Grid>
            </Card>
          <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2}>
                 <span className={classes.label}>Location</span>
              </Grid>
              <Grid container spacing={2}>
                  <Typography variant="subtitle1" className={classes.value} >{employee.location}</Typography>
                </Grid>
            </Card> 

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} >
                 <span className={classes.label}>Section</span>
              </Grid>
              <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.section}</Typography>
                </Grid>
            </Card>

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Shift</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.shift}</Typography>
               </Grid>
            </Card>

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>On leave</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{employee.on_leave}</Typography>
               </Grid>
            </Card>

            {
              employee.on_leave !== 'Not on leave' ? 
              (
                <div>
                  <Card
                    sx={{
                      display: 'grid',
                      gap: 2,
                      mb: 0,
                      p:2
                    }}
                      elevation={0}>
                      <Grid container spacing={2} wrap="wrap">
                       <span className={classes.label}>Leave start date</span>
                    </Grid>
                     <Grid container spacing={2} >
                       <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.leave_start_date).toString().substring(0,15)}`}</Typography>
                     </Grid>
                  </Card>

                  <Card
                    sx={{
                      display: 'grid',
                      gap: 2,
                      mb: 0,
                      p:2
                    }}
                      elevation={0}>
                      <Grid container spacing={2} wrap="wrap">
                       <span className={classes.label}>Leave end date</span>
                    </Grid>
                     <Grid container spacing={2} >
                       <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.leave_end_date).toString().substring(0,15)}`}</Typography>
                     </Grid>
                  </Card>
                </div>
              ): null
            }
          </Grid>

           <Grid md={8}xs={12}>
          <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2}>
                 <span className={classes.label}>Date of birth</span>
              </Grid>
              <Grid container spacing={2}>
                  <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.date_of_birth).toString().substring(0,15)}`}</Typography>
                </Grid>
            </Card> 

            <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} >
                 <span className={classes.label}>Date of enlistment</span>
              </Grid>
              <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.date_of_enlistment).toString().substring(0,15)}`}</Typography>
                </Grid>
            </Card>
            {
              employee.date_of_promotion !== null ? 
              (
                <Card
                  sx={{
                    display: 'grid',
                    gap: 2,
                    mb: 0,
                    p:2
                  }}
                    elevation={0}>
                    <Grid container spacing={2} wrap="wrap">
                     <span className={classes.label}>Date of promotion</span>
                  </Grid>
                   <Grid container spacing={2} >
                     <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.date_of_promotion).toString().substring(0,15)}`}</Typography>
                   </Grid>
                </Card>
              ): null
            }

             <Card
              sx={{
                display: 'grid',
                gap: 2,
                mb: 0,
                p:2
              }}
                elevation={0}>
                <Grid container spacing={2} wrap="wrap">
                 <span className={classes.label}>Date of transfer</span>
              </Grid>
               <Grid container spacing={2} >
                 <Typography variant="subtitle1" className={classes.value} >{`${new Date(employee.date_of_transfer).toString().substring(0,15)}`}</Typography>
               </Grid>
            </Card>
          </Grid>

         </div>
      </Container>
    </Box>
    )
};
