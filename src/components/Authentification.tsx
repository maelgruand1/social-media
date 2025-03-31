import React from 'react';
import logo from './logo.svg';

function Auth(){
    return (
        <div className='auth'>
            <h2 className="subt">Authentification</h2>
            <input type="text" id='name' placeholder='name' />
            <input type="text" id='email' placeholder='email' />
            <button id='valider' onClick={validAuth} >Valider</button>
            <p id='message'></p>
        </div>
    )
}

function validAuth(){
    let name : string = (document.getElementById('name') as HTMLInputElement).value;
    let email : string = (document.getElementById('email') as HTMLInputElement).value;
    let btn : HTMLElement = document.getElementById('valider') as HTMLButtonElement;
    let msg : HTMLElement = document.getElementById('message') as HTMLParagraphElement;
    btn.addEventListener('click', () => {
        if(name === "" || email === ""){
            alert("Remplir les champs");
            console.log("Error, Value none")
            console.log(`Name : ${name} and email ${email}`);
        }
        else{
            msg.innerText = "Authentié";
            console.log(`Name : ${name} and email ${email}`);
            setTimeout(() => {
                msg.classList.add('seen');
        }, 2000);
        }
    })
}
export default Auth
