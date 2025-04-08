# Fullstack Developer Technical Test: Product Inventory Dashboard

## Introduction

Hello and thank you for your interest in our freelance developer position. This technical test is designed to evaluate your fullstack development skills, particularly with React/Next.js and REST API integration.

The test simulates a real-world scenario you might encounter as a freelance client project. I've kept the scope manageable so you can complete it within 2 hours while still demonstrating your technical abilities.

## Project Overview

You will create a simple Product Inventory Dashboard that allows users to view, search, and manage product information. This mini-application will help a fictional e-commerce business owner keep track of their inventory.

## Technical Requirements

### Frontend (React or Next.js)
- Create a responsive web application with the following pages:
  - Product listing page (homepage)
  - Product detail page
  - Simple "Add Product" form

### API Integration
- Use the public JSON Placeholder API for data: https://jsonplaceholder.typicode.com
- Specifically, you'll work with the `/posts` endpoint and treat each post as if it were a product
- Map the data fields as follows:
  - `id` → Product ID
  - `title` → Product Name
  - `body` → Product Description
  - `userId` → Category ID

### Core Features
1. **Product Listing**
   - Display a list of products with basic information (title, category)
   - Include a search/filter function to find products by name
   - Implement responsive design (mobile and desktop views)

2. **Product Details**
   - Show detailed information when a product is selected
   - Include product image (you can use placeholder images like https://picsum.photos/id/[product_id]/200/200)
   - Display a mock stock status (you can generate this randomly)

3. **Add Product Form**
   - Create a simple form to add a new product
   - Include validation for required fields
   - Show success message after submission

### Technical Focus Areas
- Clean, modular code structure
- Proper state management
- Error handling for API requests
- Responsive design (mobile-first approach)
- Basic but clean UI (you may use a component library like Material UI or Bootstrap if you wish)

## Deliverables
1. **Source Code**
   - GitHub repository link with complete source code
   - README file with:
     - Setup instructions
     - Brief explanation of your approach
     - Any libraries/frameworks used and why

2. **Screenshots**
   - At least 3 screenshots showing different views/states of your application
   - Include both mobile and desktop views

3. **Video Walkthrough**
   - A short (3-5 minute) Loom video explaining:
     - Your solution approach
     - Any challenges you faced and how you solved them
     - Any features you would add with more time

IMPORTANT: Make sure to submit your Deliverables before 5 PM CET.

## Time Expectation
- This test is designed to take 2 hours
- Focus on completing the core requirements first before adding extra features

## Tips for Success
- Prioritize functionality over visual design
- Comment your code where appropriate
- Handle edge cases and errors gracefully
- Structure your code in a maintainable way

## Evaluation Criteria
Your submission will be evaluated on the following criteria (scale 1-10):

1. **Code Quality**: Organization, naming conventions, comments, best practices
2. **Structure**: Component structure, separation of concerns, reusable components
3. **Error Handling**: Handling API failures and user input errors
4. **UI Implementation**: Responsive design, usability, layout
5. **Communication**: Documentation, video explanation, approach description

I value clean, maintainable code over complex features. Focus on delivering a simple but well-structured solution rather than trying to implement too many features in the limited time.

Good luck! I look forward to seeing your solution.
