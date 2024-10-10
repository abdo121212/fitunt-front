import "./App.css";
import { Home } from "./Component/Home";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Layout } from "./Component/Layout";
import { Notfound } from "./Component/Notfound";
import { Register } from "./Component/Register";
import { Login } from "./Component/Login";
import { OTPCode } from "./Component/OTPCode";
import { AuthProivder } from "./Context/Auth";
import { UpdateWieght } from "./Component/UpdateWieght";
import { NextInof } from "./Component/NextInof";
import { Details } from "./Component/Details";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProivder } from "./Context/User";
import { Articles } from "./Component/Articles";
import { Profile } from "./Component/Profile";
import { ArticlesProider } from "./Context/Articles";
import { Deit } from "./Component/Deit";
import { Categorytitle } from "./Component/Categorytitle";
import { CaluclateCalories } from "./Component/CaluclateCalories";
import { ChangePass } from "./Component/changePass";
import { EditProfile } from "./Component/EditProfile";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "/articles", element: <Articles /> },
      { path: "", element: <Login /> },
      { path: "otpcode", element: <OTPCode /> },
      { path: "UpdateWieght", element: <UpdateWieght /> },
      { path: "nextInfo", element: <NextInof /> },
      { path: "diet", element: <Deit /> },
      { path: "categorytitle", element: <Categorytitle /> },
      { path: "calulatecalories", element: <CaluclateCalories /> },
      { path: "details/:id", element: <Details /> },
      { path: "/changePass/:email", element: <ChangePass /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "/profile", element: <Profile /> },

      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  let clientQuery = new QueryClient();

  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <AuthProivder>
          <UserProivder>
            <ArticlesProider>
              <RouterProvider router={router} />
            </ArticlesProider>
          </UserProivder>
        </AuthProivder>
      </QueryClientProvider>
    </>
  );
}

export default App;
