# SPACE SOFT 프로젝트 설정

### Version Informaion

```sh
node --version
v16.20.0
```

```sh
npm --version
8.19.4
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Environment

```sh
.env                // 환경변수 파일
/api                // 도메인별 api 설정 (/utils 참조)
/components         // 컴포넌트 (테이블, 차트, 모달, 네비게이션 ...)
/router             // 라우터 경로 설정 파일
/store              // vuex
/view               // 화면
  - Login           // 로그인 form
  - Layout          // 로그인 후 화면들에 대한 레이아웃
  - /HeaderContent  // 헤더 영역 (기기관리, 자동종료설정, 사용자계정관리)
  - /Dashboard      // /home 화면에서 쓰이는 차트 호출 페이지
  - /Content        // /home 화면을 제외한 화면의 컨텐츠 (raw-data, statistics)
```
