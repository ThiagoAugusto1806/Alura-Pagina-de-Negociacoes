## 📈 Sistema de Negociações 📈

Este projeto é um sistema completo para gerenciamento de negociações, desenvolvido com TypeScript, utilizando Node.js para o backend (API) e um frontend que utiliza Bootstrap. A estrutura tem um desenvolvimento organizado com separação de camadas (MVC) e uso de decorators. 

##  💻 Tecnologias Utilizadas

- **Frontend:**
    - TypeScript
    - Bootstrap
- **Backend:**
    - Node.js
    - Express (inferido pela estrutura de pastas)

## 📂 Arquitetura do Projeto

O projeto está dividido em duas partes principais:

### 1️⃣  `app/` - Aplicação Frontend

- `src/` 💻: Diretório principal do código-fonte TypeScript.
    - `controllers/` 🕹️: Controla as interações do usuário e atualiza a view.
        - `negociacao-controller.ts`: Gerencia as negociações.
    - `decorators/` ✨:  Decorators para adicionar funcionalidades às classes.
        - `dom-injector.ts`, `escape.ts`, `inspect.ts`, `logar-tempo-de-execucao.ts`.
    - `enums/`  🔢: Define enumerações.
        - `dias-da-semana.ts`: Representa os dias da semana.
    - `interfaces/` 🤝: Define contratos para tipagem.
        - `comparavel.ts`, `modelo.ts`, `negociacao-do-dia.ts`.
    - `models/`  🧱: Modelagem dos dados da aplicação.
        - `negociacao.ts`: Representa uma negociação. 
        - `negociacoes.ts`: Gerencia múltiplas negociações.
    - `services/`  ⚙️:  Lógica de comunicação com o backend.
        - `negociacoes-service.ts`: Provavelmente lida com a API de negociações.
    - `utils/` 🧰:  Utilitários.
        - `imprimir.ts`, `imprimivel.ts`. 
    - `views/` 🖼️: Responsável por renderizar a interface.
        - `mensagem-view.ts`, `negociacoes-view.ts`,  `view.ts`. 
- `dist/` 📦: Contém os arquivos compilados e otimizados da aplicação, prontos para distribuição.
    - `css/`: Arquivos CSS, incluindo Bootstrap.
    - `js/`: Arquivos JavaScript da aplicação.
    - `index.html`: Arquivo principal HTML. 

### 2️⃣ `servidor-api/` - Backend (API)

- `api/`: Contém a implementação da API.
    - `index.js`: Ponto de entrada da API.
- `routes/`: Define as rotas da API.
    - `index.js`: Configuração das rotas.
- `config/`: Configurações do servidor.
    - `express.js`:  Configuração do framework Express.
- `server.js`:  Ponto de entrada principal do servidor.

### 📄 Arquivos da Raiz

- `.gitignore`: Define arquivos e pastas a serem ignorados pelo Git. 
- `.vscode/`: Configurações do VS Code.
- `package.json`, `package-lock.json`: Gerenciamento de dependências do projeto. 
- `tsconfig.json`: Configurações do TypeScript. 

## Desenvolvimento
O projeto foi desenvolvido durante a formação "Melhore sua experiência de desenvolvimento com TypeScript" onde foi disponibilizado uma estrutura inicial HTML e uum backend de API, durante o curso foi aprendido e reforçado os conceitos de programação orientada a objetos bem como as funcionalidades adicionais da linguagem TypeScript em relação ao JavaScript.

## Screenshots

### Página de negociação
<img src="https://imgur.com/MvIKySR.jpg" alt="Página de negociação">

## Inicializando programa

Para inciar o programa é necessário fazer a instalação das dependencias com o comando:

``` bash
    npm install
```

Após a instalação do pacote, para rodar o programa utiliza-se o seguinte comando:

``` bash
    npm run start
```

Caso queira utilizar a importação de dados do backend é necessário inicializar o servidor da API, com o caminho:

```bash
    cd servidor-api/
```

Em seguida o comando:

```bash
    npm start
```