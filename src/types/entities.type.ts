export type TProducts = {
  author: TAuthor;
  categories: Array<String>;
  items: Array<TItems>;
};

export type TItems = {
  id: string;
  title: string;
  prices: {
    currency: string;
    amount: Number;
    decimals: Number;
  };
  picture: string;
  condition: string;
  free_shipping: string;
};

export type TAuthor = {
  name: string;
  lastname: string;
}

export type TItemDetail = {
  author: TAuthor;
  id: string;
  title: string;
  prices: {
    currency: string;
    amount: Number;
    decimals: Number;
  };
  price: Number;
  picture: string;
  condition: string;
  free_shipping: string;
  thumbnail: string;
};
export type TDescription = {
  plain_text: string;
}

export type ErrorMessage = {
  message?: string;
};