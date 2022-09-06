function createPost() {
    let title = $('#title').val()
    let salary = $('#salary').val()
    let benefits = $('#benefits').val()
    let description = $('#description').val()
    let language = $('#language').val()
    let skill = $('#skill').val()
    let address = $('#address').val()
    let customer = {
        title: title,
        salary: salary,
        benefits: benefits,
        description: description,
        language: language,
        skill: skill,
        address : address,
        // business: {
        //     id:
        // }

    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/customers",
        data: JSON.stringify(customer),
        success: function (){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thành công :D',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById("name").value = ""
            document.getElementById("password").value = ""
            document.getElementById("nameCustomer").value = ""
            document.getElementById("telephone").value = ""
            document.getElementById("email").value = ""
            document.getElementById("address").value = ""
        }
    })
    event.preventDefault()
}
