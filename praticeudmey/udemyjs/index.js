function abcd(n){
    var output=[];

    if(n===1){
        output = [0];
    }else if (n===2){
        output= [0,1]

    }else{
        output = output[0] + output[1];
        }
    return output;

}

abcd(n);