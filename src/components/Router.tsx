import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import {
    MainPage
} from '@/components/imports';

import { Layout } from '@/components/Layout';

import { ROUTES } from '@/utils/routes';
import { UsersPage } from './pages/Users/UsersPage';
import { RequestPage } from './pages/RequestsPage/RequestsPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path={ROUTES.MAINPAGE} element = {<MainPage/>} />
            <Route path={ROUTES.USERS} element={<UsersPage />} />
            <Route path={ROUTES.REQUESTS} element={<RequestPage />} />
        </Route>,
    )
)


export const Router = () => <RouterProvider router={router} />;
