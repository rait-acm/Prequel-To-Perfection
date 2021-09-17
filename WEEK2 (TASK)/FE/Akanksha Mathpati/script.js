
function Validateform() {
    var name =
        document.forms["RegForm"]["Name"];
    var address
        document.forms["RegForm"]["Address"];
    var email =
        document.forms["RegForm"]["EMail"];
    var contact =
        document.forms["RegForm"]["Telephone"];

    if (name.value == ""){
        window.alert("Enter Name");
        name.focus();
        return false;
    }
    if (address.value == ""){
        window.alert("Enter Address");
        address.focus();
        return false;
    }
    if (email.value == ""){
        window.alert("Enter your E-mail");
        email.focus();
        return false;
    }
    if (contact.value == ""){
        window.alert("Enter Contact number");
        conatct.focus();
        return false;
    }
    return true;
 }


