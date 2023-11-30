            function validateForm()
            {
                //declare variable noic and
                let name = document.forms["exampleForm"]["name"].value;
                let email = document.forms["exampleForm"]["email"].value;
               
                if (name === ""){
                    alert("Name must be filled out");
                    document.forms["exampleForm"]["name"].select(); // bagitahu user kat mana salah
                    document.forms["exampleForm"]["name"].focus(); 
                    return false;
                }
                
                if (email === ""){
                    alert("Email must be filled out");
                    document.forms["exampleForm"]["email"].select(); // bagitahu user kat mana salah
                    document.forms["exampleForm"]["email"].focus(); 
                    return false;
                }                

            }        
              