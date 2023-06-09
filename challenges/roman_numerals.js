const romanNumeralUnits = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const romanNumeralTens = {
  0: "",
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "LIX",
};

const romanNumeralHundreds = {
  0: "",
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};
const romanNumeralThousands = {
  0: "",
  1: "M",
  2: "MM",
  3: "MMM",
};

export function convertNumberToRomanNumeral(number) {
  if (number === undefined || isNaN(number))
    throw new Error("number is required");
  if (number > 3000 || number < 1)
    throw new Error("number must be between 1 and 3000");

  const reversedNumbersArray = Array.from(number.toString()).reverse();

  const thousands = reversedNumbersArray[3];
  const hundreds = reversedNumbersArray[2];
  const tens = reversedNumbersArray[1];
  const units = reversedNumbersArray[0];

  const romanNumeral = `${romanNumeralThousands[thousands] || ""}${
    romanNumeralHundreds[hundreds] || ""
  }${romanNumeralTens[tens] || ""}${romanNumeralUnits[units] || ""}`;

  return romanNumeral;
}
