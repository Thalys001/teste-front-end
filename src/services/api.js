import axios from "axios";

// https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json


const api = axios.create ( {
  baseURL: 'https://app.econverse.com.br'
}
);

export default api;
