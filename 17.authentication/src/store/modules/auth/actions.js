export default {
  async login(context, payload) {
    //login link :https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    //AIzaSyAkY_w5l50xT8QqSo72NN8tHI7slr8Uaag
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkY_w5l50xT8QqSo72NN8tHI7slr8Uaag";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to authentication."
      );
      throw error;
    }
    responseData.then((data) => {
      context.commit("setUser", {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: data.tokenExpiration,
      });
    });
  },
  async signup(context, payload) {
    //signup link :https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    //AIzaSyAkY_w5l50xT8QqSo72NN8tHI7slr8Uaag
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkY_w5l50xT8QqSo72NN8tHI7slr8Uaag";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        responseData.message || "Failed to authentication."
      );
      throw error;
    }

    responseData.then((data) => {
      context.commit("setUser", {
        token: data.idToken,
        userId: data.localId,
        tokenExpiration: data.tokenExpiration,
      });
    });
  },
  async logout(context) {
    if (context.getters.isLoggedIn) {
      await context.commit("clearStorage");
    }
  },
  
};
