import { useState } from 'react';
import '../../components/category/Category.css';
import AddProduct from '../../components/product/Product';

const Category = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // To save products
  const [newCategory, setNewCategory] = useState('');

  // Handle opening the category pop-up
  const handleAddCategoryClick = () => {
    setShowPopup(true);
  };

  // Handle closing the category pop-up
  const handleCancelClick = () => {
    setShowPopup(false);
    setNewCategory(''); // Reset the input field
  };

  // Handle saving the new category
  const handleSaveClick = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory(''); // Clear input
    }
    setShowPopup(false);
  };

  // Handle input change for categories
  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  // Handle opening the product pop-up
  const handleAddProductClick = () => {
    setShowAddProduct(true);
  };

  // Handle saving the product
  const handleSaveProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddProduct(false); // Close the pop-up after saving
  };

  // Handle closing the product pop-up
  const handleCloseProduct = () => {
    setShowAddProduct(false);
  };

  return (
    <div className="product-container">
      <div className="product-content">
        <div className="title">
          <h1>Product</h1>
        </div>
        <div className="right-button-container">
          <div className="right-buttons">
            <button onClick={handleAddCategoryClick}>Add Category</button>
            <button onClick={handleAddProductClick}>Add Product</button>
          </div>
        </div>
      </div>

      {/* Render the new category divs */}
      <div className="category">
        {categories.map((category, index) => (
          <div key={index} className="small-container">
            <h1>{category}</h1>
            <div className="small-container-content"></div>
          </div>
        ))}
      </div>

      {/* Render the products */}
      <div className="saved-products">
        {products.map((product, index) => (
          <div key={index} className="small-container">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Render the category pop-up when showPopup is true */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <h2>Add New Category</h2>
              <input
                type="text"
                value={newCategory}
                onChange={handleInputChange}
                placeholder="Enter category name"
              />
              <div className="popup-buttons">
                <button onClick={handleCancelClick}>Cancel</button>
                <button onClick={handleSaveClick}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Render the product pop-up when showAddProduct is true */}
      {showAddProduct && <AddProduct onClose={handleCloseProduct} onSave={handleSaveProduct} />}
    </div>
  );
};

export default Category;
