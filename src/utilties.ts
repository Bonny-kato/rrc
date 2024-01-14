/**
 * Represents a set of query parameters.
 *
 * @typedef {Object} QueryParams
 * @property {Object.<string, string | number | boolean>} params - The query parameters.
 */
type QueryParams = { [key: string]: string | number | boolean | undefined };

/**
 * Generates query parameters from an object.
 *
 * @param {QueryParams} params - The object containing the query parameters.
 * @returns {URLSearchParams} - The generated query parameters.
 */
export const generateQueryParams = (params: QueryParams): URLSearchParams => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        if (value) {
            queryParams.append(key, value.toString());
        }
    }

    return queryParams;
};
