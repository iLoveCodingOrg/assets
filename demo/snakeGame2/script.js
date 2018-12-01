jQuery(document).ready(function(){
  var snakeCanvas = $('canvas.snake-game')[0];
      context     = snakeCanvas.getContext('2d'),
      width       = snakeCanvas.width,
      height      = snakeCanvas.height,
      snakeSize   = 10,
      direction   = 'right',
      snake = [
        { 'x': 0, 'y': 0 },
        { 'x': 1, 'y': 0 },
        { 'x': 2, 'y': 0 },
        { 'x': 3, 'y': 0 },
        { 'x': 4, 'y': 0 },
      ],
      gameSpeed   = 50,
      score       = 0;

  var foodX,
      foodY,
      gameLoop;


  start();



  function start(){
    createNewFood()
    gameLoop = setInterval(reDraw, gameSpeed);
  }

  function stop(){
    clearInterval(gameLoop);
  }

  function createNewFood(){
    foodX = parseInt(Math.random()*width/snakeSize);
    foodY = parseInt(Math.random()*height/snakeSize);
    console.log(foodX, foodY);
  }



  function checkCollision(snakeArrayInput, foodXinput, foodYinput){
    var collision = 'nothing';
    
    snakeArrayInput.every(function(element){
      if(element.x == foodXinput && element.y == foodYinput){
        collision = "food";
        return false;
      }else if(element.x == -1 ||
               element.y == -1 ||
               element.x == width/snakeSize ||
               element.y == height/snakeSize){
        collision = "wall";
        return false;
      }else{
        return true;
      }
    })

    return collision;
  }



  function reDraw(){
    console.log('redrawing');
    drawBg();
    drawSnake(snake);
    drawFood();
    drawScore();

    var collisionStatus = checkCollision(snake, foodX, foodY);
    if(collisionStatus == 'food'){
      score++;
      createNewFood();
      snake.unshift(updateDirection(snake, direction));

    }else if(collisionStatus == 'wall'){
      stop();
      score = 0;
    }
  }

  function drawFood(){
    paint(foodX*snakeSize, foodY*snakeSize, snakeSize, snakeSize, 'green', 'black');  
  }

  function drawScore(){
    context.fillStyle = "grey";
    context.fillText('Score:' + score, 5, height-5);
  }

  function drawBg(){
    paint(0,0,width, height, 'white', 'black');  
  }

  function drawSnake(snakeInput){
    updateSnake(snakeInput);
    snakeInput.forEach(function(element){
      paint(element.x*10, element.y*10, snakeSize, snakeSize, 'orange', 'black');
    });
  }

  function paint(x, y, w, h, bgColor, borderColor){
    context.fillStyle = bgColor;
    context.fillRect(x,y, w, h);
    context.strokeStyle = borderColor;
    context.strokeRect(x,y, w, h);
  }

  function updateSnake(snakeInput){
    snakeInput.shift();
    snakeInput.push(updateDirection(snakeInput, direction));
  };

  function updateDirection(snakeInput, direction){
    var cellX = snakeInput[snakeInput.length-1].x;
    var cellY = snakeInput[snakeInput.length-1].y;

    if(direction == 'right'){
      cellX = cellX+1;
    }else if(direction == 'left'){
      cellX = cellX-1;
    }else if(direction == 'top'){
      cellY = cellY-1;
    }else if(direction == 'bottom'){
      cellY = cellY+1;
    }

    return {'x':cellX, 'y':cellY};
  }

  $(document).on('keydown', function(e){
    if(e.which == '37' && direction != 'right'){ // left keydown
      direction = 'left';
    }else if(e.which == '38' && direction != 'bottom'){ // top keydown
      direction = 'top';
    }else if(e.which == '39' && direction != 'left'){ // right keydown
      direction = 'right';
    }else if(e.which == '40' && direction != 'top'){ // bottom keydown
      direction = 'bottom';
    }
  });






});