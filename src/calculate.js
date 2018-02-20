var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
            'seven', 'eight', 'nine', 'ten', 'eleven',
            'twelve', 'threen', 'fourteen', 'fifteen',
            'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var twos = ['ten', 'twenty', 'thrity', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty', 'hundred'];
 const n = ' ';
function calculate(n){
  
	if (n > 999) {
    return 'Enter small value less than 999';
  }  
  if (n < 0) {
    return 'Enter value larger than 0';
  }

  // find hundrad place

  var outStr = '';
  if (n < 20) {
    outStr += ones[n];
  } else {
   	if (n / 100 >= 1) {
      var div100 = Math.floor(n / 100);
      var rem100 = n % 100;
      outStr += ones[div100] + ' hundred ';
      if (rem100 > 0 && rem100 < 20) {
        outStr += ones[rem100];
      } else if (rem100 > 20) {
        if (rem100 / 10 >= 1) {
          var div10 = Math.floor(rem100 / 10);
          var rem10 = rem100 % 10;
          outStr += twos[div10 - 1] + ' ';

          if (rem10 > 0) {
            outStr += ones[rem10];
          }
        }
      }
    } else if (n / 10 >= 1) {
      var div10 = Math.floor(n / 10);
      var rem10 = n % 10;
      outStr += twos[div10 - 1] + ' ';

      if (rem10 > 0) {
        outStr += ones[rem10];
      }
    } else {
      outStr += ones[n];
    } 
  }
  return outStr.toUpperCase();

}
  console.log(calculate(n));


  export default calculate;
