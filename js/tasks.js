var missionList = []; 
const addNewMission = () => {
    const newMission = new Object();
    // data of note/mission
    newMission.missionData = document.getElementById("missionData").value;
    // date of note/mission
    newMission.missionData = document.getElementById("missionDate").value;
    // time of note/mission
    newMission.missionData = document.getElementById("missionTime").value;
    missionList.push(newMission);
    insertData();
  };

  const insertData = () => {
    const tableData = document.getElementById("footer");
    var myHTML = "";
    missionList.map((item) => {
      myHTML += `
      <div class="col-lg-3 col-md-3 col-sm-6 my-2 my-class">
  <img src="img/notebg.png" alt="notebg"; style="width:75%; height:95%;"/>
</div>
      `;
    });
    tableData.innerHTML = myHTML;
  };
  