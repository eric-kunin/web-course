var missionList = JSON.parse(localStorage.getItem("missionList")) || [];

const addNewMission = () => {
    const newMission = new Object();
    // data
    missionData = document.getElementById("missionData").value;
    newMission.missionData = missionData;
    // date
    var missionDate = new Date(document.getElementById("missionDate").value);
    newMission.missionDate = missionDate;
    // time
    missionTime = document.getElementById("missionTime").value;
    newMission.missionTime = missionTime;
    missionList.push(newMission);

    // Save the mission data to LocalStorage
    localStorage.setItem("missionList", JSON.stringify(missionList));

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
    text.value = missionData;
    text.style.cssText = "position:absolute; left:14px; top:28px; width:73%; height:61%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;";

    // Create a date element
    var date = document.createElement("div");
    var day = missionDate.getDate();
    var month = (missionDate.getMonth()+1);
    date.innerText = day + '/' + month + '/' + missionDate.getFullYear();
    date.style.cssText = "position:absolute; left:14px; top:77%; width:82%; height:5%; color:black;"
    // Create a time element
    var time = document.createElement("div");
    time.innerText = missionTime;
    time.style.cssText = "position:absolute; left:14px; top:85%; width:82%; height:5%; color:black;";
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

// ... rest of the code

window.onload = function() {
    // Check if there's any data saved in LocalStorage
    if (localStorage.getItem("missionList")) {
        missionList = JSON.parse(localStorage.getItem("missionList"));
    }
    missionList.forEach(function(mission) {
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
        text.value = mission.missionData;
        text.style.cssText = "position:absolute; left:14px; top:28px; width:73%; height:61%; color:black;overflow-x:scroll;overflow-y:scroll;resize:none;";

        // Create a date element
        var date = new Date(mission.missionDate);
        var day = date.getDate();
        var month = (date.getMonth()+1);
        var dateDiv = document.createElement("div");
        dateDiv.innerText = day + '/' + month + '/' + date.getFullYear();
        dateDiv.style.cssText = "position:absolute; left:14px; top:77%; width:82%; height:5%; color:black;";

        // Create a time element
        var time = document.createElement("div");
        time.innerText = mission.missionTime;
        time.style.cssText = "position:absolute; left:14px; top:85%; width:82%; height:5%; color:black;";

        // Append the elements to the container
        container.appendChild(newImg);
        container.appendChild(text);
        container.appendChild(dateDiv);
        container.appendChild(time);

        // Append the container to the HTML document
        var footer = document.getElementById("footer");
        footer.appendChild(container);
    });
};





