import {BASE_URL} from '../utils/constrains';
import {pricesGroups} from '../utils/pricesGroups';
import {FetchedProduct, FetchedProducts, Product, UrlOptions} from '../utils/types';

export const getProducts = async (options?: UrlOptions): Promise<Product[]> => {
    const url = options ? `${BASE_URL}?skip=${options.skip}&limit=${options.limit}` : `${BASE_URL}?limit=100`;
    const res = await fetch(url);
    const data: FetchedProducts =  await res.json();
    return data.products.map((item: FetchedProduct) => {
        let priceGroup = '0-499';
        for (const [key, value] of Object.entries(pricesGroups)) {
            if (item.price > value.min && item.price < value.max) {
                priceGroup = key;
            }
        }
        return {...item, priceGroup, type: '1'};
    });
};
