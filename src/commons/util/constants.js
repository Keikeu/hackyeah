export const APP_URL_DEV = "";

export const categories = [
  { id: "dupa10", label: "Biznes i ekonomia", icon: "work" },
  { id: "dupa14", label: "Edukacja", icon: "school" },
  { id: "dupa15", label: "Inynieria", icon: "settings" },
  { id: "dupa13", label: "Medycyna", icon: "stethoscope" },
  { id: "dupa", label: "Przyroda", icon: "psychiatry" },
  { id: "dupa2", label: "Nauki humanistyczne", icon: "neurology" },
  { id: "dupa7", label: "Nauki społeczne", icon: "group" },
  { id: "dupa6", label: "Nauki ścisłe", icon: "science" },
  { id: "dupa11", label: "Sztuka i kultura", icon: "palette" },
  { id: "dupa3", label: "Technologie Informacyjne", icon: "computer" },
];

export const filterStructure = [
  // {
  //   id: "defaultServings",
  //   label: "Default number of servings",
  //   type: "number",
  // },
  {
    id: "stationary",
    label: "Stacjonarne",
    type: "bool",
  },
  {
    id: "public",
    label: "Publiczne",
    type: "bool",
  },
  {
    id: "levvel",
    label: "Poziom studiów",
    type: "select",
    options: [
      { label: "I stopnia (inżynierskie)", value: "1a" },
      { label: "I stopnia (licencjackie)", value: "1b" },
      { label: "II stopnia", value: "2a" },
      { label: "Jednoliste magisterskie", value: "2b" },
    ],
  },
];
