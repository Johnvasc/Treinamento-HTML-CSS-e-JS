# Acessando a API com fetch
## Criando funções:
Agora vamos criar uma função. Criar funções no JS é muito parecido com funções no C, contudo não precisamos especificar o tipo de retorno. Use a seguinte sinxate para criar função: `function nomeDaFunção(){}`. Crie uma função chamada createDex ou qualquer outro nome de sua escolha. Em seguida, coloque o código que gera as 25 divs dentro dessa função (pode ser que você tenha que usar a tecla tab para diretir a identação do código). Em seguida salve e observe a página na web (lembre de ativar o live server na parte inferior direita se você fechou o VScode).
Não foram criadas mais divs, não é? Isso porque uma função precisa ser chamada pelo menos uma vez para se executada. Vá ao final do seu javascript e coloque createDex() ou o nome da função que você usou. Salve e veja a página da web novamente.

## API e Fetch:
Crie uma nova função acima da anterior. Chame ela de getApi ou algo que remeta a essa função. Também coloque um argumento dentro dos paranteses para representar um numero. Sua função vai ficar mais ou menos assim:

![image](https://user-images.githubusercontent.com/39773960/218320259-3631e22a-0412-4fe4-bb5d-c8abe50108d3.png)

Continuando, a API que vamos utililizar é a pokéAPI. O que é uma API? Bem, é um serviço que provém recursos para aplicações. No nosso caso, vai prover os pokemons, suas fotos e informações. Acesse a pokéAPI em: https://pokeapi.co/ . Mas não basta nós mesmo acessarmos, temos que fazer isso de maneira automatizada para pegar cada pokemon que quisermos. Para esse tipo de trabalho vamos usar a função fetch. Ela faz acesso _assincrono_ para um link ou diretório que nossa escolha.

## O que é assincronicidade?
Programas em javascript são lidos de cima para baixo e executados sem pausa. Porém, quando pedimos para acessar um site, diversos fatores podem atrapalhar a nossa definição. Por exemplo, o site pode demorar, por causa da largura de banda da internet ou do tráfego, pode ser que a requisição dê falha ou que ela simplesmente não retorne. Logo, quando chegamos na linha de uma requisição fetch, temos que indicar ao javascript que ele deve seguir em frente com o código que nós **prometemos** que alguma coisa vai ser retornada do fetch mais tarde. Para maior formalização, leia sobre promisses. Resumindo, nosso código é sincrono, o tempo para cada comando é conhecido, exceto daqueles que são assincronos.

## Fazendo o fetch:
Antes de tudo, vamos fazer uma pequena alteração na nossa função getApi. Antes do termo function, inclua async. Isso diz para nosso programa que essa função vai ser assincrona. Agora, partiu editar a parte interna! Faça:

![image](https://user-images.githubusercontent.com/39773960/218321412-d28b32af-567c-4073-866d-d3463e3a3180.png)


linha 5: salva em uma constante chamada res (abrev. de response) uma requisição fetch feita ao endereço da web: https://pokeapi.co/api/v2/pokemon/25' .

linha 6: Um if se o campo status da resposta http for igual a 200 (sucesso).

linha 7: Transforma a resposta em um arquivo json - repare que essa também é uma tarefa assincrona.

linha 8: Um if: se data ou seja, se data existe (não é null).

linha 9: Printa data no console.

linha 10: Retorna data.

Depois de incluir essa função, faça a chamada dela com um argumento qualquer, por exemplo: getApi(12).
Agora, vá na sua página da web e aperte `F12`, procure a aba console.

![image](https://user-images.githubusercontent.com/39773960/218321666-e3137435-76f1-4482-bbbe-0e4808a484a8.png)

Repare que esse é o data que pedimos para printar no console na linha 9. Observe o campo id:25 e o campo "name: pikachu". Esse é um json com os dados do pokemon pikachu!

## Interpolação no JS:

Como vimos acima, o id do pikachu é 25, agora note o url que mandamos para o fetch: https://pokeapi.co/api/v2/pokemon/25. Sim, teremos como retorno o pokemon cujo número esta inserido no final. Mas queremos todos os pokemons, como podemos fazer? Que tal:

https://pokeapi.co/api/v2/pokemon/1

https://pokeapi.co/api/v2/pokemon/2

...

https://pokeapi.co/api/v2/pokemon/500

Se você tem que repetir uma mesma linha de código 500 vezes, significa que tem algo errado no seu código, vamos fazer usando uma única linha com interpolação. Lembra quando no C vc fazia:
`int idade = 23;
printf("Tem %d anos de idade", idade);`? Pois bem, isso se chama interpolação, um valor substitui um simbolo dentro de uma string, é o que vamos usar para resolver nosso problema.

Em javascript a interpolação é normalmente feita assim:

![image](https://user-images.githubusercontent.com/39773960/218322164-5b93ae99-a589-4d4c-b3fc-c6c0db18d4f3.png)

Repare que não são aspas que cercam a string, mas sim o sinal de crase.  Já a variável vai estar entre ${}. Você pode testar no seu código

Agora, vamos usar da interpolação para chamar pokemons dinamicamente. Vá até a função getAPI e mude as aspas ao redor da url por crases, apague também o vinte cinco no final da requisição fetch e coloque ${num} no lugar. Agora, vá na chamada da função e mude o argumento para o número que você quiser. Salve e vá no console da página da web, repare que o pokemon mudou.
