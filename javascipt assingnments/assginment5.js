
function findPrime(a){

    for(i=2 ;i<a; i++){
            if(a%i===0){
                return 'its not primenuber';
            }else{
                return 'its primenuber';
            }
    }


}
var b = findPrime(7);
console.log(b);