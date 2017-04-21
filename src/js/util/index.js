import numeral from 'numeral';

export const setObjPath = (obj, path, value, notation) => {
  function isObject(obj) { return (Object.prototype.toString.call(obj) === '[object Object]' && !!obj);}
  notation = notation || '.';
  path.split(notation).reduce(function (prev, cur, idx, arr) {
      var isLast = (idx === arr.length - 1);
      // if <cur> is last part of path
      if (isLast) return (prev[cur] = value);
      // if <cur> is not last part of path, then returns object if existing value is object or empty object
      return (isObject(prev[cur])) ? prev[cur] : (prev[cur] = {});
  }, obj);

  return obj;
};

export const getObjPath = (obj, path, notation) => {
  notation = notation || '.';
  return path.split(notation).reduce(function(prev, cur) {
      return (prev !== undefined) ? prev[cur] : undefined;
  }, obj);
};

export const arrToKeyedObj = (arr) => {
  if(!arr) {
    return {};
  }

  return arr.reduce( (obj, item)=> {
    obj[item.id] = item;
    return obj;
  },{});
};

export const keyedObjToArr = (obj, caller) => {
  if(!obj) {
    console.warn('null or undefined passed to keyedObjToArr');
    console.warn(caller);
    return [];
  }

  if(Array.isArray(obj)) {
    console.warn('Array passed to keyedObjToArr');
    console.warn(caller);
    console.log(obj);
    return obj;
  }

  let clonedObj = Object.assign({}, obj);

  return Object.keys(clonedObj).map( (key)=> {
    return Object.assign(clonedObj[key], {id : key});
  });
};

export const flattenObj = (obj) => {
  let toReturn = {};
  let flatObj;
  for (let i in obj) {
    //console.log(i+ ' ' + typeof(obj[i]));
    if (!obj.hasOwnProperty(i)) {
      continue;
    }
    //Exclude arrays from the final result
    //Check this http://stackoverflow.com/questions/4775722/check-if-object-is-array
    if(obj[i] && Array === obj[i].constructor){
      continue;
    }
    if ((typeof obj[i]) === 'object') {
      flatObj = flattenObj(obj[i]);
      for (let x in flatObj) {
        if (!flatObj.hasOwnProperty(x)) {
          continue;
        }
        //Exclude arrays from the final result
        if(flatObj[x] && Array === flatObj.constructor){
          continue;
        }
        toReturn[i + (!!isNaN(x) ? '.' + x : '')] = flatObj[x];
      }
    } else {
      toReturn[i] = obj[i];
    }
  }
  return toReturn;
};

/// Maybe break into new file
export const formatPrice = (number, options, caller) => {
  //console.log('trying to format');
  //console.log(number);
  if(number || number === 0) {
    return numeral(number).format('$0,0.00');
  } else {
    console.warn('formatPrice: tried to format a falsy value');
    console.warn(caller);
    return '';
  }
};

export const formatDate = (date, options) => {
  //TODO
};

export const formatAddress = (address) => {
  if(!address) {return ''}
  let {street, city, state} = address;
  return  `${street}, ${city}, ${state}`;
};

export const formatValue = (value, type) => {
  if(type === 'number'){
    value = Number(value);
  }
  return value;
};

/// Maybe break into new file
export const getProductPrice = (product) => {
    let total = null;
    // console.log(arguments);
    if(product.studentCount) {
     total = product.discount ? (product.price * product.studentCount) - product.discount : product.price * product.studentCount;
    } else {
     total = product.price;
    }
    // this.updateOrderPrice(nextState.order);
    return total;
};

export const getOrderPrice = (order) => {
  let subtotal = order.products ? keyedObjToArr(order.products).reduce( (total, product)=> {
    return total + getProductPrice(product);
  },0) : 0;

  let total = subtotal;
  let tax = order.tax || 0;

  if(order.discount) {
    total = total - order.discount;
  }

  if(order.tax) {
    total = total + order.tax;
  }

  return {
    subtotal : subtotal,
    tax : tax,
    total : total
  };
};

export const getCustomerProducts = (customer, orders) => {
};
