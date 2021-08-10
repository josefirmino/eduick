<div align="center">
  <a href="#">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript"/>
  </a>
  <a href="#">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript"/>
  </a>
  <a href="#">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/>
  </a>
  <a href="#">
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
  </a>
  <a href="#">
  <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion"/>
  </a>
  <a href="#">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github"/>
  </a>
      
</div>

![Logo of the project](https://github.com/josefirmino/eduick/blob/main/public/images/readme/capaGithub.png?raw=true)


## Challenge Eduick
>Iniciei o projeto com HTML, SASS e JS da forma que mais sentia confiança, após ver que seria muito fácil executar e não teria nenhum desafio, resolvi me aventurar no NextJS. Como toda nova tecnologia nos tira da zona de conforto, comecei a estudar e entender mais qual seria a melhor aplicação para o challenge. 


### Ajustes e melhorias

Me deparei com vários desafios usando NextJS, não padronizei todo o projeto para que vocês possam ver minha linha evolutiva que irei colocar logo abaixo:

- [x] HTML, SASS E JS
- [x] Ao iniciar o projeto com NextJS comecei estilizando com sass, eu não conhecia o styled components que por sinal é incrível!! Após avançar e estudar um pouco mais descobri o poder do styled components.
- [x] Conheci durante o projeto outra lib sensacional o Framer motion, onde fiz uma animação básica.
- [x] Na etapa final conheci vários CMS (Prismic, Contentful, GraphCMS). Escolhi o Prismic para esse projeto pelo seu custo baixo e plano gratuito. :)
- [ ] Padronizar Styled Components
- [ ] Correção do redirecionamento dos links
- [ ] Mudar a tag `<img>` para o component `Image` do NextJS
- [ ] Fazer o deploy

## 💻 Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:
* Você instalou a versão mais recente do `NODEJS (projeto: v14.16.0)`
* Você instalou a versão mais recente do `GIT (projeto: 2.25.1)`
* Você instalou a versão mais recente do `Yarn (projeto: 1.22.10)`

## 🚀 Instalando o Eduick

Para instalar o Eduick, siga estas etapas:

Linux, macOS, Windows:
```
git clone https://github.com/josefirmino/eduick.git
```


```sh
yarn install
```

## :ledger: Configurando as variáveis ambiente: 

Crie um arquivo na raiz do projeto chamado
```
.env.local
```

Dentro dele cole as seguintes configurações:
```
# Github
GITHUB_CLIENT_ID=56cde911b594cdc4c967
GITHUB_CLIENT_SECRET=0c6d41b33a9cf327e9a3868e14d139b206ae2bce

#Prismic CMS
PRISMIC_ENDPOINT=https://eduick.prismic.io/api/v2
PRISMIC_ACCESS_TOKEN=MC5ZUTJSLWhJQUFDb0E3eFBP.S--_ve-_vSl6PCEi77-977-9HWp5HEJa77-9Tu-_vQ0hd--_ve-_ve-_ve-_ve-_ve-_ve-_vQEh77-9
```

##  :coffee: Usando  o Eduick
Para usar o Eduick, siga estas etapas:

```
yarn dev
```

Rotas disponíveis no projeto:

 - localhost:3000
 - localhost:3000/courses (Precisa de autenticação, API Prismic)
 - localhost:3000/dashboard (Precisa de autenticação)




## :alien: Tecnologias 

Aqui estão as tecnologias utilizadas nesse projeto.

* NextJS
* SASS
* TypeScript

## :zap: Serviços

* Next Auth
* Github
* Prismic.io

## :zap: Libs JS

* SASS
* Styled components
* Framer motion



## 1 LANDING - Ao acessar, você verá a página inicial <3 localhot:3000

Lading Page:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/gifs/home.gif)

Lading Page Radio Button:

![Homepage Radio GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/gifs/radiobutton.gif)

Login Github:

![Homepage Login GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/gifs/logingithub.gif)

Lading Page:
![Homepage image](https://github.com/josefirmino/eduick/blob/main/public/images/readme/home.png)

Lading Modal:
![Homepage Get Stated image](https://github.com/josefirmino/eduick/blob/main/public/images/readme/getstarted.png)

## 1.1 LANDING MOBILE <3

Lading Page Mobile:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/gifs/mobile.gif)

Lading Page Mobile:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/mobile/homeMobile.png)

Lading Page Modal:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/mobile/homeModal1.png)

Lading Page Modal:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/mobile/homeModal2.png)


## 2 DASHBOARD - Apos fazer o login com seu github você poderá acessar o dashboard =D localhot:3000/dashboard ou /courses

![Dashboard image](https://github.com/josefirmino/eduick/blob/main/public/images/readme/dashboard.png)

Prismisc API:

![Dashboard Prismic image](https://github.com/josefirmino/eduick/blob/main/public/images/readme/prismic-dashboard.png)
![Dashboard Github image](https://github.com/josefirmino/eduick/blob/main/public/images/readme/modalgitgub.png)

## 2.1 DASHBOARD MOBILE:

Dashboard Page Mobile:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/gifs/mobiledashboard.gif)
![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/mobile/dashboardMobile.png)
Dashboard Page Mobile Menu:

![Homepage GIF](https://github.com/josefirmino/eduick/blob/main/public/images/readme/mobile/dashboardMenu.png)

## Features

Os principais recursos dessa aplicação são:
 - Login com github para ver os cursos
 - Adicionar e remover cursos.
 - Aprender muito <3

## Links
  - Deploy Vercel: (Em breve)
  - Em caso de bugs, como vulnerabilidades de segurança, por favor entrar em contato
      jose.theangelz@gmail.com
      
## 🤝 Colaboradores

Agradecemos às seguintes criaturinhas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://i.imgur.com/XHPvK7I.png" width="100px;" alt="Foto da Magali"/><br>
        <sub>
          <b>Magali</b>
          <p>Recepcionista</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://i.imgur.com/Mz9rxsn.png" width="100px;" alt="Foto da Valente"/><br>
        <sub>
          <b>Valente</b>
          <p>Segurança<p/>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://i.imgur.com/ZzezKIJ.png" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>Penélope</b>
          <p>Estagiária</p>
        </sub>
      </a>
    </td>
  </tr>
</table>


## Autor

<a href="#">
 <kbd> 
 <img src="https://avatars.githubusercontent.com/u/25160068?s=400&u=f0c1270685186da132a0f199d1fa0b1b71fdef1d&v=4" width="100px;" alt="" style="border-radius:50%"/>
 </kbd>
 <br />
 <sub><b>José Firmino</b></sub> 🚀</a>
  
#### :tv: Social Media
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/firminojuara/)](https://www.linkedin.com/in/firminojuara/)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=+5582988861433&text=Github!)](https://api.whatsapp.com/send?phone=+5582988739150&text=Github!)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jose.theangelz@gmail.com)](mailto:jose.theangelz@gmail.com)

[⬆ Voltar ao topo](eduick)<br>