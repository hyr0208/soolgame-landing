import React from "react";
import dayjs from "dayjs";

function MainPage() {
  const currentYear = dayjs().year();

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Pretendard']">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center mb-8">
          <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tight">
            SOOLGAME
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light">언제 어디서나</p>
          <p className="text-xl md:text-2xl mb-8 font-light">
            모두가 즐길 수 있는 멀티 배틀게임
          </p>
        </div>
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 animate-bounce"
          aria-label="Scroll down"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              10,000,000+
            </div>
            <div className="text-lg text-gray-400">게임 누적 다운로드 수</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">#1</div>
            <div className="text-lg text-gray-400">무료게임 인기순위</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">219건</div>
            <div className="text-lg text-gray-400">2022년도 기업행사 활용</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            32가지로 즐기는 멀티배틀게임
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            소울게임은 여러명이 언제 어디서든 모여서 즐길 수 있는 멀티플레이어
            배틀게임입니다. 친구들과 가족들과 동료들과 재미있게 대결을 해보세요!
            아주 단순한 모션으로 최상의 재미를 드립니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">100명</div>
              <div className="text-xl font-semibold mb-2">동시 접속</div>
              <div className="text-gray-400">
                100명까지 동시접속 가능! 친구, 가족들 다같이 모여 게임을
                즐겨보세요.
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">32가지</div>
              <div className="text-xl font-semibold mb-2">미니게임</div>
              <div className="text-gray-400">
                복불복 게임부터 액티비티게임까지 다양한 미니게임이 무려 32가지나
                준비되어 있어요!
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">5초</div>
              <div className="text-xl font-semibold mb-2">손쉬운 게임시작</div>
              <div className="text-gray-400">
                5초안에 손쉬운 방만들기! QR코드 스캔으로 다같이 빠르게 게임시작
                가능!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            한판에 10초면 OK!
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            32가지의 다양한 미니게임
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-2xl font-bold"
              >
                게임 {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            SOOLGAME, 지금 바로 다운받아 즐겨보세요!
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-semibold transition-colors"
            >
              App Store
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl font-semibold transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <div className="mb-4 text-2xl font-bold">SOOLGAME</div>
          <div className="text-sm mb-4">
            대표 : 최태호 | 주소: 경기도 성남시 중원구
          </div>
          <div className="text-sm mb-4">
            사업자번호 : 345-08-03022 | 문의: bonjin.app@gmail.com
          </div>
          <div className="text-sm">
            Copyright {currentYear} Soolgame Co.,Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
