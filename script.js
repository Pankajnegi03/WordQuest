//searchinput
//searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67cf3cd76bmsh4c660959ace3872p173da5jsn7d9157055856',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            
            wordheading.innerHTML = "The meaning of : "  + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.").replace("8.", "<br>8.").replace("9.", "<br>9.").replace("10.", "<br>10.");
            

        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})