import { Http } from '../libs/http';
import { TProducts, TItemDetail, TDescription } from '../types';

class UserProductsServices {
  private http;

  constructor() {
    this.http = new Http().getInstance();
  }


  getProducts(query: string): Promise<Array<TProducts>> {
    return this.http.get(`/sites/MLA/search?q=${query}`);
  }

  getProductDetail(id: string): Promise<TItemDetail> {
    return this.http.get(`/items/${id}`);
  }

  getProductDescription(id: string): Promise<TDescription> {
    return this.http.get(`/items/${id}/description`);
  }


  /*redeemBenefit(id: string): Promise<TRedeemBenefit> {
    return this.http.post(`/products/redeem`, {
      benefitId: id,
    });
  }

  getProductsRedeemed(): Promise<Array<TRedeemedBenefit>> {
    return this.http.get(`/products/redeemed`);
  } */
}

export const UserProductsService = new UserProductsServices();
