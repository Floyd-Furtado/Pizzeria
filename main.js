pizza_list_array = [];

function getMenu() {
    var item = document.getElementById("pizza_name").value; 
    pizza_list_array.push(item);
    var remove_commas = pizza_list_array.join("<br># ");
    document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
}