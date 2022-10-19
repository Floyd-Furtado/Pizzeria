menu_list_array = [ "Veg Margherita Pizza",
                    "Chicken Tandorri Pizza",
                    "Veg Supreme Pizza",
                    "Panner Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza",
                    "Pepperoni Pizza", 
                    "Hawaiian Pizza",
                    "Cheese Pizza",
                    "BBQ Chicken Pizza",
                    "Chicago Pizza"]; //Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("add_item").value;
    
    menu_list_array.push(item);
}



