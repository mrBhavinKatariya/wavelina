import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from './components/Layout.component';
import Header from './components/Header.component';
import Jewellery from './policy/Jewellery.Policy';
import AboutUs from './policy/About.Policy';
import ContactPage from './policy/Contact.Policy';
import PrivacyPolicyPage from './policy/Privacy.policy';
import RefundPolicyPage from './policy/Refund.Policy';
import TermsOfUse from './policy/Terms.Policy';
import ShippingPolicy from './policy/Shipping.Policy';
import JewelryWebsite from './components/Home.component';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<JewelryWebsite />} />
      <Route path="/jewellery" element={<Jewellery />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
    </Route>
  )
  )

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/jewellery" element = {<Jewellery/>} />
//       <Route path="/aboutus" element = {<AboutUs/>} />
//       <Route path="/contactus" element = {<ContactPage/>} />
//       <Route path="/privacypolicy" element = {<PrivacyPolicyPage/>} />
//       <Route path="/refund-policy" element = {<RefundPolicyPage/>} />
//       <Route path="/terms" element = {<TermsOfUse/>} />
//       <Route path="/shipping-policy" element = {<ShippingPolicy/>} />

//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
