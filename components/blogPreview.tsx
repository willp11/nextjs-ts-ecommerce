import { IBlogPost } from "../types/blog"

export default function BlogPreview({post}: {post: IBlogPost}) {
    return (
        <div className="w- max-w-[1000px] p-4 bg-white border border-gray-200 shadow-md mb-8">
            <h2 className="text-2xl tracking-tighter font-semibold mb-2">{post.title}</h2>
            <p>{`on ${post.date} by ${post.author}`}</p>
            <p className="mt-4">{`${post.content}`}<span className="ml-2 text-blue-600 cursor-pointer">Read more...</span></p>
        </div>
    )
}