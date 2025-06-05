import android from "../assets/vi_badge_web_generic.png";
import ios from "../assets/vn-badge-ios.png";
import huawei from "../assets/app-gallery-huawei.png";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   console.log("Login button clicked");
  //   navigate("/login");
  // };
  return (
    <div className="">
      <Header />
      <div className="w-full h-[800px] bg-red-50 flex items-center justify-center">
        <div className="bg-white h-[50%] w-[50%] flex items-center justify-center flex-col">
          <label>Đăng nhập</label>
          <button className="bg-[#329900] text-white w-[50%]">
            Số điện thoại
          </button>
          <button className="bg-[#ff5252] text-white w-[50%] mt-[10px]">
            Google
          </button>
          <label>Hoặc đăng nhập bằng tài khoản của bạn</label>
          <div className="w-[50%] mt-[10px]">
            <Input
              className=""
              type="text"
              placeholder="Tên đăng nhập hoặc Email"
            />
            <Input className="" type="password" placeholder="Mật khẩu" />
          </div>
          <div className="flex flex-row space-between ">
            <input type="checkbox" />
            <label className="ml-2">Lưu thông tin đăng nhập</label>
            <label className="ml-2">Quên mật khẩu?</label>
          </div>
          <button className="bg-[#0288d1] text-white w-[50%] mt-[10px]">
            Đăng nhập
          </button>
          <label className="mt-[30px]">
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{" "}
            <a className="cursor-pointer underline">
              Chính sách quy định của Foody
            </a>
          </label>
        </div>
      </div>
      <Footer />
    </div>
  );
}
