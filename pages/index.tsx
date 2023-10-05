import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { generateAndValidateToken } from './utils/auth';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [posts, setPosts] = useState([]);
	const token = Cookies.get('jwt_token');
	useEffect(() => {
		const username = 'vra';
		const password = 'this.admin';

		const generateAndValidate = async () => {
			try {
				const isValid = await generateAndValidateToken(username, password);
				if (isValid) {
					console.log('Token is valid');
				} else {
					console.log('Token is not valid');
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		generateAndValidate();
	}, []);
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<div className={styles.description}>
				<Link href="/blog">Blog</Link>
				{/* <PostList posts={posts} /> */}
			</div>
		</main>
	)
}
