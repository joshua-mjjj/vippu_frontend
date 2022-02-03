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
  { title: 'Main Gate ' },
  { title: 'Exit Gate ' },
  { title: 'Basement' },
  { title: 'AG Residence ' },
  { title: 'ASS AG Residence ' },
  { title: 'ASS Director Audit (ADA) Residence' },
  { title: 'Walk through Machine' },
  { title: 'IRA Reception ' },
  { title: 'IRA basement' },
  { title: 'IRA 5th floor' },
  { title: 'Main gate' },
  { title: 'CEO Residence' },
  { title: 'Driver' },
  { title: 'URA Headquarters Nakawa' },
  { title: 'URA Busia' },
  { title: 'URA Mutukula' },
  { title: 'URA Malaba' },
  { title: 'URA Arua' },
  { title: 'URA Bugango' },
  { title: 'URA Busunga' },
  { title: 'URA Elegu' },
  { title: 'URA Entebbe' },
  { title: 'URA Fortportal' },
  { title: 'URA Gulu' },
  { title: 'URA Iganga' },
  { title: 'URA Ishaka ' },
  { title: 'URA Jinja' },
  { title: 'URA Kabale' },
  { title: 'URA Kamwezi' },
  { title: 'URA Katuna' },
  { title: 'URA Kitgum' },
  { title: 'URA Kikagate' },
  { title: 'URA Lira' },
  { title: 'URA Lia' },
  { title: 'URA Masaka' },
  { title: 'URA Masindi ' },
  { title: 'URA Mbale' },
  { title: 'URA Mirama Hills' },
  { title: 'URA  Mityana' },
  { title: 'URA Mukono' },
  { title: 'URA Ntoroko' },
  { title: 'URA Padeya' },
  { title: 'URA Rukungiri' },
  { title: 'URA Soroti' },
  { title: 'URA Swam river' },
  { title: 'URA Tororo' },
  { title: 'URA Vurra' },
  { title: 'Parking entry' },
  { title: 'Check point' },
  { title: 'Main reception' },
  { title: '1st floor' },
  { title: '2nd floor' },
  { title: '3rd floor' },
  { title: 'Land acquisition team' },
  { title: 'UNRA Training Centre' },
  { title: 'Director Legal Services (Mrs Kutesa Mary Residence)' },
  { title: 'Director HR Ms Kagwa Jenifer Residence' },
  { title: 'Head of financial Audit (Mr Natukunda Abbot) Residence' },
  { title: 'Head of Finance (Mr Kwesige Brazas Residence' },
  { title: 'Engineer Ian Paul Bakize Residence' },
  { title: 'Head of Investigation & compliance/ security (CP Chelimo Beata) residence' },
  { title: 'Director internal Audit (Mr. Kasakye Moses) Residence' },
  { title: 'Director corporates services (Mrs. Rugumayo Edna Residence' },
  { title: 'Ntinda view site' },
  { title: 'Head Admin (Mr. Mugenyi David Kabulenga residence' },
  { title: 'Manager Road development (Mr. Richard Kaamu Wabuna) residence' },
  { title: 'Ferry landing site' },
  { title: 'Central stores' },
  { title: 'UNRA station Security supervisor ' },
  { title: 'Enforcement (Mobile weigh bridge)' },
  { title: 'Enforcement (weigh bridge)' },
  { title: 'Enforcement ' },
  { title: 'COMM House' },
  { title: 'UCC offices ' },
  { title: 'ED’S Residence' },
  { title: 'Administration head office' },
  { title: 'Chairperson residence' },
  { title: 'ED Residence' },
  { title: 'Night Supervisor NCO ' },
  { title: 'Main gate/ Access control' },
  { title: 'Sun room' },
  { title: 'Permit Ring' },
  { title: 'Reception' },
  { title: 'Printary ' },
  { title: 'White house Behind' },
  { title: 'Chairman’s Desk' },
  { title: 'Stores ' },
  { title: 'Deputy Chairperson RCS' },
  { title: 'Commission Justice Mugabi' },
  { title: 'Commission Tashobya Stephen Res' },
  { title: 'Commission Emurut Peter' },
  { title: 'Commission Hajji Sebaggala Mustafah Kigumi Residence' },
  { title: 'Commission M/s Nathaniel Etomaru Res' },
  { title: 'SEC – EC Mr. Mulekwa Leonard Res ' },
  { title: 'Director Operations Re ' },
  { title: 'Prof Mr. Bukanya Res' },
  { title: 'Director Finance RES (Mr. Wanga Joseph' },
  { title: 'Director Technical Services (MR. Wamboko Cholla RES' },
  { title: 'Kampala Legal Office ' },
  { title: 'EC office ' },
  { title: 'Kampala District office' },
  { title: 'EC office Kawempe DIV' },
  { title: 'EC office Lubaga DIV' },
  { title: 'EC office Kira DIV' },
  { title: 'Head HR Residence (Mr. Niwamanya James)' },
  { title: 'Political Party Office' },
  { title: 'Main entrance' },
  { title: 'Northern Entrance' },
  { title: 'Control room' },
  { title: 'Ground Lift Lobby' },
  { title: 'NSSF Apartments' },
  { title: 'Social Security house' },
  { title: 'MD’s Residence ' },
  { title: 'DMD’s Residence ' },
  { title: 'CS’s Residence' },
  { title: 'Head Office' },
  { title: 'ED KCCA Residence' },
  { title: 'Director Revenue Residence ' },
  { title: 'Director Public Health Residence' },
  { title: 'Lord Mayor Residence' },
  
];