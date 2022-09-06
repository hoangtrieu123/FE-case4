// function getAllProducts() {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/products",
//         success: function (data) {
//             let table = document.getElementById("list");
//             if (table.style.display === "none") {
//                 table.style.display = "block"
//                 document.getElementById("form").style.display = "none"
//             }
//             document.getElementById("list").innerHTML = displayTable(data)
//             console.log(data)
//         }
//
//     })
// }

// function displayTable(data) {
//     let result = ""
//     result += "<table border='1' width='300px'>"
//     result += "<tr>"
//     result += "<th>STT</th>"
//     result += "<th>Name</th>"
//     result += "<th>Amount</th>"
//     result += "<th>Price</th>"
//     result += "<th>Category</th>"
//     result += "<th colspan='2'>Action</th>"
//     result += "</tr>"
//     for (let i = 0; i < data.length; i++) {
//         result += "<tr>"
//         result += "<th>" + (i+1) + "</th>"
//         result += "<th>" + data[i].name + "</th>"
//         result += "<th>" + data[i].amount + "</th>"
//         result += "<th>" + data[i].price + "</th>"
//         result += "<th>" + data[i].category.nameCategory + "</th>"
//         result += "<th><button onclick='update(" + data[i].id + ")'>Update</button></th>"
//         result += "<th><button onclick='deleteProduct(" + data[i].id + ")'>Delete</button></th>"
//         result += "</tr>"
//     }
//     result += "</table>"
//     return result
// }

// function update(id) {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/products/categories/",
//         success: function (data) {
//             document.getElementById("form").innerHTML = formUpdate(data)
//             $.ajax({
//                 type: "GET",
//                 url: "http://localhost:8080/products/" + id,
//                 success: function (data) {
//                     document.getElementById("id").value = data.id
//                     document.getElementById("name").value = data.name
//                     document.getElementById("amount").value = data.amount
//                     document.getElementById("price").value = data.price
//                 }
//             })
//         }
//     })
// }

// function deleteProduct(id) {
//     $.ajax({
//         type: "DELETE",
//         url: "http://localhost:8080/products/" + id,
//         success: getAllProducts
//     })
// }

function CreateCustomer() {
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

function showAlert() {
    alert("Đăng ký thành công")
}

