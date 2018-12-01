var day;
day = prompt('What is the day today?');

'use strict'
switch (day){
  case 'Monday':
    document.write('Today is Monday');
  break;
  case 'MondaY':
    document.write('Today is Tuesday');
  break;
  case 'Wednesday':
    document.write('Today is Wednesday');
  break;
  case 'Thursday':
    document.write('Today is Thursday');
  break;
  case 'Friday':
    document.write('Today is Friday');
  break;
  default:
    document.write('This is your weekend right?');
  break;
}