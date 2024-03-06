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
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
};