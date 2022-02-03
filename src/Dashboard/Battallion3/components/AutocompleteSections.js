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
  { title: 'Main gate' },
  { title: 'Chief Magistrate ACD Chambers' },
  { title: 'Deputy Registra Chambers' },
  { title: 'HonLady Justice Tibulya Margaret' },
  { title: 'Hon Justice Gidudu' },
  { title: 'Magistrate Grade one(H/W Namusobya Sarah)' },
  { title: 'ACD/ICD Head office' },
  { title: 'Hon Lady Justice Nahamya Residence' },
  { title: 'Hon Lady Justice Gidudu Lawrence Residence' },
  { title: 'Hon Lady Justice Susan Okalanyi Residence' },
  { title: 'Hon Dr. Justice Bashaija Andrew Residence' },
  { title: 'Hon Justice Mukiibi Moses Residence' },
  { title: 'Hon Justice /OguliOumo Margaret Residence' },
  { title: 'Hon Justice Okwanga Vincent Residence' },
  { title: 'Hon Justice Wangutusi David Residence' },
  { title: 'Hon Justice Okou Jane Residence' },
  { title: 'Hon Lady Justice Tibulya Margaret Residence' },
  { title: 'Hon Lady Justice Elizabeth Kabanda Residence' },
  { title: 'Main gate/ Check point Flag Host' },
  { title: 'Check point ground floor' },
  { title: 'First floor court room 1&2' },
  { title: 'Behind gate' },
  { title: 'Buganda road Court premises' },
  { title: 'H/W Kamasanyu Gladys' },
  { title: 'Main gate entrance' },
  { title: 'Private Parking yard' },
  { title: 'Check point/Reception' },
  { title: 'Court Orderly' },
  { title: 'Basement parks/ judge entrance' },
  { title: 'Night guards commercial court' },
  { title: 'Hon Justice Mubiru Stephen ' },
  { title: 'Hon Justice Gwasanga Duncan residence' },
  { title: 'Hon Lady Justice Anne BitatuleMugenyi Residence' },
  { title: 'Hon Justice Wejuli Wabwire Richard  Residence' },
  { title: 'Hon lady Justice SusanAbinyo Residence' },
  { title: 'Hon lady Justice Jean Rwakakoko residence' },
  { title: 'Hon RTD Justice OkumuWengiResidence' },
  { title: 'Hon RTD Justice Kainamura Billy residence' },
  { title: 'H/W Hatanga (Deputy Registrar Residence' },
  { title: 'Mediation Registrar H/W Babirye Mary Residence ' },
  { title: 'Registrar Flavia Nabakooza (HW) Residence' },
  { title: 'Reception/check point' },
  { title: 'Parking yard' },
  { title: 'Main gate & main building' },
  { title: 'Chief Justice official Residence' },
  { title: 'Chief Justice Residence Owinyi Dollo' },
  { title: 'Hon Lady Arach Stella JSC Residence' },
  { title: 'Hon Lady Justice DrKisakye Esther (JSC) Residence' },
  { title: 'Hon Justice Faith Mwondha (JSC) Residence' },
  { title: 'Hon Justice Prof Ekirikubinza Lilian Tebatembwa JSC residence ' },
  { title: 'Hon Justice Paul Mugamba JSC Residence' },
  { title: 'Hon Justice Ezekiel Muhanguzi JSC residence' },
  { title: 'Hon lady Justice PercyNight Tuhaise JSC residence' },
  { title: 'Hon Justice Chibita Mike JSC Residence' },
  { title: 'Hon RTD Chief Justice WaakoWambuze Residence' },
  { title: 'Hon RTD chief Justice Benjamin Odoch Residence' },
  { title: 'Hon RTD Chef Justice Bat Katureebe Residence' },
  { title: 'Hon RTD Chef Justice Bat Katureebe Residence 2' },
  { title: 'RTD Hon lady Justice CBN KitumbaJSC residence' },
  { title: 'RTD Hon Justice JothamTumwesigye JSC residence' },
  { title: 'RTD Hon justice A.S Nshimye JSC Residence' },
  { title: 'RTD Hon Eldad Mwangushya JSC' },
  { title: 'Main gate High court ' },
  { title: 'Visitors Registration' },
  { title: 'Public exit gate' },
  { title: 'Parking area' },
  { title: 'Judges Entry gate' },
  { title: 'Judges exit gate' },
  { title: 'Upper check point/walk through' },
  { title: 'High court orderlies' },
  { title: 'High court waiting areas' },
  { title: 'Drivers' },
  { title: 'Principle judge Justice Flavia Zeija Residence' },
  { title: 'Hon Justice N.A Batema Residence' },
  { title: 'Hon Lady Justice Winfred Nabisinde Residence' },
  { title: 'Hon justice Micheal Elubu  Residence' },
  { title: 'Hon Lady Justice Lilian Tumusiime Mugisha (IND-court) Residence' },
  { title: 'Hon Justice Ruhinda Asaph (Ind-Court) Residence ' },
  { title: 'Hon Justice Wilson Kwesiga (H/C K’la) Residence' },
  { title: 'Hon Justice Moses Kazibwe (H/C Kabale) Residence' },
  { title: 'Hon Justice Anthony Oyuko Ojok (H/C K’la) Residence' },
  { title: 'Hon. Justice Alex M. Ajiji (H/C Gulu) Residence ' },
  { title: 'Hon Justice Asiimwe Tadeo (H/C Mbarara) Residence' },
  { title: 'Hon Lady Justice Joyce Kavuma (H/C Mbarara) Residence' },
  { title: 'Hon Justice Dr. Henry Adonyo (H/C Soroti) Residence' },
  { title: 'Hon Justice Vincent Emmy Mugabo (H/C Fort Portal) Residence' },
  { title: 'Hon Justice Vincent Emmy Mugabo (H/C Fort Portal)' },
  { title: 'Hon Justice Byaruhanga Jesse (H/C Masindi) Residence' },
  { title: 'Hon Lady justice Katamba Victoria Nakintu (H/C Masaka) Residence' },
  { title: 'Hon Justice Isaac Muwata (H/C Lira) Residence ' },
  { title: 'Hon lady Justice Harrietta Wolayo (H/C Mubende) Residence' },
  { title: 'Hon Justice Gadenya Walimbwa (H/C Masindi) Residence' },
  { title: 'Hon Justice Namundi Godfrey (H/C Mbale) Residence ' },
  { title: 'Hon Justice Sserunkuma Issa (H/C Arua) Residence' },
  { title: 'Hon Lady Justice Margaret Mutonyi (H/C K’la) Residence' },
  { title: 'Hon Lady Justice Jane F Kigundu (H/C Mbarara) Residence' },
  { title: 'Hon Lady Justice Margaret Apiny (H/C Mbale) Residence' },
  { title: 'Hon Justice Tweyanze Lawrence Residence' },
  { title: 'Hon Lady Justice Nakachwa Florence Residence' },
  { title: 'Hon Justice Tom Chemutai' },
  { title: 'Hon Justice Vincent Wagona Residence ' },
  { title: 'RTD P/J Hon Justice James Ogoola Residence' },
  { title: 'RTD P/J Hon Justice Yokoramu Bamwine Residence' },
  { title: 'RTD Hon Justice Anglin Flavia Residence' },
  { title: 'RTD Hon Justice Rugadya Atwooki Residence' },
  { title: 'RTD Hon Justice Lameck Mukasa Residence' },
  { title: 'RTD Patrick Tabaro Residence' },
  { title: 'RTD Hon Justice Dan Akiiki Kiiza' },
  { title: 'RTD Hon Lady Justice Mary Maitum' },
  { title: 'RTD Hon Justice Choudry Shing Residence ' },
  { title: 'RTD Hon Justice PKK Onega' },
  { title: 'Chief Registrar H/W Sarah Langasio Residence' },
  { title: 'Registrar Industrial Court (H/W Sylivia Nabagala) Residence ' },
  { title: 'H/W Amabilis Stella Maris Residence' },
  { title: 'H/W Kamasanyu Gladys Residence' },
  { title: 'H/W Kamasanyu Gladys Residence' },
  { title: 'PS Judiciary Mr. Pius Bigirimana Residence' },
  { title: 'PS Judiciary Mr. Pius Bigirimana Residence' },
  { title: 'Engineer Ebal Christopher Residence' },
  { title: 'Director LDC Mr. Othembi Frank Residence' },
  { title: 'Main gate  (Office)' },
  { title: 'Reception/check point' },
  { title: 'Deputy Registrar’s chambers/corridor ' },
  { title: 'Check point' },
  { title: 'Court orderly' },
  { title: 'Patrol (Parking yard)' },
  { title: 'Patrol (inside & behind court)' },
  { title: 'Hon Justice Murangira Joseph Residence' },
  { title: 'Hon lady Justice Ketra Katunguka Residence' },
  { title: 'Hon Justice Matovu David Residence' },
  { title: 'Hon Lady Justice Lydia Magembe Residence' },
  { title: 'RTD Hon Lady Justice Caroline Atim Okello Residence ' },
  { title: 'Hon Lady Justice Kyomuhangi Alice Residence' },
  { title: 'Main entry/reception' },
  { title: 'Security desk (registry C.O.A)' },
  { title: 'Entrance/ gate' },
  { title: 'Check point (lift)' },
  { title: 'Security desk (civil division)' },
  { title: 'Security desk (land division)' },
  { title: 'Security desk (C.O.A/ constitutional court' },
  { title: 'DCJ’s Security desk (C.O.A/ Constitutional court' },
  { title: 'Court of appeal Night Guard' },
  { title: 'Hon DCJ Richard Buteera (residence)' },
  { title: 'Hon Lady Justice Solomy Balungi Bbosa Residence' },
  { title: 'Hon Justice Kenneth Kakuru (Residence)' },
  { title: 'Hon Justice Fredrick Egonda Ntende Residence' },
  { title: 'Hon Justice Kiryabwire Geoffrey Residence' },
  { title: 'Hon lady Justice Elizabeth Musoke Residence' },
  { title: 'Hon Lady Justice Obura Residence' },
  { title: 'Hon lady Justice Catherine Bamugemereirwe Residence' },
  { title: 'Hon Justice Cheboron Barishaki Residence' },
  { title: 'Hon Justice Christopher Madrama Residence' },
  { title: 'Hon Justice Stephen Musota Residence' },
  { title: 'Hon Justice Muzamir Kibedi ' },
  { title: 'Hon lady Justice Irene Mulyangoja Residence' },
  { title: 'Hon lady Justice Monica Mugenyi Residence' },
  { title: 'Hon Justice Phillip Odoki Residence' },
  { title: 'Hon Justice Boniface Wamala Residence' },
  { title: 'Hon Justice Easther Nambayo Residence' },
  { title: 'Hon Justice Emmanuel Baguma Residence' },
  { title: 'Hon Justice Keiterima John Eudes Residence' },
  { title: 'Hon Justice Patricia Basaaza Residence' },
  { title: 'Hon Justice Henry Kawesa Residence ' },
  { title: 'Hon Justice Henry Kawesa Residence' },
  { title: 'Hon Lady Justice Cornelia Kakooza Sabuti Residence' },
  { title: 'Hon lady Justice Olive Kazaarwe Mukwaya Residence' },
  { title: 'Hon lady Justice Immaculate Busingye Residence' },
  { title: 'Hon Justice Yasin Nyanzi Residence' },
  { title: 'Hon Justice Gashirabake Christopher Residence' },
  { title: 'Hon lady Eva Luswata Residence' },
  { title: 'RTD DCJ S.B.K Kavuma Residence' },
  { title: 'RTD DCJ S.B.K Kavuma Residence' },
  { title: 'RTD DCJ A.E.N Mpagi Bahigeine Residence' },
  { title: 'RTD DCJ SETH MANYINDO Residence' },
  { title: 'RTD Hon Justice S.G Engwau Residence' },
  { title: 'RTD Hon Justice Zehurikize Vincent Residence' },
  { title: 'RTD Hon Justice Remmy Kasule Residence' },
  { title: 'Head office' },
  { title: 'DPP’s office' },
  { title: 'DPP Hon Justice Abodo Jane Frances Residence' },
  { title: 'Deputy DPP Mr. Olem Ogwal Residence' },
  { title: 'Deputy DPP Odumbi James Owere Residence' },
  { title: 'Principle ASST DPP BETTY KHISA ' },
  { title: 'Senior ASS DPP ODIT ANDREW Residence' },
  { title: 'Mr. JB Asiimwe senior ASS DPP Residence' },
  { title: 'ASS DPP Nabasa Carol Residence' },
  { title: 'Senior ASS DPP Mr. Mulindwa Badru Residence' },
  { title: 'ASS DPP Kimuli Residence' },
  { title: 'ASS DPP Samali Wakhooli Residence' },
  { title: 'ASS DPP Lino Anguzo Residence' },
  { title: 'ASS DPP Barbara Kawuma Residence' },
  { title: 'ASS DPP Namatovu Josephine Residence' },
  { title: 'ASS DPP Kalinaki Brian Residence' },
  { title: 'ASS DPP JB Idamba Kulu Residence' },
  { title: 'ASS DPP Bikhola Racheal residence' },
  { title: 'ASS DPP Mr. Jatiko Thomas Residence' },
  { title: 'DPP’s office' },
  { title: 'SPSA Late Kagezi Residence' },
  { title: 'CSA Lilian Alum Omara Residence' },
  { title: 'CSA Kyomuhando Joseph' },
  { title: 'SA Stephen Asaba Residence' },
  { title: 'SSA Okwi Jackylne Residence' },
  { title: 'SA Marion Bembella Residence' },
  { title: 'Reception/walk through machine' },
  { title: 'Main gate/ check point ' },
  { title: 'Floors' },
  { title: 'IGG offices/ patrol basement ' },
  { title: 'Northern gate' },
  { title: 'New Site for IGG offices' },
  { title: 'IGG Hon Betty Kamya Turwomwe Residence' },
  { title: 'Deputy IGG Dr. Patricia Achan Okiria Residence' },
  { title: 'Deputy IGG Ms Annet Twinomujuni Muhairwe Residence' },
  { title: 'PS IGG Rose N Kafeero Residence' },
  { title: 'Director operations IGG Mr. Magezi Joram Residence' },
  { title: 'Director Project Monitoring Mr. Penywii James Residence ' },
  { title: 'Director Reg Office Mr. Muhairwe Polly residence ' },
  { title: 'Director info & interior inspection Mr. Kasirye' },
  { title: 'Kampala Regional office' },
  { title: 'Weekend Program Saturday' },
  { title: 'Weekend Program Sunday' },
  { title: 'Fleet mgt offices' },
  { title: 'Inspectorate of vehicles' },
  { title: 'Garment factory' },
  { title: 'Duty free shop' },
  { title: 'Interpol' },
  { title: 'AIGP Francis Rwego Residence' },
  { title: 'RTD AIGP Elizabeth Muwanga Residence' },
  { title: 'AIGP Edward Ochomo/ OPS Residence' },
  { title: 'RTD SCP Laban Muhabwe Residence' },
  { title: 'CP Bamunoba Ubaldo COMM Marines ' },
  { title: 'IGP Okot Ochola Residence ' },
  { title: 'IGP Okot Ochola ' },
  { title: 'AIGP Ndungutse John (attachie Kenya) ' },
  { title: 'IRAN - Uganda Hospital' },
  { title: 'Police headquarters' },
  { title: 'Covid 19 Isolation centre' },
  { title: 'Deputy Director Medical Services (UPF)' },

  { title: 'Main gate' },
  { title: 'Exit gate' },
  { title: 'Basement' },
  { title: 'AG Residence' },
  { title: 'ASS AG Residence' },
  { title: 'ASS Director Audit (ADA) Residence' },
  { title: 'None' },
  { title: 'Administration' },
  
];