import React from "react";
import dayjs from "dayjs";

function Footer() {
  const currentYear = dayjs().year();

  return (
    <footer className="relative left-0 right-0 w-full py-8 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <div className="mb-4 text-2xl font-bold">SOOLGAME</div>
        <div className="text-sm mb-2">
          대표 : 최태호 | 주소: 경기도 성남시 중원구
        </div>
        <div className="text-sm mb-2">
          사업자번호 : 345-08-03022 | 문의: bonjin.app@gmail.com
        </div>
        <div className="text-sm">
          Copyright {currentYear} Soolgame Co.,Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
