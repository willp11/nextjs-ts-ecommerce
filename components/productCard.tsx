import { Product } from "../types/product";
import Image from "next/image";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/router";

export default function ProductCard({product}: {product: Product}) {

    const {addItem} = useCart();
    const router = useRouter();

    return (
        <div className="group h-[24rem] w-[18rem] w-[300px] bg-gray-50 m-2 border border-gray-300 rounded shadow-md">
            <div onClick={()=>router.push(`/product/${product.id}`)} className="h-2/3 w-full flex items-center justify-center cursor-pointer">
                <div className="relative w-3/4 h-3/4 group-hover:transform group-hover:scale-125 group-hover:ease-in-out group-hover:duration-500">
                    {product?.image && <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        alt={product.name}
                    />}
                </div>
            </div>
            <div className="h-1/3 w-full p-4">
                <div className="h-1/3 w-full">
                    <p onClick={()=>router.push(`/product/${product.id}`)} className="font-semibold truncate cursor-pointer hover:text-blue-600">
                        {product.name}
                    </p>
                </div>
                <div className="h-2/3 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-semibold">${product.price}</p>
                    </div>
                    <button 
                        className="border border-gray-300 bg-white rounded p-2 font-semibold transition ease-in-out duration-300 hover:bg-blue-600 hover:text-white"
                        onClick={()=>addItem(product, 1)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}