

let pointValues = [];
let dimension = 600;
let gridDimension = 100;
let threshhold = 0.4;
let RANDOM_START = false;

let letterA = [
  [0,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,1,1,0,1,1,0,0,0,0],
  [0,1,1,0,0,0,1,1,0,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterB = [
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0],
  [1,1,0,0,0,1,1,0,0,0,0],
  [1,1,0,0,0,1,1,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0],
  [1,1,0,0,0,0,1,1,0,0,0],
  [1,1,0,0,0,0,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0]
  ];
let letterC = [
  [0,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,0,0,0]
  ];
let letterD = [
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,0,0,0]
  ];
let letterE = [
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0]
  ];
let letterF = [
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0]
  ];
let letterG = [
  [0,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,1,1,1,1,0,0],
  [1,1,0,0,0,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,0,0,0]
  ];
let letterH = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterI = [
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0]
  ];
let letterJ = [
  [0,0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,0,0,0]
  ];
let letterK = [
  [1,1,0,0,0,0,1,1,0,0,0],
  [1,1,0,0,0,1,1,1,0,0,0],
  [1,1,0,0,1,1,1,0,0,0,0],
  [1,1,0,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,0,0,0,0,0,0],
  [1,1,1,1,1,0,0,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0],
  [1,1,0,0,1,1,1,0,0,0,0],
  [1,1,0,0,0,1,1,1,0,0,0],
  [1,1,0,0,0,0,1,1,0,0,0]
  ];
let letterL = [
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0]
  ];
let letterM = [
  [1,0,0,0,0,0,0,0,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,0,0,0,1,1,1,0,0],
  [1,1,1,1,0,1,1,1,1,0,0],
  [1,1,0,1,1,1,0,1,1,0,0],
  [1,1,0,0,1,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterN = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,0,0,0,0,1,1,0,0],
  [1,1,1,1,0,0,0,1,1,0,0],
  [1,1,0,1,1,0,0,1,1,0,0],
  [1,1,0,0,1,1,0,1,1,0,0],
  [1,1,0,0,0,1,1,1,1,0,0],
  [1,1,0,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterO = [
  [0,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,0,0,0]
  ];
let letterP = [
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0]
  ];
let letterQ = [
  [0,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,1,1,0,1,1,0,0],
  [1,1,0,0,1,1,1,1,1,0,0],
  [1,1,0,0,0,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,0,1,1,0,0]
  ];
let letterR = [
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,0,0,0],
  [1,1,0,0,1,1,0,0,0,0,0],
  [1,1,0,0,0,1,1,0,0,0,0],
  [1,1,0,0,0,0,1,1,0,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterS = [
  [0,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0],
  [0,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,0,0,0]
  ];
let letterT = [
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0]
  ];
let letterU = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,0,0,0]
  ];
let letterV = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [0,1,1,0,0,0,1,1,0,0,0],
  [0,0,1,1,0,1,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0,0]
  ];
let letterW = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,0,0,1,0,0,1,1,0,0],
  [1,1,0,1,1,1,0,1,1,0,0],
  [1,1,1,1,0,1,1,1,1,0,0],
  [1,1,1,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterX = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,0,0,0,1,1,1,0,0],
  [0,1,1,1,0,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,1,1,0,0,0,0],
  [0,1,1,1,0,1,1,1,0,0,0],
  [1,1,1,0,0,0,1,1,1,0,0],
  [1,1,0,0,0,0,0,1,1,0,0]
  ];
let letterY = [
  [1,1,0,0,0,0,0,1,1,0,0],
  [1,1,1,0,0,0,1,1,1,0,0],
  [0,1,1,1,0,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0]
  ];
let letterZ = [
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,0,0,0,0,0],
  [0,0,1,1,1,0,0,0,0,0,0],
  [0,1,1,1,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0,0]
  ];

let letterImages = {
  "letterA": letterA,
  "letterB": letterB,
  "letterC": letterC,
  "letterD": letterD,
  "letterE": letterE,
  "letterF": letterF,
  "letterG": letterG,
  "letterH": letterH,
  "letterI": letterI,
  "letterJ": letterJ,
  "letterK": letterK,
  "letterL": letterL,
  "letterM": letterM,
  "letterN": letterN,
  "letterO": letterO,
  "letterP": letterP,
  "letterQ": letterQ,
  "letterR": letterR,
  "letterS": letterS,
  "letterT": letterT,
  "letterU": letterU,
  "letterV": letterV,
  "letterW": letterW,
  "letterX": letterX,
  "letterY": letterY,
  "letterZ": letterZ
};
let typedLetters = []
let runningSimulation = false

function setup() {
  
  createCanvas(dimension, dimension);
  setUpLetters()
  
  frameRate(15)
}

function draw() {
  background(0, 80, 100);
  for(let i = 0; i < pointValues.length; i++){
    DrawLines(i)
  }
  if(runningSimulation){
    conwayStep(pointValues);
  }
  
  
}

function setUpLetters(){
  pointValues = []
  if(!RANDOM_START){
    let LEFT_POINT = 1
    for(let i = 0; i < pow(gridDimension, 2); i++){
      pointValues.push(0)
    }
    for(let letters = 0; letters < typedLetters.length; letters++){
      for(let j = 0; j < typedLetters[letters].length; j++){
        for(let k = 0; k < typedLetters[letters][j].length; k++){
          pointValues[gridDimension * (40) + gridDimension * j + (LEFT_POINT  + (11 * (letters + 1))) + k] = typedLetters[letters][j][k];
        }
      }
    }
  }else{
    for(let i = 0; i < pow(gridDimension,2); i++){
    let coord = getCoord(i);
    pointValues.push(noise(coord[0] / gridDimension, coord[1] / gridDimension,0));
  }
  }
}

