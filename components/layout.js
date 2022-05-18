import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
			<div className="content">
				<Head>
					<title>Create Next App</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header />
					{children}
				<Footer />
			</div>
	)
};

export default Layout;