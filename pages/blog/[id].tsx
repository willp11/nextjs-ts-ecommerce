import {blogPosts} from '../../posts/blog';
import { IBlogPost } from '../../types/blog';
import { getBlogIds, getBlogPost } from "../../utils/blog";

export async function getStaticPaths() {
    const paths = getBlogIds(blogPosts);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: {id: string}}) {
    const post = getBlogPost(params.id, blogPosts);
    return {
        props: {
            post
        }
    }
}

export default function BlogPost({post}: {post: IBlogPost}) {
    return (
        <div className="w-full max-w-[1200px] mx-auto p-4">
            <div className="w-full max-w-[768px] p-4 bg-white border border-gray-200 shadow-md mt-8 mb-8 rounded-md">
                <h2 className="text-2xl tracking-tighter font-semibold mb-2">{post.title}</h2>
                <p>{`on ${post.date} by ${post.author}`}</p>
                <p className="mt-4">{`${post.content}`}</p>
            </div>
        </div>
    )
}