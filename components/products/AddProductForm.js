import { useState } from 'react';
import { useRouter } from 'next/router';
import { addProduct } from '../../utils/api';

/**
 * AddProductForm component for adding a new product
 * @returns {JSX.Element} AddProductForm component
 */
const AddProductForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Validate form data
   * @returns {boolean} Whether the form is valid
   */
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Product name is required';
    if (!formData.body.trim()) newErrors.body = 'Product description is required';
    if (!formData.userId) newErrors.userId = 'Category is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form input changes
   * @param {Event} e - Form event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Form event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    try {
      await addProduct(formData);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({ title: '', body: '', userId: '' });
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setErrors({ submit: 'Failed to add product. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitSuccess ? (
        <div className="success-message">
          Product added successfully! Redirecting to product list...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label htmlFor="title">Product Name *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              disabled={submitting}
            />
            {errors.title && <p className="error">{errors.title}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="userId">Category *</label>
            <select
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              disabled={submitting}
            >
              <option value="">Select a category</option>
              <option value="1">Electronics</option>
              <option value="2">Clothing</option>
              <option value="3">Home & Kitchen</option>
              <option value="4">Books</option>
              <option value="5">Toys</option>
              <option value="6">Sports</option>
              <option value="7">Beauty</option>
              <option value="8">Health</option>
              <option value="9">Automotive</option>
              <option value="10">Grocery</option>
            </select>
            {errors.userId && <p className="error">{errors.userId}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="body">Product Description *</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows="5"
              disabled={submitting}
            ></textarea>
            {errors.body && <p className="error">{errors.body}</p>}
          </div>
          
          {errors.submit && <p className="error">{errors.submit}</p>}
          
          <button 
            type="submit" 
            disabled={submitting}
            className="submit-button"
          >
            {submitting ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      )}
    </>
  );
};

export default AddProductForm;