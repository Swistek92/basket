import { Body, Controller, Inject, Post } from "@nestjs/common";
import { AddProductDto } from "./dto/add-product.dto";
import { BasketService } from "./basket.service";
import { AddProductToBasketResp } from "../shop/interfaces/basket";

@Controller('basket')
export class BasketController {

  constructor(

    @Inject(BasketService) private basketService: BasketService

  ) {

    }


  @Post("/")
  addProductToBasket(
    @Body() item: AddProductDto,
  ): AddProductToBasketResp {
    return this.basketService.add(item);
  }
}