/**
 * API utility functions for interacting with the JSON Placeholder API
 */

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of products
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

/**
 * Add a new product
 * @param {Object} productData - Product data to add
 * @returns {Promise<Object>} Added product object
 */
export const addProduct = async (productData) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throw new Error('Failed to add product');
    return await response.json();
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

/**
 * Map category ID to category name
 * @param {number} categoryId - Category ID
 * @returns {string} Category name
 */
export const getCategoryName = (categoryId) => {
  const categories = {
    1: 'Electronics',
    2: 'Clothing',
    3: 'Home & Kitchen',
    4: 'Books',
    5: 'Toys',
    6: 'Sports',
    7: 'Beauty',
    8: 'Health',
    9: 'Automotive',
    10: 'Grocery',
  };
  
  return categories[categoryId] || 'Other';
};