import Header from "@/components/Header";
import Footer from "@/components/Footer";
import main_banner from "../assets/main-banner.jpg";
import preservation from "../assets/Box-food-preservation-footer.png";
import phone_reg_merchant from "../assets/banner-phone-reg-merchant.png";
import deliverynow from "../assets/bg-deliverynow-dat-mon-truc-tuyen-giao-hang-tan-noi.png";
import available_app_store from "../assets/available_app_store.png";
import get_it_on_google_play from "../assets/get-it-on-google-play.png";
import { useNavigate } from "react-router-dom";

export default function Main() {
  //   const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="relative w-full h-[1000px]">
        <div className="absolute top-0">
          <img src={main_banner} className="w-full h-[1000px]"></img>
          <div className="absolute top-[15%] left-[10%] flex flex-col">
            <label className="text-white text-[50px] font-bold">
              Đặt Đồ ăn, giao hàng từ 20'...
            </label>
            <label className="  text-white text-[20px]">
              có 55115 địa điểm ở Hà Nội từ 00:00 - 23:59
            </label>
            <input
              className="w-[500px] h-[50px]  pl-5 mt-5 bg-white rounded-[3px]  mt-[15px]"
              placeholder="Tìm địa điểm, món ăn, địa chỉ..."
            />
            <div className="grid grid-cols-4 gap-4 mt-[30px]">
              <div className="text-white border-white border-1 flex justify-center items-center w-fit">
                All
              </div>

              <div className="text-white">Đồ ăn</div>
              <div className="text-white">Đồ uống</div>
              <div className="text-white">Đồ chay</div>
              <div className="text-white">Bánh kem</div>
              <div className="text-white">Tráng miệng</div>
              <div className="text-white">Pizza/Burger</div>
              <div className="text-white">Món lẩu</div>
              <div className="text-white">Sushi</div>
              <div className="text-white">Mì phở</div>
              <div className="text-white">Cơm hộp</div>
            </div>
            <label className="text-white mt-10 text-[22px]">
              Sử dụng App ShopeeFood để có nhiều giảm giá <br /> và trải nghiệm
              tốt hơn
            </label>
            <div className="flex flex-row ">
              <a href="https://shopeefood.vn/">
                <img className="w-[200px] h-[90px]" src={available_app_store} />
              </a>
              <a href="https://shopeefood.vn/" className="mt-[13px]">
                <img
                  className="w-[200px] h-[60px]"
                  src={get_it_on_google_play}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-pink-50">
        <div className="bg-white h-fit w-[80%] flex flex-col mt-[100px] pl-[7%] pt-[20px]">
          <label className="text-[25px] font-bold ">
            Đơn hàng của bạn sẽ được bảo quản như thế nào?
          </label>
          <label>
            ShopeeFood sẽ bảo quản đơn của bạn bằng túi & thùng để chống nắng
            mưa, giữ nhiệt... trên đường đi một cách tốt nhất.
          </label>
          <img className="w-[800px] h-[200px]" src={preservation} />
        </div>
        <div className="bg-white h-fit w-[80%] flex flex-row mt-[100px]  pl-[7%] pt-[20px]">
          <div className="flex flex-col">
            <label className="font-bold text-[25px]">
              Ứng dụng Shopee Partner
            </label>
            <label>
              - Ứng dụng Shopee Partner là ứng dụng quản lý đơn hàng cho các nhà
              hàng đối tác của dịch vụ <br />
              đặt món tận nơi
            </label>
            <label>
              {" "}
              - ShopeeFood.vn luôn sẵn sàng hợp tác với các nhà hàng, quán ăn,
              cafe... để mở rộng kinh doanh cũng
              <br /> như gia tăng khách hàng. Hãy kết nối vào hệ thống đặt và
              giao hàng để giảm bớt chi phí quản lý, vận <br />
              hành, marketing, công nghệ... <br />
              Đăng ký tham gia: tại đây
            </label>
          </div>

          <img className="w-[294px] h-[315px]" src={phone_reg_merchant} />
        </div>
        <div className="bg-white h-fit w-[80%] flex flex-row pl-[7%] pt-[20px] mt-[100px]">
          <div className="flex flex-col">
            {" "}
            <label className="font-bold text-[25px]">
              ShopeeFood.vn Hợp tác nhân viên giao nhận - ShopeeFood Driver
            </label>
            <label>Giúp bạn tăng thu nhập trong thời gian rảnh rỗi</label>
            <label>
              ShopeeFood tìm kiếm hợp tác với các cá nhân để thực hiện việc giao
              hàng, chúng tôi sẽ cung cấp ứng dụng (app), 1 số dụng cụ cần thiết
              để bạn có thể tiếp nhận & giao hàng, kiếm thêm thu nhập Đăng ký
              tham gia tại đây hoặc gửi Email qua
              tuyendung@support.shopeefood.vn - hoặc gọi qua số điện thoại (028)
              7109 9179.
            </label>
          </div>

          <img className="w-[170px] h-[247px]" src={deliverynow} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
