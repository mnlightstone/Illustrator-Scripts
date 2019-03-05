// 1. Offset a line to account for cutting
// OUTSIDE lines get kerfed out
// INSIDE (nested) lines get kerfed in
// .01 inches (in) default
// in / 2 on each side

function kerf(){
  if (!checkSelectionIsAppropriate()){
    return
  }
    var inchesToScale = Number(prompt ("Enter the number you'd like to kerf by (in inches).", .01, "hello"));
    resizeSelectedItems(inchesToScale*-1);
    invertSelection();
    resizeSelectedItems(inchesToScale);
}

function checkSelectionIsAppropriate(){
  var selection = app.activeDocument.selection;
  if (selection == ""){
    alert("Please select the outermost line before running this script. \nThe selected line will be kerfed outward and the rest of the objects will be kerfed inward.\n\nAny lines selected will be kerfed outward and any lines not selected will be kerfed inward.\n\nYou can select more than one line if needed.");
    return false;
  }
  return true;
}

function invertSelection(){
  var allItems = app.activeDocument.pathItems;
  for (var i = 0; i < allItems.length; i++){
    //skip any objects without 3+ points
    if(allItems[i].pathPoints.length > 2){
    allItems[i].selected = !allItems[i].selected
    }
  }
  return allItems;
}

function resizeSelectedItems (scalingAmountInInches){
    var selection = app.activeDocument.selection;
    for (var i = 0; i < selection.length; i++){
      var xFactor = (1 - (scalingAmountInInches / selection[i].width)) * 100;
      var yFactor = (1 - (scalingAmountInInches / selection[i].height)) * 100;
      alert (xFactor + " | " + yFactor)
      selection[i].resize(xFactor, yFactor);
    }
}

function breakPath(pathItem){
  var selection = app.activeDocument.pathItems;
  alert(selection.length)
}

function addPoint(line){
  var newPoint = line.add();
  newPoint.anchor = Array(220, 300);
  newPoint.leftDirection = newPoint.anchor;
  newPoint.rightDirection = newPoint.anchor;
  newPoint.pointType = PointType.CORNER;
}

function getAllAnchorPoints(){
  var selection = app.activeDocument.pathItems[0].selectedPathPoints;
  var count = 0;
  for (var i = 0; i < selection.length; i ++){
    selection[i];
    count ++;
    test = selection[i].anchor;
  }
}

kerf()
