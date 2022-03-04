import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const API_KEY = can put api key here if needed, see headers below for how to use in api call

export const apiCatSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cat-fact.herokuapp.com",
        // prepareHeaders(headers) {
        //     headers.set("x-api-key", API_KEY); //check what dictionary key-value pair is needed
        //     headers.set("Bearer ", token); //use this for JWT tokens
        //     return headers
        // },
    }),
    endpoints(builder) {
        return {
            fetchFacts: builder.query({
                query() { //parameters inside query()
                    return `/facts`;
                },
            }),
            //additional endpoints here
        };
    },
});

export const { useFetchFactsQuery } = apiCatSlice; //append word use and add word Query/Mutations to end to build hook