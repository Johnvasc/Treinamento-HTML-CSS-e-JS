# CSS

## Mas Antes...

  Nessa lição vamos trabalhar com CSS, estilizando a nossa página, mas antes vamos incluir um pouco mais de código no nosso HTLM de maneira a seguir um pouco mais a semântica dessa linguagem de marcação.
  1) Primeiro vamos incluir a tag header. Ela representa a parte de cima da aplicação, onde em geral tem logo tipo, navbar e outras coisas.
  2) Em seguida, dentro do header, inclua uma div. Uma div, é uma divisão do site (um tipo de seção), onde vão ficar botões, paragrafos, titulos e inputs de pesquisa.
  3) Inclua nosso título h1 dentro do header e nosso input e botão dentro da div.
  4) Por fim, vamos incluir, fora do header, a tag hr que visualmente é uma linha horizontal, para separar o conteúdo de seções.
  Ao final desses passos, nosso body vai estar assim:
  
  ![image](https://user-images.githubusercontent.com/39773960/218108392-602461c6-a302-445c-8043-adac52a97996.png)


## Usando o Live Server pela primeira vez:

  Lembra que eu pedi para vocês instalarem essa extensão? Agora vamos usar ela para ver o aspecto atual de nossa aplicação web. Clique em "Go Live" no canto inferior direito do seu VSCode, com o navegador aberto. Pode ser que demore um pouco até uma janela abrir no seu navegador. Nessa janela vamos ver o estado atual da intereface, que vai estar bem rudimentar.
  
  ![image](https://user-images.githubusercontent.com/39773960/218108947-1fc2ee7d-5ae2-484a-8b41-f023edeefb1d.png)
  
  **Uma Dica:** O Live Server vai atualizar a janela de acordo com seu código toda vida que ele sofrer uma alteração e for salvo. Para salvar rapidamente, utilize no teclado: `ctrl + S`. Uma bolinha indica se o seu arquivo sofreu alguma modificação e precisa ser salvo:
  
  Precisa ser salvo:
  ![image](https://user-images.githubusercontent.com/39773960/218109399-0b8f80e2-949d-4fd1-8173-33c66406c644.png)
  Não precisa ser salvo:
  ![image](https://user-images.githubusercontent.com/39773960/218109536-fb37a87f-072e-4860-88ad-188c90693d91.png)

## Adicionando folha de estilo CSS ao HTML:

  Como vimos, nosso projeto ainda não é esteticamente muito agradável, e para isso vamos utilizar o CSS. Você já pode ter visto o CSS sendo escrito dentro do HTML dentro de uma TAG `<style>`, mas isso não contribui muito para a beleza e manutenção do código (embora seja útil em alguns momentos). Então vamos criar uma folha de estilo e importar ela.
  1) Clique no ícone de criar arquivo no VSCode, na parte esquerda superior: ![image](https://user-images.githubusercontent.com/39773960/218110670-80229001-bf43-4096-8778-ecfb8c06239f.png)
  2) Escolha um nome que termine com .CSS (um bom nome é: _style.CSS_).
  3) Nosso CSS foi criado, agora precisamos importá-lo para nosso arquivo HTML. Vá na head e começe a escrever _link_ até a sugestão link:css aparecer. Selecione ela e você vai ter `<link rel="stylesheet" href="style.css">`, caso tenha escolhido outro nome diferente de style, mude o campo href.

## Colocando a mão na massa:
  
  Fazer alterações na página com CSS é bastante simples: coloque o nome da entidade (tagName) que deseja modificar, abra e feche chaves e faça as modificações dentro dessas chaves. Dê uma olhada nas imagens guia que queremos chegar e compare com a sua. Agora vamos tentar deixar ambas um pouco mais parecidas.
  
  1) **Body:** No seu arquivo CSS escreva body e abra e feche chaves. Dentro das chaves escreva: `background-color: lavender;`. Esse é o comando para mudar a cor de fundo da entidade body. Você pode escrever o nome de outra cor no lugar de lavender ou um hexadecimal assim: #ffff00, por exemplo.  `ctrl + S` e dê uma olhada no seu navegador. Agora a página está de de outra cor. No CSS crie: button{}.
  2) **Button:** Como você pode ver na imagem guia, nosso botão tem um texto, é verde e tem um certo espaço entre as bordas.
    1. Texto: Vá no arquivo HTML e escreva o texto que deseja no meio entre as tags button de abertura e fechamento.
    2. Cor: Retorne para o CSS e dentro de button coloque: `background-color: green;`, experimente outras cores e selecione a mais agradável!
    3. Padding: Essa é a parte da borda do botão. Digite o seguinte comando: `padding: .5rem 1.5rem;`. O comando padding diz que vai haver um espaço interno até a borda. Rem é uma unidade de espaço. o padding pode receber até quatro argumentos: padding: dist.acima dist.direita dist.baixo dist.esquerda. Porém, quando são colocados menos argumentos ele interpreta das seguintes maneiras: padding: 1rem - a distancia até a borda vai ser aumentada em 1rem para dos os lados. padding .5rem 1.5rem - a distancia até a borda vai ser aumentada em 0.5rem para cima e para baixo e 1.5rem para esquerda e direita.
    4. Borda: Como pode ver na imagem guia, as bordas do nosso botão são arredondadas e não tem cor. Para tirar a cor use o comando: `border: none;` e para arredondar a borda use `border-radius: 12px`.
    5. Fonte: A cor da fonte no nosso guia é branca, para isso use o comando: `color: white;`.
  3) **Input:** inclua input{} no seu arquivo html. Tudo que precisamos fazer é deixar a borda arredondada e com um padding, faça isso da sua preferencia.
  4) **hover:** hover é uma especificação. Ela diz que um bloco css só vai ser aplicado quando o cursor estiver em cima do elemento. Para deixar nosso botão mais interessante, vamos usar o hover nele. Escreva no seu documento CSS: button:hover{}.
    1. Nova cor: Vamos mudar a cor do nosso botão quando o cursor está sobre ele, inclua dentro do hover: `background-color: darkgreen;`.
    2. Mudando cursor: Para o usuário saber que se trata realmente de um botão, vamos indicar fazendo uma alteração do cursor. Inclua: `cursor: pointer;`.

## Tarefa de Casa:

  Como exercício extra, dê uma olhada no padding! Altere valores de padding em button conforme a seguir, lembrando sempre de usar `ctrl + S` para ver a alteração no Live Server.
  1. padding: 2rem;
  2. padding: 2rem 1rem;
  3. padding: 1rem 2rem;
  4. padding: 10rem 2rem 3rem 7rem;
  5. padding: 10px 25px;
  
  Por fim, retome o valor de padding original do nosso projeto: .5 e 1.5 para a próxima lição. Se quiser ver mais personalizações para essa parte, fique a vontade!
