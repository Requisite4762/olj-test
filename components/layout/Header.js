import Link from 'next/link';

/**
 * Header component for the application
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/">
          <h1>Product Inventory Dashboard</h1>
        </Link>
        <nav className="header-nav">
          <Link href="/">
            Products
          </Link>
          <Link href="/products/add">
            Add Product
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;