function createPost() {
    let name = $('#name').val()
    let password = $('#password').val()
    let nameCustomer = $('#nameCustomer').val()
    let telephone = $('#telephone').val()
    let email = $('#email').val()
    let address = $('#address').val()
    let customer = {
        name: name,
        password: password,
        nameCustomer: nameCustomer,
        telephone: telephone,
        email: email,
        address: address,
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/customers",
        data: JSON.stringify(customer),
        success: showAlert
    })
    event.preventDefault()
}