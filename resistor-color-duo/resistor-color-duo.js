//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([x, y]) => {
  const result = colors.indexOf(x).toString() + colors.indexOf(y).toString();
  return parseInt(result);
};
export const colors = [
  'black',
  'brown',
  'red', 
  'orange', 
  'yellow', 
  'green', 
  'blue', 
  'violet', 
  'grey', 
  'white'
];