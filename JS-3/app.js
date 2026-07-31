function abcd(){
    console.log(this);
}

let obj = {
    age : 24
}

abcd.call(obj);