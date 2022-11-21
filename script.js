document.querySelector("#buttonc").onclick = function() {calculate()};

function calculate() {

    // For BMR

    var W = document.querySelector("#wgt").value;
    var H = document.querySelector("#hgt").value;
    var A = document.querySelector("#age").value;
    var result1 = 0;

    if (document.querySelector("#male").checked){
        result1 = (10 * W) + (6.25 * H) - (5 * A) + 5;
    }
    else if (document.querySelector("#female").checked){
        result1 = (10 * W) + (6.25 * H) - (5 * A) - 161;
    }
    if (result1 < 0)
    {
        document.querySelector("#result_bmr").value = 0;
    }
    else {
        document.querySelector("#result_bmr").value = result1.toFixed(1);
    }

    // For TDEE

    let lvl_value = document.querySelector("#activity").value;
    let multiplier = 0;
    switch (lvl_value) {
        case 'lvl0':
            multiplier = 1.2;
            break;
        case 'lvl1':
            multiplier = 1.375;
            break;
        case 'lvl2':
            multiplier = 1.55;
            break;
        case 'lvl3':
            multiplier = 1.725;
            break;
        case 'lvl4':
            multiplier = 1.9;
            break;
    }
    var result2 = result1 * multiplier;
    if (result2 < 0)
    {
        document.querySelector("#result_tdee").value = 0;
    }
    else {
        document.querySelector("#result_tdee").value = result2.toFixed(1);
    }

    // For personal goal

    var result3 = 0;
    if (document.querySelector("#wloss").checked){
        result3 = result2 - 300;
    }
    else if (document.querySelector("#mgain").checked){
        result3 = result2 + 200;
    }
    if (result3 < 0)
    {
        document.querySelector("#result_focus").value = 0;
    }
    else {
        document.querySelector("#result_focus").value = result3.toFixed(1);
    }

    // For macros
    
    if (result3 > 0) {
        let prts = W * 1.6;
        let fts = W * 0.8;
        let carbs = ((result3 - (prts * 4) - (fts * 9))/4);
        document.querySelector("#prots").innerHTML = prts.toFixed(1);
        document.querySelector("#fats").innerHTML = fts.toFixed(1);
        if (carbs > 0) {
            document.querySelector("#carbs").innerHTML = carbs.toFixed(1);
        }
        else {
            document.querySelector("#carbs").innerHTML = 0;
        }
    }
    else {
        document.querySelector("#prots").innerHTML = 0;
        document.querySelector("#fats").innerHTML = 0;
        document.querySelector("#carbs").innerHTML = 0;
    }
}
