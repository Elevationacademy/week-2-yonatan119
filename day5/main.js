// $('button').on('click', function() {
//   let relevantInputValue = $(this).closest("div").find("input").val()
//   alert(relevantInputValue)
// })
//SPOTCHECK1
// $('button').on('click', function () {
//     let relevantValue = $(this).closest("div")
//     let relevantSpan = relevantValue.find("span").text()
//     alert(relevantSpan)
// })
//END

//SPOTCHECK2
// $('button').on('click', function () {
//     let relevantValue = $("div")
//     let relevantP = relevantValue.find("p").text()
//     console.log(relevantP)
// })
//END
let dataIds = []
$('.generator').on('click', function (){
    let proccessorId = $(this).closest(".processor")[0].id
    let computerId = $(this).closest(".computer").data("id")
    let computerBus = $(this).closest(".computer").find(".BUS").text()
    dataIds.push(
        {cmp_id:computerId}
    )
    console.log(`proccessor ID: ${proccessorId}`)
    console.log(`computers data-id: ${computerId}`)
    console.log(`BUS: ${computerBus}`)
})
$('.validator').on('click',function () {
    let Text = $(this).text()
    let MB = $(this).closest(".computer").find(".MB").text()
    let QR1 = $(this).closest(".computer").find(".processor").find(".QR").first().text()
    let QR2 = $(this).closest(".computer").find(".processor").find(".QR").last().text()
    console.log(`The generator's text: ${Text}`)
    console.log(`The MB:${MB}`)
    console.log(`QR1: ${QR1}, QR2: ${QR2}`)

})