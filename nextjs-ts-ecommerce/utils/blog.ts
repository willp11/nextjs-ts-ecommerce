import {IBlogPost} from '../types/blog';

export const getBlogIds = (blogPosts: IBlogPost[]) => {
    return blogPosts.map(post=>{
        return {
            params: {
                id: post.id.toString()
            }
        }
    })
}

export const getBlogPost = (id: string, blogPosts: IBlogPost[]) => {
    const post = blogPosts.find(blogPost => blogPost.id === parseInt(id)) ?? null;
    return post;
}