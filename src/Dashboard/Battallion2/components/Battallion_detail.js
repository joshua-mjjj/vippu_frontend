import * as React from 'react';
import { Box, Card, Container, Grid, Typography } from '@mui/material';	
import { makeStyles } from '@material-ui/core/styles';

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

  // account_number: "AC465768798"
  // armed: "yes"
  // bank: "Centenary"
  // battallion: "battallion_two"
  // branch: "Kampala"
  // contact: "0754674569"
// created_at: "2021-11-09T13:06:10.878461Z"
	// date_of_birth: "2021-11-09"
	// date_of_enlistment: "2021-11-09"
	// date_of_promotion: "2021-11-09"
	// date_of_transfer: "2021-11-09"
  // department: "consolate"
  // education_level: "masters"
  // file_number: "W86574"
  // first_name: "Maria"
  // id: 5
  // ipps: "W/65643"
  // last_name: "Luzinda"
// leave_end_date: "2021-11-09"
// leave_start_date: "2021-11-09"
  // location: "Plot 2 Accacia Avenue"
  // nin: "AC00000654"
// on_leave: "maternity_leave"
  // other_education_level: null
  // rank: "SCP"
  // section: "Algerian Embassy"
  // sex: "male"
  // shift: "none"
  // status: "transfered"
  // title: "deputy_commandant"
// updated_at: "2021-11-09T13:06:10.878519Z"



// leave_end_date
// leave_start_date

export default function Battallion_detail(props){
  const classes = useStyles();
  const { employee } = props;


const departmentVariants = [
  {
    label: 'Embassy',
    value: 'embassy'
  },
  {
    label: 'Consolate',
    value: 'consolate'
  },
  {
    label: 'High commission',
    value: 'high_commission'
  },
  {
    label: 'Other diplomats',
    value: 'other_diplomats'
  },
  {
    label: 'Administration',
    value: 'administration'
  }
];

const titleVariants = [
  {
    label: 'Commandant',
    value: 'commandant'
  },
  {
    label: 'Deputy commandant',
    value: 'deputy_commandant'
  },
  {
    label: 'Staff officier',
    value: 'staff_officer'
  },
  {
    label: 'Head of operations',
    value: 'head_of_operations'
  },
  {
    label: 'Head of armoury',
    value: 'head_of_armoury'
  },
  {
    label: 'Supervisor',
    value: 'supervisor'
  },
  {
    label: 'In charge',
    value: 'in_Charge'
  },
  {
    label: '2nd in charge',
    value: '2nd_in_charge'
  },
  {
    label: 'Driver',
    value: 'driver'
  }
];

const educationVariants = [
  {
    label: 'PLE (Primary)',
    value: 'ple'
  },
  {
    label: 'UCE (O Level)',
    value: 'uce'
  },
  {
    label: 'UACE (A Level)',
    value: 'uace'
  },
  {
    label: 'Diploma',
    value: 'diploma'
  },
  {
    label: 'Bachelors',
    value: 'bachelors'
  },
  {
    label: 'Masters',
    value: 'masters'
  },
  {
    label: 'Doctorate (PhD)',
    value: 'doctorate'
  }
];

const shiftVariants = [
  {
    label: 'Day',
    value: 'day'
  },
  {
    label: 'Night',
    value: 'night'
  },
  {
    label: 'Long night',
    value: 'long_night'
  },
  {
    label: 'Not applicable',
    value: 'none'
  }
];

const leaveVariants = [
  {
    label: 'Pass leave',
    value: 'pass_leave'
  },
  {
    label: 'Maternity leave',
    value: 'maternity_leave'
  },
  {
    label: 'Sick leave',
    value: 'sick_leave'
  },
  {
    label: 'Study leave',
    value: 'study_leave'
  },
  {
    label: 'Annual leave',
    value: 'annual_leave'
  },
  {
    label: 'Not no leave',
    value: 'not_no_leave'
  }
];

const statusVariants = [
  {
    label: 'Active',
    value: 'active'
  },
  {
    label: 'Absent (AWOL)',
    value: 'absent'
  },
  {
    label: 'Transfered',
    value: 'transfered'
  },
  {
    label: 'Sick',
    value: 'sick'
  },
  {
    label: 'Dead',
    value: 'dead'
  },
  {
    label: 'Suspended',
    value: 'suspended'
  },
  {
    label: 'Dismissed',
    value: 'dismissed'
  },
  {
    label: 'In court',
    value: 'in_court'
  },
  {
    label: 'Deserted',
    value: 'deserted'
  },
  {
    label: 'On course',
    value: 'on_course'
  },
  {
    label: 'On mission',
    value: 'on_mission'
  }
];
    const statusVariant = statusVariants.find(
       (variant) => variant.value === employee.status
     );
	const departmentVariant = departmentVariants.find(
	    (variant) => variant.value === employee.department
	);
	const titleVariant = titleVariants.find(
        (variant) => variant.value === employee.title
     );
	const leaveVariant = leaveVariants.find(
        (variant) => variant.value === employee.on_leave
     );
	const educationVariant = educationVariants.find(
        (variant) => variant.value === employee.education_level
     );
	const shiftVariant = shiftVariants.find(
        (variant) => variant.value === employee.shift
     );
  return(
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 2,
      }}
    >
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
                 <Typography variant="subtitle1" className={classes.value} >{titleVariant.label}</Typography>
               </Grid>
            </Card>
            {
            	employee.education_level === "other" ? 
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
                 <Typography variant="subtitle1" className={classes.value} >{educationVariant.label}</Typography>
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
                 <Typography variant="subtitle1" className={classes.value} >{departmentVariant.label}</Typography>
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
                 <Typography variant="subtitle1" className={classes.value} >{statusVariant.label}</Typography>
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
                 <Typography variant="subtitle1" className={classes.value} >{shiftVariant.label}</Typography>
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
                 <Typography variant="subtitle1" className={classes.value} >{leaveVariant.label}</Typography>
               </Grid>
            </Card>

            {
            	employee.on_leave !== 'not_no_leave' ? 
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
