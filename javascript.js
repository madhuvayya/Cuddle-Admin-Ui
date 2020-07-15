var userList = [
    {
        name:'Suresh',
        email:'suresh@gmail.com',
        status:'Active',
        role:'Admin',
        lastLogin:'3 Days ago',
        permission:'Valid',
        others:'...'
    },

    {
        name:'Naresh',
        email:'naresh@yahoo.com',
        status:'Inactive',
        role:'User',
        lastLogin:'2 Days ago',
        permission:'Invalid',
        others:'...'
    }
]

function showOptions(inputValue) {
    var x = document.getElementById(inputValue);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var html = "<table border='0'>";

function createTable(){
for (var i = 0; i < userList.length; i++) {
    html+="<tr>";
    html+="<td>"+'<img src="person-icon.png"/> '+userList[i].name+"</td>";
    html+="<td>"+userList[i].email+"</td>";
    html+="<td>"+userList[i].status+"</td>";
    html+="<td>"+userList[i].role+"</td>";
    html+="<td>"+userList[i].lastLogin+"</td>";
    html+="<td>"+userList[i].permission+"</td>";
    html+="<td>"+'...'+"</td>";

    html+="</tr>";
}
html+="</table>";
}

function getData(){
    createTable();
    document.getElementById("box").innerHTML = html;
}