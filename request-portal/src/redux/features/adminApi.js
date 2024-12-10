import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';

const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/oouweb`,
        headers: {
            'Content-Type': 'application/json',
        },
    }),
    tagTypes: ['Admin'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `/staffs`,
            providesTags: ['Admin'],
        }),
        createUser: builder.mutation({
            query: (addUser) => ({
                url: '/staffs',
                method: 'POST',
                body: addUser,
            }),
            // invalidatesTags: ['Admin'],
        }),

        logUserIn: builder.mutation({
            query: (loginUser) => ({
                url: '/staffs/login',
                method: 'POST',
                body: loginUser,
        }),
            invalidatesTags: ['Admin'],
        }),

        createCampus: builder.mutation({
            query: (addCampus) => ({
                url: 'admin/campuses',
                method: 'POST',
                body: addCampus,
            }),
            invalidatesTags: ['Admin'],
        }),

        fetchCampuses: builder.query({
            query: () => '/admin/faculties',
            providesTags: ['Admin'],
        }),

        createFaculty: builder.mutation({
            query: (addFaculty) => ({
                url: '/admin/faculties',
                method: 'POST',
                body: addFaculty
            }),
            invalidatesTags: ['Admin'],
        }),

        fetchFaculties: builder.query({
            query: () => '/admin/faculties',
            providesTags: ['Admin'],
        })
      
    })
})

export const { 
    useCreateUserMutation, 
    useLogUserInMutation, 
    useCreateCampusMutation, 
    useCreateFacultyMutation 
} = adminApi;

export default adminApi;