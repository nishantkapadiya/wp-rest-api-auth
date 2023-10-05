import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { generateAndValidateToken } from './utils/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const handleLogin = async () => {
		try {
		  const username = 'vra';
		  const password = 'this.admin';
	
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
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<div className={styles.description}>
				<h2>Home</h2>
				<button onClick={handleLogin}>Login</button>
			</div>
		</main>
	)
}
