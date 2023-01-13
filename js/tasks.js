var missionList = [];
const addNewMission = () => {
    const newMission = new Object();
    // data
    missionData = document.getElementById("missionData").value;
    // date
    var missionDate = new Date(document.getElementById("missionDate").value);
    newMission.missionDate = missionData;
    // time
    missionTime = document.getElementById("missionTime").value;
    missionList.push(newMission);

    // Create an image element with the user's text
    // Create a container div element
    var container = document.createElement("div");
    container.style.cssText = "position:relative; width:200px; height:200px; opacity:0; animation: fadein 0.5s; animation-fill-mode: forwards;";

    // Create an image element
    var newImg = document.createElement("img");
    newImg.src = "img/notebg.png";
    newImg.style.cssText = "width:100%; height:100%;";

    // Create a textarea element
    var text = document.createElement("textarea");
    text.innerText = missionData;
    text.style.cssText = "position:absolute; left:7px; top:28px; width:82%; height:58%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;";

    // Create a date element
    var date = document.createElement("div");
    date.innerText = missionDate.getDate() + '/' + (missionDate.getMonth()+1) + '/' + missionDate.getFullYear();
    date.style.cssText = "position:absolute; left:7px; top:77%; width:82%; height:5%; color:black;";

    // Create a time element
    var time = document.createElement("div");
    time.innerText = missionTime;
    time.style.cssText = "position:absolute; left:7px; top:85%; width:82%; height:5%; color:black;";
   
    // Append the elements to the container
    container.appendChild(newImg);
    container.appendChild(text);
    container.appendChild(date);
    container.appendChild(time);

    // Append the container to the HTML document
    var footer = document.getElementById("footer");
    footer.appendChild(container);

    // reset the form
    document.getElementById("myForm").reset();
};
