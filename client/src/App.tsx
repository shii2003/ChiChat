import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { RecoilRoot } from 'recoil';
import { lazy, Suspense } from "react";
import ProtectRoute from "./component/auth/ProtectRoute";
import { LayoutLoader } from "./component/layout/Loadres";
import Title from "./component/shared/Title";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./pages/Register"))

//below line of code is for testing purpose only
const user = false;

function App() {


  return (
    <RecoilRoot>
      <Router>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>
            <Route element={<ProtectRoute user={user} />}>
              <Route path='/' element={<Home />} />
              <Route path='/chat/:chatId' element={<Chat />} />
              <Route path='/groups' element={<Groups />} />
            </Route>
            <Route path='/login' element={

              <ProtectRoute user={!user} redirect="/">
                <Title title="ChitChat" description="ChitChat" />
                <Login />
              </ProtectRoute>
            } />
            <Route path='/signup' element={
              <ProtectRoute user={!user} redirect="/">
                <Title title="ChitChat" description="ChitChat" />
                <Register />
              </ProtectRoute>
            }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </RecoilRoot>
  )
}

export default App;
