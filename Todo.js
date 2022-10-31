// function Todo()
// {
//     var count = document.getElementById("inc").value
//     count = parseInt(count)
//     if(count%2 == 0)
//     {
//         count++
//     }
//     else
//     {
//         count--
//     }
//     document.getElementById("inc").value = count
// }
Todo = () => {
    let count = document.getElementById("inc").value
        count = parseInt(count)
        count++
        document.getElementById("inc").value = count
}
Tododecr = () => {
    let count = document.getElementById("inc").value
        count = parseInt(count)
        count--
        document.getElementById("inc").value = count
}