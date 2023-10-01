export const APP_URL_DEV = "";

export const categories = [
  { id: "BUSINESS_AND_ECONOMICS", label: "Biznes i ekonomia", icon: "work" },
  { id: "EDUCATION", label: "Edukacja", icon: "school" },
  { id: "ENGINEERING", label: "Inynieria", icon: "settings" },
  { id: "MEDICINE", label: "Medycyna", icon: "stethoscope" },
  { id: "NATURAL", label: "Przyroda", icon: "psychiatry" },
  { id: "HUMANISTIC", label: "Nauki humanistyczne", icon: "neurology" },
  { id: "SOCIAL", label: "Nauki społeczne", icon: "group" },
  { id: "SCIENCE", label: "Nauki ścisłe", icon: "science" },
  { id: "ARTS", label: "Sztuka i kultura", icon: "palette" },
  { id: "INFORMATION", label: "Technologie Informacyjne", icon: "computer" },
];

export const defaultFilters = {
  stationary: true,
  universityType: ["PUBLIC"],
};

export const filterStructure = [
  {
    id: "universityType",
    label: "Typ uczelnii",
    type: "select",
    options: [
      { label: "Publiczna", value: "PUBLIC" },
      { label: "Prywatna", value: "PRIVATE" },
    ],
  },
  {
    id: "level",
    label: "Poziom studiów",
    type: "select",
    options: [
      { label: "I stopnia (inżynierskie)", value: "1inz" },
      { label: "I stopnia (licencjackie)", value: "1lic" },
      { label: "II stopnia", value: "2" },
      { label: "Jednoliste magisterskie", value: "2jednolite" },
    ],
  },
  {
    id: "finalsSubjects",
    label: "Przedmioty maturalne",
    type: "select",
    options: [
      { label: "matematyka", value: "matematyka" },
      { label: "język polski", value: "język polski" },
      { label: "język obcy nowożytny", value: "język obcy nowożytny" },
      { label: "biologia", value: "biologia" },
      { label: "chemia", value: "chemia" },
      { label: "filozofia", value: "filozofia" },
      { label: "fizyka", value: "fizyka" },
      { label: "geografia", value: "geografia" },
      { label: "historia", value: "historia" },
      { label: "historia muzyki", value: "historia muzyki" },
      { label: "historia sztuki", value: "historia sztuki" },
      { label: "informatyka", value: "informatyka" },
      {
        label: "język łaciński i kultura antyczna",
        value: "język łaciński i kultura antyczna",
      },
      { label: "wiedza o społeczeństwie", value: "wiedza o społeczeństwie" },
    ],
  },
  // {
  //   id: "interests",
  //   label: "Zainteresowania",
  //   type: "select",
  //   options: [
  //     "Sport i rekreacja",
  //     "Kultura i sztuka",
  //     "Podróże i turystyka",
  //     "Książki i czytelnictwo",
  //     "Gotowanie i kulinaria",
  //     "Muzyka",
  //     "Technologia i nowe technologie",
  //     "Fotografia",
  //     "Ogrodnictwo",
  //     "Gry komputerowe",
  //   ],
  // },
];

export const results = [
  {
    id: 0,
    imageUrl:
      "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3494&q=80",
    name: "Politechnika Śląska",
    location: "Katowice",
  },
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2756&q=80",
    name: "Akademia Górniczo-Hutnicza",
    location: "Kraków",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80",
    name: "Uniwersytet Jagielloński",
    location: "Kraków",
  },
];
