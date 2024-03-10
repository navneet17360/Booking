import useFetch from "../../hooks/useFetch";
import "./featured.css";
// import { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import { CircleLoader, ClipLoader } from "react-spinners";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=Mumbai,Delhi,Hyderabad,Chennai"
  );
  console.log(data);
  return (
    <div>
      <div className="featured">
        {loading ? (
          <div className="spinner">
            <ClipLoader
              color={"rgb(8, 144, 126)"}
              loading={loading}
              size={50}
            />
          </div>
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
                className="featuredImage"
                alt=""
              />
              <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[0]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
                className="featuredImage"
                alt=""
              />
              <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>{data[1]} Properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
                className="featuredImage"
                alt=""
              />
              <div className="featuredTitles">
                <h1>Chennai</h1>
                <h2>{data[2]} Properties</h2>
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
                <h2>{data[3]} Properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
