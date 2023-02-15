# Finalizando.

## Apagar todos os pokemons

Agora iremos nos dedicar a fazer uma nova função para apagar todos os pokemons, você vai entender a utilidade dela mais adiante! Comece nomeando a sua função `function pkmnDel(){}` por exemplo. Nossa ideia para apagar os pokemons vai ser a seguinte, vamos tirar todas as divs que inserimos dinamicamente na div que está no nosso html.

1. Coloque como primeira linha: `const childDivs = document.getElementsByClassName('pkmnDiv')`. Estamos pegando todos os elementos de nossa página que tem a tag "pokemon div" e guardando em um array constante chamdo childDivs.
2. Em seguida: `let childsLen = childDivs.length`, com o método .length, descobrimos o tamanho de um array, por exemplo: `idades = [13, 14, 22, 12, 4]` neste caso, idade.length = 5, e o guardamos em childsLen.
3. Por fim, vamos fazer:

```    
for(let i = 0; i<childsLen; i++){
   mainContainer.removeChild(childDivs[0])
}
 ```
para i de 0 até o número de divs contendo pokemons, remove do mainContainer a primeira div ou div[0]. Veja que quando uma div é removida, outra cai para seu lugar.

## Usando listeners

Listener é uma técnica de monitoramento do javascript que você pode aplicar sobre uma tag para descobrir quando algum evento (como por exemplo clique, preenchimento ou cursor dentro) acontece. Vamos usar o listener aqui para saber quando o botão de nosso formulário for clicado.
1. Regresse até o HTML e coloque algum id na tag button, por exemplo btn.
2. Nas primeiras linhas do JS, fora de qualquer function, coloque: `const button = document.getElementById('btn')` Essa função, como já deve saber, procura na nossa página da web um elemento com tal Id e guarda para a gente.
3. Por fim, no final de nosso JS faça o listener: `button.addEventListener('click', ()=>{})`
4. Vamos entender direito o que fizemos, primeiro começamos por "button.addEventListener", button é o nosso elemento do passo dois, e "addEventtListener" é justamente para adicionar ao nosso elemento o listener.
5. O click é o tipo de gatilho, existem outros tipos cabe pesquisa, nesse caso o que vai desencadear a ação é um clique no elemento button.
6. O mais confuso nisso tudo deve ser essa notação inédita: "()=>{}" isso é chamado de arrow function (isso => deve ser a arrow XD) e você vai encontrar bastante delas em seus estudos de web, é basicamente uma função normal, mas encurtada, uma maneira alternativa de inserir esse listerner seria: `button.addEventListener('click', function{})`, mas vos quis apresentar a arrow.
7. Resumindo adicionamos ao botão uma listener que ao perceber um clique inicia uma função. Mas que função vamos iniciar? A arrow.

## Editando a arrow function

Dentro das chaves da arrow function coloque:

