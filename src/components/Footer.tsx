import android from "../assets/vi_badge_web_generic.png";
import ios from "../assets/vn-badge-ios.png";
import huawei from "../assets/app-gallery-huawei.png";
import logo_ShopeefoodVN from "../assets/Logo-ShopeefoodVN.png";

export default function Footer() {
  return (
    <div className="flex flex-row bg-pink-50 pt-[10%]">
      <div className="flex flex-col ml-[5%]  w-[20%]">
        <label className="font-bold text-[20px]" >Công ty</label>
        <a className="text-blue-400">Giới thiệu</a>
        <a className="text-blue-400">Trung tâm Trợ giúp</a>

        <a className="text-blue-400">Quy chế</a>

        <a className="text-blue-400">Điều khoản sử dụng</a>

        <a className="text-blue-400">Bảo mật thông tin</a>

        <a className="text-blue-400">Giải quyết khiếu nại</a>

        <a className="text-blue-400">Liên hệ</a>

        <a className="text-blue-400">Hợp tác nhân viên giao nhận</a>

        <a className="text-blue-400">Đăng ký quán</a>
        <a className="text-blue-400">ShopeeFood Uni</a>
        <a className="text-blue-400">ShopeeFood Uni</a>
      </div>
      <div className="">
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
      <div className="ml-[5%] ">
        <a>
          <img className="w-40 h-20" src={logo_ShopeefoodVN} />
        </a>
        <label className="text-gray-500">© 2025 ShopeeFood</label>
      </div>
      <div className="ml-[10%] mt-[20%]">
        <label>Địa chỉ công ty</label>
        <label>
          Công Ty Cổ Phần Foody <br /> Lầu G, Tòa nhà Jabes 1,
          <br /> số 244 đường Cống Quỳnh, phường Phạm Ngũ Lão, Quận 1, TPHCM
          <br /> Giấy CN ĐKDN số: 0311828036
          <br /> do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,
          <br /> sửa đổi lần thứ 23, ngày 10/12/2020
          <br /> Chịu trách nhiệm quản lý nội dung và vấn đề bảo vệ quyền lợi
          người tiêu dùng: Nguyễn Hồ Quảng Giang
          <br /> Điện thoại liên hệ: 028 7109687
        </label>
      </div>
    </div>
  );
}
