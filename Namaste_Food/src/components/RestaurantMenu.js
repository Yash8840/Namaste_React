// import React from "react";

const RestaurantMenu = () => {
  return (
    <div className="rest-container-outer">
      <div className="rest-container-inner">
        <div className="path">
          <p>Home/Noida/Chinese Wok</p>
        </div>
        <div className="res-name-card">
          <h1>Chinese Wok</h1>
        </div>
        <div className="order-online-card">
          <span>Order Online</span>
          <span>Dineout</span>
        </div>
        <div className="res-detail-card">
          <div className="res-detail">
            <div className="res-detail-top">
              <h3>4.0 ⭐ Rs. 250 for two</h3>
            </div>
            <p>Chinese, Thai, Asian</p>
            <p style={{ color: "#FF5200", fontWeight: "bold" }}>
              Sector 18, Noida
            </p>
          </div>
        </div>
        <div className="deals-for-u-outer">
          <h4>DEALS FOR YOU</h4>
          <div className="deals-cards">
            <div className="deals-card">
              <div className="offer-logo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
                  alt="offer"
                />
              </div>
              <div className="offer-details">
                <h3>Flat 50%</h3>
                <p>Use WELCOME50</p>
              </div>
            </div>
            <div className="deals-card">
              <div className="offer-logo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
                  alt="offer"
                />
              </div>
              <div className="offer-details">
                <h3>Flat 50%</h3>
                <p>Use WELCOME50</p>
              </div>
            </div>
            <div className="deals-card">
              <div className="offer-logo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
                  alt="offer"
                />
              </div>
              <div className="offer-details">
                <h3>Flat 50%</h3>
                <p>Use WELCOME50</p>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-logo-card">
          <hr />
          <span>MENU</span>
          <hr />
        </div>
        <div className="search-dishes-card">
          <input className="search-rest" type="text" placeholder="Search for dishes" />
          {/* <button>Search</button> */}
        </div>
        <div className="veg-non-veg-card">
          <div className="veg">Veg</div>
          <div className="non-veg">Non-Veg</div>
          <div className="besteller-icon">Besteller</div>
          <div className="guilt-icon">Guiltfree</div>
        </div>

        <div className="dish-card">
          <div className="dish-detail">
            <h3>Curd Rice Thali</h3>
            <h4>veg</h4>
            <p>Paneer Butter Masala</p>
            <p>₹ 240</p>
            <p>Paneer, Butter, Tomato, Cashew, Spices</p>
          </div>
          <div className="dish-logo">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/21/b401d640-ceee-4f4e-a8a6-97a115f1b575_7025769a-b697-4caa-9f76-00805427b661.jpg"
              alt="dish"
            />
            <div><button  className="add-btn">ADD+</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
