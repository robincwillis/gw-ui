import { Typed } from 'typed-immutable';

export const Enum = (values, defaultValue) => {
  if (typeof(values) !== 'array') {
    return TypeError(`"${values}" is not an array`);
  }
  const map = {};
  values.each((val) => {
    map[val] = val;
  });
  var validValues = values.toString();

  return Typed(`Enum(${ validValues})`, value => {
    if (!map[value]){
      console.log('made it here');
      return TypeError(`"${value}" in ${validValues}`);
    }
    return value;
  }, defaultValue || values[0]);
};