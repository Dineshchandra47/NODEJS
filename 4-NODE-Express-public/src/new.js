// console.log('hello puspa');
/*  JSON.stringify()*/
let userObj = {
     title: 'JSON.stringify()',
     name: "Sammy",
     email: "sammy@example.com",
     plan: "Pro"
   };
   
   let userStrSpace = JSON.stringify(userObj, null, '---->');
   console.log(userStrSpace);

// -------------------------------------------------------------------------------------------------

// JSON.parse() 

let userStr = '{"title": "JSONparse","name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj1 = JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});
console.log(userObj1,);