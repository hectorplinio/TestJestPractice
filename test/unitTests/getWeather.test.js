// create a programm that fetch a API and return dataObject

const { fetchWeather } = require("../../weather/getWeather");

describe("Weather fetch", () => {
  test("Pass and city of Villena and return server code 200", async () => {
    const response = await fetchWeather("villena");
    expect(response.status).toBe(200);
  });
  test("Pass and city of Villenaaaaa and return server code 404", async () => {
    const response = await fetchWeather("villenaaaaaa");
    expect(response.status).toBe(404);
  });
  test("Pass empty city and return server code 400", async () => {
    const response = await fetchWeather();
    expect(response.status).toBe(400);
  });
});
