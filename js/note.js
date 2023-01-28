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
      <div id="myDiv-${index}" class="col-lg-3 col-md-3 col-sm-6 my-2 my-class" style="position: relative;">
  <img src="https://i.postimg.cc/NGPxxkkb/notebg.png" id="img" alt="notebg" style="width:75%; height:85%;"/>
  <button class="btn" onclick="removeNote(${index})" style="position:absolute;top:5%;left:45%;color:black;">
  <i class="fa-solid fa-xmark"></i>
</button>
  <p style="position:absolute;top:15%;left:11%;color:black;max-width:150px;
  max-height: 120px;
  overflow-x: auto;
  word-wrap: break-word;
  margin: auto;">${item.noteData}<p/>
  <span id="myDate" style="position:absolute;top:62%;left:11%;color:black;font-weight: 550;">${pretifyDate(item.noteDate)}</span>
  <span id="myTime" style="position:absolute;top:70%;left:11%;color:black;font-weight: 550;">${item.noteTime}</span>
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

