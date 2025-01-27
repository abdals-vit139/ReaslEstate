import http from "../http-common";

class PropertyService {
  async create(formData) {
    try {
      const response = await http.post("/property/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating property:", error);
      throw error;
    }
  }

  getAll() {
    return http.get("/property/getAll");
  }

  getByUserId(userId) {
    return http.get(`/property/getByUserId/${userId}`);
  }
}

export default new PropertyService();