function DrawLines(originPoint){
  let setCase = 
      str(pointValues[originPoint] > threshhold ? 1 : 0) + 
      str(pointValues[originPoint + 1] > threshhold ? 1 : 0) + 
      str(pointValues[originPoint + gridDimension] > threshhold ? 1 : 0) + 
      str(pointValues[originPoint + 1 + gridDimension] > threshhold ? 1 : 0);
  
  getCase(setCase, originPoint)
    
  
}

function getCase(setCase, index){
  let originCoord = getCoord(index);
  let cellDimension = dimension / gridDimension;
  stroke(0, 230, 200);
  strokeWeight(1)
  switch (setCase){
    case "0000":
      return;
    case "1111":
      return;
    case "1000":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension), 
           originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1]);
      break;
    case "0111":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension), 
           originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1]);
      break;
    case "1100":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension),
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index, index + gridDimension));
      break;
    case "1110":
      line(originCoord[0] + cellDimension * interpolate(index + gridDimension, index + 1 + gridDimension), originCoord[1] + cellDimension ,
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index + 1, index + gridDimension + 1));
      break;
    case "0101":
      line(originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1],
          originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1] + cellDimension);
      break;
    case "1010":
      line(originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1],
          originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1] + cellDimension);
      break;
    case "0110":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension), 
           originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1] + cellDimension);
      line(originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1] ,
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index, index + gridDimension));
      break;
    case "1001":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension), 
           originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1]);
      line(originCoord[0] + cellDimension * interpolate(index + gridDimension, index + 1 + gridDimension), originCoord[1] + cellDimension ,
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index + 1, index + gridDimension + 1));
      break;
    case "0011":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension),
        originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index, index + gridDimension));
      break;
    case "0010":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension),
        originCoord[0] + cellDimension * interpolate(index + gridDimension, index + 1 + gridDimension), originCoord[1] + cellDimension);
      break;
    case "1101":
      line(originCoord[0], originCoord[1] + cellDimension * interpolate(index, index + gridDimension),
        originCoord[0] + cellDimension * interpolate(index + gridDimension, index + 1 + gridDimension), originCoord[1] + cellDimension);
      break;
    case "0001":
      line(originCoord[0] + cellDimension * interpolate(index + gridDimension, index + 1 + gridDimension), originCoord[1] + cellDimension ,
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index + 1, index + gridDimension + 1));
      break;
    case "0100":
      line(originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1],
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index + 1, index + gridDimension + 1))
      break;
    case "1011":
      line(originCoord[0] + cellDimension * interpolate(index, index + 1), originCoord[1],
          originCoord[0] + cellDimension, originCoord[1] + cellDimension * interpolate(index + 1, index + gridDimension + 1))
      break;
      
  }
}

function getCoord(i){
  return[(i % gridDimension) * (dimension/(gridDimension-1)), (dimension/(gridDimension-1)) * int(i/gridDimension)];
}

function interpolate(x, y){
  return (pointValues[x] + pointValues[y]) / 2;
}

function conwayStep(pointValues){
  let newValues = {...pointValues}
  for(let i = 0; i < pointValues.length; i++){
    var aliveNeighbors = 0;
    var isAlive = pointValues[i] > threshhold;
    
    if(isInRange(i, 1) && pointValues[i+1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
      
    }
    if(isInRange(i, -1) && pointValues[i - 1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
      
    }
    if(isInRange(i, gridDimension) && pointValues[i + gridDimension] > threshhold){
      aliveNeighbors += 1;
      
    }
    if(isInRange(i, -gridDimension) && pointValues[i - gridDimension] > threshhold){
      aliveNeighbors += 1;
      
    }
    if(isInRange(i, gridDimension + 1) && pointValues[i + gridDimension + 1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
     
    }
    if(isInRange(i, gridDimension - 1) && pointValues[i + gridDimension - 1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
     
    }
    if(isInRange(i, -gridDimension + 1) && pointValues[i - gridDimension + 1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
      
    }
    if(isInRange(i, -gridDimension - 1) && pointValues[i - gridDimension - 1] > threshhold && checkEdge(i)){
      aliveNeighbors += 1;
     
    }
    
    
    if(aliveNeighbors < 2){
      newValues[i] = (0);
    }if((aliveNeighbors == 2 || aliveNeighbors == 3) && isAlive){
      newValues[i] = 1;
    }if(aliveNeighbors > 3){
      newValues[i] = (0);
    }if((!isAlive) && aliveNeighbors == 3){
      newValues[i] = (1);
    } 
    
    
   
  }
  for (let i = 0; i < pointValues.length; i++) {
      pointValues[i] = newValues[i];
    }
}

function isInRange(index, step){
  return index + step < pointValues.length && index + step >= 1;
}

function checkEdge(i){
  return i % gridDimension != gridDimension - 1 && i % gridDimension != 0
}

function keyReleased(){
  let letterPressed = "letter"
  
  letterPressed += key.toUpperCase()
  if (/^[a-zA-Z]$/.test(key)){
    typedLetters.push(letterImages[letterPressed])
        setUpLetters()
  }
  print(key)
  
  
  if(key == "Enter"){
    typedLetters = []
    runningSimulation = !runningSimulation
  }
  
  if(key == "Backspace"){
    typedLetters.pop()  
    setUpLetters()
  }
}
