import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Y3Vd2xMfolQ1lrUVa_c-do9Te1vKRymLLWB0imj3k2SdKo0YL7EaTIL0jTgJlLmfCM0KuXxDFx7iwSD1-XVfpaSXfaWENKvUbnEehmoyKO2qsk9HtT8CZf8vxSL5XnYx",
  },
});
