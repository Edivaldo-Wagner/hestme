import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Login from './login/index';
import Cadastro from './cadastro/index';
import Dashboard from './dashboard/index';
import Wallet from './wallet/index';
import Tasks from './tasks/index';
import Schedule from './schedule/index';
import Settings from './settings/index';
import Profile from './settings/profile';
import Places from './settings/places';
import Professionals from './settings/professionals';
import Category from './settings/category';
import Services from './settings/services';
import Rattings from './settings/rattings';
import Terms from './settings/terms';
import Help from './settings/help';
import Customization from './settings/customization';
import Bio from './business/bio';
import ConfirmationService from './business/confirmation-service';
import ConfirmationIdentity from './business/confirmation-identity';
import ServiceDetails from './business/service-details';
import ServiceFinalization from './business/service-finalization';
import ServiceNotification from './business/service-notification';
import ServicePayment from './business/service-payment';
import PaymentPix from './business/payment-pix';
import PaymentCreditcard from './business/payment-creditcard';
import PaymentSuccess from './business/payment-success';
import Sair from './sair/index';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
            <Route path="/settings/profile" element={<Profile />} />
            <Route path="/settings/places" element={<Places />} />
            <Route path="/settings/professionals" element={<Professionals />} />
            <Route path="/settings/category" element={<Category />} />
            <Route path="/settings/services" element={<Services />} />
            <Route path="/settings/rattings" element={<Rattings />} />
            <Route path="/settings/terms" element={<Terms />} />
            <Route path="/settings/help" element={<Help />} />
            <Route path="/settings/customization" element={<Customization />} />
        <Route path="/business/bio" element={<Bio />} />
        <Route path="/business/confirmation-service" element={<ConfirmationService />} />
        <Route path="/business/confirmation-identity" element={<ConfirmationIdentity />} />
        <Route path="/business/service-details" element={<ServiceDetails />} />
        <Route path="/business/service-finalization" element={<ServiceFinalization />} />
        <Route path="/business/service-notification" element={<ServiceNotification />} />
        <Route path="/business/service-payment" element={<ServicePayment />} />
        <Route path="/business/payment-pix" element={<PaymentPix />} /> 
        <Route path="/business/payment-creditcard" element={<PaymentCreditcard />} /> 
        <Route path="/business/payment-success" element={<PaymentSuccess />} /> 
        <Route path="/sair" element={<Sair />} />
      </Routes>
    </Router>

  
  );
}

export default App;
