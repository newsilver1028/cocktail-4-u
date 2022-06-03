export type Alcoholic = 'Alcoholic' | 'Non alcoholic';

export interface ICocktail {
  idDrink: string;
  strAlcoholic: Alcoholic;
  strCategory: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: string;
  strIBA?: string;
  strImageAttribution?: string;
  strIngredient: string[];
  strMeasure: string[];
  strInstructions: string;
}

export interface IIngredient {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: string;
}

export interface ICocktailByIngredient {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
