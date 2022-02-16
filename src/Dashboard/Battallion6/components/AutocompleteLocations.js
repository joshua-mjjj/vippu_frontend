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
  { title: 'Kiwanga' },
  { title: 'Kiira' },
  { title: 'Kiwatule ' },
  { title: 'Bunga' },
  { title: 'Sonde ' },
  { title: 'Munyonyo' },
  { title: 'Muyenga' },
  { title: 'Entebbe' },
  { title: 'Near old Kampala P/S' },
  { title: 'Makindye' },
  { title: 'Kyambogo' },
  { title: 'Seeta Mukoni' },
  { title: 'Bukasa muyenga' },
  { title: 'Kololo' },
  { title: 'Plot 58 Lumumba Avenue' },
  { title: 'Namugongo' },
  { title: 'Plot 19 Lumumba Avenue' },
  { title: 'Seeta Mukono' },
  { title: 'Kigo Road' },
  { title: 'Mutundwe' },
  { title: 'Kasenyi -Entebbe' },
  { title: 'Jinja road' },
  { title: 'Sonde ' },
  { title: 'Sendagire Road Bunga' },
  { title: 'Kisugu ' },
  { title: 'Tiula Rd Kawempe' },
  { title: 'Kiwatule' },
  { title: 'Makerere' },
  { title: 'Kampala' },
  { title: 'Komamboga ' },
  { title: 'Bunga ' },
  { title: 'Kitende ' },
  { title: 'Kapchorwa' },
  { title: 'Akright Entebbe road' },
  { title: 'Sekiwunga Village Kajjansi' },
  { title: 'Ntinda' },
  { title: 'Nansana' },
  { title: 'Muyenga (Opp International Hotel)' },
  { title: 'Nakulabye - Mengo' },
  { title: 'Buziga' },
  { title: 'Akright estate Entebbe. ' },
  { title: 'Namugongo -Kiira' },
  { title: 'Muyanja' },
  { title: 'Ntinda Stretcher ' },
  { title: 'Mbuya ' },
  { title: 'Namugongo' },
  { title: 'Kiwanuka Villa Mutundwe' },
  { title: 'Katale zone Entebbe ' },
  { title: 'Parliamentary Avenue ' },
  { title: 'Yusuf Lule road' },
  { title: 'Kololo ' },
  { title: 'Kitebi Nalukolongo.' },
  { title: 'Najjera Kira Div ' },
  { title: 'Najjera Kira' },
  { title: 'Ddundu Mukono' },
  { title: 'Bunga' },
  { title: 'Nabbingo' },
  { title: 'Mbuya' },
  { title: 'MOJCA - Kirinya Bukasa' },
  { title: 'Plot 5 George street Georgian house' },
  { title: 'Workers’ house' },
  { title: 'Plot 14 Mbuya Road Bugolobi' },
  { title: 'Kulambiro (near TUBA Police post)' },
  { title: 'Amber House 1st floor' },
  { title: 'Kintintale' },
  { title: 'Ntinda Kyambogo ' },
  { title: 'Kisaasi' },
  { title: 'Rwenzori Tours' },
  { title: 'Plot 18 Katalima Crescent Ntinda' },
  { title: 'Naalya' },
  { title: 'Kololo' },
  { title: 'Seeta High Mukono' },
  { title: 'Muyenga Bukasa' },
  { title: 'Mbalwa Namugongo' },
  { title: 'Wandegeya' },
  { title: 'Kiwatule' },
  { title: 'Bwebajja Entebbe Road' },
  { title: 'Muyenge Bukasa' },
  { title: 'Buganda road near FAO' },
  { title: 'Entebbe Bugonga' },
  { title: 'Kajjansi' },
  { title: 'Laboratory' },
  { title: 'Lunyo road Entebbe ' },
  { title: 'Station old Entebbe' },
  { title: 'Namalere ' },
  { title: 'Dokolo District' },
  { title: 'Mpigi District' },
  { title: 'Gayaza road' },
  { title: 'Kisasi' },
  { title: 'Ntinda Ministers village' },
  { title: 'New Offices' },
  { title: 'Printary' },
  { title: 'Lungujja' },
  { title: 'Plot 157 Ssebowa road Kiwatule' },
  { title: 'Lubowa ' },
  { title: 'Kabaka Njagala Road Mengo' },
  { title: 'Mpala Avenue' },
  { title: 'Plot 31 Luthuli Avenue Bugolobi' },
  { title: 'Plot 11 Malcom X Kololo' },
  { title: 'Plot 13 Prince Anne Bugolobi ' },
  { title: 'Ntinda View Crescent Road.' },
  { title: 'Kansanga' },
  { title: 'Balikuddembe Road Naguru' },
  { title: 'Kirinya' },
  { title: 'Mpererwe' },
  { title: 'Nalumunye' },
  { title: 'Bugolobi' },
  { title: 'Kyebando' },
  { title: 'Kamwokya Tagore Crescent' },
  { title: 'Mutungo Luzira' },
  { title: 'Mbarara - Mukono' },
  { title: 'Seguku Entebbe road' },
  { title: 'Kyadondo road Nakasero ' },
  { title: 'Plot 13 Naguru' },
  { title: 'Masooli Kasangati' },
  { title: 'Kisugu Muyenga ' },
  { title: 'Kasangati' },
  { title: 'Plot 4 Kyambogo View Ntinda' },
  { title: 'Plot 14 Lithuli drive Bugolobi' },
  { title: 'Mutungo Margaret  Grant ' },
  { title: 'Kizungu Makindye' },
  { title: 'Bunamwaya' },
  { title: 'Kirinya ' },
  { title: 'Kitebi – Mutundwe ' },
  { title: 'Mayuge' },
  { title: 'Naguru Rise' },
  { title: 'Kireka' },
  { title: 'Kauga Mukono' },
  { title: 'Plot 26 Kimera Rd Ntinda' },
  { title: 'Semuto Nakaseke District' },
  { title: 'Mukono' },
  { title: 'Quality Chemicals ' },
  { title: '6th Street' },
  { title: 'Kayunga Road ' },
  { title: 'Bunga Soya' },
  { title: 'Wakiso District' },
  { title: 'Nakwero Gayaza Rd. ' },
  { title: 'Nsambya Kabalagala' },
  { title: 'Bweyogerere ' },
  { title: 'Jinja Njeru Industrial Park' },
  { title: 'Industrial Area' },
  { title: 'Head office Industrial Area' },
  { title: 'Head office' },
  { title: 'Kirinya Kalitunsi Road ' },
  { title: 'Naguru ' }, 
];