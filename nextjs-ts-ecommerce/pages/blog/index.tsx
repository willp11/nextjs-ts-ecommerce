import Head from "next/head";
import {blogPosts} from "../../posts/blog.js";
import BlogPreview from "../../components/blogPreview";

export default function Blog() {

    const posts = blogPosts.map((post)=>{
        return (
            <BlogPreview post={post} key={post.id} />
        )
    })

    return (    
        <div className="w-full max-w-[1200px] mx-auto">
            <Head>
                <title>Blog</title>
                <meta name="description" content="what is a wedding ring? how to choose an engagement ring?" />
            </Head>
            <div className="w-full px-6 py-0">
                {posts}
            </div>
        </div>
    )
}