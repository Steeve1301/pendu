let word= ['b', 'o', 'n', 'j', 'o', 'u','r'];
let findword= ['_','_','_','_','_','_','_'];
let position=0;
let try_game= 6;
let playing= true;

document.getElementById("find_word").innerHTML= findword.join(' ');

document.getElementById("putletter").addEventListener("click", () =>{
    letter= document.getElementById("letter").value;    
    if(playing==true){
        for(let i=0; i<word.length; i++){
            if(letter== word[i]){
                position= i;
                console.log(position);
                findword.splice(i,1,letter);
                document.getElementById("find_word").innerHTML= findword.join(' ');
            }
            if(try_game == 0){
                playing=false;
            }
        }
    }
    
    else{
        document.getElementById("find_word").innerHTML= "Désolé, vous avez perdu!";
    }

});    


