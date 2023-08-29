let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros;

let imagemcarro;
let imagemcarro2;
let imagemcarro3;


let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemcarro = loadImage("imagens/carro-1.png");
  imagemcarro2 = loadImage("imagens/carro-2.png");
  imagemcarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemcarro,imagemcarro2,imagemcarro3, imagemcarro, imagemcarro2, imagemcarro3];
  
 somDaTrilha = loadSound("sons/trilha.mp3");
 somDaColisao = loadSound("sons/colidiu.mp3")
 somDoPonto= loadSound("sons/pontos.wav");
                          
}
