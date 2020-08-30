
# ***Clone Mercado-Livre:iphone:***

<h1 align=center>
  <img src="assets/img/Banner.PNG" alt="Mercado-Livre Banner"/>
</h1>

<div align=center>

![MIT][mit] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge] [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white&labelColor=007ACC)](https://github.com/ellerbrock/typescript-badges/)
  
  <a href="https://www.linkedin.com/in/luiz-carlos-vilela" target="_blank"> 
    <img src="https://img.shields.io/badge/Developer-Luiz%20Carlos-brightgreen?style=flat&logo=Linkedin&logoColor=white" alt="Developer link" />
  </a>

</div>

<br />

<h3 align=center>
  
:books:
Clone Mercado-Livre é um projeto para replicar a interface do aplicativo Mercado Livre. Utilizando as tecnologias ***TypeScript, Node, e React Native***.

</h3>

<h2 align=center>
  <i>Telas Mobile </i> :iphone:
</h2>

<div align=center >  
  <table align=center border="0">
  <tr align=center>
    <th ><strong> <i> Home </i> </strong></th>
    <th ><strong> <i> Study </i> </strong></th>
    <th ><strong> <i> Teacher </i> </strong></th>
  </tr>
                                
  <tr align=center >
    <td >
       <img width="400" src="assets/img/Landing.png">
    </td>
    <td > <img width="400" src="assets/img/Teacher.png"> </td>
    <td> <img width="400" src="assets/img/TeacherList.png"> </td>
  </tr>
</table>
</div>

<br />

## ***:rocket: OBJETIVO***

<p align=justify> 
O projeto tem como finalidade desenvolver uma aplicação mobile com a aparência igual ao aplicativo Mercado Livre. Ao decorrer do projeto tenho como objetivo também desenvolver conhecimento em <strong>React</strong> e em <strong>TypeScript</strong>.
</p>

## ***:computer: TECNOLOGIAS***

#### ***:iphone: Mobile*** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**

  Arquivo json do front-end mobile <kbd>[package.json](https://github.com/LuizCarlosVilela/clone-mercado-livre/blob/master/package.json)</kbd>

### ***Utilitários***

- Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**

## ***:wine_glass: COMO UTILIZAR***

### ***Configurações Iniciais***

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# Expo (React Native):
$ npm install -g expo-cli 
```

### ***Expo (React Native)***

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:

```sh
# Instalando as dependências do commitlint:
$ cd ./proffy
$ npm install

# Instalando as dependências do mobile:
$ cd ./sources/mobile
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](https://github.com/LuizCarlosVilela/nlw-2-backend/blob/master/package.json)</kbd>, <kbd>[website](https://github.com/LuizCarlosVilela/nlw-2-web/blob/master/package.json)</kbd> e <kbd>[mobile](https://github.com/LuizCarlosVilela/nlw-2-mobile/blob/master/package.json)</kbd>.

### ***Utilizando o Mobile***

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./sources/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poopins
```

## ***:star2: AGRADECIMENTOS***

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Next Level Week</strong></th>
    <th><strong>Rocketseat</strong></th>
    <th><strong>diego3g</strong></th>
    <th><strong>maykbrito</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://nextlevelweek.com/">
        <img width="200" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a15e5ee3-7ba9-4aae-ad19-bd86929051f1/download.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200808T220334Z&X-Amz-Expires=86400&X-Amz-Signature=7a15de22d455cd3d55bcb53c74e72e9e592c9bac6ac6ba2546c3b3bcaa27c1fe&X-Amz-SignedHeaders=host">
      </a>
    </td>
    <td>
      <a href="https://rocketseat.com.br/">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981650-1e2e6680-a8f6-11ea-9f42-6df8fe809e4b.png">
      </a>
    </td>
    <td>
      <a href="https://github.com/diego3g">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981712-b7f61380-a8f6-11ea-9099-bd3677e97e39.jpg">
      </a>
    </td>
    <td>
      <a href="https://github.com/maykbrito">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
      </a>
    </td>
  </tr>
</table>

</div>

## ***:books: REFERÊNCIAS***

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Node](https://nodejs.org/en/)

## ***:page_with_curl: LICENÇA***

Este repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

 <i> <h2 align="center">Feito com ❤️ por <a href="https://www.linkedin.com/in/luiz-carlos-vilela/"> Luiz Carlos Vilela </a></h2> </i>

<!-- Badges -->

[mit]: https://img.shields.io/badge/license-MIT-brightgreen

[github_issues_badge]: https://img.shields.io/github/issues/marcospbrandao/ecoleta?color=green

[repository_license_badge]: https://img.shields.io/github/license/marcospbrandao/ecoleta

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[tsnode]: https://github.com/TypeStrong/ts-node

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable

