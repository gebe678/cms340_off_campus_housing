function syncNumberRangeElement(rangeID, numberID)
{
    let rangeElement = document.getElementById(rangeID);
    let numberElement = document.getElementById(numberID);

    rangeElement.addEventListener("change", function(){
        numberElement.value = rangeElement.value;
    });

    numberElement.addEventListener("change", function(){
        rangeElement.value = numberElement.value;
    });
}

function rangeSyncMain()
{
    syncNumberRangeElement("sqrFootage", "sqrFootageNum");
    syncNumberRangeElement("numBeds", "numBedsNum");
    syncNumberRangeElement("numBaths", "numBathsNum");
    syncNumberRangeElement("monthlyPrice", "monthlyPriceNum");
    syncNumberRangeElement("distanceFromRollins", "distanceFromRollinsNum");
}

rangeSyncMain();