function formControlMain()
{
    let button = document.getElementById("housingFilters");

    button.addEventListener("submit", function(){
        event.preventDefault();

        let dataForm = $(this).serialize();

        $.post("/housingForm", dataForm, function(apartmentInfo){
            
            console.log(apartmentInfo.street[0]);
        })
    });
}

formControlMain();