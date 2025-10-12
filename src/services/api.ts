import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Commerce from '../models/Commerce'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  tagTypes: ['Commerce'],
  endpoints: (builder) => ({
    getCommerces: builder.query<Commerce[], void>({
      query: () => 'commerce',
      providesTags: ['Commerce']
    }),
    register: builder.mutation<Commerce, Omit<Commerce, 'id'>>({
      query: (body) => ({
        url: 'commerce',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Commerce']
    }),
    delete: builder.mutation<void, number>({
      query: (id) => ({
        url: `commerce/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Commerce']
    })
  })
})

export const { useGetCommercesQuery, useRegisterMutation, useDeleteMutation } =
  api
export default api
