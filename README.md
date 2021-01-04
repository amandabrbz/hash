<p align="center">
  <h3 align="center">Hash Soluções em Pagamentos</h3>

  <p align="center">
    Vaga Pessoa Desenvolvedora Front End.
    <br />
  </p>
</p>

## Guide

- [Sobre o Desafio](#Sobre-o-Desafio)
  - [Requisitos](#Requisitos)
  - [Regras](#Regras)
- [Getting Started](#getting-started)
  - [Pré requisitos](#Pré-requisitos)
  - [Clonando e inicializando](#Clonando-e-inicializando)
    - [Local](#Local)
- [Versionamento](#Versionamento)
  - [Processo de Deploy](#Processo-de-deploy)
- [Layout](#Layout)
  - [Ideias](#Ideias)
- [Conclusões](#Conclusões)
  - [Aprendizados](#Aprendizados)
  - [Dificuldades](#Dificuldades)
  - [Pontos de melhorias](#Pontos-de-melhorias)
- [Deploy](#Deploy)
- [Contato](#Contato)
- [Referências](#Referências)

## Sobre o Desafio

Desenvolver uma calculadora de antecipação para que os clientes consigam saber quais os valores irão receber caso optem por atencipar o recebimento.

## Requisitos

- [x] Use componentização.
- [ ] Os períodos de recebimento devem ser configuráveis já que a API pode receber uma lista de periódos para realizar os cálculos.
- [ ] Faça testes unitários e/ou de ponta-a-ponta (end-to-end)

Os possíveis cenários devem ser cobertos e terem soluções implementadas. Não foi desenvolvido layout para isso, pois queremos observar como você lidará com eles:

- [ ] Demora de respostas da API
- [x] Timeout da API
- [x] Conexão lenta
- [ ] Usuário estar offline

### Regras

1.  **Não é permitido** utilizar frameworks e/ou bibliotecas de UI que não seja o React (como Vue.js ou Angular).
2.  **São permitidas** ferramentas modernas de desenvolvimento como TypeScript, Babel, eslint, webpack, assim como o uso de polyfills (e outras ferramentas para melhorar o suporte a browsers, como Modernizr) e/ou bibliotecas para testes.
3.  **São permitidos** pré-processadores de CSS e/ou ferramentas CSS-in-JS.
4.  Não é uma regra, mas evite usar lodash, underscore, ramda e similares.

[Para saber mais sobre o teste, clique aqui :raising_hand:](https://github.com/hashlab/hiring/blob/master/challenges/pt-br/front-challenge.md)


## Getting Started

Para ter uma cópia local e fazer rodá-lo, siga esses passos:

### Pré requisitos

Ter instalado no computador:

- [x] node igual ou superior a versão 12

```sh
node -v
```

### Clonando e inicializando

Esse processo é caso você desejar ver o código na sua máquina e rodar localmente a aplicação, para caso só queira ver a aplicação funcionando, siga para a parte de [Deploy](#Deploy).

:small_red_triangle_down: Comandos devem ser digitados pelo terminal

Para clonar o projeto:

```sh
git clone https://github.com/amandabrbz/hash.git

cd hash
npm install
```

#### Local

Subir o servidor local:

```sh
npm start
```

Após a aplicação inicializar, deve abrir uma aba automaticamente no browser padrão, rodando o projeto na porta `:3000`

http://localhost:3000

:no_entry_sign: Caso a porta já esteja sendo utilizada, a própria aplicação avisa e tenta outra porta.

## Versionamento

Trabalhei desenvolvendo cada fase do projeto atraves de *branches* apenas, pois não achei necessário trabalhar com PRs e nem SemVer, sendo que não haveria alguém para avaliar, mas entendo todo o conceito por trás dos métodos.

Caso fosse preciso voltar em uma *branch*, eu rodava o comando de `git pull origin main` para atualizar a *branch* conforme a main.

Para organizar o desenvolvimento utilizei algumas do *features* do GitHub, como as *issues* para ver quais problemas/fases precisava desenvolver. Utilizei o *kanban board* presente na aba Projetos, que é automatizado com as *issues*. Com esse *board* consigo mensurar o projeto como um todo.

Os padrões de commit seguiram, na sua maioria, o verbo imperativo com uma breve explicação do que aconteceu no desenvolvimento. Exemplo: `adiciona componente`.

### Processo de Deploy

Já tenho alguns projetos pessoais em plataformas como a Netlify e a Heroku, mas tendo pela preferência da usabilidade e configuração da Netlify.

Para deixar o processo mais automatizado, o deploy ocorre toda vez que há um *push* na **branch main** e a Netlify roda o `npm build` e faz a publicação, mas é possível retirar essa automatização e fazer manualmente via CLI próprio da Netlify ou diretamente na plataforma.

```bash
npm run build
netlify deploy --prod
```

Para link de produção ou status do deploy, seguir para a seção [Deploy](#Deploy)

## Layout

Layout foi dado pela empresa [clique aqui para ver](https://www.figma.com/file/ipV80xJ29T7rdz0Aoo7xWv/Antecipation?node-id=0%3A1).

E como requisito deve ser **pixel-by-pixel**.

### Ideias

Como não veio a versão mobile e o layout segue um grid de 2 colunas, decidi fazer um responsivo.

## Conclusões

Uffa! Que desafio!

### Aprendizados

Acredito que aprendi bastante com o teste, nunca tinha mexido com libs externas, aqui tive a chance de aplicar uma; Desenvolver mais com os hooks e ver as possibilidades e as facilidades que eles dão;Alguns requisitos de acessibilidade para forms que precisei pesquisar; Comunicação com API, e como lidar com erros conforme as requisições falham; E muito mais :D

### Dificuldades

1. Por não conhecer ainda todo o universo de React, Hooks, Redux e etc, tive um pouco de dificuldade de passar os valores entre os dois componentes que tinha criado. Fiz uma pesquisa intensiva e achei que há alguns métodos específicos para isso como Context API, mas achei um ensinamento de usar state também, mesmo sendo como improv, funcionou. 
*Update:* Fiquei curiosa como funcionava a Context API e depois que aprendi, implementei rs

2. Trabalhar com checkboxes achei bem difícil, há uma branch chamada `check-days` onde fiz vários testes para implementar o período por dias, mas tive bastante dificuldade em fazer funcionar e por isso não foi pra prod rs.

3. Por não ter conhecimento em testes, esse foi um ponto que me intimidou desde o inicio, é uma vontade de aprender, mas sei que leva tempo o aprendizado e a implementação da "cultura" de testes.


### Pontos de melhorias

- [ ] Trabalhar com múltiplos checkboxes!!!
- [ ] Testes

## Deploy

<center>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c1f47fa5-4c3e-413f-a09c-2f4b741f7984/deploy-status)](https://app.netlify.com/sites/hash-calculator-by-amanda/deploys)<br/>
[Github - Source Code](https://github.com/amandabrbz/hash) | [Netlify - Render](https://hash-calculator-by-amanda.netlify.app)

</center>

## Contato

Amanda Barboza @ [LinkedIn](https://linkedin/in/amandabrbz)

## Referências

[Passing data between siblings](https://www.youtube.com/watch?v=Qf68sssXPtM) | [Context API](https://medium.com/reactbrasil/entendendo-a-context-api-do-react-criando-um-componente-de-loading-a84f84007dc7)