interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  category?: string;
}

function News() {
  const newsList: NewsItem[] = [
    {
      id: 1,
      date: "2024.01.15",
      title: "SOOLGAME 신규 업데이트 안내",
      content: "더욱 재미있는 미니게임들이 추가되었습니다!",
      category: "업데이트",
    },
    {
      id: 2,
      date: "2024.01.10",
      title: "겨울 시즌 이벤트 진행 중",
      content: "특별한 보상과 함께 즐기는 겨울 이벤트를 만나보세요!",
      category: "이벤트",
    },
    {
      id: 3,
      date: "2024.01.05",
      title: "신규 게임 모드 출시",
      content: "새로운 배틀 모드로 더욱 치열한 경쟁을 즐겨보세요!",
      category: "신규",
    },
    {
      id: 4,
      date: "2023.12.28",
      title: "연말 특별 이벤트 안내",
      content: "2023년을 마무리하는 특별한 이벤트가 시작됩니다!",
      category: "이벤트",
    },
    {
      id: 5,
      date: "2023.12.20",
      title: "서버 점검 안내",
      content: "더 나은 서비스를 위한 정기 점검이 진행됩니다.",
      category: "공지",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white pb-5">
      <div className="max-w-7xl mx-auto px-20 py-8">
        <div className="flex justify-between">
          <div className="flex gap-6 items-center pt-10 mb-12">
            <div className="text-4xl font-extrabold text-black">새소식</div>
            <div className="text-gray-700">
              SOOLGAME의 새로운 소식을 확인하세요!
            </div>
          </div>

          <div>
            <div className="text-9xl font-black text-gray-100 select-none">
              NEWS
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="border-b border-gray-200 pb-6 hover:bg-gray-50 hover:rounded-lg p-4 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  {news.category && (
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                      {news.category}
                    </span>
                  )}
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-600">{news.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
