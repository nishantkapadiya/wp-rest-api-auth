// pages/[slug].js
import { useEffect, useState } from 'react';
import { getBlogPostBySlug } from '../api/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const token = Cookies.get('jwt_token');
                // Fetch the post by slug with the valid token
                if (token) {
                    const fetchedPost = await getBlogPostBySlug(token, slug);
                    setPost(fetchedPost);
                }
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false);                
            }
        };

        if (slug) {
            loadPost();
        }
    }, [slug]);

    return (
        <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.description}>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <div>
                        <h1>{post.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                )}
            </div>
        </main>
    );
};

export default BlogPost;
