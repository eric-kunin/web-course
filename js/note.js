// parsing note data from local storage or creating an empty array if there's no data stored
let noteList = JSON.parse(localStorage.getItem("noteList")) || []; 

// on page load, create note elements
window.onload = function() {
  createNotes();
}

// flag to track whether animation has run
let animationRun = false;
// on window load, apply fadeIn animation to all elements with class "my-class"
window.addEventListener("load", function() {
  if (!animationRun) {
    // select all elements with the class "my-class"
    const elements = document.querySelectorAll(".my-class");
    // apply the "fadeIn" animation to each element
    elements.forEach(element => {
      element.style.animation = "fadeIn 1s";
      element.style.animationFillMode = "forwards";
    });
    // set flag to true to indicate that animation has run
    animationRun = true;
  }
});

// function to handle form submission
const handleForm = () => {
    // creating a new note object
    var newNote = new Object();
    // storing note data from form input
    newNote.noteData = document.getElementById("noteData").value;
    // storing note date from form input
    newNote.noteDate = document.getElementById("noteDate").value;
    // storing note time from form input
    newNote.noteTime = document.getElementById("noteTime").value;
    // adding the new note object to the note list
    noteList.push(newNote);
    // resetting the form
    document.getElementById('myForm').reset()
    // saving the note list to local storage
    localStorage.setItem("noteList", JSON.stringify(noteList));
    // creating note elements
    createNotes();
    // fading in the last added note
    fadeNote();
  };
  
// function to create note elements on the page
const createNotes = () => {
  // get reference to tableData element with id "footer"
  const tableData = document.getElementById("footer");
  // variable to store the HTML string that will be added to the tableData element
  var myHTML = "";
  // loop through the noteList array and generate HTML for each note
  noteList.map((item,index) => {
    myHTML += `
      <div id="noteNumber-${index}" class="col-lg-3 col-md-3 col-sm-6 my-2 my-class image-container" style="position: relative;">
        <button class="btn deleteNote" id="deleteNote" onclick="removeNote(${index})" style="position:absolute;top:5%;left:66%;color:black;margin: auto;">
          <i class="fa-solid fa-xmark" style="font-size:205%;"></i>
        </button>
        <p class="noteP" style="position:absolute;top:19%;left:14%;color:black;max-width:66%;
          max-height: 55%;
          overflow-x: auto;
          word-wrap: break-word;
          margin: auto;">${item.noteData}<p/>
        <span id="noteDate" style="position:absolute;top:77%;left:14%;color:black;font-weight:bold;">${pretifyDate(item.noteDate)}</span>
        <span id="noteTime" style="position:absolute;top:85%;left:14%;color:black;font-weight:bold;">${item.noteTime}</span>
      </div>
    `;
  });
  // add the generated HTML to the tableData element
  tableData.innerHTML = myHTML;
};

// Function to prettify the date
const pretifyDate = (noteDate) => {
  // Split the date string by "-" character and store it in an array
  const myNewDate = noteDate.split("-");
  // Return the formatted date string in "dd/mm/yyyy" format
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};

// Function to remove a note
const  removeNote=(index) =>{
// Remove the note at the specified index
noteList.splice(index,1);
// Update the note list in local storage
localStorage.setItem('noteList', JSON.stringify(noteList));
// Call the function to re-render the notes
createNotes();
}

// Function to fade the last note added
const fadeNote =()=>{
// Get the index of the last note in the note list
var lastIndex = noteList.length-1;
// Get the DOM element for the last note
var elDiv = document.getElementById(`noteNumber-${lastIndex}`);
// Add the fade class to the last note DOM element
elDiv.classList.add('fade');
}



