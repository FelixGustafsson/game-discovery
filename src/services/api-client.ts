import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4473c9d3daa049cca22d22377833c607",
  },
});
