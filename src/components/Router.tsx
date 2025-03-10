import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import {
    MainPage,
    UsersPage,
    RegistrationPage,
    LoginPage,
    RequestsPage
} from '@/components/imports';

import { Layout } from '@/components/Layout';

import { ROUTES } from '@/utils/routes';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path={ROUTES.MAINPAGE} element = {<RequestsPage/>} />
            <Route path={ROUTES.USERS} element={<UsersPage />} />
            <Route path={ROUTES.REGISTRATION} element={<RegistrationPage/>} />
            <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        </Route>,
    )
)

export const Router = () => <RouterProvider router={router} />;
