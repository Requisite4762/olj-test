import Head from 'next/head';
import Header from './Header';

/**
 * Layout component that wraps all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @returns {JSX.Element} Layout component
 */
const Layout = ({ children, title = 'Product Inventory Dashboard', description = 'Manage your product inventory' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;