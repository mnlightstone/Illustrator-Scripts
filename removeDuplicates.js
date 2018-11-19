//In the Illustrator manual it’s written that this error can happen when the same script is launched in Illustrator many times and the work with variables has been done badly. If we haven’t cleaned the variable after a script has been finished, then it retains its old value and it can lead to such unintelligible glitch.
//Developers of Illustrator recommend indicating all the variables inside the function in order to avoid this problem. Then after the function has been finished all the variables will reset automatically.

//removes duplicative objects; that is, if their coordinates are exactly the same
function removeDupes (){
  selectAll();
  var selection = app.activeDocument.selection;
  var uniqueCoordinates = []
  for (i = 0; i < selection.length; i ++){
    // skip i if it has been deleted
    if (selection[i] == undefined){
      continue;
    }
    //if uniqueCoordinates is empty, put first item into it
    if (uniqueCoordinates.length == 0){
      uniqueCoordinates.push(selection[i].geometricBounds.toString());
    } else {
      var currentCoords = selection[i].geometricBounds.toString();
      duplicateValue = arrayContains(currentCoords, uniqueCoordinates.toString());
      if (duplicateValue) {
        selection[i].remove();
      } // end if
      else {
        uniqueCoordinates.push(selection[i].geometricBounds.toString());
      } // end else
    } // end else
  } // end for
  // alert (uniqueCoordinates[0] == uniqueCoordinates[1]);


  function selectAll(){
    numberOfItems = app.activeDocument.pathItems.length;
    for (var i = 0; i < numberOfItems; i++){
      app.activeDocument.pathItems[i].selected = true;
    } // end for
  } //end selectAll


  function arrayContains(needle, arrhaystack)
  {
    needle = needle.toString();
    return (arrhaystack.indexOf(needle) > -1);
  }
}


removeDupes()
