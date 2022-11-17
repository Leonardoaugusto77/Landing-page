var btnS = document.getElementById("sub")

var inputN = document.getElementById("inputN")

btnS.addEventListener('click', ()=>{
    if(inputN.value === ''){
        window.alert("PRENCHA POR FAVOR!")
        return
    }

    window.alert('Formulario enviado com sucesso, Check seu email!')
    return
})