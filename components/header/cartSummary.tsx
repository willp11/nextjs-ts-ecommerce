import { useCart } from "../../hooks/useCart";
import CartItem from "./cartItem";
import {useState, useEffect} from 'react';

export default function CartSummary({showSummary}: {showSummary: boolean}) {

    const {cart, clearCart} = useCart();

    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    let cartItems = null;
    if (cart) {
        cartItems = Object.keys(cart.items).map((key)=>{
            let item = cart.items[key];
            return <CartItem key={key} item={item} />
        })
    }

    let checkoutBtnCursor = "cursor-pointer";
    if (cart?.total_qty === 0) checkoutBtnCursor = "cursor-not-allowed"

    if (!isSSR) { 
        return (
            <div className={`absolute -right-[5.5rem] xs:-right-[6rem] z-20 p-4 w-[100vw] max-w-[500px] top-[4.25rem] md:right-0 md:top-[3rem]
                            ${showSummary ? "flex" : "hidden"} flex-col items-center justify-center
                            bg-white border border-gray-300 dark:bg-slate-700 dark:border-gray-600 rounded shadow-md`}>
                {cart?.total_qty === 0 && <p className="text-base p-2 text-gray-400 dark:text-gray-100">Your cart is currently empty.</p>}
                {cart?.total_qty !== 0 && <button 
                                            className="text-base p-2 rounded bg-red-600 text-sm text-white font-semibold dark:text-gray-100 cursor-pointer hover:bg-red-700 transition ease-in-out duration-300"
                                            onClick={clearCart}
                                        >
                                            Clear All
                                        </button>}
                {!isSSR ? cartItems : null}
                {cart?.total_qty !== 0 && <div className="w-full my-2 px-1 flex justify-between">
                    <p className="dark:text-gray-100 text-lg font-semibold">Total:</p>
                    <p className="dark:text-gray-100 text-lg font-semibold">${cart?.value}</p>
                </div>}
                <button 
                    className={`p-2 mt-2 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition ease-in-out duration-300 rounded ${checkoutBtnCursor}`}
                    // onClick={redirectToCheckout}
                    disabled={cart?.total_qty === 0}
                >
                    Go to checkout
                </button>
            </div>
        )
    } else {
        return null;
    }
}