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
          placeholder={
            props.default_value === undefined
              ? 'Enter section here, if employee has no section type None'
              : props.default_value
          }
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
  { title: 'UNDP Head Office', year: 1994 },
  { title: 'UN village', year: 1972 },
  { title: 'Park lane', year: 1974 },

  { title: 'Pulse Lab', year: 2008 },
  { title: 'UNCDF', year: 2008 },
  { title: 'UNODC residence', year: 2008 },
  { title: 'UN Women', year: 2008 },
  { title: 'IFAD office', year: 2008 },
  { title: 'UNDSS office', year: 2008 },
  { title: 'UNDSS office QRF2 commander', year: 2008 },
  { title: 'UNDSS office QRF1', year: 2008 },
  { title: 'Hixon Apartments', year: 2008 },
  { title: 'RES Security analyst', year: 2008 },
  { title: 'WFP', year: 2008 },
  { title: 'Plot 38 Elizabeth Avenue Kololo', year: 2008 },
  { title: 'UNICEF office', year: 2008 },
  { title: 'Boazman Stores', year: 2008 },
  { title: 'WHO', year: 2008 },
  { title: 'Plot 33 Prince Charles Drive', year: 2008 },
  { title: 'World bank', year: 2008 },
  { title: 'Plot 13B Sserunkuma Road', year: 2008 },
  { title: 'IMF Residence', year: 2008 },
  { title: 'FAO office', year: 2008 },
  { title: 'FAO office (EPT2)', year: 2008 },
  { title: 'Mr. Igbokwe Kennedy FAO', year: 2008 },
  { title: 'SPGS office', year: 2008 },
  { title: 'UNHCR new offices', year: 2008 },
  { title: 'UNHCR stores', year: 2008 },
  { title: 'UNHCR Extension', year: 2008 },
  { title: 'AHA Medical Hostel', year: 2008 },
  { title: 'I.C.C field offices', year: 2008 },
  { title: 'Mr. Rion', year: 2008 },
  { title: 'Plot 3 Hill View Drive Bukoto', year: 2008 },
  { title: 'UNFPA', year: 2008 },
  { title: 'I.O.M head office', year: 2008 },
  { title: 'I.O.M new clinic', year: 2008 },
  { title: 'I.O.M Canada Visa Centre', year: 2008 },
  { title: 'I.O.M Transit Centre', year: 2008 },
  { title: 'I.O.M Residence', year: 2008 },
  { title: 'I.L.O head office', year: 2008 },
  { title: 'UNOHCHR office', year: 2008 },
  { title: 'EADB', year: 2008 },
  { title: 'EADB/DG office', year: 2008 },
  { title: 'EADB/DG residence', year: 2008 },
  { title: 'Block 2, 3 and 4', year: 2008 },
  { title: 'UNDP', year: 2008 },
  { title: 'UNHCR Nakivale Refugee Camp', year: 2008 },
  { title: 'I.O.M Kyangwali', year: 2008 },
  { title: 'UNDP Gulu', year: 2008 },
  { title: 'UNDP Moroto', year: 2008 },
  { title: 'UNDP Arua', year: 2008 },
  { title: 'UNAFRI', year: 2008 },
  { title: 'None', year: 1957 },
  { title: 'Administration', year: 1957 }
  // { title: 'Mexico', year: 1957 },
];
