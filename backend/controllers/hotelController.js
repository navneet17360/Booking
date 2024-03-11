import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } //{new:true} is used to return the updated document in postman
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted successfully");
  } catch (err) {
    next(err);
  }
};
export const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id); //(req.params.id)
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
    //next(err);
  }
};
export const getAllHotels = async (req, res, next) => {
  try {
    const { limit, featured, min, max } = req.query;
    const parsedLimit = parseInt(limit);
    const parsedMin = parseInt(min);
    const parsedMax = parseInt(max);
    const isFeatured = featured === "true" ? true : false;
    const query = {
      featured: isFeatured,
      cheapestPrice: { $gte: parsedMin || 1, $lte: parsedMax || 999 },
    };
    const hotels = await Hotel.find(query).limit(parsedLimit);

    return res.status(200).json(hotels);

    res.status(200).json(hotels);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city }); //mongoDB function
      })
    );

    res.status(200).json(list);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartments" });
    const resortCount = await Hotel.countDocuments({ type: "resorts" });
    const villaCount = await Hotel.countDocuments({ type: "villas" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};
