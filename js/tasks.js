var missionList = [];
const addNewMission = () => {
    const newMission = new Object();
    newMission.missionData = document.getElementById("missionData").value;
    newMission.missionDate = document.getElementById("missionDate").value;
    missionList.push(newMission);

    // Create an image element with the user's text
    var newImg = document.createElement("img");
    newImg.src = "img/notebg.png"; // you should use the URL of the image you want to display
    newImg.style.cssText = "width:200px; margin-top:20px"  // you can customize the style of the image

    // Append the image to the HTML document
    var footer = document.getElementById("footer");
    footer.appendChild(newImg);

    // reset the form
    document.getElementById("myForm").reset();
};

