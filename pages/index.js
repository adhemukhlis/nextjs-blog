// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'
import Link from 'next/link';
import Head from 'next/head';
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			 <Head>
				<title>Mukhlis Adhe</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className={styles.main}>
				{/* <h1 className={styles.title}>
					Welcome to {' '}
					<Link href="/post/first-post">
						<a>this page!</a>
					</Link>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>
				<Image src="/src/img/pot-20.jpg" // Route of the image file
					height={144} // Desired size with correct aspect ratio
					width={144} // Desired size with correct aspect ratio
					alt="Profile"/> */}
					<section className={`${ utilStyles.headingMd } ${ utilStyles.padding1px }`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
						<Link href={`/post/${id}`}>
						  <a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
						  <Date dateString={date} />
						</small>
					  </li>
					))}
				</ul>
			</section>
			</main> 
			
		</Layout>
	);
}

export async function getStaticProps( ) {
	const allPostsData = getSortedPostsData( );
	return {props: {
			allPostsData
		}};
}
