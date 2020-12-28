// import JSONEditor from './JSONEditor'
console.log("Starting Admin Console");
readLocalData();


function readLocalData() {
    fetch('../data/data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (var i = 0; i < data.team.length; i++) {
                console.log(data.team[i])
                addTeammateToDOM(data.team[i])
            }
        });
}

function addToTeam() {
    console.log("DATANAME: ", document.getElementById("id").value)
    var data = {
        "id": document.getElementById("id").value,
        "res": document.getElementById("res").value,
        "name": document.getElementById("name").value,
        "role": document.getElementById("role").value,
        "bio": document.getElementById("bio").value,
        "major": document.getElementById("major").value
    }
    if (document.getElementById("calendar").value == "") {
        data.tutor = 0;
    }
    else {
        data.tutor = 0;
        data.calendar = document.getElementById("calendar").value;
    }

    addTeammateToFile(data);
    addTeammateToDOM(data);
}

function addTeammateToDOM(newTeammate) {
    var dataContainer = document.getElementById('dataContainer');

    var container = document.createElement('div');
    container.classList.add("div-bg");

    var para = document.createElement("p");
    para.appendChild(document.createTextNode("ID\t\t: " + newTeammate.id))
    para.appendChild(document.createTextNode("\nName\t: " + newTeammate.name))
    para.appendChild(document.createTextNode("\nRes\t\t: " + newTeammate.res))
    para.appendChild(document.createTextNode("\nMajor\t: " + newTeammate.major))
    para.appendChild(document.createTextNode("\nTitle\t\t: " + newTeammate.role))
    para.appendChild(document.createTextNode("\nBio\t\t: " + newTeammate.bio))
    para.appendChild(document.createTextNode("\nTutor\t: " + newTeammate.tutor))
    if (newTeammate.tutor == 1) {
        para.appendChild(document.createTextNode("\nCal\t\t: " + newTeammate.calendar));
    }

    container.appendChild(para);
    dataContainer.appendChild(container);

    document.body.style = "white-space: pre;"
}

function addTeammateToFile(newTeammate) {
    var obj = JSON.parse("../data/data.json");
    // Add a new member into the array (example, using made up values)
    obj.team.push(newTeammate);
}
