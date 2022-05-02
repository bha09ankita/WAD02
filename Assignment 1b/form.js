function Save(){
    let first_name,last_name,email,comments;

    first_name=document.getElementById("firstname").value;
    last_name=document.getElementById("lastname").value;
    middle_name=document.getElementById("middlename").value;
  password=document.getElementById("password").value;
    username=document.getElementById("username").value;
    
    

    let contact_records=new Array();

    //contacts is the key in localStorage
    contact_records=JSON.parse(localStorage.getItem("contacts"))?JSON.parse(localStorage.getItem("contacts")):[]

    //push the data to array
    contact_records.push({
        "first_name":first_name,
        "last_name":first_name,
        "email":email,
        "comments":comments
    })

    //set the item in the local storage
    localStorage.setItem("contacts",JSON.stringify(contact_records));
}