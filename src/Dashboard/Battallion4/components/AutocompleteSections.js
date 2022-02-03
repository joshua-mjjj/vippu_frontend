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
  { title: 'Prime minister (RT Hon Robinah Nabbanja)' },
  { title: 'Former V.P Hon Edward K. Ssekandi' },
  { title: 'Former PM Hon Kintu Musoke' },
  { title: 'Former PM Ruhakana Rugunda' },
  { title: '1st Deputy PM(Gen Moses Ali)' },
  { title: '2nd Deputy PM(Hon Rebecca Kadaga)' },
  { title: '3rd Deputy PM(Hon Lukia Nakadama)' },
  { title: 'Clerk to parliament (Hon Adolf Mwesige)' },
  { title: 'Min of state Office of V.P (Hon Mutasingwa Diana)' },
  { title: 'PRES Advisor (Hon Eng Irene Muloni' },
  { title: 'MIN of Public service(Hon Mululi Mukasa' },
  { title: 'MIN of State Public Service (Hon Mugesa Grace  Mary' },
  { title: 'MIN of Gender, labour & Elderly (Hon Betty Amongi)' },
  { title: 'Former AG(Hon Byaruhanga)' },
  { title: 'MIN of state Karamoja (Hon Agnes Nandutu)' },
  { title: 'Director Physical planning  KCCA' },
  { title: 'Director Engineering KCCA ' },
  { title: 'CHAIRMAN NRM Sironk' },
  { title: 'Hon Prof  Kamuntu (FRM MIN Justice & Const Affairs)' },
  { title: 'Min of water & Environment (Hon Cheptoris Sam)' },
  { title: 'MIN Of State Water(Hon Aisha Ssekandi)' },
  { title: 'MIN for Finance (Hon Matia Kasaijja)' },
  { title: 'MIN for Defence(Hon Vincent Sempijja' },
  { title: 'MIN for tourism (Hon Tom Butime)' },
  { title: 'Hon Esther Mbayo (FRM Min For Presidency)' },
  { title: 'Hon Eng John Nasasira (FRM MIN for Works)' },
  { title: 'MIN for Health (Hon Dr Ruth Acen)' },
  { title: 'MIN of state for health (Hon Hannifa Kawooya)' },
  { title: 'MIN for works (Hon Eng Ntege Azuba)' },
  { title: 'MIN state for Bunyolo affairs (Hon Jane Namuyangu)' },
  { title: 'MIN for Karamoja (Hon Kitutu Mary)' },
  { title: 'MIN of state for tourism/ wild life (Hon Magara Martine) ' },
  { title: 'Hon M.Werikhe Gafabusa (FRM Min)' },
  { title: 'Hon of state for Energy (Hon Okasai Opolot)' },
  { title: 'MIN Of State For International Affairs (Hon Okello Oryem Henry)' },
  { title: 'MIN for Reg Affairs (Hon Mulumba John)' },
  { title: 'MIN of state for Northern Uganda (Hon Chwiyu Cwiny)' },
  { title: 'MIN of State For Works (Hon Peter Lokeris)' },
  { title: 'MIN of state for Disaster (Hon Esther Anyakun)' },
  { title: 'MIN Of State For Labour/Gender/Culture (Hon Peace Mutuzi)' },
  { title: 'Min of state for social (Hon Asamo Hellen)' },
  { title: 'MIN of state for eldery (Hon Gidudu Mafabi.' },
  { title: 'MIN for Kampala (Hon Aisha Kabanda)' },
  { title: 'MIN of state for Environment (Hon Beatrice Anywar)' },
  { title: 'Hon Seninde Rosemary (FRM MIN of state for primary Education)' },
  { title: 'MIN of state for higher Education (Hon JC Muyingo)' },
  { title: 'MIN for ICT (Hon Dr Chris Baryomunsi)' },
  { title: 'MIN of state National guidance (Hon Baluku Kabyanga)' },
  { title: 'MIN for lands/H/U/D (Hon Judith Nabakooba)' },
  { title: 'MIN of state for lands (Hon Mayanja Sam)' },
  { title: 'MIN of state for youth (Hon Sarah Nyirabashitsi)' },
  { title: 'MIN of state for ICT (Hon Joyce Sebugwawo)' },
  { title: 'Gov’t Chief Whip (Hon Teyebwa)' },
  { title: 'MIN for Internal affairs (Hon Kahinda Otafiire)' },
  { title: 'MIN of state Teso affairs (Hon Dr. Ongelo Obote)' },
  { title: 'MIN of state office VP (Hon Kasirivu Atwoki) ' },
  { title: 'MIN of state Micro Finance (Hon Haruna Kasoolo Lugolobi)' },
  { title: 'MIN of state for Finance (Hon Amos Lugolobi)' },
  { title: 'Chairperson NPA (Prof Pamella Mbabazi)' },
  { title: 'Workers MP (Hon Charles Bakabulindi' },
  { title: 'MIN of state for ethics & INT (Hon Akello Rose)' },
  { title: 'MIN of state for local Gov’t (Hon Rusoke Victoria)' },
  { title: 'Former VP (Dr Specioza Kazibwe)' },
  { title: 'Director MIN of  L.G Mr. Gendawalala' },
  { title: 'Head of civil service (Mr. John Mitala)' },
  { title: 'Auditor General (Mr. John Muwanga)' },
  { title: 'Ass Auditor General (Mr. Kato Kayemba)' },
  { title: 'ASS Auditor General (Mr. Masuba Francis)' },
  { title: 'PS MIN Of Public Service (Mr. Bitarakwate)' },
  { title: 'Director ICT Police' },
  { title: 'MIN of state Primary Education (Hon Joyce Maruku)' },
  { title: 'Mr. Katushabe (Comm Min of TPT & works)' },
  { title: 'Mr. Rukitana Mwesigwa (FRM Minister )' },
  { title: 'Mr. Asiimwe (Com refugees OPM)' },
  { title: 'Dr. Kiyimba (director ICT OPM)' },
  { title: 'Hon Bagiire (FRM Minister)' },
  { title: 'MIN of state Agric (Hon Kyakulaga)' },
  { title: 'MS. Mulwana Babrah (MD Mulwana/ Jesa)' },
  { title: 'Mr. Ocailap (Deputy director treasury Finance)' },
  { title: 'MIN of state for Cooperatives (Hon Gume)' },
  { title: 'MIN of state for trade/IND (Hon Nabatanzi Harriet)' },
  { title: 'Mr. Anderson (Deputy RCC Nakawa)' },
  { title: 'PS MIN of lands (Mr. Okalang Dorcus)' },
  { title: 'Former PM (RT Hon Amama Mbabazi)' },
  { title: 'Deputy Administration general (Ms. Kobusingye)' },
  { title: 'Transport officer OPM (Mr. Ezekeil Kimpi)' },
  { title: 'MIN of state internal affairs (Hon Obiga Kania)' },
  { title: 'Former CJ (BART Katurebe Hon)' },
  { title: 'MP Kirihura (Hon Tumuramye Genen...)' },
  { title: 'Wife to Former CJ (Bart Katureebe)' },
  { title: 'J/HC Hon JUST Jean Rwakakoko' },
  { title: 'Hon JUST Wako Wambuzi (RTD CJ)' },
  { title: 'Hon JUST Benjamin Odoki (RTP CJ)' },
  { title: 'Wife To RTD CJ Benjamin Odoki ' },
  { title: 'Hon JUST Benjamin Odoki (RTD CJ)' },
  { title: 'J/SC Hon JUST Jonathan Tumwesigye' },
  { title: 'J/SC Hon Lady JUST Kisakye Esther' },
  { title: 'J/SC Hon JUST Arach Amoko' },
  { title: 'J/SC Hon JUST Augustine Nshimye' },
  { title: 'J/SC Hon JUST Opio Aweri ' },
  { title: 'J/SC Hon lady JUST Prof Lilian Ekirikubinza' },
  { title: 'J/SC Hon lady JUST Faith Mwondha' },
  { title: 'J/SC Hon JUST Magumba' },
  { title: 'Hon JUST Kitumba (RTD J/SC)' },
  { title: 'Hon JUST Galdino Okello (RTD J/SC)' },
  { title: 'CJ Hon Justice Owiny Dollo' },
  { title: 'D/CJ Hon Justice Richard Buteera' },
  { title: 'Deputy Governor BOU (Dr. Micheal Atingi)' },
  { title: 'Hon JUST Stephen Kavuma (RTD D/CJ)' },
  { title: 'J/COA Hon JUST Remmy Kasule' },
  { title: 'J/COA Hon JUST Kiryabwire' },
  { title: 'J/COA Hon JUST Hellen Obura' },
  { title: 'J/COA Hon lady JUST Elizabeth Mugimba' },
  { title: 'J/COA Hon JUST Catherine Bamugemereirwe' },
  { title: 'J/COA Hon JUST Cherebron Barashaki' },
  { title: 'J/COA Hon JUST Madrama Christopher' },
  { title: 'J/HC Civ Div JUST Nkonge Lugadia ' },
  { title: 'J/HC Civ Div Hon lady JUST Wolayo' },
  { title: 'Hon JUST Margaret Oguli (RTD J/HC)' },
  { title: 'J/HC CIV DIV Hon JUST Lydia Magembe' },
  { title: 'J/HC CIV DIV Hon JUST Musota Stephen' },
  { title: 'J/HC CIV DIV Hon JUST Bashaija' },
  { title: 'Min of State for Tourism (FRM Hon Kiwanda)' },
  { title: 'Hon JUST. G. Namundi (J/F/Court) ' },
  { title: 'Hon JUST Lwanga (J/HC Land DIV)' },
  { title: 'Hon JUST Zeija Flavia (P/J)' },
  { title: 'Hon JUST Mpagi B (FRM DCJ)' },
  { title: 'Hon JUST Ogoola James (RTD/PJ)' },
  { title: 'Hon JUST Kakuru (RTD)' },
  { title: 'J/HC Hon JUST Gadenya' },
  { title: 'J/HC Hon JUST  Nyanzi Y' },
  { title: 'J/HC Hon JUST Kabanda K' },
  { title: 'J/HC Hon JUST Luswata ' },
  { title: 'J/HC Hon JUST Rugadya' },
  { title: 'J/HC Hon JUST Kigundu J' },
  { title: 'J/HC Hon JUST Okwanga V' },
  { title: 'J/HC Hon JUST Batema David' },
  { title: 'J/HC Hon JUST Keitirima E' },
  { title: 'J/HC Hon JUST Nabusinde W' },
  { title: 'J/HC Hon JUST Elubu Micheal' },
  { title: 'J/HC Hon JUST Elizabeth Alividza' },
  { title: 'J/HC Hon JUST Murangira' },
  { title: 'J/HC Hon JUST Tumusiime' },
  { title: 'J/HC Hon JUST  Basaaza Patricia W' },
  { title: 'J/HC Hon JUST Wangututsi' },
  { title: 'J/HC Hon JUST Masalu Munene' },
  { title: 'J/HC Hon JUST Mutonyi M' },
  { title: 'J/HC Hon JUST Muhanguzi Ezekiel' },
  { title: 'J/HC Hon JUST Gidudu L' },
  { title: 'J/HC Hon JUST Kainamura Billy' },
  { title: 'Mr. Ofwono Opondo (Spokesperson NRM)' },
  { title: 'Director LDC (Mr. Frank) Othembi)' },
  { title: 'J/HC Hon JUST Komuhangi Alice' },
  { title: 'J/HC Hon JUST Anglin S' },
  { title: 'J/HC Hon Matovu David' },
  { title: 'J/HC Hon  Ruhinda A' },
  { title: 'J/HC Hon Kwesiga W' },
  { title: 'J/HC Hon Ajok A' },
  { title: 'J/HC Hon Mubiru S' },
  { title: 'J/HC Hon M.K. Kazibwe' },
  { title: 'J/HC Hon Katunguka ' },
  { title: 'J/HC Hon Okalany Susan' },
  { title: 'J/HC Hon Ajiji Alex' },
  { title: 'J/HC Hon Asiimwe T' },
  { title: 'J/HC Hon  Kavuma' },
  { title: 'Hon JUST Baguma Emmanuel' },
  { title: 'Hon JUST A Bitature' },
  { title: 'Hon JUST H Adonyo' },
  { title: 'Hon JUST Oyuku Ojok' },
  { title: 'Hon JUST Apiny Margaret' },
  { title: 'Hon JUST P.K Onega' },
  { title: 'Hon JUST  Mugabo Vincent' },
  { title: 'Hon JUST Elizabeth Nahamya' },
  { title: 'Hon JUST Esther Mbayo' },
  { title: 'H/W Nabakooza ' },
  { title: 'Hon Lady JUST Mulyagonja ' },
  { title: 'D/IGG Ms. Mariam Wangadya' },
  { title: 'Mr. Kisirye Stephen (Director INF)' },
  { title: 'SOL General (Mr. Atoke Francis)' },
  { title: 'Hon Just Chibitah (FRM DPP)' },
  { title: 'ASS DPP (Mr. JB Asiimwe)' },
  { title: 'ASS DPP Mr. Olem Ogwal' },
  { title: 'PSA Mr. Kalinaki Brian' },
  { title: 'PSA Mr. Lino Anguzo' },
  { title: 'SPSA Ms. Racheal Bikhola' },
  { title: 'FRM SPSA Late Kagezi Family' },
  { title: 'Deputy AG Hon JUST Kafuuzi George' },
  { title: 'DPP Hon JUST Jane Francis Abodo' },
  { title: 'SA MS Barbra Kawuma' },
  { title: 'SA MS Marion Bembela' },
  { title: 'DPP INT Affairs Mr. Odumbi James' },
  { title: 'J/HC Hon JUST Wagona Vincent' },
  { title: 'SSA MRS Jacklyn Okwi' },
  { title: 'PSA MS  Samali Wakhooli' },
  { title: 'SA MS Lilian Auma' },
  { title: 'SA MS Namatovu Josephine' },
  { title: 'PRO DPP Ms Jane Akuo' },
  { title: 'CSA Mr. Joseph Kyomuhendo' },
  { title: 'Chairperson EC (Hon JUST Byabakama) ' },
  { title: 'D/Chairperson E.C (Hajjat Aisha Lubega)' },
  { title: 'Dr. Eng Badru Kiggundu (FRM Chairperson EC)' },
  { title: 'AG. SEC E.C (Mr. Mulekwa Ronald)' },
  { title: 'Commissioner E.C (Mr.Mulekwa Mugabi)' },
  { title: 'Commissioner EC (Mr. Tashobya Stephen)' },
  { title: 'Commissioner EC (Hajji Ssebagala K)' },
  { title: 'PRO EC (Mr. Talemwa Jotham)' },
  { title: 'Commissioner EC (Mr. Emorut Peter)' },
  { title: 'Mr. Stephen Ongaria (For Comm EC)' },
  { title: 'Mr. Ethomaru Nathaniel' },
  { title: 'Mukwano Family' },
  { title: 'UNDP RCC (Ms. Susan)' },
  { title: 'Presidential Advisor (Mr. Muhindo Stephen)' },
  { title: 'Lord Mayor (Hajji Erias Lukwago' },
  { title: 'J/Comm Court Hon JUST Wabwire Wejuli' },
  { title: 'MDUCC Eng Irene Kagwa' },
  { title: 'Mr. Mutabazi (Frm MD UCC)' },
  { title: 'CEO I.R.A (Hajji Kadunabi Ali)' },
  { title: 'Director NAADS (Dr. Mugasi)' },
  { title: 'Presidential Advisor (Hon Wabudeya)' },
  { title: 'Pastor Robert Kayaga' },
  { title: 'Pastor Umar Mulinde' },
  { title: 'Pastor Katongole' },
  { title: 'Parliamentary Comm (Hon Zaake Francis)' },
  { title: 'Parliamentary Comm (Hon Akampulira Prossy)' },
  { title: 'Parliamentary Comm (Hon Afoyocan)' },
  { title: 'Presidential Advisor (Mr. John Nagenda)' },
  { title: 'Kyabazinga of Busoga (Prince Gabula Nadiope)' },
  { title: 'VC Makerere (Prof Nawangwe)' },
  { title: 'Chairperson PSC (Hon JUST Ralph OCHAN)' },
  { title: 'D/Chairperson PSC (M/S Musubira Hilda)' },
  { title: 'MD NSSF (Mr. Byaruhanga Richard)' },
  { title: 'Presidential Advisor (Mr. Chris Rwakasisi)' },
  { title: 'VC Kampala UNI (Prof Kateregga)' },
  { title: 'VC Kyambogo UNI (Prof Elly Katunguka)' },
  { title: 'Chancellor Kabale UNI (Prof Mondo Kagonyera)' },
  { title: 'FUFA President (Hon Eng Moses Magogo)' },
  { title: 'ED NEMA (Dr Ankankwasa)' },
  { title: 'Director Finance NRM (Hon Barbrah Oundo)' },
  { title: 'COM GEN URA (Mr. Musinguzi)' },
  { title: 'Director Legal UNRA (Ms Mary Kutesa)' },
  { title: 'Head Enforcement UNRA (Mr. JB Sejjemba)' },
  { title: 'Head Finance Audit UNRA (Mr Naturinda A)' },
  { title: 'Director Roads &  Bridges UNRA (Mr. Muhoozi)' },
  { title: 'ED UNRA (Ms. Allen Kagina)' },
  { title: 'President’s lawyer (Mr. Kiryowa Kiwanuka' },
  { title: 'Hon Ssenyonga Muyanja (FRM MP Mukono)' },
  { title: 'PS OPM (Ms Gawatude)' },
  { title: 'SEC General NRM (Hon Kasule Lumumba)' },
  { title: 'SEC General NRM ' },
  { title: 'Chairperson EC NRM (Dr Tanga Odoi)' },
  { title: 'VC EC NRM (Mr. Kigaji John)' },
  { title: 'National Treasurer NRM (Hon Namayanja)' },
  { title: 'SEC MUK (Mr. Barugahare)' },
  { title: 'D/VC Academic MUK (Prof Ogwang)' },
  { title: 'COMM EC NRM (Ms Jane Alisembera)' },
  { title: 'Ambassador Sudan (Major Kinobe Jimmy)' },
  { title: 'ED UIRI (Prof Kwesiga C)' },
  { title: 'J/HC Hon JUST Florence Dollo' },
  { title: 'Presidential Advisor Mkt (Mr. Kayongo)' },
  { title: 'D/ED KCCA (Mr. S. Sserunkuma)' },
  { title: 'ED KCCA (Ms. Kissaka Dorothy' },
  { title: 'D/ED KCCA (Mr. Luyimbazi)' },
  { title: 'MIN of state for KCCA (Hon Kabuye Kyofatogabye)' },
  { title: 'Presidential Advisor (Ms. Mary Amajo)' },
  { title: 'CD Konrad Adenver Foundation (Dr Klen Angelika)' },
  { title: 'DG EADB (M/s Vivian Popo)' },
  { title: 'Morocco Consulate (Dr Mwesigwa R)' },
  { title: 'Reg. Supreme Court (HW Harriet Ssali)' },
  { title: 'Chairman MTN UG (Mr. Mbiire Charles) ' },
  { title: 'Governor BOU (Prof Mutebile Emmanuel)' },
  { title: 'Presidential Advisor (Maama Achen Teddy)' },
  { title: 'Hon Elaijah Okop (MP Kasiro County)' },
  { title: 'Hon Nsaba Butulo (MP Bufumba County)  Body guard' },
  { title: 'MIN of State Sports (Hon Denis Obua Amson)' },
  { title: 'King of Longo (Dr Eng Odongo Moses)' },
  { title: 'Presidential  Advisor (Hon Lilian Abar)' },
  { title: 'Malysia Consulate (Hajji Habib Kagimu)' },
  { title: 'PS MOH (Dr. Diana Atwine)' },
  { title: 'J/SC Hon Just Mwangusya' },
  { title: 'Director Health KCCA (Dr. Okello)' },
  { title: 'ERAM Uganda LTD' },
  { title: 'Counsel Severino Twinobusingye' },
  { title: 'Director Uganda Dev’t Cooperation ' },
  { title: 'Hon Stephen Mufuwa (VC Chair LV Mukono)' },
  { title: 'Hon Ngabirano (MP Rwampara County)' },
  { title: 'SEC GEN UG Islamic Religious Council (Sheik Kasangaki Rashid)' },
  { title: 'Presidential Advisor (Princess Namirembe)' },
  { title: 'Commissioner Land inquiry (HW Kazibwe)' },
  { title: 'MD NWSC (Dr Eng Mugisha)' },
  { title: 'Consulate of Hungary (Prof Wavamuno)' },
  { title: 'ENG Ebal. C (Head Infrastructure Judiciary)' },
  { title: 'Ambassador Saudi Arabia (Dr. Ssemudu)' },
  { title: 'Hon Kakooza George (MP EALA)' },
  { title: 'ED NPA (Mr Muvawala J)' },
  { title: 'Hon Otada Sam (MP Kiryandongo)' },
  { title: 'Board member PPDA (Mr. Matsiko J)' },
  { title: 'Mr. Berieje D (FRM Director Civil Litigation)' },
  { title: 'DP President (Hon Nobert Mao)' },
  { title: 'Hon Mukasa Mbidde (MP EALA)' },
  { title: 'Hon Muhumuza D (FRM MP Mwenge North)' },
  { title: 'Director Financial Markets (Mr. Sekibira) ' },
  { title: 'C/P Finance Comm L/G (Dr  Agnes Atim)' },
  { title: 'Mr. Bafaki Charles (Prince Sett Officer OPM)' },
  { title: 'Mauricious Consulate (Mr Amos Nzei)' },
  { title: 'VC/CP Finance COMM LG (Mr Mugabe Yunus)' },
  { title: 'Presidential Press advisor (Mr. Don Wanyama)' },
  { title: 'IGP (Mr. Okoth Ochola)' },
  { title: 'Mrs. Dr.  Josephine Okia (President’s Niece)' },
  { title: 'Hon Musasizi Henry (MP Rubanda)' },
  { title: 'MIN For Science & Technology (Hon Elioda Tumwesigye)' },
  { title: 'ASS DPP ( Mr. Jatiko Thomas )' },
  { title: 'Counsel Edgar Tabaro' },
  { title: 'MS Nancy Oryema (G/daughter FRM IGP Oryema)' },
  { title: 'ComDT SSC Bwebajja (CP) Moses Kafeero' },
  { title: 'Director Transmission Network (State House) Mr. Byaruhanga Felix' },
  { title: 'J/HC Hon JUST Kaweesa Henry' },
  { title: 'Ambassador S/Sudan (H.E AMB Simon Duko)' },
  { title: 'J/HC Hon JUST  Choundry (RTD)' },
  { title: 'CP LAND Commission (Hon Beatrice Byenkya) ' },
  { title: 'Hon Sanjay Tana (FRM MP Tororo Muni)' },
  { title: 'H/W Esther Nasambu' },
  { title: 'HW Asaba Stephen (RSS Bulisa)' },
  { title: 'MD UG EXP Promo Board (MR. Kamugisha)' },
  { title: 'ASS DPP HW Kauma Babirye' },
  { title: 'J/HC Hon JUST Ssekaana Musa' },
  { title: 'J/COA Hon JUST Sabiiti Conerius' },
  { title: 'Hon Kassirabo Boaz (MP Kooki County)' },
  { title: 'Presidential Advisor (Ms Christine Mugalula)' },
  { title: 'Presidential Advisor (Catherine Kasasire)' },
  { title: 'ASS DPP Ms Bikhole Racheal ' },
  { title: 'Head of Shia Muslims (Sheik Hussein Hassan)' },
  { title: 'J/HC Chemutai Tom' },
  { title: 'PSA Ms. Lilian Alumu Omara' },
  { title: 'J/HC Hon JUST Duncan Gwansange ' },
  { title: 'J/HC Hon JUST Gashirabake Christopher' },
  { title: 'J/HC Hon JUST Tweyanze Lawrence ' },
  { title: 'J/HC Hon Serunkuma ' },
  { title: 'J/HC Hon lady Victoria Katamba' },
  { title: 'J/COA Hon JUST Kibedi Muzamir ' },
  { title: 'J/HC Hon JUST Wamala Boniface ' },
  { title: 'J/HC lady JUST Busingye Immaculate ' },
  { title: 'J/HC Hon JUST Muwata' },
  { title: 'J/Comm C Hon JUST ANNE Mugenyi B' },
  { title: 'J/COMM C Hon JUST Abinyo Susan' },
  { title: 'DIR MMP IND PARK (Mr. Jay Daboria) ' },
  { title: 'DIR MMP IND PARK (Mr Sandip Patel)' },
  { title: 'DIR MMP IND PARK (Mr. Kasha Daboria)' },
  { title: 'HW Gakyalo Allen Mpire ' },
  { title: 'Director MMP IND PARK (Mr. Milan) ' },
  { title: 'Chairman MMP IND PARK (Mr. Mangan)' },
  { title: 'MODERN Agric Infra LTD MMP IND PARK' },
  { title: 'Hon Saida Bumba (FRM minister)' },
  { title: 'Hon Chekamonde Rukia FRM MP)' },
  { title: 'J/HC Hon JUST Byaruhanga Jessy' },
  { title: 'Chairperson NIRA (Mr. Biribonwa)' },
  { title: 'ED NIRA (Mrs Rose Mary Kisembo)' },
  { title: 'ED UNBOS (Mr Ebiru)' },
  { title: 'Pastor Senyonga Jackson' },
  { title: 'Mr. JB Kulu Idambi (ASS DPP Fort Portal)' },
  { title: 'Chief Registerar HC (Ms Sarah Langasio)' },
  { title: 'HW Kamasanyu Gladys (Buganda road)' },
  { title: 'J/HC Hon JUST Adoki Philip' },
  { title: 'Mr. SK Mbuga (Business man)' },
  { title: 'MIN of State for Eldery (Hon Sarah Kanyike)' },
  { title: 'Dr. Karugonjo Roselyn (CP leadership C/TRI)' },
  { title: 'Hon Kiyingi Asuman (D/CP leadership C/TRI)' },
  { title: 'Hon Macho Godfrey (MP Busia Muni)' },
  { title: 'DIR BFSUMA (Mr Paddy Mutumba)' },
  { title: 'MS. Alaba (EC)' },
  { title: 'Hajjati Madina Naham (DIR FIN NRM)' },
  { title: 'Hon Kyatuhire Jackline (D/D FIN NRM)' },
  { title: 'Hajji Kigade (Muslim Claric)' },
  { title: 'Professor Mwaka (Gulu City)' },
  { title: 'Ambassador Mumtaz' },
  { title: 'Hon Anite Evelyne’s husband ' },
  { title: 'Ms Bonabaana ' },
  { title: 'DIR MS MOH (Dr Mwebesa)' },
  { title: 'Prof Yusuf Nsubuga (ESC)' },
  { title: 'Prof John David Kabasa (ESC)' },
  { title: 'Dr Irene Nanguka Rusoke  (ESC)' },
  { title: 'Dr Jackline Arinaitwe (ESC)' },
  { title: 'Consulate Czech Republic (Mr. Kaboyo Stephen)' },
  { title: 'Administration' },
  { title: 'None' },
   
];