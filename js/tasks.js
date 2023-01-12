var missionList = [];
const addNewMission = () => {
    const newMission = new Object();
    missionData = document.getElementById("missionData").value;
    newMission.missionDate = document.getElementById("missionDate").value;
    newMission.missionDate = missionData;
    missionList.push(newMission);

    // Create an image element with the user's text
    // Create a container div element
    var container = document.createElement("div");
    container.style.cssText = "position:relative; width:200px; height:200px;";

    // Create an image element
    var newImg = document.createElement("img");
    newImg.src = "img/notebg.png";
    newImg.style.cssText = "width:100%; height:100%;";

    // Create a text div element
    var text = document.createElement("div");
    text.innerText = missionData;
    // text.style.cssText = "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:black;overflow: auto;";
    // text.style.cssText = "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:black;overflow:auto; width:50%; height:50%;";
    // ok code
    // text.style.cssText = "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:black;overflow-x:scroll;overflow-y:scroll;width:50%; height:50%;";
    text.style.cssText = "position:absolute; left:33px; top:35px; width:68%; height:55%; color:black;overflow-x:scroll;overflow-y:scroll;";


    // Append the elements to the container
    container.appendChild(newImg);
    container.appendChild(text);

    // Append the container to the HTML document
    var footer = document.getElementById("footer");
    footer.appendChild(container);


    // reset the form
    document.getElementById("myForm").reset();
};

