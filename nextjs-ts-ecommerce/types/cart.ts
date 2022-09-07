import { Product } from "./product";
import { Dispatch } from "react";

export interface ICartItem extends Product {
    quantity: number
}

export interface Cart {
    items: {[key: string]: ICartItem},
    value: number,
    total_qty: number   
}

export interface UpdateCartAction {
    type: string,
    product: Product,
    quantity: number
}

export interface ICartContext {
    cart: Cart,
    dispatch: Dispatch<any>
}