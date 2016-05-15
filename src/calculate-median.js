function calculate_median(arr) {
    var evenArray = buildEvenArray(arr);
    var newArray = buildNewArray(arr, evenArray);
    var median = searchMedian(newArray);

    return median;

}

function buildEvenArray(arr) {
    var evenArray = [];
    var evenNumber = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray[evenNumber] = arr[i];
            evenNumber++;
        }
    }

    return evenArray;
}

function searchEvenNumber(arr, even) {
    for(var i = 0; i<arr.length;i++){
        if(arr[i] === even){

            return i;
        }
    }
}

function buildNewArray(arr, evenArray) {
    var newArray = [];
    var n = 0;

    for (var i = 0; i < arr.length; i++) {
        var firstEven = searchEvenNumber(arr, evenArray[0]);
        var finalEven = searchEvenNumber(arr, evenArray[evenArray.length - 1]);
        if (i >= firstEven && i <= finalEven) {
            newArray[n] = arr[i];
            n++;
        }
    }

    return newArray;
}

function searchMedian(newArray) {
    var number = parseInt(newArray.length/2);

    return newArray[number];
}

module.exports = calculate_median;
