import { IBlogPost } from "../types/blog";
import { useRouter } from "next/router";

export default function BlogPreview({post}: {post: IBlogPost}) {

    const router = useRouter();

    return (
        <div className="w-full max-w-[768px] p-4 bg-white border border-gray-200 shadow-md mt-8 mb-8 rounded-md">
            <h2 className="text-2xl tracking-tighter font-semibold mb-2">{post.title}</h2>
            <p>{`on ${post.date} by ${post.author}`}</p>
            <p className="mt-4">{`${post.content}`}<span className="ml-2 text-blue-600 cursor-pointer" onClick={()=>router.push(`/blog/${post.id}`)}>Read more...</span></p>
        </div>
    )
}