const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  

    let password1 = generateRandomPassword(characters);
    let password2 = generateRandomPassword(characters);
  
    document.getElementById("inputField1").value = password1;
    document.getElementById("inputField2").value = password2;
  }
  
  function generateRandomPassword(characters) {
    let password = "";
    const passwordLength = 15;
  
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }

  function instructionToggle() {
    const x = document.getElementById("instructions");
    if (x.style.display === "none"){
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }