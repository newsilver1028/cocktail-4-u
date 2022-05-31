import axios from 'axios';

const DATA_URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=milk&api_key=1';

export const getCocktailByNameApi = () => axios.get<string>(DATA_URL);
