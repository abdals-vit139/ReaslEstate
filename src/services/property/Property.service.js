import http from "../http-common";

class PropertyService {
  create(
    selectedOption,
    propertyType,
    askingPrice,
    papersAvailable,
    sqft,
    rooms,
    availableFrom,
    rentAmount,
    deposit,
    maintenance,
    flatNo,
    building,
    street,
    area,
    city,
    state,
    pincode,
    photo,
    userId
  ) {
    const propertyData = {
      selectedOption,
      propertyType,
      askingPrice,
      papersAvailable,
      sqft,
      rooms,
      availableFrom,
      rentAmount,
      deposit,
      maintenance,
      flatNo,
      building,
      street,
      area,
      city,
      state,
      pincode,
      photo,
      userId,
    };

    return http.post("/property/create", propertyData);
  }

  getAll(propertyType) {
    // return http.get(`/property/getAll?propertyType=${propertyType}`);
    return http.get("/property/getAll");
  }

  getByUserId(userId) {
    return http.get(`/property/getByUserId/${userId}`);
  }
}

export default new PropertyService();
