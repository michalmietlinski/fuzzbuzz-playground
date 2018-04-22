//The worst possible way? I'll try to....

//Unnecessary code! let's add some!
var i =1;

while(i<100){
    //Making it wrong way is going to be tricky but...
    // How to invent % again?
    if(Math.ceil(i/3)-i/3==0){
        if(Math.ceil(i/5)-i/5==0){
            console.log("fuzzbuzz")
        }
        console.log("fuzz")
    }else if(Math.ceil(i/5)-i/5==0){
        //More else if! make it harder to read!
        console.log("buzz")
    }else{
        console.log(i)
    }
    

    //Yeah because i++ is too complex
    i=i+1;
}