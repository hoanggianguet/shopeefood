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

export default function Footer() {
  return (
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
  );
}
