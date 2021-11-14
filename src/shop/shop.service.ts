import { Injectable } from '@nestjs/common';
import { GetListOfProductsRespone } from "./interfaces/shop";

@Injectable()
export class ShopService {
  getProducts(): GetListOfProductsRespone {
    return [
      {
        name: 'pomidor',
        description: 'dobry pomidor',
        price: 4,
      },
      {
        name: 'ogórek',
        description: 'dobry ogór',
        price: 1,
      },
      {
        name: 'arbuz',
        description: 'dobry arbuz',
        price: 10,
      },
    ];
  }
}
