import React, { Suspense, lazy,  } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { SidebarProvider } from "./context/SidebarContext";
import AIChat from "./components/AIChat";

// Import global components
import Header from "./components/Layout/Header";
import FooterPage from "./pages/FooterPage";

// Import the CSS file for styling
import "./App.css"; // Make sure this CSS file is correctly imported

import AboveHeaderPage from "./pages/AboveHeaderPage";

// Lazy-load other components
const MarkAttendancePage = lazy(() =>
  import("../src/pages/MarkAttendancePage")
);




const SidebarPage = lazy(() => import("../src/pages/SidebarPage"));
const LoginPage = lazy(() => import("../src/pages/LoginPage"));
const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
const CheckOutPage = lazy(() => import("../src/pages/CheckOutPage"));
const Banner = lazy(() => import("../src/pages/BannerPage"));
const Body1 = lazy(() => import("../src/pages/Body1Page"));
const Body2 = lazy(() => import("../src/pages/Body2Page"));
const Body3 = lazy(() => import("../src/pages/Body3Page"));
const Body4 = lazy(() => import("../src/pages/Body4Page"));
const Body5 = lazy(() => import("../src/pages/Body5Page"));
const Body6 = lazy(() => import("./pages/Body6Page"));
const Body7 = lazy(() => import("./pages/Body7page"));

const AttendanceTrendsPage = lazy(() =>
  import("../src/pages/AttendanceTrendsPage")
);
const CheckUserPage = lazy(() => import("../src/pages/CheckUserPage"));

const App = () => {
  // State to toggle sidebar visibility

  return (
    <UserProvider>
      <SidebarProvider>
        <Router>
          {/* Header */}
          <AboveHeaderPage />
          <Header />
            <SidebarPage />

          {/* Sidebar Toggle Button */}
         

          {/* Content Wrapper */}
          <div>
            <Routes>
              <Route
                path="/sidebar"
                element={
                  <Suspense fallback={<div>Loading Sidebar...</div>}>
                  
                  </Suspense>
                }
              />
              <Route
                path="/register"
                element={
                  <Suspense fallback={<div>Loading Register Page...</div>}>
                    <RegisterPage />
                  </Suspense>
                }
              />
              <Route
                path="/attendance-trends"
                element={
                  <Suspense
                    fallback={<div>Loading Attendance Trend Page...</div>}
                  >
                    <AttendanceTrendsPage />
                  </Suspense>
                }
              />
              <Route
                path="/check-user"
                element={
                  <Suspense fallback={<div>Loading Check User Page...</div>}>
                    <CheckUserPage />
                  </Suspense>
                }
              />
              <Route
                path="/mark-attendance"
                element={
                  <Suspense fallback={<div>Loading Mark Attendance...</div>}>
                    <MarkAttendancePage />
                  </Suspense>
                }
              />

              <Route
                path="/login"
                element={
                  <Suspense fallback={<div>Loading Login Page...</div>}>
                    <LoginPage />
                  </Suspense>
                }
              />
              <Route
                path="/checkout"
                element={
                  <Suspense fallback={<div>Loading Checkout...</div>}>
                    <CheckOutPage />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <div>
                      <Banner />
                      <div className="bodiesWrapper">
                        <Body1 />
                        <Body2 />
                        <Body3 />
                        <Body4 />
                        <Body5 />
                        <Body6 />
                        <Body7 />
                       
                      </div>
                    </div>
                  </Suspense>
                }
              />

              <Route
                path="/chat"
                element={
                  <Suspense fallback={<div>Loading AI Chat...</div>}>
                    <AIChat />
                  </Suspense>
                }
              />

            </Routes>
          </div>

          {/* Footer */}
          <FooterPage />
          <AIChat />
        </Router>
      </SidebarProvider>
    </UserProvider>
  );
};

export default App;
// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";
// import { SidebarProvider } from "./context/SidebarContext";

// // Import global components
// import Header from "./components/Layout/Header";
// import FooterPage from "./pages/FooterPage";

// // Import the CSS file for styling
// import "./App.css"; // Make sure this CSS file is correctly imported
// import SidebarPage from "./pages/SidebarPage";
// import AboveHeaderPage from "./pages/AboveHeaderPage";

// // Lazy-load other components
// const MarkAttendancePage = lazy(() =>
//   import("../src/pages/MarkAttendancePage")
// );
// const LoginPage = lazy(() => import("../src/pages/LoginPage"));
// const RegisterPage = lazy(() => import("../src/pages/RegisterPage"));
// const CheckOutPage = lazy(() => import("../src/pages/CheckOutPage"));
// const Banner = lazy(() => import("../src/pages/BannerPage"));
// const Body1 = lazy(() => import("../src/pages/Body1Page"));
// const Body2 = lazy(() => import("../src/pages/Body2Page"));
// const Body3 = lazy(() => import("../src/pages/Body3Page"));
// const Body4 = lazy(() => import("../src/pages/Body4Page"));
// const Body5 = lazy(() => import("../src/pages/Body5Page"));
// const Body6 = lazy(() => import("./pages/Body6Page"));
// const Body7 = lazy(() => import("./pages/Body7page"));

// const AttendanceTrendsPage = lazy(() =>
//   import("../src/pages/AttendanceTrendsPage")
// );
// const CheckUserPage = lazy(() => import("../src/pages/CheckUserPage"));

// const App = () => {
//   return (
//     <UserProvider>
//       <SidebarProvider>
//         <Router>
//           {/* Header */}
//           <AboveHeaderPage />
//           <Header />

//           {/* Content Wrapper */}
//           <div>
//             <Routes>
//               <Route
//                 path="/sidebar"
//                 element={
//                   <Suspense fallback={<div>Loading Sidebar...</div>}>
//                     <SidebarPage />
//                   </Suspense>
//                 }
//               />

//               <Route
//                 path="/register"
//                 element={
//                   <Suspense fallback={<div>Loading Register Page...</div>}>
//                     <RegisterPage />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/attendance-trends"
//                 element={
//                   <Suspense
//                     fallback={<div>Loading Attendance Trend Page...</div>}
//                   >
//                     <AttendanceTrendsPage />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/check-user"
//                 element={
//                   <Suspense fallback={<div>Loading Check User Page...</div>}>
//                     <CheckUserPage />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/mark-attendance"
//                 element={
//                   <Suspense fallback={<div>Loading Mark Attendance...</div>}>
//                     <MarkAttendancePage />
//                   </Suspense>
//                 }
//               />

//               <Route
//                 path="/login"
//                 element={
//                   <Suspense fallback={<div>Loading Login Page...</div>}>
//                     <LoginPage />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="/checkout"
//                 element={
//                   <Suspense fallback={<div>Loading Checkout...</div>}>
//                     <CheckOutPage />
//                   </Suspense>
//                 }
//               />
//               <Route
//                 path="*"
//                 element={
//                   <Suspense fallback={<div>Loading...</div>}>
//                     <div>
//                       <Banner />
//                       <div className="bodiesWrapper">
//                         <Body1 />
//                         <Body2 />
//                         <Body3 />
//                         <Body4 />
//                         <Body5 />
//                         <Body6 />
//                         <Body7 />
//                       </div>
//                     </div>
//                   </Suspense>
//                 }
//               />
//             </Routes>
//           </div>

//           {/* Footer */}
//           <FooterPage />
//         </Router>
//       </SidebarProvider>
//     </UserProvider>
//   );
// };

// export default App;
