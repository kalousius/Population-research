import axios from 'axios';
import cheerio from 'cheerio';

const get_population_data = async (district_name) => {
  const api_url = "https://en.wikipedia.org/wiki/Districts_of_Uganda";

  try {
    const response = await axios.get(api_url);
    if (response.status === 200) {
      const htmlData = response.data;
      const $ = cheerio.load(htmlData);
      const districtData = $('th:contains("' + district_name + '")').next().text();

      if (districtData) {
        return districtData;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default get_population_data;
