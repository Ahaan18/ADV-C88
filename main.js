function send(){
    a = document.getElementById("local").value;
    localStorage.setItem("storage", a);
    window.location = "one.html";
}