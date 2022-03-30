const fetch = require("node-fetch");
const serverURL = "https://api.infotointell.com/api/";

const getHeader = () => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return header;
};
const dest = "ner";

const createPostJSON = (data) => {
  const lbc = {
    method: "POST",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createPutJSON = (data) => {
  const lbc = {
    method: "PUT",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};
const createDELETEJSON = (data) => {
  const lbc = {
    method: "DELETE",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(data),
  };
  return lbc;
};

const createGetJSON = () => {
  const lbc = {
    method: "GET",
    headers: getHeader(),
    withCredentials: true,
    crossdomain: true,
    timeout: 5000,
  };
  return lbc;
};

const citiesEn = [ "Ouagadougou",
"Nouna",
"Manga",
"Léo",
"Koupéla",
"Koudougou",
"Kongoussi",
"Kombissiri",
"Kokologo",
"Kaya",
"Houndé",
"Gourcy",
"Garango",
"Fada N'gourma",
"Dori",
"Djibo",
"Diapaga",
"Dédougou",
"Boussé",
"Boulsa",
"Bobo-Dioulasso",
"Banfora",
"Gaoua",
"Orodara",
"Yambol",
"Vratsa",
"Vidin",
"Velingrad",
"Veliko Tŭrnovo",
"Varna",
"Targovishte",
"Troyan",
"Dobrich",
"Svishtov",
"Svilengrad",
"Stara Zagora",
"Dupnitsa",
"Sofia",
"Smolyan",
"Sliven",
"Silistra",
"Shumen",
"Sevlievo",
"Sandanski",
"Samokov",
"Ruse",
"Razgrad",
"Rakovski",
"Popovo",
"Plovdiv",
"Pleven",
"Petrich",
"Peshtera",
"Pernik",

"Panagyurishte",
"Escaldes-Engordany",
"Andorra la Vella",
"Umm al Qaywayn",
"Raʼs al Khaymah",
"Ash Shāriqah",
"Dubai",
"Al Fujayrah",
"Al Fujayrah",
"Ash Shāriqah",
"Abu Dhabi",
"Al Fujayrah",
"Abu Dhabi",
"Ajman",
"Ash Shāriqah",
"Abu Dhabi",
"Nīmrūz",
"Takhār",
"Herat",
"Jowzjān",
"Ghowr",
"Sar-e Pol",
"Sar-e Pol",
"Samangān",
"Takhār",
"Jowzjān",
"Kunduz",
"Wilāyat-e Baghlān",
"Kabul",
"Wilāyat-e Baghlān",
"Faryab",
"Laghmān",
"Balkh",
"Helmand",
"Herat",
"Kunduz",
"Khowst",
"Balkh",
"Nīmrūz",
"Kunduz",
"Herat",
"Kandahār",
"Kabul",
"Nangarhār",
"Parvān",
"Herat",
"Badghis",
"Ghaznī",
"Helmand",
"Paktia",
"Badakhshan",
"Farah",
"Herat",
"Parvān",
"Lowgar",
"Bāmīān",
"Balkh",
"Wilāyat-e Baghlān",
"Takhār",
"Konar",
"Konar",
"Faryab",
"Panjshir",
"Nangarhār",
"Saint John",
"N/A",
"Vlorë",
"Kukës",
"Korçë",
"Gjirokastër",
"Elbasan",
"Dibër",
"Vlorë",
"Tiranë",
"Shkodër",
"Fier",
"Fier",
"Lezhë",
"Lezhë",
"Berat",
"Durrës",
"Tiranë",
"Fier",
"Fier",
"Durrës",
"Berat",
"Syunik Province",
"Syunik Province",
"Syunik Province",
"Ararat Province",
"Ararat Province",
"Yerevan",
"Armavir Province",
"Lori Province",
"Gegharkunik Province",
"Ararat Province",
"Lori Province",
"Gegharkunik Province",
"Kotayk Province",
"Armavir Province",
"Shirak Province",
"Aragatsotn Province",
"Kotayk Province",
"Lunda Sul",
"Lunda Norte",
"Moxico",
"Uíge",
"Zaire",
"Zaire",
"Cuanza Norte",
"Zaire",
"Malanje",
"Luanda",
"Bengo",
"Cabinda",
"Cuanza Sul",
"Namibe",
"Cuando Cubango",
"Moxico",
"Huíla",
"Huambo",
"Benguela",
"Bié",
"Huambo",
"Benguela",
"Bié",
"Bié",
"Huíla",
"Huambo",
"Benguela",

"Buenos Aires F.D.",
"Entre Rios",

"Misiones",
"Corrientes",
"Entre Rios",
"Misiones",
"Corrientes",
"Corrientes",

"Corrientes",
"Buenos Aires F.D.",
"Chaco",

"Misiones",
"Misiones",
"Misiones",
"Misiones",
"Misiones",

"Formosa",
"Corrientes",
"Misiones",

"Corrientes",
"Misiones",

"Corrientes",

"Entre Rios",
"Misiones",
"Entre Rios",
"Entre Rios",
"Corrientes",
"Corrientes",
"Chaco",
"Misiones",
"Formosa",
"Chaco",
"Entre Rios",
"Corrientes",
"Misiones",

"Corrientes",
"Corrientes",
"Entre Rios",
"Entre Rios",
"Buenos Aires F.D.",
"Entre Rios",

"Buenos Aires F.D.",
"Chaco",

"Misiones",
"Neuquen",
"Tucumán",
"Rio Negro",
"San Juan",

"Chaco",

"Rio Negro",
"Entre Rios",

"Tierra del Fuego",

"Chaco",

"Chubut",

"Salta",
"Tucumán",

"Santiago del Estero",

"San Juan",

"Jujuy",
"Salta",
"Mendoza",
"Jujuy",

"Tucumán",
"Neuquen",
"Mendoza",
"San Luis",

"San Juan",
"San Juan",

"Santa Fe",
"Catamarca",
"Rio Negro",
"Salta",

"Santa Cruz",

"Cordoba",
"Chubut",

"Chaco",

"Chubut",
"Chaco",
"San Juan",
"Neuquen",

"Entre Rios",
"Jujuy",
"Buenos Aires",

"Neuquen",

"Tucumán",
"Mendoza",

"Chaco",

"Jujuy",
"Chaco",
"La Rioja",

"Salta",

"Rio Negro",
"Chaco",
"La Pampa",
"Salta",

"Tucumán",
"Chubut",

"Salta",

"Rio Negro",
"Entre Rios",

"Neuquen",

"Entre Rios",

"Chubut",
"Rio Negro",
"Rio Negro",

"San Juan",
"La Rioja",
"Chaco",

"Neuquen",
"San Juan",
"Rio Negro",
"Chaco",

"Santa Cruz",

"Tucumán",

"Rio Negro",
"Tucumán",
"San Juan",
"Tucumán",
"Buenos Aires F.D.",
"San Luis",
"Rio Negro",

"Eastern District",
"Carinthia",

"Vienna",

"Carinthia",

"Carinthia",

"Salzburg",
"Salzburg",

"Upper Austria",

"Styria",
"Tyrol",

"Carinthia",
"Styria",
"Tyrol",
"Salzburg",
"Styria",
"Vorarlberg",

"Lower Austria",

"Salzburg",

"South Australia",

"Western Australia",

"Northern Territory",


















































"Tasmania",






"Tasmania",




















"Tasmania",














"Australian Capital Territory",


"Tasmania",








"New South Wales",


"Victoria",
"Queensland",































"N/A",
 
"Mariehamns stad",
"Xankǝndi",
"Saatlı",
"Şuşa",
"Salyan",
"Saatlı",
"Neftçala",
"Nakhichevan",
"Lənkəran",
"İmişli",
"Füzuli",
"Jalilabad",
"Bilǝsuvar",
"Beyləqan",
"Astara",
"Shirvan",
"Ağdam",
"Zaqatala",

"Yevlax City",
"Goygol Rayon",
"Xaçmaz",
"Ucar",
"Tǝrtǝr",
"Sumqayit",

"Şǝmkir",
"Şamaxı",
"Shaki City",

"Sabirabad",
"Qusar",
"Quba",
"Hacıqabul",
"Qazax",
"Sumqayit",
"Mingǝcevir",
"Victoria",



"Kürdǝmir",
"Abşeron",

"Göyçay",

"Gǝncǝ",
"Shabran",


"Bǝrdǝ",



"Ağsu",
"Ağdaş",
"Ağcabǝdi",

"Federation of Bosnia and Herzegovina",

"les Escaldes",
"Andorra la Vella",
"Umm al Qaywayn",
"Ras al-Khaimah",
"Khawr Fakkān",
"Dubai",
"Dibba Al-Fujairah",
"Dibba Al-Hisn",
"Sharjah",
"Ar Ruways",
"Al Fujayrah",
"Al Ain",
"Ajman",
"Adh Dhayd",
"Abu Dhabi",
"Zaranj",
"Taloqan",
"Shīnḏanḏ",
"Shibirghān",
"Shahrak",
"Sar-e Pul",
"Sang-e Chārak",
"Aībak",
"Rustāq",
"Qarqīn",
"Qarāwul",
"Pul-e Khumrī",
"Paghmān",
"Nahrīn",
"Maymana",
"Mehtar Lām",
"Mazār-e Sharīf",
"Lashkar Gāh",
"Kushk",
"Kunduz",
"Khōst",
"Khulm",
"Khāsh",
"Khanabad",
"Karukh",
"Kandahār",
"Kabul",
"Jalālābād",
"Jabal os Saraj",
"Herāt",
"Ghormach",
"Ghazni",
"Gereshk",
"Gardēz",
"Fayzabad",
"Farah",
"Kafir Qala",
"Charikar",
"Barakī Barak",
"Bāmyān",
"Balkh",
"Baghlān",
"Ārt Khwājah",
"Āsmār",
"Asadābād",
"Andkhōy",
"Bāzārak",
"Markaz-e Woluswalī-ye Āchīn",
"Saint John’s",
"The Valley",
"Sarandë",
"Kukës",
"Korçë",
"Gjirokastër",
"Elbasan",
"Burrel",
"Vlorë",
"Tirana",
"Shkodër",
"Patos Fshat",
"Lushnjë",
"Lezhë",
"Laç",
"Kuçovë",
"Krujë",
"Kavajë",
"Fier-Çifçi",
"Fier",
"Durrës",
"Berat",
"Kapan",
"Goris",
"Hats’avan",
"Artashat",
"Ararat",
"Yerevan",
"Ejmiatsin",
"Spitak",
"Sevan",
"Masis",
"Vanadzor",
"Gavarr",
"Hrazdan",
"Armavir",
"Gyumri",
"Ashtarak",
"Abovyan",
"Saurimo",
"Lucapa",
"Luau",
"Uíge",
"Soio",
"Nzeto",
"N’dalatando",
"Mbanza Congo",
"Malanje",
"Luanda",
"Caxito",
"Cabinda",
"Sumbe",
"Namibe",
"Menongue",
"Luena",
"Lubango",
"Longonjo",
"Lobito",
"Cuito",
"Huambo",
"Catumbela",
"Catabola",
"Camacupa",
"Caluquembe",
"Caála",
"Benguela",
"Zárate",
"Villa Ocampo",
"Villa Lugano",
"Villaguay",
"Villa Gesell",
"Tigre",
"Tandil",
"San Vicente",
"Santo Tomé",
"Santa Elena",
"San Pedro",
"San Luis del Palmar",
"San Lorenzo",
"San Javier",
"San Isidro",
"Saladas",
"Retiro",
"Resistencia",
"Reconquista",
"Quilmes",
"Puerto Rico",
"Puerto Iguazú",
"Puerto Esperanza",
"Puerto Eldorado",
"Posadas",
"Pontevedra",
"Pirané",
"Paso de los Libres",
"Oberá",
"Necochea",
"Morón",
"Monte Caseros",
"Montecarlo",
"Mercedes",
"Mercedes",
"Mar del Plata",
"Luján",
"La Plata",
"La Paz",
"Jardín América",
"Gualeguaychú",
"Gualeguay",
"Goya",
"Gobernador Ingeniero Valentín Virasoro",
"General José de San Martín",
"Garupá",
"Formosa",
"Fontana",
"Federal",
"Esquina",
"El Soberbio",
"Dolores",
"Curuzú Cuatiá",
"Corrientes",
"Concordia",
"Concepción del Uruguay",
"Colegiales",
"Chajarí",
"Campana",
"Buenos Aires",
"Barranqueras",
"Azul",
"Avellaneda",
"Aristóbulo del Valle",
"Zapala",
"Yerba Buena",
"Villa Regina",
"Villa Paula de Sarmiento",
"Villa Nueva",
"Villa María",
"Villa Dolores",
"Villa Constitución",
"Villa Carlos Paz",
"Villa Ángela",
"Villa Allende",];

const creatOne = (data) => {
  return fetch(serverURL.concat(dest), createPostJSON(data)).then((response) =>
    response.json()
  );
};

citiesEn.forEach((city) => {
  console.log("city", {
    ner_value: city,
    ner_type: "city",
    language: "en",
  });
  creatOne({
    ner_value: city,
    ner_type: "city",
    language: "en",
  }).then((data) => console.log(data));
});
