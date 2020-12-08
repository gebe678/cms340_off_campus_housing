function formControlMain()
{
    let button = document.getElementById("housingFilters");

    let street = [];
    let city = [];
    let zipCode = [];
    let apartmentComplex = [];

    button.addEventListener("submit", function(){
        event.preventDefault();

        let dataForm = $(this).serialize();

        $.post("/housingForm", dataForm, function(apartmentInfo){
            
            for(let i = 0; i < apartmentInfo.street.length; i++)
            {
                street.push(apartmentInfo.street[i]);
                city.push(apartmentInfo.city[i]);
                zipCode.push(apartmentInfo.zipCode[i]);
                apartmentComplex.push(apartmentInfo.apartmentComplex[i]);
            }

            printInfo(street, city, zipCode, apartmentComplex);
            
        })
    });
}

function printInfo(street, city, zip, apartComplex)
{
    for(let i = 0; i < street.length; i++)
    {
        console.log(street[i]);
        console.log(city[i]);
        console.log(zip[i]);
        console.log(apartComplex[i]);
    }
}

formControlMain();