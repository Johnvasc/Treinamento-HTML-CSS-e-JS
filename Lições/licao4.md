# Iniciando o JS!

## Mas antes uma última olhada no CSS:

  Se olharmos para nossa imagem guia, podemos perceber que as divs que englobam os pokemons tem uma borda colorida arredondada. Usando seus conhecimentos com CSS obtidos até aqui, faça a personalização da classe pkmnDiv, mantendo essas características e adicionando novas de sua escolha.
  1) Faça a personalização.
  2) Após personalizar no CSS, vá ao HTML e apague as seis divs internas. Iremos criar mais de 500 divs para pokemons e embora seja fácil usar: `div*500`, vamos fazer isso de outra maneira.

## Arquivo Javascript:
  1) **Criando o arquivo:** Clique no ícone superior esquerdo com uma página e um sinal de + e escolha um nome para seu arquivo desde que termine com .js.
  2) **Adicionando o js ao HTML:** Dentro da head, abaixo da tag link, inclua a tag script, sugiro que clique na sugestão: "script:src" que ira aparecer para você. Você vai ter então: `<script src=""></script>`, inclua entre as aspas do src o nome do seu arquivo com o .js e depois, antes do src coloque a palavra "defer": `<script defer src="script.js"></script>`.
  3) Pronto, o javascript foi adicionado ao seu projeto.

## Introdução ao Javascript:
  Javascript é uma linguagem de programação muito ampla usada na web e aqui teremos somente um vislumbre, então tome esse treinamento como uma apresentação e corra atrás! Aqui vão algumas características do Javascript que vão ser úteis para nós:
  1) É uma linguagem fracamente tipada. Em português isso quer dizer que, diferente do C, as variáveis não precisam ter o tipo especificado como "int", "double" ou "float".
  2) Para declarar uma variável é muito fácil, tem tres maneiras:
    1. Usando let, por exemplo: let a ou let nome = 'Emily' ou let idade = 43 ou let recorde = 17.45.
    2. Usando var, por exemplo: var a ou var nome = 'Timote' ou let idade = 22 ou let recorde = 2.56. A diferença entre let e var é a maneira como ela é lida no código e seu escopo, pesquise um pouco sobre caso tenha mais interesse.
    3. usando const, por exemplo: const pi = 3.14, const id = 'SuperNoob25'. Consts declaram constantes, repare que elas não podem ser mudadas uma fez que forem declaradas.
   3) Podemos criar vetores também com os termos descritos acima, por exemplo: let teamPkmn = [] ou let idadeFamilia = ['25', '27', '2'] ou var isOn = ['true', 'false'].
   4) Podemos criar funções como em C, mas sem precisar tipar. Para criar uma função segue a seguinte sintaxe:
   
   `function nomeDaFuncao(argumento1, argumento2 ..., argN){}`
   
   5) Você não precisa colocar ; no final de cada sentença igual C!
## Introdução ao DOM:

  Document Object Model, ou simplesmente DOM é uma ideia convencionada para interagir com objetos HTML. Resumindo, vamos conseguir criar objetos HTML dinamicamente, bem como personalizá-los.
  Vamos ver um pequeno exemplo:
  1) const mainContainer = document.getElementById('pkmnContainer') /// getElementById procura no HTML um elemento com a Id especificada dentro dos parenteses. Estamos guardando esse resultado numa constante chamada mainContainer.
  2) mainContainer.style.backgroundColor = 'yellow' ///Estamos dizendo que a propriedade style da div vai receber um backgroundColor amarelo. Salve o js e dê uma olhada na página da web!
  
  
  
