let Dsort =(arr)=> {
    let sorted = arr.sort((a, b) => b - a);
    console.log(sorted.join(", "));
}
 
Dsort([4, 15, -1, 0]);