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

function introControlMain()
{
    let button = document.getElementById("introForm");

    let street = [];
    let city = [];
    let zipCode = [];
    let apartmentComplex = [];

    button.addEventListener("submit", function(){
        event.preventDefault();

        let dataForm = $(this).serialize();

        let apartmentList = document.getElementById("apartmentTable");
        apartmentList.removeChild(apartmentList.firstChild);

        $.post("/introForm", dataForm, function(apartmentInfo){
            
            for(let i = 0; i < apartmentInfo.street.length; i++)
            {
                street.push(apartmentInfo.street[i]);
                city.push(apartmentInfo.city[i]);
                zipCode.push(apartmentInfo.zipCode[i]);
                apartmentComplex.push(apartmentInfo.apartmentComplex[i]);
            }

            printInfo(street, city, zipCode, apartmentComplex);
            buildApartmentTable(street, city, zipCode, apartmentComplex);
                        
        })
    });
}

function printInfo(street, city, zip, apartComplex)
{
    for(let i = 0; i < street.length; i++)
    {
        //console.log(street[i] + " " + city[i] + " " + zip[i] + " " + apartComplex[i]);
    }
}

function buildApartmentTable(street, city, zip, apartmentComplex)
{
    let apartmentList = document.getElementById("apartmentTable");

    const listElements = document.createElement("p");
    listElements.id = "list";

    apartmentList.appendChild(listElements);

    list = document.getElementById("list");
    let address = "";
    list.innerHTML = address;

    for(let i = 0; i < street.length; i++)
    {
        console.log(zip[i] + " is the city");
        address += " " + (i + 1) + ". " + street[i] + " " + city[i] + " " + zip[i] + " " + apartmentComplex[i] + "<br>";
    }
    
    list.innerHTML = address;
}

formControlMain();
introControlMain();