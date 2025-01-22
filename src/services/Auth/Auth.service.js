import http from "../http-common";

class AuthService {
  login(email, password, role) {
    return http.post("/auth/login", { email, password, role });
  }
  register(username, email, password, role) {
    return http.post("/auth/signup", { username, email, password, role });
  }
}

export default new AuthService();
