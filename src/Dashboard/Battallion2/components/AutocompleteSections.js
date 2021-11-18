import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(2),
    }
  },
  formLabel:{
      fontSize: '15px',
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Dosis',
      // margin: theme.spacing(4),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
   // margin: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall_:{
    // fontSize: '13px',
    // color: '#1b1f23',
    // border: '1px solid #cfd7de',
    // borderRadius: '5px',
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(0),
    },
     '& .MuiFormControl-root': {
      width: '100%',
    },
    [theme.breakpoints.only('xs')]:{
    	   '& .MuiTextField-root': {
      width: '100%',
  		}
    }
    // padding: theme.spacing(1)
    // marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  inputSmall_date:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1)
   // margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: "56px",
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function AutocompleteSections(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // console.log(props.default_value)

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      onInputChange={(event, newInputValue) => {
        props.get_section_value(newInputValue)
      }}
      renderInput={(params) => (

        <TextField
          {...params}
          className={classes.inputSmall_}
          // sx={{ minWidth: 450 }}
          placeholder={props.default_value}
          disableUnderline
          displayEmpty
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />

      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: 'Algerian Embassy', year: 1994 },
  { title: 'Algerian Ambassador’s Residence', year: 1972 },
  { title: 'Belgium embassy', year: 1974 },
  
  { title: 'Burundi embassy', year: 2008 },
  { title: 'Burundi Ambassador’s Residence', year: 1957 },
  { title: 'Congo Embassy', year: 1957 },
  { title: 'Congo Ambassador’s Residence', year: 1957 },
  { title: 'Congo Deputy Ambassador', year: 1957 },
  { title: 'Cuba Embassy', year: 1957 },
  { title: 'Egyptian Embassy', year: 1957 },
  { title: 'Egyptian Ambassador’s Residence', year: 1957 },
  { title: 'Ethiopian Embassy', year: 1957 },
  { title: 'Ethiopian Ambassador’s Residence', year: 1957 },
  { title: 'Equatorial Guinea embassy', year: 1957 },
  { title: 'French Embassy', year: 1957 },
  { title: 'French Ambassadors', year: 1957 },
  { title: 'Germany Embassy', year: 1957 },
  { title: 'Iran Embassy', year: 1957 },
  { title: 'Iran Ambassador’s Residence', year: 1957 },
  { title: 'Irish Embassy', year: 1957 },
  { title: 'Irish Ambassador’s Residence', year: 1957 },
  { title: 'Italian Embassy', year: 1957 },
  { title: 'Italian Ambassador’s Residence', year: 1957 },
  { title: 'Japan Embassy', year: 1957 },
  { title: 'Japan Ambassador’s Residence', year: 1957 },
  { title: 'Libya Embassy', year: 1957 },
  { title: 'N. Korea embassy', year: 1957 },
  { title: 'Netherland Embassy', year: 1957 },
  { title: 'Netherland Ambassador’s Residence', year: 1957 },
  { title: 'Royal Danish Embassy', year: 1957 },
  { title: 'Royal Danish Ambassador’s Residence', year: 1957 },
  { title: 'S. Korea Embassy', year: 1957 },
  { title: 'S. Korea Ambassador’s Residence', year: 1957 },
  { title: 'S. Sudan Embassy', year: 1957 },
  { title: 'S. Sudan Ambassador’s Residence 1', year: 1957 },
  { title: 'S. Sudan Ambassador’s Residence 2', year: 1957 },
  { title: 'Saudi Arabia Embassy', year: 1957 },
  { title: 'Sudan Khartoum Embassy', year: 1957 },
  { title: 'Sudan Ambassador’s residence', year: 1957 },
  { title: 'Swedish Embassy', year: 1957 },
  { title: 'Swedish ambassador’s Residence', year: 1957 },
  { title: 'Turkey Embassy', year: 1957 },
  { title: 'Turkish Ambassador’s Residence', year: 1957 },
  { title: 'U.A.E Embassy', year: 1957 },
  { title: 'U.A.E Ambassador’s Residence', year: 1957 },
  { title: 'Angola consulate', year: 1957 },
  { title: 'Angola consulate Residence', year: 1957 },
  { title: 'Austria consulate', year: 1957 },
  { title: 'Austria consulate residence', year: 1957 },
  { title: 'Botswana consulate residence', year: 1957 },
  { title: 'Columbia consulate', year: 1957 },
  { title: 'Columbia consulate residence', year: 1957 },
  { title: 'Czech Republic Consulate', year: 1957 },
  { title: 'Czech Republic Consulate residence', year: 1957 },
  { title: 'Eswatin Consulate', year: 1957 },
  { title: 'Esatin Consulate Residence', year: 1957 },
  { title: 'Finland Consulate', year: 1957 },
  { title: 'Gambia Consulate', year: 1957 },
  { title: 'Hungury consulate', year: 1957 },
  { title: 'Hungury consulate residence', year: 1957 },
  { title: 'Indonesia Consulate', year: 1957 },
  { title: 'Labanon consulate Residence', year: 1957 },
  { title: 'Malyesian consulate', year: 1957 },
  { title: 'Malta Consulate', year: 1957 },
  { title: 'Mexico Consulate Residence', year: 1957 },
  { title: 'Morocco Consulate Residence', year: 1957 },
  { title: 'Philipine Consulate', year: 1957 },
  { title: 'Serbia consulate', year: 1957 },
  { title: 'Serbian Consulate Residence', year: 1957 },
  { title: 'Vietenam Consulate', year: 1957 },
  { title: 'Vietenam Consulate Residence 2', year: 1957 },
  { title: 'Vietenam Consulate Residence 1', year: 1957 },
  { title: 'British High Commission', year: 1957 },
  { title: 'British High Commissioner', year: 1957 },
  { title: 'Indian High Commission', year: 1957 },
  { title: 'Indian High Commissioner Residence', year: 1957 },
  { title: 'Kenyan High Commission', year: 1957 },
  { title: 'Kenyan High Commissioner Residence', year: 1957 },
  { title: 'Nigerian High Commission', year: 1957 },
  { title: 'Nigerian High Commissioner Residence', year: 1957 },
  { title: 'Rwanda high commission', year: 1957 },
  { title: 'Rwanda high commissioner Residence', year: 1957 },
  { title: 'South Africa High Commission', year: 1957 },
  { title: 'Tanzania high commission', year: 1957 },
  { title: 'Tanzania High Commissioner Residence', year: 1957 },
  { title: 'Ambassador semudu', year: 1957 },
  { title: 'Director Tian Tang residence', year: 1957 },
  { title: 'French school', year: 1957 },
  { title: 'Hon Richard Nduhura', year: 1957 },
  { title: 'Hon Kinobe James', year: 1957 },
  { title: 'Iran Cultural Centre', year: 1957 },
  { title: 'Italian cooperation', year: 1957 },
  { title: 'Kenyan defence attachie', year: 1957 },
  { title: 'Landy industries residence', year: 1957 },
  { title: 'Rwanda defence attachie', year: 1957 },
  { title: 'S.Sudan general Mach Paul', year: 1957 },
  { title: 'S. Sudan Brig Majer Mabior', year: 1957 },
  { title: 'S.Sudan General Akok Noon', year: 1957 },
  { title: 'S. Sudan General Ayayi', year: 1957 },
  { title: 'S. Sudan General Dehiung Stephen', year: 1957 },
  { title: 'S. Sudan General Akol Kool', year: 1957 },
  { title: 'S. Sudan LT. General Majok KP', year: 1957 },
  { title: 'S. Sudan LT. Colonel Majok Peter', year: 1957 },
  { title: 'S. Sudan Mr. Lokudi James', year: 1957 },
  { title: 'S. Sudan Vice President', year: 1957 },
  { title: 'S. Sudan General Ketgan Kungu', year: 1957 },
  { title: 'S. Sudan Major General Santino', year: 1957 },
  { title: 'Sudan Khartoum defence attache Residence', year: 1957 },
  { title: 'Tanzania Defence attache', year: 1957 },
  { title: 'Turkey Tika Office', year: 1957 },
  // { title: 'Mexico', year: 1957 },
  
];
