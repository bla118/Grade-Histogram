function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  }
  
  function handleFileSelect(event){
    const file = event.target.files[0];
    if (file.name.endsWith(".csv")) {
      const reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(file);
    } else {
      alert("Please select a CSV file.");
    }
  }

  function handleFileLoad(event){
    console.log(event);
    // document.getElementById('fileContent').textContent = event.target.result;
    CSVtoArray(event.target.result);
    initForm()
  }

  function start(){
    init();
    document.getElementById('FORM').addEventListener('change', handleFormChange);
  }
let array = [];
let arrayGrades = [];

  function CSVtoArray(str) { 
    var arr = str.split(/[\s,]+/);
    array = arr;
        
   
      // document.getElementById('aPlus').addEventListener('change', handleFormChange);
      // document.getElementById('a').addEventListener('change', handleFormChange);
      // document.getElementById('aMinus').addEventListener('change', handleFormChange);
      // document.getElementById('bPlus').addEventListener('change', handleFormChange);
      // document.getElementById('b').addEventListener('change', handleFormChange);
      // document.getElementById('bMinus').addEventListener('change', handleFormChange);
      // document.getElementById('cPlus').addEventListener('change', handleFormChange);
      // document.getElementById('c').addEventListener('change', handleFormChange);
      // document.getElementById('cMinus').addEventListener('change', handleFormChange);
      // document.getElementById('d').addEventListener('change', handleFormChange);
      // document.getElementById('f').addEventListener('change', handleFormChange);
    
  }
let max = 100;
let aPlus = 95;
let a = 90;
let aMinus = 85;
let bPlus = 80;
let b = 75;
let bMinus = 70;
let cPlus = 65;
let c = 60;
let cMinus = 55;
let d = 50;
let f = 0;

function sortFloat(a,b) { 
  return a - b; 
}

function sortArray(){
  var temp = [];
  for(var i = 3; i < array.length; i += 2)
  {
    temp.push(array[i]);
  }
  arrayGrades = temp.sort(sortFloat);
}

// calculating metrics
function getHighest(){
  var highest = arrayGrades[arrayGrades.length - 1];
  for(var i = 3; i < array.length; i += 2)
  {
    if(array[i] == highest)
      return array[i - 1];
  }
}

function getLowest(){
  var lowest = arrayGrades[0];
  for(var i = 3; i < array.length; i += 2)
  {
    if(array[i] == lowest)
      return array[i - 1];
  }
}

function getMean(){
  var mean = 0;
  for(var i in arrayGrades)
  {
    mean += parseFloat(arrayGrades[i]);
  }
  return mean / arrayGrades.length;
}

