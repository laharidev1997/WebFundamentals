function Login()
{
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log(username,"username")
    if(username == "lahari" && password == "lahari")
    {
        alert("login done!!!!")
        window.location = "Todo.html"; 
    }
    else
    {
        alert("login failed!!")
        window.location = "index.html"
    }
}