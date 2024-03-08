import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miastro</span>
        <span className="fpCity">Old Town,Poland,Krakow</span>
        <span className="fpPrice">Starting from $120 </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Centro,Spain,Madrid</span>
        <span className="fpPrice">Starting from $120 </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Leman Locke</span>
        <span className="fpCity">Tower Hamlets,London</span>
        <span className="fpPrice">Starting from $120 </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95656075.webp?k=d1f3628401b0aeab5c4e30286128f9327d6d913488a7715a61fac38776d13b44&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Flora Chiado Apartments</span>
        <span className="fpCity">Saint Maria Maior,Portugal,Lisboa</span>
        <span className="fpPrice">Starting from $120 </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
