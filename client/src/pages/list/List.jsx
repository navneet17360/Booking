import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import { ClipLoader } from "react-spinners";
import "./list.css";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // State for managing loading animation
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Provide default values in case location.state is null or undefined
  const defaultState = {
    destination: "",
    date: [{ startDate: new Date(), endDate: new Date() }],
    options: { adult: 1, children: 0, room: 1 },
  };

  // Destructure properties from location.state or use default values
  const {
    destination,
    date: selectedDate,
    options,
  } = location.state || defaultState;

  useEffect(() => {
    setDate([
      {
        startDate: selectedDate[0].startDate,
        endDate: selectedDate[0].endDate,
        key: "selection",
      },
    ]);
  }, [selectedDate]);
  const { data, reFetch } = useFetch(
    `/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  ); ///api/hotels?city=${destination}
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      {loading && (
        <div className="loading-container">
          <ClipLoader color={"rgb(8, 144, 126)"} loading={loading} size={80} />
        </div>
      )}
      {!loading && (
        <>
          <Navbar />
          <Header type="list" />
          <div className="listContainer">
            <div className="listWrapper">
              <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                  <label>Destination</label>
                  <input placeholder={destination} type="text" />
                </div>
                <div className="lsItem">
                  <label>Check-in Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    date[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>
                <div className="lsItem">
                  <label>Options</label>
                  <div className="lsOptions">
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Min price <small>per night</small>
                      </span>
                      <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Max price <small>per night</small>
                      </span>
                      <input type="number" className="lsOptionInput" />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="lsOptionInput"
                        placeholder={options.children}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.rooms}
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleClick}>Search</button>
              </div>
              <div className="listResult">
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {data.map((item) => (
                      <SearchItem item={item} key={item._id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
