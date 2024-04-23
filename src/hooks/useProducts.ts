import {
    TProducts,
    TDescription,
    TItemDetail,
  } from '../types';
  import { useState } from 'react';
  import { UserProductsService } from '../services';
  
  export const useProducts = () => {
    const [product, setProducts] = useState<Array<TProducts>>([]);
    const [productDetail, setProductsDetail] = useState<TItemDetail>();
  
    const [productDescription, setProductsDescription] = useState<TDescription>();
    const [isLoading, setLoading] = useState<boolean>(false);
  
  
    const getProducts = async (
      query?: string,
    ) => {
      try {
        setLoading(true);
        const response = await UserProductsService.getProducts(query ?? '');
        setProducts(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
  
    const getProductsDetail = async (id: string) => {
      try {
        setLoading(true);
        const response = await UserProductsService.getProductDetail(id);
        setProductsDetail(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
  
    const getProductsDescription = async (id: string) => {
      try {
        setLoading(true);
        const response = await UserProductsService.getProductDescription(id);
        setProductsDescription(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
  
  
    return {
      isLoading,
      product,
      productDetail,
      productDescription,
      getProducts,
      getProductsDetail,
      getProductsDescription
    };
  };
  