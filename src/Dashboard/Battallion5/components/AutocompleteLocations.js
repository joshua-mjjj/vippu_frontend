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
          // placeholder={props.default_value}
          placeholder={
            props.default_value === undefined
              ? 'Enter location here, if employee has no location type None'
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
  { title: 'Head Office ' },
  { title: 'Gayaza' },
  { title: 'Lower Kololo' },
  { title: 'Plot 60 Lumumba Avenue Nakasero' },
  { title: 'Kyaliwajjala' },
  { title: 'Entrance' },
  { title: 'Reception ' },
  { title: 'Basement' },
  { title: '5th floor' },
  { title: 'Main Building ' },
  { title: 'Buziga' },
  { title: 'Munyonyo' },
  { title: 'IRA' },
  { title: 'Guard' },
  { title: 'Scanner' },
  { title: 'In charge' },
  { title: 'Lower ground' },
  { title: 'Upper ground' },
  { title: 'Office building' },
  { title: 'Block C & D' },
  { title: 'UNRA headquarters' },
  { title: 'Kyambogo (in charge)' },
  { title: 'Namugongo' },
  { title: 'Buwata ' },
  { title: 'Munyonyo' },
  { title: 'Ndejje' },
  { title: 'Ndejje' },
  { title: 'Kisasi' },
  { title: 'Bulindo Kira Division' },
  { title: 'Kirinya ' },
  { title: 'Ntinda' },
  { title: 'Mutungo' },
  { title: 'Block 216 Kigowa zone' },
  { title: 'Nansana' },
  { title: 'Mukono ' },
  { title: 'Amuru Rhino Camp' },
  { title: 'Mpigi' },
  { title: 'Kampala' },
  { title: 'Gulu' },
  { title: 'Moyo' },
  { title: 'Mubende' },
  { title: 'Kasese' },
  { title: 'Masaka' },
  { title: 'Fort portal' },
  { title: 'Jinja' },
  { title: 'Mbarara' },
  { title: 'Ibanda' },
  { title: 'Arua' },
  { title: 'Kitgum' },
  { title: 'Mbale' },
  { title: 'Lira' },
  { title: 'Soroti' },
  { title: 'Masindi' },
  { title: 'Hoima' },
  { title: 'Luwero' },
  { title: 'Kotido' },
  { title: 'Kabale' },
  { title: 'Moroto' },
  { title: 'Mpigi Buwama' },
  { title: 'Kasese' },
  { title: 'Kamudini' },
  { title: 'Right away KJE' },
  { title: 'Bugolobi' },
  { title: 'Old Printary/ Prinatry area' },
  { title: 'Banda' },
  { title: 'Ntinda Kigowa' },
  { title: 'Najjera' },
  { title: 'Bukoto ' },
  { title: 'Bwebajja' },
  { title: 'Bunga Tankhill' },
  { title: 'Kulambio East' },
  { title: 'Kyaliwajjala Bukasa' },
  { title: 'Naguru' },
  { title: 'Bulenga/ Kay…..' },
  { title: 'Seguku Busawula' },
  { title: 'Kitezi' },
  { title: 'Minister’s village' },
  { title: 'Makindye' },
  { title: 'Mawanda' },
  { title: 'Kawempe' },
  { title: 'Lubaga' },
  { title: 'Kira' },
  { title: 'Kitende' },
  { title: 'Kansanga ' },
  { title: 'Workers house' },
  { title: 'Mbuya' },
  { title: 'Main reception' },
  { title: 'ED check point' },
  { title: 'Lord Mayor’s Reception' },
  { title: 'Western gate' },
  { title: 'Komamboga' },
  { title: 'Kazinga Bweyogerere' },
  { title: 'Estate  Drive Nsasa Kira' },
  { title: 'Erias Lukwago road Wakaliga' },
  
];