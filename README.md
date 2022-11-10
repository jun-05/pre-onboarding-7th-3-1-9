## **✨ 배포링크**

### [pre-onboarding-7th-2-1-9](https://wanted-07-team-9.github.io/wanted_assignment_02/)

## 📝 목차

- [🛠️ Dev Tools](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/wiki/_new?wiki%5Bname%5D=_Sidebar#%EF%B8%8F-dev-tools)
- [🖥 프로젝트 실행 방법](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/wiki/_new?wiki%5Bname%5D=_Sidebar#-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95)

## 🛠️ Dev Tools

 <img height="32" width="96" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
 <img height="32" width="96" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
 <img height="32" width="96" src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white">
 <img height="32" width="96" src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square">

## **🖥 프로젝트 실행 방법**

```sh
git clone git@github.com:Wanted-07-team-9/pre-onboarding-7th-3-1-9.git

cd pre-onboarding-7th-3-1-9/client

npm install

npm start

open http://localhost:3000
```

## ✏ 토의 내용 및 선정

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)  
[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)

[🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)

## **📝 디렉토리 구조**

```
   📂src
   ┗ 📂api
   ┗ 📂assets
   ┗ 📂components
   ┗ 📂hooks
   ┗ 📂pages
   ┗ 📂redux
   ┗ 📂router
   ┗ 📂styled
   ┣📄App.tsx
   ┗📄index.tsx

```

검색영역을 클론하기

https://clinicaltrialskorea.com/

질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

![image1](https://user-images.githubusercontent.com/104307213/201096343-42063cbe-9a8f-4c23-b5ee-7f21c2680f5d.gif)

검색어가 없을 시 “검색어 없음” 표출
![스크린샷 2022-11-10 오후 9 48 25](https://user-images.githubusercontent.com/104307213/201096740-6d9b8c85-4602-49fe-9de4-f6bb6afe5824.png)

인풋이 포커스 되었을때 검색어 창 노출 & 인풋 박스 보더가 추가 되도록 UI 구현
![스크린샷 2022-11-10 오후 9 48 32](https://user-images.githubusercontent.com/104307213/201097348-e3996839-4fd3-4af1-802a-456b4766a6db.png)

- API 호출 최적화

  - API 호출별로 로컬 캐싱 구현
    - 캐싱을 쿼리스트링으로 변환하여 캐시스토리지에 저장
      ![스크린샷 2022-11-10 오후 9 45 42](https://user-images.githubusercontent.com/104307213/201096796-f4d31e33-f12e-413c-b503-ce9e61878290.png)
    - 해당 쿼리 api 데이터를 호출하여 받아 와 사용
    - 디바운스를 통해 0.8초 후에 api가 다시 재 호줄 되도록 호출 횟수를 줄임
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
      ![스크린샷 2022-11-10 오후 9 45 18](https://user-images.githubusercontent.com/104307213/201096843-0e5beada-5da2-4c60-aa66-0090903c748a.png)

- 키보드 기능 & 검색어 볼드 스타일 구현 중 ...

## 💡 logic

### :one: logic one

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## commit message 규칙

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor : 코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## 코딩 컨벤션

- 컴포넌트의 ID사용은 지양한다.
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- 반환 값의 유무를 이용하는 변수는 has로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

</div>
</details>

<details>
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## Prettier, ESLint 규칙

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

</div>
</details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- react-router-dom
- axios

### dev

- tailwindcss
</div>
</details>
