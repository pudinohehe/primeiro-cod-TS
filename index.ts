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

const paraVer = meuCatalogo.filter((filme) => {

    return filme.visto === false;
}

)


console.log(`voce ainda tem ${paraVer.length} filmes para ver.`)

paraVer.forEach((filme) => {

     console.log(`voce pode assistir ${filme.titulo} `)



}

)