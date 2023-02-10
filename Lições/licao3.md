# Display: flex e Display: grid.

## Use o chrome!
  Nessa parte o chrome nos oferece uma série de facilidades que vamos usar nessa lição, então para isso é melhor usar esse navegador. Se o Live Server estiver aberto em outro navegador, escreva 'localhost:5500' no seu chrome e ele deve abrir.
  
## Usando display: flex.
  
  Se você consultar nossa imagem guia, vai ver que existe um espaçamento entre o botão e o input que não foi aplicado ainda no nosso site. Display: flex é um comando CSS para organizar os elementos HTML, colocando espaços entre eles de acordo com o que indicarmos e vamos usar ele para provocar esse espaçamento.
  Aplicamos o display:flex a uma entidade que contém os elementos queremos organizar. Como queremos organizar o botão e um input, poderíamos aplicar o displey: flex no body, uma vez que ambos estão contidos no body. Porém, isso afetaria vários outros elementos que não gostaríamos. Então vamos ser mais específicos e utilizar o display:flex na div, que abriga ambos. Para isso faça no arquivo CSS: div{} e em seguida no inteiror da div: display: flex.
  Use `ctrl + S` e veja as alterações. Bem, não mudou nada, ou pelo menos não deveria, mas agora é que vamos usar o chrome a nosso favor! Use o comando `F12` do seu teclado e uma janela assustadora vai aparecer:

  ![image](https://user-images.githubusercontent.com/39773960/218122241-c575afe7-50fd-41ae-bcfd-365955a80b14.png)

  1) Clique em Elements (sublinhado em vermelho), pode ser que você já venha nele.
  2) Clique no ícone com um quadrado e uma seta (sublinhado em roxo). Ele é o selecionador de tags, quando você clica nele, você seleciona a tag que você clicar para poder editá-la no navegador. Navegue até nossa div em azul e tracejado e clique nela.
  3) Clique no botão ao lado de display:flex (sublinhado em roxo). A seguinte janela apareceu:
 
 ![image](https://user-images.githubusercontent.com/39773960/218122973-5ada4b9b-ecc2-4696-a197-574c0c80c23d.png)

  Clique nas opções de _justify-content: normal_ ![image](https://user-images.githubusercontent.com/39773960/218123687-c5a7f133-47ad-490e-84f1-b656f808ae31.png)
 até que display e button fiquem parecidos com da imagem guia, repare que o texto _justify-content:_ vai mudando de acordo com o que você clica. Copie o comando e cole no div{}, lembrando de colocar um ; no final.
  Salve o documento CSS (lembre-se sempre do atalho: `ctrl + S`) e recarregue a página e aperte `F12` para tirar a janela de desenvolvedor do chrome. Se deu tudo certo, o botão e o input agora estão centralizados e espaçados corretamente!
  
## Um pouco de id e classes:

  Agora vamos criar as divs que vão abrigar nossos pokemons. Como pode ver, são várias linhas com três divs cada.
  
  1) Vamos começar criando uma grande div que vai abrigar outras divs. Vá no HTML e crie uma tag div abaixo do hr
  2) Agora vamos criar seis divs para representar os seis primeiros Pokemons (depois vai ter mais de 500!!!) faça isso dentro da div que acabamos de criar. Vai ser um trabalhão criar seis divs na mão, mas o VSCode ajuda, digite o seguinte div*6 e clique na sugestão: ![image](https://user-images.githubusercontent.com/39773960/218125722-3ceaac1b-8eb2-48b2-bc7f-21fc982afd88.png)
  3) Escreva dentro de cada div dessas seis qualquer coisa. Em seguida salve e veja o resultado.
  4) Ficamos com colunas de seis elementos no lugar de três (como na imagem guia) e os elementos estão centralizados e espaçados sem sequer a gente pedir.
  5) Porém, pedimos sim! Quando colocamos o comando display:flex e justify-content dentro da div{} no CSS, aplicamos essas formatações para todas as divs da aplicação! Vamos fazer um experimento, coloque: `background-color: red;` dentro de div{} no CSS, salve e veja a atualização.
  6) Todas as divs receberam a instrução de ter o background-color vermelho. Mas e se quisermos que somente algumas divs tenham certas características? Para isso vamos utilizar o ID. Ele serve tanto para divs quanto para qualquer tag.
  7) Vá na div que abriga seu input e coloque um ID, de maneira que a tag de abertura fique: `<div id="searchDiv">`.
  8) Vá no CSS e onde tem div{} altere para `#searchDiv{}`. Agora ao invés de estarmos passando instruções de personalização para uma tag, estamos passando para um id e somente a tag que tem esse id vai ser personalizada. Repare que há um hastag antes do nome do ID, no css o Hastag indica que é um Id. Salve e dê uma olhada no navegador.

Antes:![image](https://user-images.githubusercontent.com/39773960/218128611-e32f86db-1773-485d-98e8-13993b973191.png)
 Depois: ![image](https://user-images.githubusercontent.com/39773960/218128505-2f335964-e420-4cf7-90d5-dc28ba896b09.png)
 
  9) Classes funcionam de maneira parecida ao ID, só que são mais genéricas. Um ID deve ser endereçado a uma única tag, enquanto uma classe pode abrigar várias. Por exemplo, já definimos o estilo do nosso botão, mas e se fossemos fazer um botão de cancelar que aparecesse em várias partes do site? Então poderíamos usar a mesma classe para todos e fazer uma única classe chamada botaoCancelar.
  10) Para personalizar uma classe no css use . e nome da classe, por exemplo: `.cancelButton{}`

## Display: grid.

  Agora vamos usar a opção display: grid para distribuir as grids onde vão estar os pokemons. O display:grid funciona de maneira muito parecida com o flex, porém tem suas diferenças que vão ser fundamentais.
  1) Vamos colocar um ID na div externa que abriga as outras seis: `id="pkmnContainer"`. Em seguida, vamos excluir as seis divs internas.
  2) Vamos refazer as seis divs internas todas com a classe pkmnDiv. Para fazer isso de maneira rápida faça: `div.pkmnDiv*6`, repare que o . se refere a classe, poderíamos usar `div#pkmnDiv` para criar uma div com o ID: "pkmnDiv". Vamos ter:
  
  ![image](https://user-images.githubusercontent.com/39773960/218184095-ef92e89c-593c-40a0-81e7-ee7bfc398922.png)

  3) Coloque um texto qualquer entre as tags das divs para elas se tornarem visíveis e vamos para o CSS. Aplique o seguinte código ao id "pkmnContainer": `display:grid`. Salve a página e observe ela na web.
  4) Agora aplique abaixo de display:grid o seguinte código: `grid-template-columns: 25% 25% 25% 25%;`, estamos dizendo que queremos colocar nossas divs em quatro colunas que ocupam cada 25% da largura da tela.
  5) Pressione F12 e centralize as divs igualmente feito com display:flex.
  6) Repare que temos 4 colunas, mas na imagem guia temos somente três, vamos a um exemplo em que temos somente duas: `grid-template-columns: 30% 30%;`.
