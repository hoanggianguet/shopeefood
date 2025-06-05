import Header from "@/components/Header";
import Footer from "@/components/Footer";
import shopeefoodvn from "../assets/shopeefoodvn.png";
import vietnam from "../assets/vietnam.png";
import android from "../assets/vi_badge_web_generic.png";
import ios from "../assets/vn-badge-ios.png";
import huawei from "../assets/app-gallery-huawei.png";
import main_banner from "../assets/main-banner.jpg";
import preservation from "../assets/Box-food-preservation-footer.png";
import phone_reg_merchant from "../assets/banner-phone-reg-merchant.png";
import deliverynow from "../assets/bg-deliverynow-dat-mon-truc-tuyen-giao-hang-tan-noi.png";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div>
        <img src={main_banner} className="w-full h-[1000px]" />
      </div>
      <div className="flex flex-col items-center bg-pink-50 mb-[200px]">
        <div className="bg-white h-[200px] w-[80%] flex flex-col">
          <label>Đơn hàng của bạn sẽ được bảo quản như thế nào?</label>
          <label>
            ShopeeFood sẽ bảo quản đơn của bạn bằng túi & thùng để chống nắng
            mưa, giữ nhiệt... trên đường đi một cách tốt nhất.
          </label>
          <img className="w-[800px] h-[80px]" src={preservation} />
        </div>
        <div className="bg-white h-[200px] w-[80%] flex flex-col">
          <label>
            - Ứng dụng Shopee Partner là ứng dụng quản lý đơn hàng cho các nhà
            hàng đối tác của dịch vụ đặt món tận nơi
          </label>
          <label>
            {" "}
            - ShopeeFood.vn luôn sẵn sàng hợp tác với các nhà hàng, quán ăn,
            cafe... để mở rộng kinh doanh cũng như gia tăng khách hàng. Hãy kết
            nối vào hệ thống đặt và giao hàng để giảm bớt chi phí quản lý, vận
            hành, marketing, công nghệ... Đăng ký tham gia: tại đây
          </label>
          <img className="w-[200px] h-[330px]" src={phone_reg_merchant} />
        </div>
        <div className="bg-white h-[200px] w-[80%] flex flex-col">
          <label>
            ShopeeFood.vn Hợp tác nhân viên giao nhận - ShopeeFood Driver
          </label>
          <label>Giúp bạn tăng thu nhập trong thời gian rảnh rỗi</label>
          <label>
            ShopeeFood tìm kiếm hợp tác với các cá nhân để thực hiện việc giao
            hàng, chúng tôi sẽ cung cấp ứng dụng (app), 1 số dụng cụ cần thiết
            để bạn có thể tiếp nhận & giao hàng, kiếm thêm thu nhập Đăng ký tham
            gia tại đây hoặc gửi Email qua tuyendung@support.shopeefood.vn -
            hoặc gọi qua số điện thoại (028) 7109 9179.
          </label>
          <img className="w-[200px] h-[330px]" src={deliverynow} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
