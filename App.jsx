import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';

export default function App() { const [appointmentOpen, setAppointmentOpen] = useState(false); return <BrowserRouter><Navbar onAppointment={() => setAppointmentOpen(true)} /><AppRouter onAppointment={() => setAppointmentOpen(true)} /><Footer />{appointmentOpen && <AppointmentForm onClose={() => setAppointmentOpen(false)} />}</BrowserRouter>; }
