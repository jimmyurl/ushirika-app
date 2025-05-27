// src/components/Products.jsx
import { useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      category: 'coffee',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      description: 'Freshly roasted arabica beans with rich flavor profile'
    },
    {
      id: 2,
      name: 'Organic Tea Collection',
      category: 'tea',
      price: '$18.50',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
      description: 'Hand-picked organic tea leaves from premium gardens'
    },
    {
      id: 3,
      name: 'Artisan Pastries',
      category: 'pastries',
      price: '$12.00',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      description: 'Fresh baked pastries made with finest ingredients'
    },
    {
      id: 4,
      name: 'Specialty Blend',
      category: 'coffee',
      price: '$28.99',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      description: 'Unique blend of premium coffee varieties'
    },
    {
      id: 5,
      name: 'Green Tea Premium',
      category: 'tea',
      price: '$22.00',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
      description: 'Premium green tea with antioxidant benefits'
    },
    {
      id: 6,
      name: 'Fresh Croissants',
      category: 'pastries',
      price: '$8.50',
      image: 'https://images.unsplash.com/photo-1555507036-ab794f27798c?w=400&h=300&fit=crop',
      description: 'Buttery, flaky croissants baked fresh daily'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'tea', name: 'Tea' },
    { id: 'pastries', name: 'Pastries' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Our Products</h6>
          <h1 className="mb-5">Fresh & Quality Products</h1>
        </div>
        
        {/* Category Filter */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex justify-content-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`btn mx-2 mb-2 ${
                    activeCategory === category.id 
                      ? 'btn-primary' 
                      : 'btn-outline-primary'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="product-item bg-light rounded overflow-hidden h-100">
                <div className="product-img position-relative overflow-hidden">
                  <img 
                    className="img-fluid w-100" 
                    src={product.image} 
                    alt={product.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="product-overlay">
                    <button className="btn btn-primary btn-square">
                      <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-primary btn-square">
                      <i className="fa fa-heart"></i>
                    </button>
                    <button className="btn btn-primary btn-square">
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="mb-3">{product.name}</h5>
                  <p className="text-muted">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-primary mb-0">{product.price}</h4>
                    <button className="btn btn-primary btn-sm">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;