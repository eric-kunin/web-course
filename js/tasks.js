var missionList = []; 
const addNewMission = () => {
    const newMission = new Object();
    // data of note/mission
    newMission.missionData = document.getElementById("missionData").value;
    // date of note/mission
    newMission.missionDate = document.getElementById("missionDate").value;
    // time of note/mission
    newMission.missionTime = document.getElementById("missionTime").value;
    missionList.push(newMission);
    insertData();
  };

  const insertData = () => {
    const tableData = document.getElementById("footer");
    var myHTML = "";
    missionList.map((item) => {
      myHTML += `
      <div class="col-lg-3 col-md-3 col-sm-6 my-2 my-class">
  <img src="img/notebg.png" alt="notebg"; style="width:75%; height:75%;"/>
  <textarea id="textarea" style="position: relative;top: -63%;left:5%;width:55%; height:43%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;">${item.missionData}</textarea>
</div>
      `;
    });
    tableData.innerHTML = myHTML;
  };
// "position:absolute; left:14px; top:28px; width:73%; height:61%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;"