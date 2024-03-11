import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Skeleton from "react-loading-skeleton";
const images = [
  "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=",
  "https://cf.bstatic.com/xdata/images/hotel/square600/95656075.webp?k=d1f3628401b0aeab5c4e30286128f9327d6d913488a7715a61fac38776d13b44&o=",
];
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        <div>
          <Skeleton height={100} width={300} />
          <Skeleton count={5} />
        </div>
      ) : (
        <>
          {data.map((item, index) => (
            <div className="fpItem" key={item._id}>
              <img
                src={index < images.length ? images[index] : ""}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
