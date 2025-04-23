// Add a type annotation to this variable that describes the object it contains.

type Countrys = {
  code: string;
  population: number;
};

const countryPopulation: Countrys = {
  code: "NZ",
  population: 5_135_300,
};
// Define a Country interface that describes the object in this variable.
// Add the Country type as a type annotation for this variable.

interface Country {
  name: string;
  code: string;
  population: number;
}

const countryData = {
  name: "India",
  code: "IN",
  population: 1_352_642_280,
};
// Define a Currency type alias that describes the object in this variable.
// Add the Currency type as a type annotation for this variable.

type Alias = {
  name: string;
  code: string;
  symbol: string;
};

const currencyData = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
};
