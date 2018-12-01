var age = prompt("What is your age");
console.log(age);

if(age == 30){
  document.write("hey you are right at that age");
}else if(age > 30){
  document.write("You are overage");
}else if(age < 30){
  document.write("You are underage");
}else{
  document.write("We don't know what you entered");
}