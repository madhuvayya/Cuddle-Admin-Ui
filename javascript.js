            // Create a new list item when clicking on the "Add" button
            function newUser() {
                var li = document.createElement("li");
                var name = document.getElementById("name").value;
                var eamil = document.getElementById("email").value;
                var status = document.getElementById("status").value;
                var role = document.getElementById("role").value;
                var lastLogin = document.getElementById("lastLogin").value;
                var permission = document.getElementById("permission").value;
                console.log(name);
                var t = document.createTextNode(name);
                li.appendChild(t);
                if (inputValue == '') {
                    alert("You must write something!");
                } else {
                    document.getElementById("userUL").appendChild(li);
                }
                document.getElementById("name").value = "";
            }
    
            function showOptions(inputValue) {
                var x = document.getElementById(inputValue);
                if (x.style.display == "none") {
                x.style.display = "block";
                } else {
                x.style.display = "none";
            }
        }