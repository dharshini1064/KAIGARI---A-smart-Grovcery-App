import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Kaigari</div>
        <div className="search-bar">
          <input type="text" placeholder="Search products.." />
          <button>&#128269;</button>
        </div>
        <div className="profile">
          <img src="profile.png" alt="User Profile" />
        </div>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Bringing Kaigari to your doorsteps!</h1>
          <p>Fresh groceries and provisions delivered to you with best prices in market.</p>
          <button className="shop-now">SHOP NOW</button>
        </div>
        <div className="hero-image">
          <img src="basket.png" alt="Grocery Basket" />
        </div>
      </section>
      
      <section className="categories">
        {[
          { img: "vegetables.png", text: "Vegetables" },
          { img: "fruits.png", text: "Fruits" },
          { img: "dairy.png", text: "Dairy & Milk" },
          { img: "meat.png", text: "Meat & Fish" },
          { img: "snacks.png", text: "Bread & Snacks" },
        ].map((category, index) => (
          <div key={index} className="category">
            <img src={category.img} alt={category.text} />
            <p>{category.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
