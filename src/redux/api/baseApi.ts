/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'sonner';
import { setUser } from '../features/auth/authSlice';
import { RootState } from './../features/store';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: "include",  //কুকিজ (cookies), অথরাইজেশন হেডার (authorization headers), এবং অন্যান্য ক্রেডেনশিয়াল তথ্য ব্রাউজারের সাথে সার্ভারে পাঠাবে। / credentials: "include" সেট করলে, এটি ব্রাউজারের cookies বা session সংরক্ষিত অথেন্টিকেশন তথ্য সার্ভারে পাঠানোর অনুমতি দেয়।
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set('authorization', `${token}`)
        }
        return headers;
    }
});
console.log("baseQuery", baseQuery)

const baseQueryWithRefreshToken = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);


    //Chack User
    if (result?.error?.status == 404) {
        if (result.error.data && typeof result.error.data === 'object' && 'message' in result.error.data) {
            toast.error((result.error.data as { message: string }).message);
        }
    }
    //

    //Regenarate Access token send Backend and Set Redux 

    if (result.error?.status == 401) {
        // Send Refresh
        console.log('Sending Refresh token');

        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: "POST",
            credentials: 'include'//frontend thkea cooki patassa sakan theka backend ata access kora refreash token nia ta regenarate kora dissa...
        });
        const data = await res.json();

        console.log("basi :", data)
        //accessToken dath or alive

        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            console.log("base", user)
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken,
                })
            );
            result = await baseQuery(args, api, extraOptions)
        }

        //accessToken dath or alive end this conditions 
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
});
