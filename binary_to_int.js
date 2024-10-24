//Convert binary to Integer value


var bin = [1,0,1,1,0];
bin = bin.reverse();
var num = 0;
for(i=0; i<bin.length; i++){
    num+= bin[i]==1 ? p(i) : null;
}
function p(pow){
    var po = 1;
    while(pow!=0){
        po *=2;
        pow--;
    }
    return po;
}
console.log(num);
