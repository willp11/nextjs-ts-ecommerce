import { Product } from "./product";
import { Dispatch } from "react";

export interface CartItem extends Product {
    quantity: number
}

export interface Cart {
    items: {[key: string]: CartItem},
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