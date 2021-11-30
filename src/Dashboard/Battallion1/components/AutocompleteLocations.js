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

export default function AutocompleteLocations(props) {
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
          // placeholder={props.default_value}
          placeholder={props.default_value === undefined ? "Enter location here, if employee has no location type None" : props.default_value}
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
  { title: 'PLOT 11 Yusufu Lule road', year: 1994 },
  { title: 'Nakasero', year: 1994 },
  { title: 'Kololo', year: 1994 },
  { title: 'Plot 60 Malcom X Road Kololo', year: 1994 },
  { title: 'Kololo Plot 4 Ngabo Road', year: 1994 },
  { title: 'Plot 13 CHWA 11 Road', year: 1994 },
  { title: 'Plot 2 Saddler ways Naguru', year: 1994 },
  { title: 'Plot 15', year: 1994 },
  { title: 'Plot 4 Moyo close Kololo', year: 1994 },
  { title: 'Plot 4 Moyo close Kololo', year: 1994 },
  { title: 'Plot 4 Moyo close Kololo', year: 1994 },
  { title: 'Plot 957 Munyonyo', year: 1994 },
  { title: 'Clement road', year: 1994 },
  { title: 'Plot 9 George street', year: 1994 },
  { title: 'Mbuya', year: 1994 },
  { title: 'Plot 60A Prince Charles Drive Kololo', year: 1994 },
  { title: 'Plot 1 Lumumba Avenue Rwenzori house', year: 1994 },
  { title: 'Plot 25 Sserunkuma Road Mbuya', year: 1994 },
  { title: 'Plot 88 Buganda Road Wandegeya', year: 1994 },
  { title: 'Ministry  of Agriculture', year: 1994 },
  { title: 'Plot 44 Valley Close Ntinda', year: 1994 },
  { title: 'Plot 92 Luthuli Avenue Bugolobi', year: 1994 },
  { title: 'Plot 11/13 Makenzie close Kololo', year: 1994 },
  { title: 'Plot 280 Industrial area Ntinda', year: 1994 },
  { title: 'Plot 270 Sir Apollo Kagwa Road Old Kampala', year: 1994 },
  { title: 'Kisaasi', year: 1994 },
  { title: 'Plot 11 Hill Drive Kololo', year: 1994 },
  { title: 'Plot 26A Bazarabusa Drive Bugolobi', year: 1994 },
  { title: 'Basker Ville East Kololo', year: 1994 },
  { title: 'Plot 6A Bukoto Crescent Naguru', year: 1994 },
  { title: 'Plot 47 Bukoto Crescent Naguru', year: 1994 },
  { title: 'Plot 40 Mackenzie Vale Kololo', year: 1994 },
  { title: 'Plot 29/30 Nakasero road', year: 1994 },
  { title: 'Plot 41B Road Kololo', year: 1994 },
  { title: 'Katelima Crescent Naguru', year: 1994 },
  { title: 'Plot 4 Prince Charles Chine Kololo', year: 1994 },
  { title: 'Plot 4 Nile Avenue Nakasero', year: 1994 },
  { title: 'Plot 4 Nile Nakasero', year: 1994 },
  { title: 'Plot 7 Kololo Summit view House Road', year: 1994 },
  { title: 'Muvule East road Naguru', year: 1994 },
  { title: 'Mbarara', year: 1994 },
  { title: 'Isigiro District', year: 1994 },
  { title: 'Hoima District', year: 1994 },
  { title: 'Gulu District', year: 1994 },
  { title: 'Moroto District', year: 1994 },
  { title: 'Arua District', year: 1994 },
  { title: 'Nakawa', year: 1994 },
  { title: 'None', year: 2014 },
];
