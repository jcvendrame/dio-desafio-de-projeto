function comparaNumeros(n1, n2){
    const resp = "são iguais";
    let iguais = "não";
    let soma = n1 + n2;
    let maiorQueDeis = "menor";
    let maiorQueVinte = "menor";
    if(n1 === n2) {
      iguais = ""
    }
    if(soma > 10) {
      maiorQueDeis = "maior";
    }
    if(soma > 20) {
      maiorQueVinte = "maior";
    }
    return `Os números ${n1} e ${n2} ${iguais} ${resp}. Sua soma é ${soma}, que é  ${maiorQueDeis} que 10 e ${maiorQueVinte} que 20.`
  }
  console.log(comparaNumeros(25, 25))