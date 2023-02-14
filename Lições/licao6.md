# Inserindo 500 Pokemons.

## Inserindo os dados dos pokemons.
Vamos voltar para a function createDex(). Antes de tudo, vamos colocar ela como uma função assincrona: modifique para `async function createDex()`. Agora, na primeira linha dentro do for adicione: `const pokemon = await getApi(i+1)`. Estamos criando uma constante que vai guardar o valor do pokemon, como estamos dentro de um for, isso vai ser executado 25 vezes e vamos ter o valor de 25 pokemons!

Voltando a página web, aperte `F12` e observe esse campo. Ele vai ter o nome do nosso pokemon, podemos acessar esse valor no javascript de duas maneiras `pokemon.name` ou `pokemon['name']`, lembrando que pokemon é o nome da nossa const. Vamos optar por utilizar a segunda notação, pois podem aparecer coisas do tipo `pokemon['comida favorita']` que não daria certo usando a primeira notação.

![image](https://user-images.githubusercontent.com/39773960/218585890-a0300dd8-e57f-4e65-b0fc-ed632d08eb7c.png)

Vamos inserir os nomes dos pokemons em nossas divs. Modifique essa linha de: `newTitle.innerText = i+1` para `newTitle.innerText = pokemon['name']`. Salve o arquivo e observe a página na web.

Agora vamos colocar a imagem do pokemon.
1. Abaixo dessa última modificação que fez, acrescente: `const pkmnImg = document.createElement('img')` estamos criando uma tag img e salvando seu valor na const.
2. Logo abaixo escreva: `pkmnImg.setAttribute('src', pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])`, estamos atribuindo o campo src a nossa tag img. Src é um campo que recebe o link da imagem que vai ser reproduzida. No HTML bruto você faria: `<img src = "https://www.enderecoDaImg.com">`.
3. Essa parte `pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']` pode ter ficado confusa, mas vamos destrinchá-la!
4. Apertando `F12` no navegador, podemos encontrar o campo sprites. Logo para acessá-lo no JS fazemos: `pokemon['sprites']`.
5. Porém, repare no navegador que dentro dele existem vários campos, inclusive o campo versions, para acessar um campo dentro de outro, fazemos `json['1ºcampo']['Campo interno']`, se continuar abrindo os campois vai chegar em front_default, onde vai ter o nosso desejado link da imagem!

![image](https://user-images.githubusercontent.com/39773960/218807382-62fc6644-ea60-4630-bdc4-5a7c14222b5a.png)


Por fim, insira a linha `newDiv.appendChild(pkmnImg)` e atualize a página.

## Desafio:

Repare que nos links de imagem em _"animated"_ existem diversas opções de sprite. Coloque para seu site exibir os sprites shiny ao invés dos sprites normais. Faça isso modificando o caminho do src. Depois faça para a versão de costas. Por fim, retorne para a original ou shiny para ficar mais bonitinho.
