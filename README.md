<h1 align="center">
  <br />
  <img alt="Proffy" src="https://github.com/marcosribeirodacunha/proffy/blob/master/img-github/logo.svg" width="200px" />
</h1>

<h4 align="center">O Proffy é uma plataforma de estudos online onde é possivel se cadastrar para dar aulas e encontrar professores para te ajudar a evoluir.</h4>

<p align="center">
  <img alt="Linguagem mais usada: Typescript" src="https://img.shields.io/github/languages/top/marcosribeirodacunha/proffy?style=flat">
  <img alt="Objetivo: estudo" src="https://img.shields.io/badge/purpose-study-lightgrey?style=flat">
  <a href="https://rocketseat.com.br/">
    <img alt="Feito por: Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-blueviolet?style=flat">
  </a>
</p>

<p align="center">
  <a href="#recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#créditos">Créditos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img src="https://github.com/marcosribeirodacunha/proffy/blob/master/img-github/mobile.png" width=24%"> <img src="https://github.com/marcosribeirodacunha/proffy/blob/master/img-github/web.png" width=74%">
</p>

## Recursos
- Cadastrar para dar aulas (professor, matéria e horários disponiveis);
- Listar os professores disponiveis (filtros);
- Listar os professores favoritados (mobile);
- Conectar com um professor por whatsapp.

## Instalação
Para clonar e executar a aplicação é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que instala também o [npm](http://npmjs.com)). Em sua linha de comando:

```bash
# Clone o repositório
$ git clone https://github.com/marcosribeirodacunha/proffy.git

# Entre no repositório
$ cd proffy

# Instale as dependências dentro do diretório server
$ cd server
$ npm install
// ou yarn

# Instale as dependências dentro do diretório web
$ cd web
$ npm install
// ou yarn

# Instale as dependências dentro do diretório mobile
$ cd mobile
$ npm install
// ou yarn
```
### Importante
- Modificar o arquivo api dentro de `mobile/src/services/api.ts`
  - Substituir o valor da propriedade baseURL pelo IP de conexão com o Expo (ex: `http://192.168.0.5:3333`)

### Backend
```bash
# Executar para criar o banco de dados
$ npm run knex:migrate
// ou yarn knex:migrate

# Rodar o backend
$ npm start
// ou yarn start
```
### Frontend
```bash
# Rodar aplicação web (cd web)
$ npm start
// ou yarn start

# Rodar aplicação mobile (cd mobile)
$ npm start
// ou yarn start
```

## Tecnologias
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/download/)
- [Express](https://www.npmjs.com/package/express)
- [Knex / SQLite](http://knexjs.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## Créditos
Aplicação construída durante a Next Level Week #2, realizada por :rocket: [Rocketseat](https://rocketseat.com.br/).

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
