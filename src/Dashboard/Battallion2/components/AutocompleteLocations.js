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
      marginBottom: theme.spacing(2)
    }
  },
  formLabel: {
    fontSize: '15px',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Dosis'
    // margin: theme.spacing(4),
  },
  inputSmall: {
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    // margin: theme.spacing(2),
    '&::after': {
      borderBottom: '1px solid #949494'
    }
  },
  inputSmall_: {
    // fontSize: '13px',
    // color: '#1b1f23',
    // border: '1px solid #cfd7de',
    // borderRadius: '5px',
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(0)
    },
    '& .MuiFormControl-root': {
      width: '100%'
    },
    [theme.breakpoints.only('xs')]: {
      '& .MuiTextField-root': {
        width: '100%'
      }
    }
    // padding: theme.spacing(1)
    // marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  inputSmall_date: {
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1)
    // margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: '56px',
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0)
    }
  }
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
        props.get_section_value(newInputValue);
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
            )
          }}
        />
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: 'Plot 2 Accacia Avenue', year: 1994 },
  { title: 'Plot 27 Kyadondo Road', year: 1972 },
  { title: 'Plot 1 Rwenzori Tower Nakasero', year: 1974 },

  { title: 'Plot 1 Rwenzori Tower Nakasero', year: 2008 },
  { title: 'Plot 3 Kololo Hill Lane', year: 1957 },
  { title: 'Summit view Kololo', year: 1993 },
  { title: 'Plot Opp Basker Ville Road', year: 1994 },
  {
    title: 'Plot 20 Phillip Road Kololo',
    year: 2003
  },
  { title: 'Plot Kololo Hill Drive', year: 1966 },
  { title: 'Ntinda View Ministers Village', year: 1999 },
  {
    title: 'Plot Serunkuuma Road Mbuya',
    year: 2001
  },
  {
    title: 'Plot 33 Hill Prive Kololo',
    year: 1980
  },
  { title: 'Elizabeth Avenue Kololo', year: 1994 },
  { title: 'Plot 49B Upper Kololo Terace', year: 2010 },
  {
    title: 'Plot Basker Ville Kololo',
    year: 2002
  },
  { title: 'Plot 27 Prince Charles Drive', year: 1975 },
  { title: 'Plot 31 Makenzie Valley', year: 1990 },
  { title: 'Plot 16 Lumumba Avenue Nakasero', year: 1999 },
  { title: 'Nakasero Opp KK Nursery School.', year: 1954 },
  {
    title: 'Plot 15 Phillip Road Kololo',
    year: 1977
  },
  { title: 'Hill Lane Kololo', year: 2002 },
  { title: 'Lower Kololo Terrace', year: 1995 },
  { title: 'Plot 5 Yusuf Lule Road Nakasero', year: 1991 },
  { title: 'Plot 1 Kasozi Road Kololo', year: 1946 },
  { title: 'Plot 11 Laurdel Road Nakasero', year: 1997 },
  { title: 'Kololo Hill lane', year: 1995 },
  { title: 'Kyadondo road Nakasero', year: 1994 },
  { title: 'Kagera Road Nakasero', year: 2001 },
  { title: 'Kololo Hill Drive', year: 1998 },
  { title: 'DFCU Building', year: 1998 },
  { title: 'Plot 3 Lumumba Avenue Nakasero', year: 2014 },
  { title: 'Kawalya Kaggwa close Kololo', year: 2014 },
  { title: 'Plot 28 Malcom X Avenue Kololo', year: 2014 },
  { title: 'Philip Road Kololo', year: 2014 },

  { title: 'Plot 14 Teran Avenue Nakasero', year: 2014 },
  { title: 'Sezibwa Road Nakasero', year: 2014 },
  { title: 'Muyanja Bukasa', year: 2014 },
  { title: 'Plot 21 Nakasero Road', year: 2014 },
  { title: 'Plot 24 Lumumba avenue Nakasero', year: 2014 },
  { title: 'Impala Avenue', year: 2014 },
  { title: 'Plot 9 Yusufu Lule Road Nakasero', year: 2014 },
  { title: 'Plot 68 Nakasero Hill road', year: 2014 },
  { title: 'Plot 3 Nagulu', year: 2014 },
  { title: 'Plot 3 Crusada House', year: 2014 },
  { title: 'Malcom x Road', year: 2014 },
  { title: 'Plot 63 Kizungu road', year: 2014 },
  { title: 'Plot 21 Luthuri Avenue Bugolobi', year: 2014 },
  { title: 'Plot 12 Salmon rise Bugolobi', year: 2014 },
  { title: 'Cham Towers', year: 2014 },
  { title: 'Muyenga', year: 2014 },
  { title: 'Serena', year: 2014 },
  { title: 'Bahai', year: 2014 },
  { title: 'Plot Nyonyi Garden’s close', year: 2014 },
  { title: 'Biina Road Mutungo', year: 2014 },
  { title: 'Spear House Jinja road', year: 2014 },
  { title: 'Munyonyo', year: 2014 },
  { title: 'Plot 4 Kintu Road Nakasero', year: 2014 },
  { title: 'Bukoto Ntinda Road', year: 2014 },
  { title: 'Plot 18 Wampewo Avenue', year: 2014 },
  { title: 'PLOT 9/11 Summit View Naguru', year: 2014 },
  { title: 'Plot 6 Kintu Road Nakasero', year: 2014 },
  { title: 'Mbuya Serunkuma Road/ Mwesigwa Road', year: 2014 },
  { title: 'Basker Ville Kololo', year: 2014 },
  { title: 'Luthuli Avenue Bugolobi', year: 2014 },
  { title: 'Chwa Ropad Mbuya', year: 2014 },
  { title: 'Prince Charles Drive Kololo', year: 2014 },
  { title: 'Olol Kiira Road Bukoto', year: 2014 },
  { title: 'Plot 9 Portal avenue Opp Christ the King', year: 2014 },
  { title: 'Plot 29 Kyandondo Road Nakasero.', year: 2014 },
  { title: 'Bunga King ceaser University', year: 2014 },
  { title: 'Plot 4B Windsor loop Kitante Road', year: 2014 },
  { title: 'Plot 33 Kyadondo Road', year: 2014 },
  { title: 'Kyadondo road', year: 2014 },
  { title: 'Plot 5 Kololo Hill lane', year: 2014 },
  { title: 'Upper Kololo Terrace', year: 2014 },
  { title: 'Summit View Off Ridge Way Kololo', year: 2014 },
  { title: 'Nakasero Road', year: 2014 },
  { title: 'Sezibwa Road', year: 2014 },
  { title: 'Nakayima Road Kamwokya', year: 2014 },
  { title: 'Plot 11 Kololo Hill Dive', year: 2014 },
  { title: 'Plot 6 Kagera/ Shimon Road Nakasero', year: 2014 },
  { title: 'Kitende Entebbe road', year: 2014 },
  { title: 'Elizabeth avenue', year: 2014 },
  { title: 'Lugogo bypass', year: 2014 },
  { title: 'Nalya', year: 2014 },
  { title: 'Garuga off Ismail road', year: 2014 },
  { title: 'Upper Naguru road', year: 2014 },
  { title: 'Plot 1 Alexandria avenue Akhright', year: 2014 },
  { title: 'Plot 9-11 Kololo Hill Lane', year: 2014 },
  { title: 'Buziga Opp Country Club', year: 2014 },
  { title: 'Kawempe Tula', year: 2014 },
  { title: 'Kiwatule', year: 2014 },
  { title: 'Kintu Road', year: 2014 },
  { title: 'Plot 17 Luthuli Avenue Bugolobi', year: 2014 },
  { title: 'Plot 4B Mabua Road Kololo', year: 2014 },
  { title: 'Bunga', year: 2014 },
  { title: 'Buziga', year: 2014 },
  { title: 'None', year: 2014 }
];
