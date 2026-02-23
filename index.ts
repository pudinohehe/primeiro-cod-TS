interface Filme {

    titulo: string;

    visto: boolean;

    nota?: number;

}

const meuCatalogo: Filme[] = [

  { titulo: "o show de truman", visto: true, nota: 8},

  {titulo: "legally blond", visto: true, nota: 4.5},

  {titulo: "a morte te da parabens", visto: false},

  {titulo: "nada de novo no front", visto: false},

  {titulo: "os suspeitos", visto: false}

];



function marcarComoVisto(tituloAlvo: string) {
    const filmeEncontrado = meuCatalogo.find(filme => filme.titulo === tituloAlvo)
    
    if (filmeEncontrado) {
        filmeEncontrado.visto = true;
        filmeEncontrado.nota = 8.3
        console.log(`Filme agora marcado como visto!`);
    }
    else {
        console.log(`filme não está na lista`);
    }

}


console.log(`testando lista antes da atualização!`);
console.log(meuCatalogo);


marcarComoVisto("os suspeitos");


console.log(`testando lista após atualização`);
console.log(meuCatalogo);

const paraVer = meuCatalogo.filter((filme) => {

    return filme.visto === false;
}

)


console.log(`voce ainda tem ${paraVer.length} filmes para ver.`)

paraVer.forEach((filme) => {

     console.log(`voce pode assistir ${filme.titulo} `)



}

)