import { useState } from 'react';
import '../../components/product/Product.css';

const Product = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // Handle opening the pop-up
  const handleAddCategoryClick = () => {
    setShowPopup(true);
  };

  // Handle closing the pop-up
  const handleCancelClick = () => {
    setShowPopup(false);
    setNewCategory(""); // Reset the input field
  };

  // Handle saving the new category
  const handleSaveClick = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory(""); // Clear input
    }
    setShowPopup(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
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
            <button>Add Product</button>
          </div>
        </div>
      </div>

      {/* Render the new category divs */}
      <div className="category">
        {categories.map((category, index) => (
            <div key={index} className="small-container">
                <h1>{category}</h1>
            <div className="small-container-content">
            </div>
            </div>
        ))}
      </div>

      {/* Render the pop-up when showPopup is true */}
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
    </div>
  );
};

export default Product;
