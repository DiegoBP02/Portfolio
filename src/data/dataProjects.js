import {
  reactImage1,
  reactImage2,
  reactImage3,
  nodeImage1,
  nodeImage2,
  mernImage1,
  mernImage2,
  mernImage3,
} from "../assets/images/index";

export const projectsReact = [
  {
    ref: "https://github.com/DiegoBP02/animeReactjs-2.0",
    refLive: "https://animescomplete-reactjs.netlify.app",
    image: reactImage1,
    title: "Animes Coding",
    spans: ["React", "CSS"],
    projectData: [
      {
        id: 1,
        feat:
          "Página que permite a busca de vários animes, redirecionando o usuário ao MyAnimeList.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "Os dados são obtidos através da API " +
          "JIKAN API" +
          " e podem ser exibidos das seguintes formas: buscar um anime pelo nome, exibir os mais populares, mais bem avaliados e mais favoritados.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Aprimorar a compreensão sobre documentações de APIs e, principalmente, realizar um projeto sozinho, sem a presença habitual de um tutor ensinando passo a passo.",
      },
    ],
  },
  {
    ref: "https://github.com/DiegoBP02/reactComfy",
    refLive: "https://comfy-reactjs.netlify.app",
    image: reactImage2,
    title: "ComfySloth",
    spans: ["React", "CSS"],
    projectData: [
      {
        id: 1,
        feat: "Site de um e-commerce completo.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "Possui integração com o Stripe, permitindo a adição de um método de pagamento. É possível filtrar e alterar a ordem dos produtos. Além disso, há um carrinho de compras, sendo possível selecionar os itens por suas cores. Sistema de login feito através da integração com o Auth0",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Configurar o sistema de pagamento da Stripe e lidar com múltiplos contexts e reducers.",
      },
    ],
    reverse: true,
  },
  {
    ref: "https://github.com/DiegoBP02/jobsterReactRedux",
    refLive: "https://jobster-redux.netlify.app",
    image: reactImage3,
    title: "Jobster",
    spans: ["React", "CSS", "Redux"],
    projectData: [
      {
        id: 1,
        feat:
          "Página que permite a postagem de vagas de trabalho e editá-las, podendo filtrar as vagas e exibí-las em dois gráficos.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          " Jobster é um pequeno projeto que permite o usuário criar vagas, postá-las e editá-las, definindo o tipo e o estado de cada. Possui a funcionalidade de se logar/registrar através do uso de uma RestAPI. Além disso, possui dois gráficos informando a quantidade de vagas postadas por mês e uma página que permite o usuário alterar os dados do seu perfil.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Lidar com o uso ostensivo do Redux para várias funcionalidades diferentes e compreender o consumo da API através do createAsyncThunk.",
      },
    ],
  },
];

export const projectsNode = [
  {
    ref: "https://github.com/DiegoBP02/eCommerceNode-SOLO/tree/main",
    refLive:
      "https://ecommerceapi-node.onrender.com/#jump-Product-GetSingleProduct",
    image: nodeImage1,
    title: "E-Commerce API",
    spans: ["Node", "Express", "MongoDB"],
    projectData: [
      {
        id: 1,
        feat: "API de um e-Commerce.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "API que permite desenvolvedores acessarem o back-end de um e-commerce, sendo possível o acesso e manipulação de dados dos produtos, avaliações e ordens integrados com um sistema de login/registro de usuário que permite a atualização da senha.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Lidar com diversos models e realizar conexões entre eles e, principalmente, entender o middleware responsável pelo error handling do projeto.",
      },
    ],
  },
  {
    ref: "https://github.com/DiegoBP02/jobsAPI-Node",
    refLive: "https://jobsapi-node.onrender.com/api-docs/#/",
    image: nodeImage2,
    title: "Jobs API",
    spans: ["Node", "Express", "MongoDB"],
    projectData: [
      {
        id: 1,
        feat:
          "API que permite o usuário criar e editar suas vagas de trabalho.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "API que, através de um sistema de login/registro, permite o usuário gerenciar suas vagas de trabalho.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Realizar a documentação do projeto através da ferramenta APIMatic e do Swagger Editor e lidar com a utilização das bibliotecas jsonwebtoken e bcryptjs pela primeira vez.",
      },
    ],
    reverse: true,
  },
];

export const projectMERN = [
  {
    ref: "https://github.com/DiegoBP02/toDoList-MERN",
    refLive: "https://todolist-mern.onrender.com",
    image: mernImage1,
    title: "Todo list",
    spans: ["React", "Node", "MongoDB", "Express"],
    projectData: [
      {
        id: 1,
        feat: "Lista de tarefas.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "Projeto que permite o usuário administrar a sua lista de tarefas, permitindo-o adicionar tarefas, editá-las, removê-las e categorizá-las em diferentes níveis de urgência. Além disso, há um sistema de paginação que é exibido quando há mais de 10 tarefas. Todos os dados ficam armazenados no MongoDB.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Implantar o sistema de paginação partindo do back-end até o front-end.",
      },
    ],
  },
  {
    ref: "https://github.com/DiegoBP02/jobList-MERN",
    refLive: "https://joblist-mern.onrender.com",
    image: mernImage2,
    title: "Job List",
    spans: ["React", "Node", "MongoDB", "Express"],
    projectData: [
      {
        id: 1,
        feat: "Lista de vagas de trabalho.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "Projeto que permite o usuário gerenciar o estado das vagas de trabalho que ele aplicou, permitindo-o adicionar vagas com base no nome da empresa e a posição a qual ele aplicou. Além disso, é possível editar os detalhas da vaga e removê-la. Todos os dados ficam armazenados no MongoDB.",
        desc: "Desafios",
      },
      {
        id: 3,
        feat:
          "Enfrentei alguns problemas até encontrar a origem de um bug: falta de um spread operator no reducer.",
      },
    ],
    reverse: true,
  },
  {
    ref: "https://github.com/DiegoBP02/Jobify-MERN",
    refLive: "https://mern-jobify-o8sh.onrender.com",
    image: mernImage3,
    title: "Jobify",
    spans: ["React", "Node", "MongoDB", "Express"],
    projectData: [
      {
        id: 1,
        feat: "Lista de vagas de trabalho.",
        desc: "Características",
      },
      {
        id: 2,
        feat:
          "Projeto que permite o usuário gerenciar o estado das vagas de trabalho que ele aplicou, permitindo-o adicionar vagas com base no nome da empresa e a posição a qual ele aplicou. Além disso, é possível editar os detalhas da vaga e removê-la. Todos os dados ficam armazenados no MongoDB.",
      },
      {
        id: 3,
        feat:
          "Compreender a utilização e aplicação do aggregation pipeline do MongoDB na aba Stats, principalmente no que se refere a filtragem da quantidade de aplicações mensais.",
      },
    ],
  },
];
