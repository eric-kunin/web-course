let noteList = JSON.parse(localStorage.getItem("noteList")) || []; 

window.onload = function() {
  createNotes();
}

const handleForm = () => {
    var newNote = new Object();
    // data of note/mission
    newNote.noteData = document.getElementById("noteData").value;
    // date of note/mission
    newNote.noteDate = document.getElementById("noteDate").value;
    // time of note/mission
    newNote.noteTime = document.getElementById("noteTime").value;
    // adding
    noteList.push(newNote);
    // reset
    document.getElementById('myForm').reset()
    // Save the mission data to LocalStorage
    localStorage.setItem("noteList", JSON.stringify(noteList));
    // func
    createNotes()
  };
  
  const createNotes = () => {
    const tableData = document.getElementById("footer");
    var myHTML = "";
    noteList.map((item,index) => {
      myHTML += `
      <div id="myDiv-${index}" class="col-lg-3 col-md-3 col-sm-6 my-2 my-class">
  <img src="img/notebg.png" id="img" alt="notebg" style="width:75%; height:85%;"/>
  <button class="btn" onclick="removeNote(${index})"><img src="img/close.png" width="35"/></button>
  <span id="myDate" style="position:absolute;color:black;">${pretifyDate(item.noteDate)}</span>
  <span id="myTime" style="position:absolute;color:black;">${item.noteTime}</span>
</div>
      `;
    });
    tableData.innerHTML = myHTML;
  };


const pretifyDate = (noteTime) => {
    const myNewDate = noteTime.split("-");
    return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
  };
// remove the localstorage
// localStorage.removeItem("noteList");
const  removeNote=(index) =>{
  noteList.splice(index,1)
  localStorage.setItem('noteList', JSON.stringify(noteList))
  createNotes()
}

// <button class="btn" onclick="removeNote(${index})"><span class="glyphicon glyphicon-remove"></span></button>