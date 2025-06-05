import shopeefoodvn from "../assets/shopeefoodvn.png";
import vietnam from "../assets/vietnam.png";
import android from "../assets/vi_badge_web_generic.png";
import ios from "../assets/vn-badge-ios.png";
import huawei from "../assets/app-gallery-huawei.png";
import { useNavigate } from "react-router-dom";

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

export default function Header() {
  const navigate = useNavigate();
  const handleClickMain = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="">
      <div className="flex flex-row black">
        <a onClick={handleClickMain} className="cursor-pointer">
          <img src={shopeefoodvn} />
        </a>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Hà Nội</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button variant="outline" onClick={handleLogin}>
          Đăng nhập
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img className="w-5 h-5" src={vietnam} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Tiếng Anh</DropdownMenuItem>
            <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
