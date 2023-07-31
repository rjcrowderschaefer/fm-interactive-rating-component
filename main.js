function thankYou() {
    let thankYouDisplay = document.getElementById('thank-you-container');
    let ratingDisplay = document.getElementById('rating-state-container');
    thankYouDisplay.style.display = "block";
    ratingDisplay.style.display = "none";
}

let numArray = document.querySelectorAll('.rating-num');

document.getElementById('rating-num-selection').innerHTML 

// console.log(numArray[0].value)

function getRatingSelection() {
    let ratingNum = 0;
    let numList = document.querySelectorAll('.rating-num');
    // let numArray = [...numList];
    let NumSelection = document.getElementById('rating-num-selection').innerHTML;
    for (let i = 0; i < numList.length; i++) {
        ratingNum = numList[i].value
        console.log(ratingNum)
        if (ratingNum === 1) {
            console.log(ratingNum.value)
            return NumSelection = "1"
        } else if (ratingNum === 2) {
            document.getElementById('rating-num-selection').innerHTML = "2"
        } 
    }
    
    return
}

// console.log(getRatingSelection())

// function ratingSelection() {
//     let ratingNum = document.getElementById('rating-num').innerHTML;
//     let ratingNumDisplay = document.getElementById('rating-num-selection').innerHTML
//     ratingNumDisplay = ratingNum
//     return ratingNumDisplay
//     }

// function getRatingNum() {
//     let ratingNum = document.getElementsByName('rating').innerText;
//     for (let i = 0; i < ratingNum.length; i++) {
//         if (ratingNum[i] === 1) {
//             document.getElementById('rating-num-selection').innerText = "1";
//         } else {
//             return "No selection made"
//         }   
//     }
// }

// let ratingNum1 = document.getElementById('num1').innerHTML;
// document.getElementById('rating-num-selection').innerHTML = ratingNum1;

// let ratingNum2 = document.getElementById('num2').innerHTML;
// document.getElementById('rating-num-selection').innerHTML = ratingNum2;

// let ratingNum3 = document.getElementById('num2').innerHTML;
// document.getElementById('rating-num-selection').innerHTML = ratingNum3;

// let ratingNum4 = document.getElementById('num2').innerHTML;
// document.getElementById('rating-num-selection').innerHTML = ratingNum4;

// let ratingNum5 = document.getElementById('num2').innerHTML;
// document.getElementById('rating-num-selection').innerHTML = ratingNum;

// let ratingNum = document.querySelectorAll('rating-num').innerHTML;
// document.querySelectorAll('rating-num-selection').innerHTML = ratingNum;