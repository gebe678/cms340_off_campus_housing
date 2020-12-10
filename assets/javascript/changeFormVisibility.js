function main()
{
    let filterButton = document.getElementById("filterButton");
    let introForm = document.getElementById("introForm");
    let close = document.getElementById("modalClose");

    filterButton.addEventListener("click", function(){
        introForm.style.display = "none";
    });

    close.addEventListener("click", function(){
        introForm.style.display = "block";
    });

}

main();