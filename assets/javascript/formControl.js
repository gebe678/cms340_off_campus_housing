function formControlMain()
{
    let button = document.getElementById("housingFilters");

    button.addEventListener("submit", function(){
        event.preventDefault();

        let street = [];
        let city = [];
        let zipCode = [];
        let apartmentComplex = [];

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
            buildApartmentTable(street, city, zipCode, apartmentComplex);
            
        })
    });
}

function introControlMain()
{
    let button = document.getElementById("introForm");

    button.addEventListener("submit", function(){
        clearList();
        event.preventDefault();

        let street = [];
        let city = [];
        let zipCode = [];
        let apartmentComplex = [];

        let dataForm = $(this).serialize();

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
    let address = "";

    // const listElements = document.createElement("p");
    // listElements.id = "list";

    // apartmentList.appendChild(listElements);

    list = document.getElementById("list");

    for(let i = 0; i < street.length; i++)
    {
        address += " " + (i + 1) + ". " + street[i] + " " + city[i] + " " + zip[i] + " " + apartmentComplex[i] + "<br>";
    }

    console.log(address);
    list.innerHTML = address;
}

function clearList()
{
    let list = document.getElementById("list");

    list.innerHTML = "";
}

formControlMain();
introControlMain();
