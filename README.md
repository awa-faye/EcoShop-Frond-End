
# My Project

**Welcome to My Project!**

# *EcoShop-Front-End*

This project was generated with [Angular CLI](https://cli.angular.io/) version 17.1.0.
# Development server
Run npm start  for a dev server. Navigate to (http://localhost:3000/). The application will automatically reload if you change any of the source files.

---
## API Documentation

This project uses a JSON API to fetch product data. Below is an overview of the API and its endpoints.

### Version déployée
[Live Demo](https://my-eco-shop.netlify.app/)

### Endpoints
#### Get All Products
- **Endpoint:** `/products`
- **Method:** `GET`
- **Description:** Retrieves a list of all products.

#### Get Product by ID
- **Endpoint:** `/products/{id}`
- **Method:** `GET`
- **Description:** Retrieves details for a specific product by its ID.

### Example Response
```json
{
    "id": 1,
    "name": "Organic Soap",
    "image": "/images/Care.png",
    "rating": 5,
    "price": 1500,
    "description": "A gentle organic soap made from natural ingredients."
  }








