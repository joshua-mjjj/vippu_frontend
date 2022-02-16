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
  { title: 'Hon Mariam Dhoka Babalanda (Min for Presidency) Residence' },
  { title: 'Hon Lukia Nakadama (3rd Deputy prime minister) residence' },
  { title: 'Hon Mutasingwa Diana Nakabanda (VP’s office) Residence' },
  { title: 'Mr. Mitala John Residence' },
  { title: 'Hon Rwakasisi Chris (Presidential Advisor-security) Residence' },
  { title: 'Hon Wabudeya Beatrice ( Presidential advisor-VET)-Residence.' },
  { title: 'Hon TIM Lwanga (Advisor PM office)- Residence' },
  { title: 'Mr. John Nagenda (Presidential Advisor-Media) Residence' },
  { title: 'Hon SURUMA EZRA (Presidential Advisor- Finance) Residence' },
  { title: 'Presidential Advisor on Rwenzori Region (Hon Christine Muhindo) Residence' },
  { title: 'Senior Presidential advisor on Industry (Hon Amelia kyambadde) Residence' },
  { title: 'Senior Presidential advisor on Economic and Manifesto implementation(Hon Kamuntu Ephraim) Residence' },
  { title: 'Special envoy for special duties office of the president((Hon Ruhakana Rugunda) Residence' },
  { title: 'Presidential Advisor on Infrastructure (Hon Monica Azuba Ntege)' },
  { title: 'Presidential Advisor on Kampala (Hon Sarah Kanyike)' },
  { title: 'PPS of the President (Dr. Kenneth Omona)' },
  { title: 'Presidential secretary on Diplomatic Affairs (Ms Aceng Agnes)' },
  { title: 'Presidential Secretary awards committee/Chancellor (Ms Malole Zaminah) residence' },
  { title: 'Senior Presidential Advisor on public service (Amajo Mary) Residence' },
  { title: 'Presidential Advisor on finance (Hon Maria Kiwanuka) Residence' },
  { title: 'State house (Land & Poverty Alleviation)' },
  { title: 'MIN of state for ethics & integrity (Hon Akello Rose) Residence ' },
  { title: 'Chairperson leadership code of conduct (Ms Karugonjo Roselyn)' },
  { title: 'Deputy chairperson leadership code of conduct (Hon Asuman Kiyinji)' },
  { title: 'Rumee House' },
  { title: 'MIN of Science, Technology & Innovation (Dr Musenero Monica) Residence' },
  { title: 'MIN of Water and environment (Hon Cheptoris Sam) Residence' },
  { title: 'MIN of state for water (Hon Sekkindi Aisha) Residence' },
  { title: 'MIN of state for Environment (Hon Anywar Beatrice) Residence ' },
  { title: 'MD NWSC (ENG. Dr. Mugisha Silver) Residence' },
  { title: 'MD NEMA -Residence  ' },
  { title: 'MIN of state for East African Affairs (Hon Magode Ikuya)Residence' },
  { title: 'Head office ' },
  { title: 'Min for Internal Affairs (Hon Kahinda Ottafiire) Residence' },
  { title: 'ED National Bureau of NGO (Mr. Okello Stephen) Residence ' },
  { title: 'ED NIRA (Mrs. Rosemary Kisembo) Residence' },
  { title: 'Chairman Board NIRA (Mr. Biribwona Joseph) Residence' },
  { title: 'MIN of state for Transport (Hon Byamukama Fred) Residence' },
  { title: 'PS Ministry of Works & Transport (Mr. Bagaya Waiswa) Residence' },
  { title: 'The Commission of Transport Regulation and safety C.L.O (Ministry of works) Mr. Katushabe Winstone) Residence' },
  { title: 'Postal Building (offices)' },
  { title: 'Rt. Hon Prime Minister (Robinah Nabbanja) Residence' },
  { title: 'Gov’t  Chief Whip (Hon Tayebwa Thomas) Residence' },
  { title: 'C.M.O.P.M In charge general duties (Hon Kasule Lumumba) Residence' },
  { title: 'MIN for Karamoja Affairs (HON Kitutu Mary) Residence' },
  { title: 'MIN of state Relief, disaster preparedness and Refugees (Hon Anyakun Esther) Residence' },
  { title: 'MIN of state of Bunyoro Affairs (Hon Jennifer Namuyangu) Residence ' },
  { title: 'MIN of state for Karamoja affairs  (Hon Agnes Nandutu) Residence' },
  { title: 'MIN of state for Teso Affairs (Hon Dr. Ongalo Obote) Residence ' },
  { title: 'MIN of state for Northern region Affairs (Hon. Cwiyucwiny Grace) Residence ' },
  { title: 'US OPM (Mr. Seremba Godfrey) Residence ' },
  { title: 'Comm OPM (Mr. Asiimwe Douglas) Residence ' },
  { title: 'Transport officer OPM (Mr. Kimpi) Residence' },
  { title: 'The integrated Intelligent Computer system (IICS) Technologies office premises' },
  { title: 'MIN of Finance, Planning and economic Development  (Hon Matia Kasaija) Residence' },
  { title: 'MIN of state for finance (General duties Hon Musaasizi) Residence' },
  { title: 'MIN of state for privatization / Investment) Hon Anite Evelyn Residence' },
  { title: 'MIN of state for Micro Finance (Hon Kasolo Haruna) Residence' },
  { title: 'MIN of State for Finance, Planning and Economic Development (Hon Amos Lugolobi) Residence' },
  { title: 'Deputy Treasurer MIN of Finance (Mr. Ochailap Patrick) Residence ' },
  { title: 'ED UNBS (Mr. Ebiru) Residence' },
  { title: 'MIN of Health (Dr. Ruth Aceng) Residence' },
  { title: 'MIN of state for Health general duties (Hon Bangirana Hanifa Kawooya) Residence' },
  { title: 'Director Medical services MOH (Dr. Mwebesa) Residence' },
  { title: 'MIN of Gender, Labor and Social development (Hon Betty Amongi) Residence' },
  { title: 'MIN of state for youth children affairs (Hon Nyirabashitsi Sarah) Residence' },
  { title: 'MIN of state for Gender & Culture (Hon Peace Mutuzo ' },
  { title: 'MIN of state for Disability affairs (Hon Asamo Hellen)' },
  { title: 'MIN of state for Elderly affairs (Hon Gidudu MAfabi)' },
  { title: 'Commissioner for labor (Mr. Asiimwe Alex) Residence' },
  { title: 'Head office' },
  { title: 'National Land Information Center' },
  { title: 'MIN for Lands, Housing and Urban Development (Hon Judith Nabakooba' },
  { title: 'MIN of State for Lands (Hon Mayanja Sam) Residence' },
  { title: 'MIN of state for Urban Development (Hon Obiga Kamia)Residence' },
  { title: 'PS Ministry Of Lands/ Survey (Mrs. Okolany Dorcus)' },
  { title: 'National Building Review board' },
  { title: 'MIN for Kampala & metropolitan affairs (Hon Hajjat Misi Kabanda) Residence' },
  { title: 'MIN of State for KCCA (Hon Kabuye Kyofatogabye)' },
  { title: 'MIN for ICT & National guidance (Hon Baryomunsi Chris) residence ' },
  { title: 'MIN of State for ICT (Hon Joyce Sebugwawo) Residence' },
  { title: 'MIN of state for National guidance (Hon Baluku Kabyanga Residence ' },
  { title: 'Attorney general (Hon Kiryowa Kiwanuka ) Residence' },
  { title: 'D/AG (Hon Kafuuzi Jackson) Residence' },
  { title: 'Solicitor General (Hon Atoke Francis) Residence' },
  { title: 'Principal State Attorney (Mr. Wanyama) Residence ' },
  { title: 'MIN for Justice and Constitutional affairs' },
  { title: 'URSB & Administrator General office' },
  { title: 'MIN of state for L.G (Hon Rusoke Victoria) Residence' },
  { title: 'PS MOLG (Mr. Kumumanya Benjamin) Residence' },
  { title: 'National Conductor Parish MODLE (Hon Galabuzi Denis) Residence' },
  { title: 'MIN of State for foreign affairs (Hon Okello Oryem) Residence ' },
  { title: 'MIN of state for Regional Cooperation (Hon Mulimba John) Residence ' },
  { title: 'PS MOFA (Mr. Bagire Vincent) Residence' },
  { title: 'MIN of Energy & Mineral Development Residence ' },
  { title: 'MIN of State for Mineral Development (Hon Peter Lokeris) Residence' },
  { title: 'MIN of State for energy (Hon Okasai Sidromus) Residence ' },
  { title: 'Eng Dr. Badru Kiggundu Residence ' },
  { title: 'MIN of Tourism, Wild life & Antiquities (Hon Tom Butime)' },
  { title: 'Min of state for Tourism, Wildlife & Antiquities (Hon Mugala Martin) Residence' },
  { title: 'Head office (Farmers House) ' },
  { title: 'MIN of Trade, Industry and Cooperative (Hon Francis Mwebaza) Residence' },
  { title: 'Min of state for co-operatives (Hon Gume Fredrick) Residence' },
  { title: 'MIN of state for trade (Hon Ntabaazi Harriet) Residence' },
  { title: 'PS Ministry of Trade, Industry and cooperatives' },
  { title: 'MIN for Education & Sports (Hon Jannet Kataha Museveni)' },
  { title: 'MIN of state for Higher Education (Hon JC Muyingo) Residence' },
  { title: 'MIN of state for Primary Educ (Hon Dr. Moriku Joyce Kaducu) Residence' },
  { title: 'MIN of State for Sports (Hon Hamson Denis Obua) Residence' },
  { title: 'Commissioner Accounts MOES (Mr. Mugume Kenneth) Residence' },
  { title: 'National Archives and Records Centre' },
  { title: 'MIN of Public Service (Hon Muruli Mukasa) Residence' },
  { title: 'MIN of State for Public Service (Hon Mugase Grace Mary) Residence' },
  { title: 'PS MIN of PS (Ms Catherine Bitarakwate) Residence' },
  { title: 'Agricultural stores' },
  { title: 'Fisheries Department' },
  { title: 'Fisheries Training Institute' },
  { title: 'Aqua culture' },
  { title: 'Aquaculture Research Development Centre' },
  { title: 'NADDEC (National Agricultural Disease Diagnostic and Epidemiology Center Laboratory' },
  { title: 'Agricultural Extension Services ' },
  { title: 'NAGRC & DB (National Animal Genetic Resource Centre and Data Bank' },
  { title: 'Livestock Experimentation STATION OLD Entebbe' },
  { title: 'MAAIF projects explores Courts' },
  { title: 'National Agricultural Mechanical Referral workshop' },
  { title: 'Department of Crop Inspection & Certification ' },
  { title: 'AGWATA Agricultural Mechanization Centre' },
  { title: 'Buwama Agricultural Mechanization Center' },
  { title: 'MIN of state for Agriculture (Hon Kyakulaga Bwino Fred) Residence' },
  { title: 'MIN of AAI&F (Agriculture, Animal Industry and Fisheries) Hon Adoa Hellen) Residence' },
  { title: 'MIN of AAI&F' },
  { title: 'Uganda Allied Health Examinations Board (UAHEB) Offices ' },
  { title: 'Uganda Business Technical Examinations Board (UBTEB) Offices ' },
  { title: 'UBTEB New Offices' },
  { title: 'UBTEB Printary' },
  { title: 'ED UBTEB (MR. Oyesigye) Residence' },
  { title: 'UNEB offices' },
  { title: 'Education Policy Review Commission ' },
  { title: 'Uganda National Midwifery and Nursing Examinations Board (UNMNED) Offices ' },
  { title: 'ED UNMNED (Ms Hellen. Mukakalisa Kataratambi) Residence ' },
  { title: 'Inter University Council Of East Africa' },
  { title: 'Shiek Ramazan Mubajje (Supreme Mufti) Residence' },
  { title: 'Shiek Hussein Hassan Ali' },
  { title: 'Pastor Robert Kayanja' },
  { title: 'Pastor Ssenyonga ' },
  { title: 'Pastor Umaru Mulinde' },
  { title: 'Pastor Katongole ' },
  { title: 'Hon Edward Sekandi (Former VP) Residence' },
  { title: 'Prof Gilbert Bukenya (Former VP) Residence' },
  { title: 'Dr. Specioza Naigaga (Former VP) Residence ' },
  { title: 'Late DR Apollo Milton Obote (Former President) Residence ' },
  { title: 'RT. HON John Patrick Amama Mbabazi (Former PM) Residence' },
  { title: 'Mr. Akandonda Mabrose (Former MD CAA) Residence' },
  { title: 'Hon John Nasasira (Former MIN Residence)' },
  { title: 'Hon Shem Bageine Residence ' },
  { title: 'Hon William Byaruhanga (Former AG) Residence' },
  { title: 'Hon Hajjat Saida Bumba (Former MIN/MP ) Residence' },
  { title: 'MR. Bireije Devis (Former Director Civil Litigation  ' },
  { title: 'Hon Welikhe Micheal Gafabusa Residence' },
  { title: 'Hon Margaret Zziwa (Former Speaker EALA) Residence ' },
  { title: 'Hon Danfred Kidega (Former EALA Speaker) Residence ' },
  { title: 'Ms Nancy Oryem Residence ' },
  { title: 'Dr. Mutumba' },
  { title: 'Mr. Barugahare Charles (Sec for Public University' },
  { title: 'Counsel Twinobusingye Severino Residence' },
  { title: 'MS Bonabaana Residence ' },
  { title: 'Hon Christopher Kibazanga Residence' },
  { title: 'Hon Tumwesigye Elioda (Former MIN) residence' },
  { title: 'Hon Byabagambi John(Former MIN)' },
  { title: 'Hon Esther Mbayo (Former MIN)' },
  { title: 'Hon Kasirivu Atwooki (Former MIN)' },
  { title: 'Hon Mwesigwa Rukutana (Former MIN)' },
  { title: 'Hon Ronald Kibule (Former MIN)' },
  { title: 'Hon Kiwanda Godfrey (Former MIN)' },
  { title: 'Dr Benon M Mutambi (Former PS MIN of Internal Affairs) Residence' },
  { title: 'NRM Secretariat ' },
  { title: 'NRM Offices' },
  { title: 'D/SEC GEN NRM (Hon Rose Namayanja) Residence' },
  { title: 'Treasurer NRM (Hon Nekesa Oundo) Residence' },
  { title: 'Director Mobilization/ Training NRM (Hon Rosemary Nansubuga Sinende)' },
  { title: 'Hon Nobert Mao (Chairperson DP) Residence' },
  { title: 'Mr. Matsiko Joseph (NRM lawyer) Resident ' },
  { title: 'Dr. Tanga Odoi (C/M EC NRM)' },
  { title: 'Hon Rose Akol (CALA) Residence ' },
  { title: 'Hon Mukasa Mbidde (EALA) Residence' },
  { title: 'Hon Theodore Sekikubo (MP Rwemiyaga County Ssembabule) Residence' },
  { title: 'Hon Semujju Nganda Ibrahim (Kiira Municipality) Residence' },
  { title: 'Hon Charlse Bakabulindi (MP for workers) Residence' },
  { title: 'Hon Abdu Kantuntu (Bugweri County) Residence ' },
  { title: 'Hon Okupa Elijah (Kasilo County serere)' },
  { title: 'Hon Bagire Aggrey Henry  (Bunya West County Mayuge)' },
  { title: 'Hon Irene Mulloni Residence ' },
  { title: 'Hon Aber Lillian (Woman MP Kitgum) Residence' },
  { title: 'Hon Kintu Alex-Residence' },
  { title: 'Hon Chekamonda Lukiya Kulanyi (Woman MP Kapchorwa)' },
  { title: 'Hon Akech Janet Grace (Woman Mp Abim) Residence-' },
  { title: 'Hon Silwany Solomon (Bukholi Central County) Mayuge' },
  { title: 'Hon Kamara John Nzeyimaana (Bufumbira North County (Kisoolo)' },
  { title: 'Hon Johnson Mayanja Sanyonnga (Former MP) Residence ' },
  { title: 'Mr. Jalal EL Archkar Residence' },
  { title: 'Hudan Manji Yokuku' },
  { title: 'Mukono Industrial Park ' },
  { title: 'Grow more Seeds ' },
  { title: 'Tian Tiang Group of companies' },
  { title: 'Kampala Electrical MAT' },
  { title: 'Noah’s Ark ' },
  { title: 'Big Boss' },
  { title: 'Fujian one' },
  { title: 'Fujian two' },
  { title: 'SK Mbuga ' },
  { title: 'Ham Enterprises Uganda Ltd' },
  { title: 'Xinbao Meat Factory' },
  { title: 'Amere' },
  { title: 'Bweyogerere Industrial Park' },
  { title: 'Director Modern Agric Infra Ltd' },
  { title: 'Main gate' },
  { title: 'Check Point ' },
  { title: 'Eastern region' },
  { title: 'ED UIRI residence' },
  { title: 'D/ED UIRI Residence' },
  { title: 'Administration office' },
  { title: 'MD’s office' },
  { title: 'Main reception ' },
  { title: 'Staff entrance ' },
  { title: 'Pike house' },
  { title: 'Main store' },
  { title: 'MD’s residence' },
  { title: 'General Guard/ In and Out Side' },
  { title: 'Factory entrance' },
  { title: 'Cash office/ old factory entrance/ Commercial Printing Entrance Office' },
  { title: 'Administration block reception' },
  { title: 'UBC TV new building ' },
  { title: 'Star TV reception ' },
  { title: 'Checking and parking M/V’s' },
  { title: 'Stores ' },
  { title: 'Circular building radio' },
  { title: 'Commercial Building Star TV ' },
  { title: 'Administration block' },
  { title: 'F.A.M Residence' },
  { title: 'UBC Boaster station' },
  { title: 'MD UBC (MR. Agaba) residence' },
  { title: 'Chairman Board UBC Residence' },
  { title: 'Escorts ' },
  { title: 'UBC Boaster' },
  { title: 'Mr. Barungi Kyaffe Board member' },
  { title: 'Media center ' }, 
];