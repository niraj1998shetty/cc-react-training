const numbers=[1,33,99,50,100,150,60,99,1000,999,0,-1,10];
 const result=numbers.filter(function(value,i,arr){
     return value >=150;
 });
 console.log(result);