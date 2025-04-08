# Product Inventory Dashboard

A responsive web application for managing product inventory, built with Next.js and the JSON Placeholder API.

## Features

- View all products with search functionality
- View detailed product information
- Add new products with form validation
- Responsive design for mobile and desktop

## Technologies Used

- **Next.js**: For server-side rendering and routing
- **React**: For building the user interface
- **CSS**: For styling with a mobile-first approach
- **JSON Placeholder API**: For mock data

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Requisite4762/product-inventory-dashboard.git
   cd product-inventory-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/components`: Reusable UI components
  - `/layout`: Layout components (Header, Layout)
  - `/products`: Product-related components (ProductCard, ProductList, SearchBar, AddProductForm)
  - `/ui`: UI components (not implemented in this version)
- `/pages`: Next.js pages and API routes
  - `index.js`: Product listing page
  - `products/[id].js`: Product detail page
  - `products/add.js`: Add product form
- `/styles`: Global styles
- `/utils`: Utility functions for API calls and helpers

## Approach

I took a component-based approach to build this application, focusing on:

1. **Clean Architecture**: Separating concerns between data fetching, UI components, and pages
2. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
3. **Error Handling**: Graceful handling of API errors and loading states
4. **Form Validation**: Client-side validation for the add product form

## Future Improvements

With more time, I would add:

1. State management with Redux or Context API for larger applications
2. Unit and integration tests
3. More advanced filtering options (by category, price, etc.)
4. Authentication and user management
5. Real-time updates with WebSockets
6. Pagination for the product list
7. Image upload functionality
8. Dark mode support# olj-test
