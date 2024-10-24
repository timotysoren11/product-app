
import './Product.css';

const Product = ({ onClose }) => {

  return (
    <div className="popup-overlay">
      <div className="popup-container big-box">
        <div className="popup-content">
          <h2>Add New Product</h2>
          <div className="popup-buttons">
            <button onClick={onClose}>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
