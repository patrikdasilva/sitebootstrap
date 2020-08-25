const validardados = function () {

    let nome = document.getElementById('nome').value
    let data = document.getElementById('data').value
    let email = document.getElementById('email').value
    let telefone = parseInt(document.getElementById('numero').value)

    //Validação de dados
    if (nome == "" || data == "" || email == "" || telefone == "") {
        //document.getElementById('msg-erro').style.display = "block"
        //document.getElementById('msg-sucesso').style.display = "none"
        $("#msg-erro").slideDown(400).delay(2000).slideUp(400)
        $("#nome").css('border-color', '#e92727')
        $("#data").css('border-color', '#e92727')
        $("#email").css('border-color', '#e92727')
        $("#numero").css('border-color', '#e92727')
        $("#area").css('border-color', '#e92727')

    } else {

        document.getElementById('nome').value
        document.getElementById('data').value
        document.getElementById('email').value
        document.getElementById('numero').value
        // document.getElementById('msg-erro').style.display = "none"
        //document.getElementById('msg-sucesso').style.display = "block"
        $("#msg-sucesso").slideDown(400).delay(2000).slideUp(400)
        $("#nome").css('border-color', '#4dec5b')
        $("#data").css('border-color', '#4dec5b')
        $("#email").css('border-color', '#4dec5b')
        $("#numero").css('border-color', '#4dec5b')
        $("#area").css('border-color', '#4dec5b')

    }
}
