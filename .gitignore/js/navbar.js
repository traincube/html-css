/*javascript to show or hide nav
Use with the sm-nav-vert.css*/

        function showHideNav(){
            var nav = document.getElementById("home");
            if(nav.className === "showleft"){
                console.log("will hide now");
                nav.setAttribute("class", "hide");
            }
            else{
                console.log("will show now");
                nav.setAttribute("class", "showleft");
            }
        }