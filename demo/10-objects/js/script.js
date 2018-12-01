var car = {
  'make': 'Toyota',
  'model': 'Corolla',
  'options': {
    'fourWheel' : true,
    'heatedSeat' : [true, false] 
  },
  'var' : 'value'
};

document.write(car.make);
document.write(car['options']['fourWheel']);
