function createBusiness() {
    let form = new FormData();
    let username = $('#username').val()
    let password = $('#password').val()
    let telephone = $('#telephone').val()
    let nameCompany = $('#nameCompany').val()
    let descriptions = $('#descriptions').val()
    let address = $('#address').val()
    let image1 = $('#file')[0].files[0];
    let business = {
        name: username,
        password: password,
        address: address,
        telephone: telephone,
        nameBusiness: nameCompany,
        description: descriptions,
    }
    form.append("file", image1)
    form.append("business", new Blob([JSON.stringify(business)], {type: "application/json"}))

    $.ajax({
        type: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8080/business",
        data: form,
        success: showAlert

    })
    event.preventDefault()
}


function showAlert() {
    alert("Đăng ký thành công")
}

