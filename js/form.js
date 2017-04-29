/*javascript to for the example form*/

function displayFormValues(){
      console.log("YO!!!");
    var memberform = document.getElementById("memberform");
    var formelements = memberform.elements;
    var msg = "Form Values:\n";
            for(var i=0; i<formelements.length; i++){
                var field = formelements[i];
                var field_type = formelements[i].type.toLowerCase();
               // var element_name = formelements[i].getAttribute("name");
                var element_value = "";
                if( (field_type !=="button") && (field_type !=="submit") && (field_type!="reset")){
                    switch(field_type) {
                        case "text": 
                        case "password": 
                        case "textarea":
                        case "hidden":	
                            if (element_value !== null || element_value !=="") {
                                element_value = field.value;
                                //console.log("\n"+field_type+ " NAME: "+element_name+" VALUE: "+element_value);
                            }
                            else{
                                element_value +="NO VALUE";
                            }
                            break;
                        case "checkbox":
                            
                            if(formelements[i].checked ===true){
                                element_value = field.value;
                            }
                            else{
                                element_value +="NOT CHECKED";
                            }
                            break;
                        default: 
                            break;
                    }
                }
                msg += element_value +"\n";
            }
    alert(msg);        
}