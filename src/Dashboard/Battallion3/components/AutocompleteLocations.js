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
  { title: 'Head office Kololo' },
  { title: 'Court Room 2' },
  { title: 'Kololo' },
  { title: 'Body guard ' },
  { title: 'Court room -Head office Kololo' },
  { title: 'Ntinda' },
  { title: 'Mukono' },
  { title: 'Namugongo' },
  { title: 'Sumbwe Wakiso' },
  { title: 'Mutungo Hill' },
  { title: 'Kirinya' },
  { title: 'Kiwatule' },
  { title: 'Bunga' },
  { title: 'Buganda road Kampala' },
  { title: 'Kampala' },
  { title: 'Buloba Wakiso' },
  { title: 'Kyambogo' },
  { title: 'Bwebajja Wakiso' },
  { title: 'Munyonyo' },
  { title: 'Plot 194 Luthuli Avenue Bugolobi' },
  { title: 'Plot 32 Prince Anne Bugolobi' },
  { title: 'Kyanja Ring road' },
  { title: 'Masooli Kasangati' },
  { title: 'Salongo Lubega close Kyanja Ntinda' },
  { title: 'Plot 64 Nakasero Hill lane' },
  { title: 'Kisugu' },
  { title: 'Kinawataka Mbuya' },
  { title: 'Nalya Estates Pride road' },
  { title: 'Mbowa Road LuwafuMakaya' },
  { title: 'Plot 6 Wamala Avenue Bukoto' },
  { title: 'Muyenga' },
  { title: 'Nyanzi lane LukuliMakindye' },
  { title: 'Plot 701 GAva road Buzigo' },
  { title: 'Kira Town Council' },
  { title: 'Kira ButangaKasangati Road' },
  { title: 'St. Barnabas Plot 6243 Muyenga' },
  { title: 'Nyakyisharara Mbarara' },
  { title: 'Bugolobi' },
  { title: 'Plot 443 Makamba Road Lungujja' },
  { title: 'Plot A13B Lubowa' },
  { title: 'Plot 664 Mawanda road Kamwokya' },
  { title: 'Kitukutwe Kibolongoma' },
  { title: 'Kasangati' },
  { title: 'Lumuli Seeta' },
  { title: 'Bweyogerere ntebetebe' },
  { title: 'Lubwa Plot 3 Entebbe ' },
  { title: 'Nfuufu Entebbe road' },
  { title: 'Biina Luzira' },
  { title: 'Makalazi Rd Bukoto' },
  { title: 'Bunamwaya' },
  { title: 'Kisaasi K’la' },
  { title: 'Kiwanga Seeta' },
  { title: 'Kulambiro' },
  { title: 'Masooli Kasangati' },
  { title: 'Near Kampala Parents School ' },
  { title: 'Mulawa Kira' },
  { title: 'Driver' },
  { title: 'Kasangalabi Mukono' },
  { title: 'Kalambi Buloba' },
  { title: 'Nasuti Mukono' },
  { title: 'Naalya' },
  { title: 'Najeera 2' },
  { title: 'Mpala Entebbe Rd' },
  { title: 'Seeta Kigunga' },
  { title: 'Najeemba Wakiso' },
  { title: 'Mutungo' },
  { title: 'Kirinya Kito zone' },
  { title: 'Naalya Teachers Lane ' },
  { title: 'Residence' },
  { title: 'Kirinya' },
  { title: 'Plot 37 Ssemawata Road Ntinda' },
  { title: 'Musoke Road Bukoto' },
  { title: 'Kayunga Rd Mukono' },
  { title: 'PLOT 76D Minister’s village Ntinda' },
  { title: 'Bakuli Kironde Rd Mengo' },
  { title: 'Plot 144 Muyenga' },
  { title: 'Entebbe' },
  { title: 'Amnesty Commision' },
  { title: 'Najanankumbi' },
  { title: 'Lugazi' },
  { title: 'Kyanja Ndundu' },
  { title: 'Kisooro' },
  { title: 'Makindye Luwafu' },
  { title: 'Ground floor' },
  { title: 'First floor' },
  { title: 'Court room 1' },
  { title: 'Court room 2' },
  { title: 'Court room 3' },
  { title: 'Chambers 4' },
  { title: 'Outside court premises' },
  { title: 'Inside/ outside court premises' },
  { title: 'Bwebajja Entebbe Road' },
  { title: 'Lake view close Lubowa' },
  { title: 'Masooli church road Kasangati' },
  { title: 'Bweyogerere Opp Mamerito Hotel Ntebetebe' },
  { title: 'Plot 15A Kulubya Road Bugolobi' },
  { title: 'Najeera Kira ' },
  { title: 'Basement 1' },
  { title: '1st floor' },
  { title: '2nd floor' },
  { title: '3rd floor' },
  { title: '4th floor' },
  { title: 'Main building ' },
  { title: 'Muyenga Bukasa Rd' },
  { title: 'Union Road Buziga ' },
  { title: 'Plot 17 Kira lane Jinja' },
  { title: 'Martyrs road Ntinda' },
  { title: 'Circular road Mutungo ' },
  { title: 'Plot 4 Spring Road Namugongo' },
  { title: 'Plot 10 Mbuya Port bell Road ' },
  { title: 'Mariam Lane Kulambiro' },
  { title: 'Koob Rd Seeta' },
  { title: 'Near St. John S.S Bweyogerere ' },
  { title: 'Elizabeth lane Kololo' },
  { title: 'Naguru Close Bukoto' },
  { title: 'Kitende' },
  { title: 'Nsumbi Ganda Nansana ' },
  { title: 'Najeera near Najeera Parents  P/School ' },
  { title: 'Nabisunsa' },
  { title: 'Mulawa Palm Estate plot 12095 Kira division' },
  { title: 'Kigo' },
  { title: 'Plot 22 Canaan Sites Kitende ' },
  { title: 'Lugazi ' },
  { title: 'Plot 42 Muwafu Rd Minister’s village Ntinda' },
  { title: 'Kabalega road Luzira' },
  { title: 'Kisaazi' },
  { title: 'Near Mengo Kabaka’z palace' },
  { title: 'Plot 985 Sebowa road Ntinda' },
  { title: 'Kyanja' },
  { title: 'Plot 1060 Kyadondo road Nsambya' },
  { title: 'Kesington Apartments Kyanja road' },
  { title: 'Plot 27 Ministers village Ntinda' },
  { title: 'Plot 16B Ntinda 2 road' },
  { title: 'PLOT 6 Kabalega close Luzira ' },
  { title: 'Kategula Road Kisaasi Kurambiro' },
  { title: 'Plot 4462 Muyenga B off Kironde road' },
  { title: 'DPP office' },
  { title: '12th floor' },
  { title: '11th floor' },
  { title: '7th floor' },
  { title: 'Kira Town council ' },
  { title: 'Bwebajja' },
  { title: 'Kirinya Bweyogerere ' },
  { title: 'Mengo ' },
  { title: 'Kira' },
  { title: 'Busega' },
  { title: 'Buziga' },
  { title: 'Kiteezi' },
  { title: 'Mbalwa Kyaliwajjala ' },
  { title: 'Lungujja' },
  { title: 'Port bell region' },
  { title: 'Kisowera Mukono ' },
  { title: 'Kisaasi' },
  { title: 'Naguru' },
  { title: 'Makindye' },
  { title: 'Kasanga' },
  { title: 'Bukoto' },
  { title: 'Reception' },
  { title: 'Main entrance ' },
  { title: 'Office premises ' },
  { title: 'IGG premises' },
  { title: 'Clement hill road' },
  { title: 'Kitara Entebbe road' },
  { title: 'Lubowa ' },
  { title: 'Kakiri ' },
  { title: 'Mbalwa Kyaliwajala' },
  { title: 'Kikumbi' },
  { title: 'Main gate' },
  { title: 'Surveillance' },
  { title: 'Jinja road' },
  { title: 'Nsambya' },
  { title: 'Mabua road Kololo' },
  { title: 'Bwagu Rd Kirinya' },
  { title: 'Kamuli Rd Kireka' },
  { title: 'Sewati Road Kiira Namugongo' },
  { title: 'Lungala Entebbe' },
  { title: 'Mayanja Rd Bweyogerere' },
  { title: 'Crew' },
  { title: 'Elizabeth Close Kirinya' },
  { title: 'Nsambya Barracks' },
  { title: 'Naalya' },

  { title: 'Head Office' },
  { title: 'Gayaza' },
  { title: 'Lower Kololo' },
  { title: 'Plot 60 Lumumba' },
  { title: 'Plot 60 Lumumba Avenue Nakasero' },
  { title: 'Avenue Nakasero' },
  { title: 'Kyaliwajala' },
  
];