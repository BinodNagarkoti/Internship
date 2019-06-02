naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function isPrime(num) {
  if (num <=1) {
    return false;
  }
  // if(num ==1) return true;
   if(num==2) return true;
  for (var i = 2; i < num; i++) {
    if (num % i != 0) return true;
    else return false;
  }
}



for (i = 0; i < naturalNumber.length; i++) {
  console.log(isPrime(naturalNumber[i]));
}
