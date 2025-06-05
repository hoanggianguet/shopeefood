import shopeefoodvn from "../assets/shopeefoodvn.png";
import vietnam from "../assets/vietnam.png";
import android from "../assets/vi_badge_web_generic.png";
import ios from "../assets/vn-badge-ios.png";
import huawei from "../assets/app-gallery-huawei.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Login button clicked");
    navigate("/login");
  };
  return (
    <div className="">
      <Header />
      <div className="w-full h-[800px] bg-red-50 flex items-center justify-center">
        <div className="bg-white h-[50%] w-[50%] flex items-center justify-center flex-col">
          <button>Đăng nhập</button>
          <button>Số điện thoại</button>
          <button>Google</button>
          <label>Hoặc đăng nhập bằng tài khoản của bạn</label>
          <div>
            <Input type="text" placeholder="Tên đăng nhập hoặc Email" />
            <Input type="password" placeholder="Mật khẩu" />
          </div>
          <div className="flex flex-row ">
            <input type="checkbox" />
            <label className="ml-2">Lưu thông tin đăng nhập</label>
            <label className="ml-2">Quên mật khẩu?</label>
          </div>
          <label className="text-red-500">
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với Chính sách quy định
            của Foody
          </label>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <label>Công ty</label>
          <a>Giới thiệu</a>
          <a>Trung tâm Trợ giúp</a>

          <a>Quy chế</a>

          <a>Điều khoản sử dụng</a>

          <a>Bảo mật thông tin</a>

          <a>Giải quyết khiếu nại</a>

          <a>Liên hệ</a>

          <a>Hợp tác nhân viên giao nhận</a>

          <a>Đăng ký quán</a>
          <a>ShopeeFood Uni</a>
          <a>ShopeeFood Uni</a>
        </div>
        <div>
          <label>Ứng dụng ShopeeFood</label>
          <a>
            <img className="w-40 h-20" src={android} />
          </a>
          <a>
            <img className="w-40 h-20" src={ios} />
          </a>
          <a>
            <img className="w-40 h-20" src={huawei} />
          </a>
        </div>
      </div>
    </div>
  );
}
