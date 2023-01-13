var missionList = [];
const addNewMission = () => {
    const newMission = new Object();
    missionData = document.getElementById("missionData").value;
    newMission.missionDate = document.getElementById("missionDate").value;
    newMission.missionDate = missionData;
    newMission.missionTime = document.getElementById("missionTime").value;
    missionList.push(newMission);

    // Create an image element with the user's text
    // Create a container div element
    var container = document.createElement("div");
    container.style.cssText = "position:relative; width:200px; height:200px;";

    // Create an image element
    var newImg = document.createElement("img");
    newImg.src = "img/notebg.png";
    newImg.style.cssText = "width:100%; height:100%;";

    // Create a textarea element
    var text = document.createElement("textarea");
    text.innerText = missionData;
    text.style.cssText = "position:absolute; left:7px; top:35px; width:82%; height:55%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;";

    // Append the elements to the container
    container.appendChild(newImg);
    container.appendChild(text);

    // Append the container to the HTML document
    var footer = document.getElementById("footer");
    footer.appendChild(container);

    // reset the form
    document.getElementById("myForm").reset();
};
