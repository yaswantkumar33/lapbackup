import { useState } from "react";
import Background from "../../assets/login2.png";
import Victory from "../../assets/victory.svg";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs.jsx";
import { Input } from "../../components/ui/input.jsx";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { SIGN_UP_ROUTE } from "@/utils/cosnt";

const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const handleLogin = () => {
    console.log("login form submitted");
  };
  const handleSignup = async () => {
    console.log("signup form submitted");
    if (signupValidation()) {
      const Response = await apiClient.post(SIGN_UP_ROUTE, { email, password });
      console.log(Response);
    }
  };
  const signupValidation = () => {
    console.log("sign up validation is called ");
    if (!email.length) {
      toast.error("Email Is Required");
      return false;
    } else {
      if (!password.length) {
        toast.error("Password Is Required");
        return false;
      } else {
        if (!confirmpass.length) {
          toast.error("Confirm the password  Is Required ! ");
          return false;
        } else {
          if (password != confirmpass) {
            toast.error("Password And Confrim Password Didn't Match !!");
            return false;
          } else {
            return true;
          }
        }
      }
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md;w-[90vw] lg:w-[70vw] xl;w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className=" text-5xl font-bold md:text-6xl">Welcomess !</h1>
              <img src={Victory} alt="Victory Emojie" className="h-[200px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to start wityh best Chat App !
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className=" w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-4 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-cyan-400 p-3 transition-all duration-300"
                >
                  SignIn
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-4 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-300"
                >
                  SignUp
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  className=" rounded-2xl p-6"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(ev) => {
                    setemail(ev.target.value);
                  }}
                ></Input>
                <Input
                  className=" rounded-2xl p-6"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(ev) => {
                    setpassword(ev.target.value);
                  }}
                ></Input>
                <Button
                  className=" rounded-2xl p-6  bg-cyan-500"
                  onClick={(ev) => {
                    handleLogin();
                  }}
                >
                  Login
                </Button>
              </TabsContent>
              <TabsContent className=" flex flex-col gap-5 " value="signup">
                <Input
                  className=" rounded-2xl p-6"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(ev) => {
                    setemail(ev.target.value);
                  }}
                ></Input>
                <Input
                  className=" rounded-2xl p-6"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(ev) => {
                    setpassword(ev.target.value);
                  }}
                ></Input>
                <Input
                  className=" rounded-2xl p-6"
                  placeholder="Confirm Password"
                  value={confirmpass}
                  type="password"
                  onChange={(ev) => {
                    setconfirmpass(ev.target.value);
                  }}
                ></Input>
                <Button
                  className=" rounded-2xl p-6  bg-green-500"
                  onClick={(ev) => {
                    handleSignup();
                  }}
                >
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="Background image" className="h-[700px]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
