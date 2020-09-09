var userList = [
    {
        name:'Suresh',
        email:'suresh@gmail.com',
        status:'<button class="active-button">Active</button>',
        role:'Admnistrator',
        lastLogin:'3 Days ago',
        permission:'Valid',
        others:'...'
    },
    {
        name:'Naresh',
        email:'naresh@yahoo.com',
        status:'<button class="inactive-button">Inactive</button>',
        role:'User',
        lastLogin:'2 Days ago',
        permission:'Invalid',
        others:'...'
    },
    {
        name:'Phani',
        email:'phani123@gmail.com',
        status:'<button class="inactive-button">Inactive</button>',
        role:'User',
        lastLogin:'1 Days ago',
        permission:'Invalid',
        others:'...'
    },
    {
        name:'Kalyan',
        email:'kalyan.1994@yahoo.com',
        status:'<button class="active-button">Active</button>',
        role:'Admnistrator',
        lastLogin:'1 Days ago',
        permission:'Valid',
        others:'...'
    },
    {
        name:'Santhosh',
        email:'dksanthosh@gmail.com',
        status:'<button class="inactive-button">Inactive</button>',
        role:'User',
        lastLogin:'5 Days ago',
        permission:'Invalid',
        others:'...'
    },
    {
        name:'Sathish P',
        email:'patnam.sathish@gmail.com',
        status:'<button class="active-button">Active</button>',
        role:'Admnistrator',
        lastLogin:'2 Days ago',
        permission:'Valid',
        others:'...'
    },
    {
        name:'Mahesh',
        email:'mahesh92@gmail.com',
        status:'<button class="inactive-button">Inactive</button>',
        role:'User',
        lastLogin:'2 Days ago',
        permission:'Invalid',
        others:'...'
    },
    {
        name:'jayanth',
        email:'yjayanth@yahoo.com',
        status:'<button class="active-button">Active</button>',
        role:'Admnistrator',
        lastLogin:'3 Days ago',
        permission:'Valid',
        others:'...'
    },
    {
        name:'Trinath',
        email:'trinath.123456@gmail.com',
        status:'<button class="active-button">Active</button>',
        role:'Admnistrator',
        lastLogin:'1 Days ago',
        permission:'Valid',
        others:'...'
    },
    {
        name:'Mithin',
        email:'pmithinkumar@gmail.com',
        status:'<button class="inactive-button">Inactive</button>',
        role:'User',
        lastLogin:'4 Days ago',
        permission:'Inalid',
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
        html+="<td>"+'<img src="person-icon.png"/> '+ "&nbsp;"+ userList[i].name+"</td>";
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

function numberOfUser() {
    var numberOfUsers = userList.length;
    document.getElementById("numberOfUsers").innerHTML= "Users("+numberOfUsers+")";
}