naturalNumber=[1,2,3,4,5,6,7,8,9,10];


function isPrime(number) {
    for(i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }
for(i=0;i<naturalNumber.length;i++){
console.log(isPrime(naturalNumber[i]));
}