  function check(){
    var uu=document.getElementById("user").value
    var pp=document.getElementById("pass").value
    if(uu=="gayatri" && pp=="1234"){
      window.open("cancel.html")
    }else if(uu=="ram" && pp=="1123"){
      window.open("cancel.html")
    }else{
      var msg =document.getElementById("Invalid")
      msg.innerHTML="Invalid username or password"
      msg.style.color="red"
    }

  }
