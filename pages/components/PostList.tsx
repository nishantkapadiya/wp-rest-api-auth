import React from 'react';
import Link from 'next/link';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    slug: {
        rendered: string;
    }
    content: {
        rendered: string;
    };
}

interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div>
            <h1>WordPress Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className='text-4xl text-orange-300 mb-4'>{post.title.rendered}</h2>
                        </Link>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PostList;