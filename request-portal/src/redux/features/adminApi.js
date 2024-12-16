import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';

const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/oouweb`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.auth?.token || localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Users', 'Campuses', 'Faculties'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `/staffs`,
            providesTags: ['Users'],
        }),
        createUser: builder.mutation({
            query: (addUser) => ({
                url: '/staffs',
                method: 'POST',
                body: addUser,
            }),
            invalidatesTags: ['Users'],
        }),
        logUserIn: builder.mutation({
            query: (loginUser) => ({
                url: '/staffs/login',
                method: 'POST',
                body: loginUser,
            }),
            // Capture token from the response headers
            transformResponse: (response, meta) => {
                console.log('Response Headers:', meta?.response?.headers);
                const authToken = meta?.response?.Headers?.get('Authorization');
                if (authToken) {
                    // Save the token in localStorage
                    localStorage.setItem('authToken', authToken.split(' ')[1]); // Remove 'Bearer ' from token
                    console.log('Token:', authToken);
                } else {
                    console.log('No token found in headers');
                }

                // Return the response body
                return response;
            },
        }),
        createCampus: builder.mutation({
            query: (addCampus) => ({
                url: '/admin/campuses',
                method: 'POST',
                body: addCampus,
            }),
            invalidatesTags: ['Campuses'],
        }),
        fetchCampuses: builder.query({
            query: () => '/admin/campuses',
            providesTags: ['Campuses'],
        }),
        createFaculty: builder.mutation({
            query: (addFaculty) => ({
                url: '/admin/faculties',
                method: 'POST',
                body: addFaculty,
            }),
            invalidatesTags: ['Faculties'],
        }),
        fetchFaculties: builder.query({
            query: () => '/admin/faculties',
            providesTags: ['Faculties'],
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useCreateUserMutation,
    useLogUserInMutation,
    useCreateCampusMutation,
    useFetchCampusesQuery,
    useCreateFacultyMutation,
    useFetchFacultiesQuery,
} = adminApi;

export default adminApi;
