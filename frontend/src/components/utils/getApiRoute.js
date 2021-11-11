/**
 * Gets a path to the desired Moonlit API route.
 * @param {string} route The specific route to go to.
 * @returns {string} A route from the Moonlit API.
 */
const getApiRoute = (route = '') => process.env.REACT_APP_API_URL + route;

export default getApiRoute;
