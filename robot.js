//const grid = require('grid');

exports.run = instructionsObj => {

  let position = instructionsObj.position; // [0, 0]
  let orientation = instructionsObj.orientation; // N, S, E, W

  const execCmd = cmd => {
    switch(cmd) {
      case 'L': //turns left 90 degrees
        switch(orientation) {
          case 'N':
            orientation = 'W';
            break;
          case 'S':
            orientation = 'E';
            break;
          case 'E':
            orientation = 'N';
            break;
          case 'W':
            orientation = 'S';
            break;  
        }
        break;
      case 'R': //turns right 90 degrees
        switch(orientation) {
          case 'N':
            orientation = 'E';
            break;
          case 'S':
            orientation = 'W';
            break;
          case 'E':
            orientation = 'S';
            break;
          case 'W':
            orientation = 'N';
            break;  
        }
        break;
      case 'F': //
        switch(orientation) {
          case 'N':
            position[1] = position[1] + 1;
            break;
          case 'S':
            position[1] = position[1] - 1;
            break;
          case 'E':
            position[0] = position[0] + 1;
            break;
          case 'W':
            position[0] = position[0] - 1;
            break;
        }
        break;
    }
    //grid.isOutOfGrid(position)
  }

  instructionsObj.movements.map(cmd => execCmd(cmd));

  return {
    position: position,
    orientation: orientation
  }
}