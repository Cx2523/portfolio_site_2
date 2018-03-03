export function animationSequencer(letters, animation, totalMs){
    let letterList = [];
    for (let i = 0; i < letters.length; i++){
        if($(letters[i])[0].textContent !== " ")
        {
            letterList.push(letters[i]);
        }
    }
    let delay = 0;
    letterList.forEach((letter) => {
        delay = delay + totalMs / letterList.length;
        setTimeout(
            function(){ 
                $(letter)
                    .css("visibility", "visible")
                    .addClass(`animated ${animation}`);            
            }
        , delay); 
    });
}
