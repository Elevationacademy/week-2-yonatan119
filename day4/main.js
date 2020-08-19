// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color", "green")
// $("li:last-child").css("color", "pink")
// $("#brown-div").css("color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")

// $("#my-input").val("Terabyte")

// const text1 = $("#div").data()
// console.log(`the item with barcode ${text1.barcode} will expire on ${text1.expirationdate}`)
// const blue = $("#div-blue")
// blue.hover(function () {
//     blue.css("background-color", "blue")
// })

// $("button").click(function () {
//     alert($("#my-input").val())
// })

// $(".box").hover(function () {
//     $(this).css("background-color", "blue")
// })

// $(".feedme").click(function () {
//     let divCopy = "<div>feed me more</div>"
//     $("body").append(divCopy)
// })

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]
// for (i of names) {
//     $("body").append(`<div class='human'>${i.first} ${i.last}</div>`)
// }

// $("p").hover(function () {
//     $(this).remove()
// })

// $("button").click(function () {
//     $("#blogs").append(`<div class='blog'>change me to...</div>`)
// })

// $("#blogs").on("click", ".blog", function () {
//     $(this).text("blargh")
// })

// EX1 - 2
// const names = []
// $("body").append("<input id='input'></input>")
// $("body").append("<button id='btn'>Add Human</button>")
// $("#btn").on("click", function () {
//     names.push($("#input").val())
//     $("#name-list").empty(" ")
//     for (let i in names) {
//         $("#name-list").append(`<li class="listitem">${names[i]}</li>`)
//     }
// })
// $("#name-list").on("click", ".listitem", function () {
//     $(this).remove()
// })

// END

// ex3 - still trying
// $("body").append("<div class=box id=box1></div>")
// $("body").append("<div id=inbetween></div>")
// $("body").append("<div class=box id=box2></div>")
// $("#inbetween").css("display", "inline-block")
// $("#inbetween").css("width", "10px")
// $("#inbetween").css("height", "100px")
// $("body").on("hover", "#inbetween", function () {
//     console.log('hi')
//     // if ($("#box1").css("background-color", "#8e44ad")){
//     //     $("#box1").css("background-color", "red")
//     // }else if ($("#box2").css("background-color", "#8e44ad")){
//     //     $("#box").css("background-color", "red")
//     // }
// })
// END

// EX4

// $('.item').on("click", function () {
//     if ($(this).data("instock") === true) {
//         $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
//     }
// })
// END

//EX1
// let posts = [
//     { name: 'yonatan', text: 'woha' }
// ]

// $('button').on("click", function () {
//     posts.push({
//         name: $("#input1").val(),
//         text: $("#input2").val()
//     }
//     )
//     render()
// })

// const render = () => {
//     $(".div").empty()
//     for (post of posts) {
//         $(".div").append(`<div class='post'>${post.name}: ${post.text}</div>`)
//     } return {
//         render
//     }
// }
//END
