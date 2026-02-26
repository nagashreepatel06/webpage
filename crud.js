let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(){
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.domain}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent(){
    let name = document.getElementById("name").value;
    let domain = document.getElementById("domain").value;
    let editIndex = document.getElementById("editIndex").value;

    if(name === "" || domain === ""){
        alert("Please fill all fields");
        return;
    }

    if(editIndex === ""){
        students.push({name, domain});
    } else {
        students[editIndex] = {name, domain};
        document.getElementById("editIndex").value = "";
    }

    document.getElementById("name").value = "";
    document.getElementById("domain").value = "";

    displayStudents();
}

function editStudent(index){
    document.getElementById("name").value = students[index].name;
    document.getElementById("domain").value = students[index].domain;
    document.getElementById("editIndex").value = index;
}

function deleteStudent(index){
    students.splice(index, 1);
    displayStudents();
}

displayStudents();
