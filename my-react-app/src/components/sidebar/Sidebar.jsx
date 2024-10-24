import { useState } from 'react';
import '../../components/sidebar/Sidebar.css';
import Product from '../../components/product/Product';

const Sidebar = () => {
  const [activeView, setActiveView] = useState(''); // State to track the active view

  // Handler to update the active view based on menu item click
  const handleMenuClick = (view) => {
    setActiveView(view);
  };

  return (
    <div className="side-bar-container">
      <div className="side-bar-content">
        <div className="side-bar-img">
          <img src="" alt="Sidebar" />
        </div>
        <div className="side-bar-list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#" onClick={() => handleMenuClick('Products')}>Products</a></li>
            <li><a href="#">Catalogs</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="main-content">
        {activeView === 'Products' && <Product />} 
      </div>
    </div>
  );
};

export default Sidebar;