function getMedian(){
  var half = Math.floor(arrayGrades.length / 2);

  if(arrayGrades.length % 2)
    return arrayGrades[half];
  
  return (arrayGrades[half - 1] + arrayGrades[half]) / 2;
}
  function handleFormChange(event){

    if(event.target.id == 'max')
      max = event.target.value;
    else if(event.target.id == 'aPlus')
      aPlus = event.target.value;
    else if(event.target.id == 'a')
      a = event.target.value;
    else if(event.target.id == 'aMinus')
      aMinus = event.target.value;
    else if(event.target.id == 'bPlus')
      bPlus = event.target.value;
    else if(event.target.id == 'b')
      b = event.target.value;
    else if(event.target.id == 'bMinus')
      bMinus = event.target.value;
    else if(event.target.id == 'cPlus')
      cPlus = event.target.value;
    else if(event.target.id == 'c')
      c = event.target.value;
    else if(event.target.id == 'cMinus')
      cMinus = event.target.value;
    else if(event.target.id == 'd')
      d = event.target.value;
    else
      f = event.target.value;

    if((max <= 100) && (f >= 0) && (f < d) && (d < cMinus) && (cMinus < c) && (c < cPlus) && 
    (cPlus < bMinus) && (bMinus < b) && (b < bPlus) && (bPlus < aMinus) && (aMinus < a) && 
    (a < aPlus) && (aPlus < max))
    {
      sortArray();
      var highest = getHighest();
      var lowest = getLowest();
      var mean = getMean();
      var median = getMedian();
      document.getElementById("statHighest").innerHTML = highest;
      document.getElementById("statLowest").innerHTML = lowest;
      document.getElementById("statMean").innerHTML = mean.toFixed(2);
      document.getElementById("statMedian").innerHTML = parseFloat(median).toFixed(2);

      histogram();
    }

    else
      alert("Fix range");
  
  }

  // output histogram results
  function histogram(){
    var numF = 0;
    var numD = 0;
    var numCMinus = 0;
    var numC = 0;
    var numCPlus = 0;
    var numBMinus = 0;
    var numB = 0;
    var numBPlus = 0;
    var numAMinus = 0;
    var numA = 0;
    var numAPlus = 0;

    var numFStr = "";
    var numDStr = "";
    var numCMinusStr = "";
    var numCStr = "";
    var numCPlusStr = "";
    var numBMinusStrs = "";
    var numBStr = "";
    var numBPlusStr = "";
    var numAMinusStr = "";
    var numAStr = "";
    var numAPlusStr = "";
    for(var i = 0; i < arrayGrades.length; i ++)
    {
      var grade = arrayGrades[i];
      if((grade >= f) && (grade < d))
      {
        numF ++;
        numFStr += "*";
      }
      else if((grade >= d) && (grade < cMinus))
      {
        numD ++;
        numDStr += "*";
      }
      else if((grade >= cMinus) && (grade < c))
      {
        numCMinus ++;
        numCMinusStr += "*";
      }
      else if((grade >= c) && (grade < cPlus))
      {
        numC ++;
        numCStr += "*";
      }
      else if((grade >= cPlus) && (grade < bMinus))
      {
        numCPlus ++;
        numCPlusStr += "*";
      }
      else if((grade >= bMinus) && (grade < b))
      {
        numBMinus ++;
        numBMinusStrs += "*";
      }
      else if((grade >= b) && (grade < bPlus))
      {
        numB ++;
        numBStr += "*";
      }
      else if((grade >= bPlus) && (grade < aMinus))
      {
        numBPlus ++;
        numBPlusStr += "*";
      }
      else if((grade >= aMinus) && (grade < a))
      {
        numAMinus ++;
        numAMinusStr += "*";
      }
      else if((grade >= a) && (grade < aPlus))
      {
        numA ++;
        numAStr += "*";
      }
      else if((grade >= aPlus) && (grade <= max))
      {
        numAPlus ++;  
        numAPlusStr += "*";
      }
      else
        continue;
    }

      
    document.getElementById("histogramAPlus").innerHTML = numAPlusStr + " " + numAPlus.toString();
    document.getElementById("histogramA").innerHTML = numAStr + " " + numA.toString();
    document.getElementById("histogramAMinus").innerHTML = numAMinusStr + " " + numAMinus.toString();
    document.getElementById("histogramBPlus").innerHTML = numBPlusStr + " " + numBPlus.toString();
    document.getElementById("histogramB").innerHTML = numBStr + " " + numB.toString();
    document.getElementById("histogramBMinus").innerHTML = numBMinusStrs + " " + numBMinus.toString();
    document.getElementById("histogramCPlus").innerHTML = numCPlusStr + " " + numCPlus.toString();
    document.getElementById("histogramC").innerHTML = numCStr + " " + numC.toString();
    document.getElementById("histogramCMinus").innerHTML = numCMinusStr + " " + numCMinus.toString();
    document.getElementById("histogramD").innerHTML = numDStr + " " + numD.toString();
    document.getElementById("histogramF").innerHTML = numFStr + " " + numF.toString();

  }

  function initForm()
  {
    sortArray();
    var highest = getHighest();
    var lowest = getLowest();
    var mean = getMean();
    var median = getMedian();
    document.getElementById("statHighest").innerHTML = highest;
    document.getElementById("statLowest").innerHTML = lowest;
    document.getElementById("statMean").innerHTML = mean.toFixed(2);
    document.getElementById("statMedian").innerHTML = parseFloat(median).toFixed(2);
    
    histogram();
    document.getElementById('FORM').addEventListener('change', handleFormChange);

  }