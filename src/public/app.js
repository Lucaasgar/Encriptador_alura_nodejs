/*
    La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopy = document.getElementById('btn-copy');
const muñeco = document.getElementById('muñeco');
const exclamationIcon = document.getElementById('img-exclamation')

const regex = /^[a-z\s]+$/;

function errorImg(){
    muñeco.setAttribute('src', './Images/Error.png');
    btnCopy.setAttribute('hidden', 'true');
}

function foundImg(){
    muñeco.setAttribute('src', './Images/Launch.png');
    btnCopy.removeAttribute('hidden');
}

function encriptar(){
    let text = document.getElementById('area');

    if(text.value.length != 0){
        if(regex.test(text.value)){
            let textoEncriptado = text.value
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g , 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

            foundImg();
            document.getElementById('title-muñeco').textContent = 'El mensaje fue encriptado.';
            exclamationIcon.style.fill = '#495057';
            btnCopy.removeAttribute('hidden');

            text.value = textoEncriptado;
        }else {
            errorImg();
            document.getElementById('title-muñeco').textContent = 'Ningun mensaje fue encontrado.';
            document.querySelector('#title-muñeco + p').textContent = 'Solo letras minusculas y sin acento.';
            exclamationIcon.style.fill = 'Red'
            
        }
    }else {
        document.getElementById('title-muñeco').textContent = 'Ningun mensaje fue encontrado.';
        document.querySelector('#title-muñeco + p').textContent = 'Debes ingresar un texto.';
        btnCopy.setAttribute('hidden');
    }
}   

function desencriptar(){
    let text = document.getElementById('area');

    if(text.value.length != 0){
        if(regex.test(text.value)) {
            let textoDesencriptado = text.value
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

            foundImg();
            document.getElementById('title-muñeco').textContent = 'El mensaje fue desencriptado.';
            exclamationIcon.style.fill = '#495057';
            btnCopy.removeAttribute('hidden');

            text.value = textoDesencriptado;
        }else {
            errorImg();
            document.getElementById('title-muñeco').textContent = 'Ningun mensaje fue encontrado.';
            document.querySelector('#title-muñeco + p').textContent = 'Solo letras minusculas y sin acento.';
            exclamationIcon.style.fill = 'Red'
        }
    }else {
        document.getElementById('title-muñeco').textContent = 'Ningun mensaje fue encontrado.';
        document.querySelector('#title-muñeco + p').textContent = 'Debes ingresar un texto.';
        btnCopy.setAttribute('hidden');
    }
}

function copiar(){
    let text = document.getElementById('area');
    navigator.clipboard.writeText(text.value);
    btnCopy.textContent = 'Copiado!';
}

btnCopy.addEventListener('click', () => {
    copiar();
    setTimeout(() => {
        btnCopy.textContent = 'Copiar'
    }, 800);
})

btnDesencriptar.addEventListener('click', () => {
    desencriptar();
})

btnEncriptar.addEventListener('click', () => {
    encriptar();
})