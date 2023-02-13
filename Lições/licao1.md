# Lição 1:

## Boas-vindas!

  Olá, seja bem-vindo a primeira lição! Essa vai ser uma modesta introdução com dicas para começar bem!
  Primeiramente, vamos instalar alguns programas interessantes. O ambiente de desenvolvimento que eu usei foi o Visual Studio Code e é interessante que você use ele também, mas sinta-se livre para usar a IDE de sua escolha! O Visual Studio Code se mostra interessante por diversos motivos: é robusto e confiável, foi feito pela microsoft, e é a IDE (ambiente de desenvolvimento) mais utilizada para programação Web, oferece diversos atalhos e funcionalidades que vão ser utilizadas ao longo das lições.

  O link do Visual Studio Code:
  https://code.visualstudio.com/

  Google Chrome: é provável que você já tenha ele. Vamos utilizar o chrome por causa de alguns funções convenientes que ele tem e que vão ser exploradas mais afundo na aula de display: flex e display: grid.

## Crie um projeto no Visual Studio Code!

  Uma vez que você instalou o VScode siga os seguintes passos:
  1) Faça uma nova pasta com o nome que prererir para o seu projeto (recomendo que crie essa nova pasta na área de trabalho).

  2) Em seguida clique com o botão direito do seu mouse e coloque a opção abrir com VScode conforme a imagem abaixo:

  ![image](https://user-images.githubusercontent.com/39773960/218003188-84f525d9-d2b4-42a0-9aff-204165c1e29b.png)

  3) Clique em extenções e instale a extensão "Live Server":

  ![image](https://user-images.githubusercontent.com/39773960/218003414-d43f41f1-6e98-4bd7-bac8-3b5323efa95b.png)

## Nosso HTML!
  Com tudo pronto, vamos criar e colocar algumas sentençãos no nosso arquivo HTML. Também vamos entender um pouco das tags que compõe essa _linguagem de marcação!_
  
  1) Para criar nosso arquivo HTML você vai clicar no icone de papel com um + na parte superior do VScode, conforme a imagem:

  ![image](https://user-images.githubusercontent.com/39773960/218003592-98f4db33-3bc7-49de-8492-6debf8fea169.png)

  2) Nomeie seu arquivo como quiser, mas repare que a extensão do arquivo necessariamente tem que acabar com .html.

  3) **Agora uma dica interessante do VSCode:** arquivos html tem uma estrutura padrão bem difícil de memorizar, mas com o VScode, não vamos precisar lembrar. Tudo que precisamos é começar a escrever e alguns atalhos se oferecerão, clique neles com o mouse para completar. No caso do html, comece escrevendo html e as sugestões vão aparecer, clique na sugestão: html:5 e veja a mágica acontecer!

  ![image](https://user-images.githubusercontent.com/39773960/218004210-dc8353ac-100e-4343-8cec-a594215fe721.png)

## Um pouco sobre as Tags HTML!

  As tags HTML vão estar sempre entre "<>". São exemplos de tag:`<a>, <div>, <h1>, <p>`. Muitas tags HTML necessitam ser fechadas. Essa é a sintaxe de fechamento de uma tag HTML: `</nome da tag>`. Porém, existem tags que não precisam ser fechadas.

  **Head x Body:** É uma introdução interessante das tags HTML diferenciar o head e o body. Vamos fazer uma analogia para entender melhor. No ser humano, head, cabeça em inglês, é onde guarda os pensamentos/filosofias e as ideias enquanto o body, o corpo, é a nossa representação física. No HTML é parecido, a head é uma tag que guarda outras tags que representam as ideias do site e o body é a tag que abriga as tags visuais, sua estrutura "física".

## Tags da Head:
  **`<meta charset="UTF-8">`:** Quer dizer os tipos de caracteres de página, deixe assim que ta tudo sussa!
  
  **`<title>Document</title>`:** É o título da página, bem simples. Que aparece junto ao ícone quando abrimos uma página da web no nosso navegador:

  ![image](https://user-images.githubusercontent.com/39773960/218005776-a4260886-ebdd-44d2-a1d5-91fba87c5b77.png)

## Tags do Body:

  Vamos adicionar algumas tags ao nosso body para começar o projeto. Primeiro, escreva h1 e clique na sugestão do VScode, você vai ter isso: `<h1></h1>`. A tag H1 é a tag de título. Escreva alguma coisa entre a tag e sua fechadura, por exemplo: `<h1>Titulo aqui!</h1>`.
  
  Em seguida, escreva "inp" e clique na sugestão: "input:text" e você vai ter: `<input type="text" name="" id="">` (repare que é uma tag que não tem fechamento!).
  
  Logo depois, escreva "button" e clique na sugestão: "button".
  
  Ao fim dessa lição, vamos ter o seguinte código:
  
  ![image](https://user-images.githubusercontent.com/39773960/218006525-9c723cec-3e41-467e-8c18-f8956d8e3db8.png)
