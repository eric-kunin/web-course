var missionList = [];
const addNewMission = () => {
    const newMission = new Object();
    newMission.missionData = document.getElementById("missionData").value;
    newMission.missionDate = document.getElementById("missionDate").value;
    missionList.push(newMission);
    document.getElementById("myForm").reset();
  };