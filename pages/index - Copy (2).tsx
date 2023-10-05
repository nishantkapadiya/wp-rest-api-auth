import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { generateAndValidateToken } from './utils/auth';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	useEffect(() => {
		const username = 'vra';
		const password = 'this.admin';
	
		const generateAndValidate = async () => {
		  try {
			const isValid = await generateAndValidateToken(username, password);
	
			if (isValid) {
			  console.log('Token is valid');
			  // Perform authorized actions here
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
				<h2>Home</h2>
				<p>Loading...</p>
			</div>
		</main>
	)
}
