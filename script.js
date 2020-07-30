/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList=0;
var fullItemList = document.getElementbyId("my-list");

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
}
 // add event listener

/* TODO: Declare the function checkOffList and add actions inside the { } */


