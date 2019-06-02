let sort =(arr)=>{
        let sorted = arr.sort((a, b) => a - b);
        return(sorted.join(", "));
}
     
    console.log(sort([4, 15, -1, 0]));

