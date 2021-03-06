import { Injectable } from '@nestjs/common';
import { AddProductDto } from "./dto/add-product.dto";
import { AddProductToBasketResp } from "../shop/interfaces/basket";

@Injectable()
export class BasketService {
  private items: AddProductDto[] = [];

  add (item: AddProductDto): AddProductToBasketResp{
    if(
      typeof item.name !== 'string'
      || 
      typeof item.count !== 'number'
      ||
      item.name ===''
      ||
      item.count<1
    ){
      return {
        isSuccess: false,
      }
    }

    this.items.push(item);

    console.log(this.items);

    return{
      isSuccess:true,
      index: this.items.length-1,
    }

  }

}