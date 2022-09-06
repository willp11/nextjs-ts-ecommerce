import { useCart } from "../../hooks/useCart"

export default function CartSummary() {

    useCart();

    return (
        // <div className={`absolute right-0 top-[4rem] sm:top-[4.5rem] lg:top-[5rem] w-[calc(100vw-2rem)] md:w-[400px] rounded
        //                 ${showSummary ? "flex" : "hidden"} flex-col items-center justify-center shadow-md
        //                 bg-white border border-gray-300 dark:bg-slate-700 dark:border-gray-600 z-10 p-4`}>
        //     {cart.total_qty === 0 && <p className="text-base p-2 text-gray-400 dark:text-gray-100">Your cart is currently empty.</p>}
        //     {cart.total_qty !== 0 && <button 
        //                                 className="text-base p-2 rounded bg-red-600 text-sm text-white font-semibold dark:text-gray-100 cursor-pointer hover:bg-red-700 transition ease-in-out duration-300"
        //                                 onClick={clearCart}
        //                             >
        //                                 Clear All
        //                             </button>}
        //     {!isSSR? cartItems : null}
        //     {cart.total_qty !== 0 && <div className="w-full my-2 px-1 flex justify-between">
        //         <p className="dark:text-gray-100 text-lg font-semibold">Total:</p>
        //         <p className="dark:text-gray-100 text-lg font-semibold">${cart.value}</p>
        //     </div>}
        //     <button 
        //         className={`p-2 mt-2 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition ease-in-out duration-300 rounded ${checkoutBtnCursor}`}
        //         onClick={redirectToCheckout}
        //         disabled={cart.total_qty === 0}
        //     >
        //         Go to checkout
        //     </button>
        // </div>
        <p>Hi</p>
    )
}