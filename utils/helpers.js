/**
 * Helper utility functions
 */

/**
 * Generate a random stock status
 * @returns {Object} Stock status object with status and className
 */
export const generateStockStatus = () => {
  const statuses = [
    { status: 'In Stock', className: 'in-stock' },
    { status: 'Low Stock', className: 'low-stock' },
    { status: 'Out of Stock', className: 'out-of-stock' }
  ];
  
  return statuses[Math.floor(Math.random() * statuses.length)];
};

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  if (text.length <= length) return text;
  
  return text.substring(0, length) + '...';
};

/**
 * Format date to a readable string
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};