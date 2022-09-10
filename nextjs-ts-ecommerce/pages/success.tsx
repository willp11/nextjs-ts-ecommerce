import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { CheckIcon } from "@heroicons/react/outline";
import axios from 'axios';

export default function Success() {
    const { query: { session_id } } = useRouter();

    const {clearCartOnSuccess} = useCart();

    const fetcher = (url : string) => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(
        () => `/api/checkout_sessions/${session_id}`,
        fetcher
    )

    useEffect(()=>{
        clearCartOnSuccess();
    }, [data])

    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            {error ? (
                <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto dark:bg-slate-800 dark:text-gray-100">
                    <p className="text-lg">Sorry, something went wrong!</p>
                </div>
            ) : !data ? (
                <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto dark:bg-slate-800 dark:text-gray-100">
                    <p className="text-lg animate-pulse">Loading...</p>
                </div>
            ) : (
                <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto dark:bg-slate-800 dark:text-gray-100">
                    <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
                        <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" />
                        <span>Thanks for your order!</span>
                    </h2>
                    <p className="text-lg mt-3">Check your inbox for the receipt.</p>
                </div>
            )}
        </div>
    )
}