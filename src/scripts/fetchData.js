/**
 * Fetches data from the specified Strapi API endpoint.
 * 
 * @async
 * @param {string} endpoint The API endpoint from which to fetch data.
 * @returns {Promise<any>} The data fetched from the API.
 * @throws {Error} Thrown if an error occurs during the fetching process.
 */
export async function fetchData(endpoint) {
    /**
     * The base URL of the API.
     * @type {string}
     */
    const apiUrl = `https://strapi-8dip.onrender.com/api/${endpoint}?populate=*`;

    try {
        /**
         * The response from the API.
         * @type {Response}
         */
        const response = await fetch(apiUrl);

        /**
         * The JSON data extracted from the API response.
         * @type {Object}
         */
        const { data }  = await response.json();

        return data;
    } catch (error) {
        throw new Error(`An error occurred while fetching data: ${error.message}`);
    };
};