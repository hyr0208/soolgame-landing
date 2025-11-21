# SOOLGAME Landing Page

SOOLGAME의 공식 랜딩 페이지입니다. 실시간 근거리 멀티 배틀 술게임 플랫폼을 소개하고, 사용자에게 게임의 특징과 다운로드 링크를 제공합니다.

## 🎮 프로젝트 소개

SOOLGAME은 텐텐오락실의 "JUST ONLY TEN SECONDS" 콘셉트를 계승한 실시간 멀티 배틀 게임 플랫폼입니다. 오프라인 모임(회식, MT, 홈파티, 행사)에서 즉시 사용할 수 있는 게임 허브를 제공합니다.

## ✨ 주요 기능

- **반응형 디자인**: 모바일과 데스크톱에서 최적화된 UI/UX
- **다크 테마**: 모던하고 세련된 다크 테마 디자인
- **스크롤 애니메이션**: 부드러운 스크롤과 헤더 표시/숨김 효과
- **다국어 지원 준비**: 한국어 기반, 확장 가능한 구조
- **SEO 최적화**: 검색 엔진 최적화를 위한 메타 태그 및 구조화된 마크업

## 🛠 기술 스택

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 4.9.5
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router DOM 7.9.6
- **Date Handling**: dayjs 1.11.19
- **Build Tool**: Create React App 5.0.1

## 📁 프로젝트 구조

```
soolgame-landing/
├── public/                 # 정적 파일
├── src/
│   ├── assets/            # 이미지, 폰트 등 리소스
│   │   ├── fonts/         # Pretendard 폰트 파일
│   │   └── image/         # 이미지 파일
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx    # 상단 네비게이션 헤더
│   │   └── Footer.tsx    # 하단 푸터
│   ├── pages/            # 페이지 컴포넌트
│   │   ├── main/         # 메인 페이지
│   │   ├── news/         # 새소식 페이지
│   │   └── errors/       # 에러 페이지
│   ├── routes/           # 라우팅 설정
│   │   ├── layout/       # 레이아웃 컴포넌트
│   │   └── index.js      # 라우터 설정
│   ├── App.tsx           # 메인 앱 컴포넌트
│   ├── index.tsx         # 진입점
│   └── index.css         # 전역 스타일
├── tailwind.config.js    # Tailwind CSS 설정
├── postcss.config.js     # PostCSS 설정
└── package.json          # 프로젝트 의존성
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
yarn install
# 또는
npm install
```

### 개발 서버 실행

```bash
yarn start
# 또는
npm start
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드

```bash
yarn build
# 또는
npm run build
```

프로덕션 빌드가 `build` 폴더에 생성됩니다.

### 테스트

```bash
yarn test
# 또는
npm test
```

## 📄 페이지 구조

### 메인 페이지 (`/`)

- **Hero Section**: SOOLGAME 소개 및 메인 타이틀
- **Stats Section**: 게임 통계 및 성과
- **Features Section**: 핵심 기능 소개
  - 10초 짧고 강렬한 라운드
  - QR 코드 초간편 입장
  - 실시간 대규모 멀티플레이
- **Game Info Section**: 미니게임 라인업 소개
- **CTA Section**: App Store 및 Google Play 다운로드 링크

### 새소식 페이지 (`/news`)

- 뉴스 및 업데이트 목록
- 카테고리별 필터링 (준비 중)
- 검색 기능 (준비 중)

## 🎨 디자인 시스템

### 폰트

- **Pretendard**: 한국어 최적화 폰트 사용
- 다양한 폰트 웨이트 지원 (Thin ~ Black)

### 색상

- **배경**: 검은색 (#000000)
- **텍스트**: 흰색, 회색 계열
- **강조**: 파란색, 초록색 (버튼 등)

### 반응형 브레이크포인트

- 모바일: 기본
- 태블릿: `md:` (768px 이상)
- 데스크톱: `lg:` (1024px 이상)

## 🔧 주요 컴포넌트

### Header

- 스크롤 시 자동 표시/숨김
- 페이지별 색상 변경 (메인: 검은색, 뉴스: 흰색)
- 네비게이션 메뉴 (새소식, 콘텐츠, 게임소개)

### Footer

- 회사 정보 및 저작권
- 연도 자동 업데이트 (dayjs 사용)

## 📝 스크립트

- `yarn start`: 개발 서버 실행
- `yarn build`: 프로덕션 빌드
- `yarn test`: 테스트 실행
- `yarn eject`: Create React App 설정 추출 (주의: 되돌릴 수 없음)

## 🌐 배포

빌드된 파일을 정적 호스팅 서비스에 배포할 수 있습니다:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📚 참고 자료

- [SOOLGAME 프로젝트](https://github.com/bonjin-team/soolgame)
- [텐텐오락실 공식](https://www.tenten.games)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 문서](https://tailwindcss.com)

## 📄 라이선스

이 프로젝트는 private 프로젝트입니다.

## 👥 기여자

- Bonjin Team

---

**SOOLGAME** - 실시간 근거리 멀티 배틀 술게임 플랫폼