![image](https://user-images.githubusercontent.com/39773960/218912055-9ae0bcbc-892c-44ef-a3c3-b49d2d0f0753.png)

Em seguida salve o teste o botão no seu live server. Se deu tudo certo, ele deve apagar todos os pokemons.

## Usando o método .value da DOM.

Lembre que o nosso objetivo com esses formulários é inserir um texto no input e ao clicar no botão, ele exibir apenas os pokemons cujo tipo escrevemos no input. O primeiro passo, era apagar todos os pokemons, o que foi feito. Agora, temos que pegar o tipo de pokemon que foi escrito no input e para isso vamos utilizar o método value.
1. Comece voltando para o HTML e adicionando um id ao input, por exemplo ipt.
2. De volta ao JS, na parte superior coloque: `const input = document.getElementById('ipt')`. Estamos procurando na nossa página alguma coisa com o id igual a "ipt" e salvando nessa const.
3. Agora, dentro da arrow function coloque: `console.log(input.value)`. O método value serve para pegar o texto que está dentro de uma caixa de texto, ou número em um teclado do site, ou data inserida em um campo date. Enfim, existem os mais diversos tipos de input e o value pega os valores para podermos saber.
4. Vá para sua página da web e escreva qualquer coisa no input. Em seguida aperte o botão e logo depois dê `F12` e vá na aba console da devtools (obs: devtools é o nome da janelinha do F12). Repare que o texto que escreveu no input foi pego e reproduzido no console. Agora, pode apagar essa linha, foi apenas para mostrar.
5. Vá na function createDex e coloque um argumento dentro dos parenteses:
6. Antes: `async function createDex()`. Depois: `async function createDex(type)`. O que queremos é passar o input para essa função, de maneira a ela so processar pokemons de tal tipo!
7. Dentro da arrow function coloque: `createDex(input.value)`. Estamos chamando a função passando para ela o valor do input.

## Editando novamente a createDex:

Agora nossa função tem um argumento e só vamos gerar pókemons de acordo com esse argumento. Apenas um if vai bastar.
1. DENTRO do For coloque: `if(pokemon['types']['0']['type']['name']==type || type == 'all'){}` deixando a parte `const pokemon = await getApi(i+1)` de FORA e necessariamente ACIMA do if.
2. Em seguida, pegue todo o código presente dentro do for e coloque dentro das chaves do if. Agora vamos entender esse if.
3. Na primeira parte temos: `pokemon['types']['0']['type']['name']==type`, lembre-se que type é o argumento passado a nossa função, ou seja o texto que estava no input na hora que o botão foi clicado. Vamos entrar no if somente se esse campo  `['types']['0']['type']['name']` no nosso json pokemon tem mesmo valor de type. Repare também que pokemons tem dois tipos `['types']['0']` e `['types']['1']`, mas para fins de simplicidade, vamos usar apenas o primeiro.

![image](https://user-images.githubusercontent.com/39773960/218917265-cfb7f1a8-e6d4-472c-8d42-8ae27cc5ec19.png)

4. A parte ` || ` do if é o ou(or) lógico e vamos passar pelo if seja o primeiro ou o segundo argumento verdeiros. Quaisquer um dos dois já é suficiente.
5. Finalizando, a parte `type == 'all'`. Neste caso, se o argumento da função for all, todos os pokemons serão exibidos.
6. Como último ato de nosso projeto, procure pelo JS a chamada da função createDex() e a substitua por `createDex('all')` para a página carregar chamando todos os pokemons. Também elimine a chamada da função getApi, que pode ter sobrado pelo código.
7. Salve o código e teste se os pokemons aparecem de acordo com o tipo digitado no input, por exemplo: 'bug', 'grass', 'water', 'all'.
8. Assim, finalizamos nosso projeto. Espero que tenham apreciado e aprendido alguma coisa XD.

## Desafio #1.
Repare que quando filtramos um tipo de pokemon, a única maneira de ter todos de volta é colocando 'all' no input. Crie um novo botão chamado reiniciar que ao ser apertado exibe todos os pokemons novamente.

## Desafio #2.
Crie um terceiro botão chamado shinify. Ao clicar nesse botão, será exibido somente a versão shine dos pokemons, se clicado uma segunda vez, exibe os pokemons normais.

## Projeto Extra #1.
E que tal se desafiar um pouco mais? Crie um projeto usando a mesma API chamado pokemon versions. Nesse projeto, você vai ter um input e um botão. Ao usuário digitar o nome de um pokemon e clicar no botão, ele será exibido com suas várias versões ao longo dos jogos. Use a imagem guia:

![image](https://user-images.githubusercontent.com/39773960/218919387-1bada7fb-21eb-4452-9bdf-536a549e7bee.png)

## Projeto Extra #2.
Crie um cronometro. Utiizando-se da `setInterval` do javascript, crie um cronometro do zero! Coloque as funcionalidades de reiniciar, pausar e registrar na tela um tempo. Siga a imagem guia ou personalize de seu jeito!

![image](https://user-images.githubusercontent.com/39773960/218919929-cd0f60e3-0d28-41c1-9f3a-d2fafa0d9b01.png)

## Projeto Extra #3.
Afim de fazer requisições fetch? Use a API `https://api.jikan.moe/v4/anime?q=shingeki&sfw` para fazer uma página de pesquisa de seus animes favoritos XD. Siga a imagem guia ou deixe sua criatividade te guiar!

![image](https://user-images.githubusercontent.com/39773960/218920554-7dd87a35-f874-4bbd-88db-8356a5eaec66.png)

