function buscarEnderecoPorCep(){
    let cep = document.getElementsByName("CEP")[0].value;
    console.log(cep)

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then( resp => {
        resp.json().then(data => showData(data))
    })

    const showData = (result) => {
        for(const campo in result){
            console.log(result[campo]) 
        }
      }
}

