let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [raksha, srinivas, usha];

let updatedMap=users.map((value,i)=>{
  return {fullname:value.name.join(),id:i+1}; 
}
)
console.log(updatedMap);