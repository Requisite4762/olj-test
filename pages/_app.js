import '../styles/globals.css';
import Layout from '../components/layout/Layout';

/**
 * Custom App component for Next.js
 * @param {Object} props - Component props
 * @param {React.Component} props.Component - Page component
 * @param {Object} props.pageProps - Page props
 * @returns {JSX.Element} App component
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;