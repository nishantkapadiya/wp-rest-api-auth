import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import { useEffect, useState } from 'react';
import { fetchPosts } from './api/api';
import PostList from './components/PostList'
import Cookies from 'js-cookie';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const token = Cookies.get('jwt_token');
                // Fetch posts with the valid token
                if (token) {
                    const fetchedPosts = await fetchPosts(token);
                    setPosts(fetchedPosts);
                }
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false); // Update loading state to false
            }
        };

        loadPosts();
    }, []);
    return (
        <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.description}>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <PostList posts={posts} />
                )}
            </div>
        </main>
    )
}