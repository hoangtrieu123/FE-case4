function login() {
    let username = $('#username').val()
    let password = $('#password').val()
    let user = {
        username: username,
        password: password,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/Login",
        data: JSON.stringify(user),
        success:function (data){
            localStorage.setItem("id",data.id)
            alert("Thành công")
        }
    })
    event.preventDefault()
}