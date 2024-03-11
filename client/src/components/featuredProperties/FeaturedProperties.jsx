import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Skeleton from "react-loading-skeleton";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem">
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}{" "}
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
