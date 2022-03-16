

const theme_button = document.getElementById('theme')
console.log(document.body.style.backgroundColor);

theme_button.onclick = ()=>{
    console.log('jfkdjg',document.body.style.backgroundColor);
    if(document.body.style.backgroundColor == 'black'){
        console.log('in if');
        theme_button.style.color = 'black'
        document.body.style.backgroundColor = 'white';
        theme_button.textContent = 'Switch to Dark Theme'
    }
    else {
        console.log('in else');
        theme_button.style.color = 'white'
        document.body.style.backgroundColor = 'black';
        theme_button.textContent = 'Switch to light Theme';
    }
}


