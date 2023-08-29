
function setup() {
  createCanvas(500, 400);
   somDaTrilha.loop();
}


function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  posicaoInicialCarros();
  mostraCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

