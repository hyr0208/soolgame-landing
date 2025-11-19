import React from "react";
import appStoreImage from "../../assets/image/landingApp.png";
import googlePlayImage from "../../assets/image/landingGoogle.png";

function MainPage() {
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
          <p className="text-xl md:text-2xl mb-2 font-light">
            실시간 근거리 멀티 배틀 술게임 플랫폼
          </p>
          <p className="text-xl md:text-2xl mb-8 font-light">
            JUST ONLY TEN SECONDS
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
      <section id="stats" className="py-20 px-4 bg-gray-900">
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
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            오프라인 모임에서 즉시 사용하는 게임 허브
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            회식, MT, 홈파티, 행사에서 바로 즐길 수 있는 실시간 멀티 배틀 게임.
            짧고 강렬한 10초 라운드를 반복해 지루함 없이 몰입감을 유지합니다.
            클린 UI/UX로 누구나 10초 안에 참여하고 결과를 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">10초</div>
              <div className="text-xl font-semibold mb-2">
                짧고 강렬한 라운드
              </div>
              <div className="text-gray-400">
                텐텐오락실의 "JUST ONLY TEN SECONDS" 콘셉트를 계승해 10초
                라운드로 승부를 가릅니다. 지루함 없이 몰입감을 유지합니다.
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">QR</div>
              <div className="text-xl font-semibold mb-2">초간편 입장</div>
              <div className="text-gray-400">
                제목/비번 없이 방을 만들고 QR 코드를 즉시 공유. 카메라로
                스캔하거나 링크로 들어오면 자동 인증됩니다.
              </div>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg">
              <div className="text-5xl font-bold mb-4">실시간</div>
              <div className="text-xl font-semibold mb-2">
                대규모 멀티플레이
              </div>
              <div className="text-gray-400">
                WebSocket 기반으로 수십~수백 명이 동시에 배틀을 즐길 수
                있습니다. 즉시 결과 집계와 랭킹 시스템을 제공합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section id="games" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            한판에 10초면 OK!
          </h2>
          <p className="text-2xl text-gray-300 mb-12">다양한 미니게임 라인업</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "탭탭",
              "좌로우로",
              "사방사방",
              "두더지",
              "쉐킷쉐킷",
              "바보 라이어",
              "퀴즈 배틀",
              "랜덤 믹스",
            ].map((gameName) => (
              <div
                key={gameName}
                className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-gray-700 transition-colors"
              >
                {gameName}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            SOOLGAME, 지금 바로 다운받아 즐겨보세요!
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={appStoreImage}
                alt="App Store에서 다운로드"
                className="h-10 md:h-12"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img
                src={googlePlayImage}
                alt="Google Play에서 다운로드"
                className="h-10 md:h-12"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
