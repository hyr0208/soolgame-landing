import React from "react";
import appStoreImage from "../../assets/image/landingApp.png";
import googlePlayImage from "../../assets/image/landingGoogle.png";
import heroCharacters from "../../assets/image/hero-characters.png";

function MainPage() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const games = [
    { name: "탭탭", emoji: "👆", color: "from-pink-500 to-rose-500" },
    { name: "좌로우로", emoji: "↔️", color: "from-blue-500 to-cyan-500" },
    { name: "사방사방", emoji: "🎯", color: "from-purple-500 to-pink-500" },
    { name: "두더지", emoji: "🔨", color: "from-orange-500 to-red-500" },
    { name: "쉐킷쉐킷", emoji: "📱", color: "from-green-500 to-emerald-500" },
    { name: "바보 라이어", emoji: "🤥", color: "from-yellow-500 to-orange-500" },
    { name: "퀴즈 배틀", emoji: "❓", color: "from-indigo-500 to-purple-500" },
    { name: "랜덤 믹스", emoji: "🎲", color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-['Pretendard'] overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center z-10 max-w-6xl mx-auto w-full">
          {/* Character Illustration */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-transparent blur-3xl"></div>
            <img
              src={heroCharacters}
              alt="SOOLGAME Characters"
              className="relative mx-auto w-full max-w-2xl h-auto animate-float drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300">
              🎮 실시간 멀티플레이 게임 플랫폼
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
            SOOLGAME
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-3 font-light bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            실시간 근거리 멀티 배틀 술게임 플랫폼
          </p>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-bold text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
            JUST ONLY TEN SECONDS
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 justify-center mt-8">
            <div className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all hover:scale-105 cursor-pointer">
              지금 시작하기
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 animate-bounce z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
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
      <section id="stats" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10M+
              </div>
              <div className="text-lg text-gray-300">게임 누적 다운로드 수</div>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-500/50 transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                #1
              </div>
              <div className="text-lg text-gray-300">무료게임 인기순위</div>
            </div>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                219건
              </div>
              <div className="text-lg text-gray-300">2022년도 기업행사 활용</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            오프라인 모임에서 즉시 사용하는 게임 허브
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            회식, MT, 홈파티, 행사에서 바로 즐길 수 있는 실시간 멀티 배틀 게임.
            짧고 강렬한 10초 라운드를 반복해 지루함 없이 몰입감을 유지합니다.
            클린 UI/UX로 누구나 10초 안에 참여하고 결과를 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-pink-500/50 transition-all">
                <div className="text-7xl font-black mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                  10초
                </div>
                <div className="text-2xl font-bold mb-3 text-pink-300">
                  짧고 강렬한 라운드
                </div>
                <div className="text-gray-400 leading-relaxed">
                  텐텐오락실의 "JUST ONLY TEN SECONDS" 콘셉트를 계승해 10초
                  라운드로 승부를 가릅니다. 지루함 없이 몰입감을 유지합니다.
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all">
                <div className="text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  QR
                </div>
                <div className="text-2xl font-bold mb-3 text-blue-300">초간편 입장</div>
                <div className="text-gray-400 leading-relaxed">
                  제목/비번 없이 방을 만들고 QR 코드를 즉시 공유. 카메라로
                  스캔하거나 링크로 들어오면 자동 인증됩니다.
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all">
                <div className="text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  실시간
                </div>
                <div className="text-2xl font-bold mb-3 text-purple-300">
                  대규모 멀티플레이
                </div>
                <div className="text-gray-400 leading-relaxed">
                  WebSocket 기반으로 수십~수백 명이 동시에 배틀을 즐길 수
                  있습니다. 즉시 결과 집계와 랭킹 시스템을 제공합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section id="games" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            한판에 10초면 OK!
          </h2>
          <p className="text-2xl text-center text-gray-300 mb-12">
            다양한 미니게임 라인업 🎮
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={game.name}
                className="group relative aspect-square"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center hover:border-white/30 transition-all hover:scale-105 cursor-pointer">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {game.emoji}
                  </div>
                  <div className="text-xl font-bold text-white px-4">
                    {game.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                SOOLGAME, 지금 바로 다운받아 즐겨보세요!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                친구들과 함께 짜릿한 10초 배틀을 경험하세요 🎉
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                  href="#"
                  className="group relative hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src={appStoreImage}
                    alt="App Store에서 다운로드"
                    className="relative h-14 md:h-16"
                  />
                </a>
                <a
                  href="#"
                  className="group relative hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src={googlePlayImage}
                    alt="Google Play에서 다운로드"
                    className="relative h-14 md:h-16"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-sm">© 2024 SOOLGAME. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
