let nome = prompt('Insira seu nome:'); 

function calcular (){

      
    let area = document.getElementById ('area');
    let data = document.getElementById ('txtd');
    let res = document.getElementById ('res');
    let periodo = Number (data.value);
    let a = Number (area.value);
    let valorvent = 80
    let valorclima = 160
    let vazaovent = 70
    let apnecesse = Math.round (a / vazaovent)
    let obs = document.getElementById ('obs');
    
    
if (periodo <=0 || a<= 0){
    alert ('[ERRO CONFIRA OS DADOS E TENTE NOVAMENTE!')
} else {
    var fclima = document.getElementsByName ('radvent');
    var equip = ''

    var img = document.createElement ('img');
    img.setAttribute ('id' , 'foto');
    
}
    if (fclima[0].checked){
        equip = "Climatizador"
        if (apnecesse == 1){
            res.innerHTML = `Olá ${nome}. Você irá necessitar de ${Math.round (apnecesse) } Climatizador.<br> E seu orçamento para o período consultado fica em R$: ${ (valorclima * (apnecesse )) * periodo},00 reais*.`
            obs.innerHTML = '*Valor do frete não inlcluso! Consultar para saber mais!'
            img.setAttribute ('src' , '1.png');
        } else {
            res.innerHTML = `Olá ${nome}. Você irá necessitar de ${Math.round (apnecesse) } Climatizadores.<br> E seu orçamento para o período consultado fica em R$: ${ (valorclima * (apnecesse )) * periodo},00 reais*.`
            obs.innerHTML = '*Valor do frete não inlcluso! Consultar para saber mais!'
            img.setAttribute ('src' , '1.png');
        }
        

    } else if (fclima[1].checked){
        equip = 'Ventilador'
        if (apnecesse == 1){
            res.innerHTML = `Olá ${nome}. Você irá necessitar de ${Math.round (apnecesse) } Ventilador.<br> E seu orçamento para o período orçado fica em R$: ${ (valorclima * (apnecesse )) * periodo},00 reais*.`
            obs.innerHTML = '*Valor do frete não inlcluso! Consultar para saber mais!'
            img.setAttribute ('src' , '2.png');
            } else {
                res.innerHTML = `Olá ${nome}. Você irá necessitar de ${Math.round (apnecesse) } Ventiladores.<br> E seu orçamento para o período orçado fica em R$: ${ (valorclima * (apnecesse )) * periodo},00 reais*.`
                obs.innerHTML = '*Valor do frete não inlcluso! Consultar para saber mais!'
                img.setAttribute ('src' , '2.png');
            }

        
    }        
    res.style.textAlign = 'center';
    res.appendChild (img);
   
    
}