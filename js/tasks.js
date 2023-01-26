//  If localStorage.getItem("missionList") returns null, then an empty array is assigned to missionList
var missionList = JSON.parse(localStorage.getItem("missionList")) || []; 
const addNewMission = () => {
    const newMission = new Object();
    // data of note/mission
    newMission.missionData = document.getElementById("missionData").value;
    // date of note/mission
    var missionDate = new Date(document.getElementById("missionDate").value);
    newMission.missionDate = missionDate;
    // time of note/mission
    newMission.missionTime = document.getElementById("missionTime").value;
// varibles
    var day = newMission.missionDate.getDate();
  var month = (newMission.missionDate.getMonth()+1);
  if (day < 10) {
    newMission.day = "0" + day;
}
if (month < 10) {
    newMission.month = "0" + month;
}
newMission.missionDate = day + '/' + month + '/' + newMission.missionDate.getFullYear();

  // adding
    missionList.push(newMission);
    // Save the mission data to LocalStorage
    localStorage.setItem("missionList", JSON.stringify(missionList));
    // func
    insertData();
  };
  
  const insertData = () => {
    const tableData = document.getElementById("footer");
    var myHTML = "";
    missionList.map((item) => {
      myHTML += `
      <div class="col-lg-3 col-md-3 col-sm-6 my-2 my-class" style="position:relative;opacity:0; animation: fadein 0.5s; animation-fill-mode: forwards;">
  <img src="img/notebg.png" id="img" alt="notebg"; style="width:75%; height:85%;"/>
  <textarea id="textarea" style="position:absolute;top:3%;left:5%;width:55%; height:43%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;">${item.missionData}</textarea>
  <span id="date" style="position:absolute;color:black;">${item.missionDate}</span>
  <span id="date" style="position:absolute;color:black;">${item.missionTime}</span>
</div>
      `;
    });
    tableData.innerHTML = myHTML;
  };
// "position:absolute; left:14px; top:28px; width:73%; height:61%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;"

window.onload = function() {
  // Check if there's any data saved in LocalStorage
  if (localStorage.getItem("missionList")) {
      missionList = JSON.parse(localStorage.getItem("missionList"));
  }
  var tableData = document.getElementById("footer");
  var myHTML = "";
  missionList.forEach(function(item,index) {
    myHTML += `
      <div class="col-lg-3 col-md-3 col-sm-6 my-2 my-class" style="position:relative;">
  <img src="img/notebg.png" id="img" alt="notebg"; style="width:75%; height:85%;"/>
  <textarea id="textarea" style="position:absolute;top:3%;left:5%;width:55%; height:43%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;">${item.missionData}</textarea>
  <span id="date" style="position:absolute;color:black;">${item.missionDate}</span>
  <span id="date" style="position:absolute;color:black;">${item.missionTime}</span>
  <button class='delete-button' data-index='${index}'>Delete</button>
</div>
      `;
    });
    tableData.innerHTML = myHTML;
  };

  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      var index = e.target.getAttribute('data-index');
      missionList.splice(index, 1);
      localStorage.setItem("missionList", JSON.stringify(missionList));
      // Re-render the table
      insertData();
    });
  });

  
  
