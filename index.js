// Code your solutions in this file

const names=["Guadalupe", "Ollie", "Aki"];
function writeCards(names,eventname="birthday"){

const messages = []; 

for( let i=0;i<names.length;i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);

  
}
 return messages; 
 }
console.log(writeCards(names,"suprise"));

function countDown(number) {
  if (number < 0) {
    console.log("Please provide a non-negative number.");
    return;
  }
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
