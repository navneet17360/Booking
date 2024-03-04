import "./featured.css";

const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
            className="featuredImage"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Jaipur</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
            className="featuredImage"
            alt=""
          />
          <div className="featuredTitles">
            <h1>New Delhi</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            className="featuredImage"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
            className="featuredImage"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Hyderabad</h1>
            <h2>123 properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
