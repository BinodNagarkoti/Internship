// var opBrac = false
var BracCount = 0
// var clBrac = false
// var msg = 'sorry! it is not valid!!!';
var validate = (strValue) => {
    const arr = strValue.split('');
    //    console.log(arr)
    for (element of arr) {
        if (element == '(') {
            BracCount++
            // opBrac = true
        }
        if (element == ')') {
            BracCount--
            // if(opBrac === true) {
            //     clBrac = true
            // }
        }
        // if(clBrac === true){
        //     clBrac = false;
        //     opBrac = false;
        //     msg='It is valid';
        // } 
    }
    // if (msg === 'It is valid' && BracCount === 0){
    if (BracCount == 0) {
        console.log(`${strValue} --> it is valid`)
    } else {
        console.log(`${strValue} --> sorry, it is not valid`)
    }
}
validate('((()ghjk(kjh)))')