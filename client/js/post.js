displayPost()
function createPost() {
    let title = $('#title').val()
    let salary = $('#salary').val()
    let benefits = $('#benefits').val()
    let description = $('#description').val()
    let language = $('#language').val()
    let skill = $('#skill').val()
    let address = $('#jobProvince').val()

    let post = {
        title: title,
        salary: salary,
        benefits: benefits,
        description: description,
        language: language,
        skill: skill,
        address: address,
        business: {
            id: localStorage.getItem("Id"),
        }
    }

    $.ajax({
        headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, type: "POST", url: "http://localhost:8080/posts", data: JSON.stringify(post), success: function () {
            Swal.fire({
                position: 'center', icon: 'success', title: 'Thành công :D', showConfirmButton: false, timer: 1500
            })
            document.getElementById("name").value = ""
            document.getElementById("password").value = ""
            document.getElementById("nameCustomer").value = ""
            document.getElementById("telephone").value = ""
            document.getElementById("email").value = ""
            document.getElementById("jobProvince").value = ""
        }
    })
    event.preventDefault()
}

function displayPost() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts",
        success: function (data) {
            let content = ""
            for (let i = 0; i < data.length; i++) {
                content += "<div class='job-content'>"
                content += "<div class='job-logo'>"
                content += "<a href='#'>"
                content += "<img src='../static/" + data[i].business.imageUrl + "' class='job-logo-ima' alt='job-logo'>"
                content += "</a>"
                content += "</div>"
                content += "<div class='job-desc'>"
                content += "<div class='job-title'>" + data[i].title + "</div>"
                content += " <div class='job-company'>"
                content += "<a href='#'></a>" +
                    "<a href='#' class='job-address'>" +
                    "<i class='fa fa-map-marker' aria-hidden='true'></i>" + data[i].address + "</a>"
                content += " </div>"
                content += " <div class='job-inf'>"
                content += " <div class='job-main-skill'>"
                content += " <i class='fa fa-code' aria-hidden='true'></i> <a href='#'> " + data[i].language + "</a>"
                content += " </div>"
                content += " <div id='salary' class='job-salary'>"
                content += " <i class='fa fa-money' aria-hidden='true'></i>"
                content += " <span class='salary-max'>" + data[i].salary + "<em class='salary-unit'>triệu</em></span>"
                content += " </div>"
                content += "</div>"
                content += "</div>"
                content += "<div class='wrap-btn-appl'>"
                content += " <a href='#' class='btn btn-appl'>Apply Now</a>"
                content += "</div>"
                content += "</div>"
                content += "</div>"
            }
            document.getElementById("test").innerHTML = content
        }
    })
}

let searchName = document.getElementById("search")

function search() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/posts/search?title=" + searchName.value,
        success: function (data){
            console.log(data)
            displayPost(data)
        }
    })
}