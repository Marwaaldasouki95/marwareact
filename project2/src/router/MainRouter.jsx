import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutMe from '../pages/AboutMe';
import MainLayout from '../layout/MainLayout';
import ClientService from '../components/ClientService/ClientService';
import Digitalservice from '../components/Digitalservice/Digitalservice';
import DashboardLayout from '../layout/DashboardLayout';
import Partnerlogo from '../components/Partnerlogo/Partnerlogo';
import PartnerDetail from '../components/Partnerlogo/PartnerDetail';
export const router = createBrowserRouter(

    createRoutesFromElements(

        <Route path='/' element={<MainLayout />}>
            
            <Route index element={<HomePage />} />
            <Route path='aboutme' element={<AboutMe />} />

            <Route path="dashboard" element={<DashboardLayout/>}>
                <Route index element={<div><h1>Dashboard</h1></div>}/>
                <Route path="services" element={<ClientService />} />
            </Route>

            <Route path="partner">
                <Route index element={<Partnerlogo/>}/>
                <Route path=":partnerId" element={<PartnerDetail/>}/>
            </Route>

        </Route>
    )
); 