function executarExercicio7xd(){
    alert(`Exercicio 7 D)\nfetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS = DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.`)

    let trajetoEmHoras = parseFloat(prompt(`Digite o trajeto em horas: `))
    let velocidade = parseFloat(prompt(`Digite a velocidade média do trajeto: `))
    let distancia = velocidade*trajetoEmHoras
    let litros = distancia/12

    alert(`O tempo gasto foi: ${trajetoEmHoras}hrs\nA velocidade média foi: ${velocidade}KM/h\nA distancia percorrida foi: ${distancia}KM\nOs litros usados foram: ${litros}L`)

}