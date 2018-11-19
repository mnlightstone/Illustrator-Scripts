// 1. Offset a line to account for cutting
// OUTSIDE lines get kerfed out
// INSIDE (nested) lines get kerfed in
// .01 inches (in) default
// in / 2 on each side

//ask for inputs, or use default

function kerf() {
  var width = Number(prompt ("Enter the number you'd like to kerf by (in inches).", .01, "hello"));
  resizeAllSelected(width);
}

function resizeAllSelected (scalingAmountInInches){
    // var moveMatrix = app.getTranslationMatrix(-1.0, 1.0);
    // selection[i].transform(moveMatrix);
    var selection = app.activeDocument.selection;
    for (var i = 0; i < selection.length; i++){
      var xFactor = (1-(scalingAmountInInches / selection[i].width)) * 100;
      var yFactor = (1 - (scalingAmountInInches / selection[i].height)) * 100;
      alert (xFactor + " | " + yFactor)
      selection[i].resize(xFactor, yFactor);
    }
}

// resizeAllSelected()




function breakPath(pathItem){
  var selection = app.activeDocument.pathItems;
  for (var i = 0; i < selection.length; i ++){
    
  }
  alert(selection.length);
}

function cutPaths(){

}

//app.activeDocument.pathItems[0].pathPoints
function addPoint(line){
  var newPoint = line.add();
  newPoint.anchor = Array(220, 300);
  newPoint.leftDirection = newPoint.anchor;
  newPoint.rightDirection = newPoint.anchor;
  newPoint.pointType = PointType.CORNER;
}

breakPath()





//


function getAllAnchorPoints(){
  var selection = app.activeDocument.pathItems[0].selectedPathPoints;
  var count = 0;
  for (var i = 0; i < selection.length; i ++){
    selection[i];
    count ++;
    test = selection[i].anchor;
  }
}
