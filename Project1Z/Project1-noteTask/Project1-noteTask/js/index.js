var notes = []

const checkForData = ()=>{
    notes = JSON.parse(localStorage.getItem('myData')) || []
    createNotes()
}

const handleForm = () => {
    var note = new Object()
    note.taskName = document.getElementById('taskName').value
    note.date = document.getElementById('date').value   
    note.time= document.getElementById('time').value
    notes.push(note)
    document.getElementById('myForm').reset()
    localStorage.setItem('myData',JSON.stringify(notes))
    createNotes()
    fadeNote()
}

const createNotes = () => {
    var elNotes = document.getElementById('notes')
    var data = ''
    notes.map((item, index)=> {
        data += `
        <div class="note" id="note${index}">
        <button class="btn" onclick="removeNote(${index})"><img src="img/close.png" width="20px"/></button> <br/>
        <p>${item.taskName} <p/><br/>
        <div class="timeDate">
        ${pretifyDate(item.date)}  <br/>
        ${item.time}
        </div>   
        </div>`
    })
    elNotes.innerHTML = data
    
}

const pretifyDate = (date) => {
    const myNewDate = date.split("-");
    return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
  };

const fadeNote =()=>{
    var lastIndex = notes.length-1
    var elDiv = document.getElementById(`note${lastIndex}`)
    elDiv.classList.add('fade')
}

const  removeNote=(index) =>{
    notes.splice(index,1)
    localStorage.setItem('myData', JSON.stringify(notes))
    createNotes()
}

checkForData();
