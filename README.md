# Prevela

Aplicativo mobile desenvolvido em **React Native** com **Expo**, focado em avaliação e descoberta de produtos. Os usuários podem navegar por um catálogo de produtos, ver detalhes, deixar avaliações com nota (estrelas) e comentário, e gerenciar seu perfil.

## ✨ Funcionalidades

- **Autenticação de usuários** — cadastro e login com e-mail e senha (Firebase Auth)
- **Catálogo de produtos** — listagem em grade na tela inicial, com nome, imagem, média de avaliações e número de reviews
- **Detalhes do produto** — visualização individual com nota média e lista de avaliações
- **Avaliações (Reviews)** — envio de nota (1 a 5 estrelas) e comentário para cada produto
- **Lista de desejos** — tela dedicada para produtos favoritados
- **Perfil do usuário** — tela de gerenciamento de conta
- **Navegação por abas** — Home, Desejos e Perfil, com stack de navegação para telas de detalhe

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/) `0.81` + [Expo](https://expo.dev/) `~54`
- [React Navigation](https://reactnavigation.org/) (bottom tabs + native stack)
- [Firebase](https://firebase.google.com/) — Authentication e Realtime Database
- [React Native Paper](https://callstack.github.io/react-native-paper/) — componentes de UI (Material Design)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Cloudinary](https://cloudinary.com/) — hospedagem/entrega de imagens

## 📁 Estrutura do projeto

```
Prevela/
├── App.js                 # Ponto de entrada da navegação (tabs + stack)
├── Firebase.js             # Configuração e inicialização do Firebase
├── index.js                 # Registro do componente raiz (Expo)
├── app.json                 # Configuração do Expo (nome, bundle id, plugins)
├── components/
│   ├── Product.js           # Card de produto usado na listagem
│   ├── RenderStar.js         # Renderização de estrelas de avaliação
│   └── SearchTab.js          # Barra de busca
├── pages/
│   ├── Home.js               # Tela inicial com catálogo de produtos
│   ├── Desejos.js             # Lista de desejos
│   ├── Perfil.js               # Perfil do usuário
│   ├── Login.js                # Cadastro e login
│   ├── ProductDetails.js        # Detalhes do produto e reviews
│   ├── ProfileSetupScreen.js     # Configuração inicial de perfil (nome)
│   └── Review.js                  # Envio de avaliação
├── android/                  # Projeto nativo Android
└── ios/                       # Projeto nativo iOS
```

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npx expo`)
- Um projeto Firebase configurado (Authentication + Realtime Database)
- Para builds nativos: Android Studio (Android) e/ou Xcode (iOS, apenas macOS)

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd prevela-reactnative-expo-main/Prevela

# Instale as dependências
npm install
```

### Configuração do Firebase

O projeto usa o Firebase Realtime Database para dados de produtos/avaliações e o Firebase Authentication para login. Configure suas próprias credenciais em `Firebase.js`, e adicione os arquivos nativos necessários:

- Android: `google-services.json` na raiz de `Prevela/`
- iOS: `GoogleService-Info.plist` em `Prevela/ios/Prevela/`

> ⚠️ Evite versionar credenciais reais do Firebase em repositórios públicos. Considere usar variáveis de ambiente (ex: `expo-constants` + `.env`) para projetos em produção.

### Executando

```bash
# Iniciar o servidor de desenvolvimento (dev client)
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar no navegador
npm run web
```

## 🗂️ Modelo de dados (Realtime Database)

```
produtos/
  {produtoId}/
    nome: string
    img: string (URL)
    average: string  # ex: "4,5"
    reviews: number

avaliacoes/
  {produtoId}/
    {avaliacaoId}/
      userId: string
      userName: string
      comentario: string
      nota: number
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
