# 검색창 구현 + 검색어 추천 기능 구현

## 배포 페이지

https://pre-onboarding-7th-3-1-9-june.vercel.app/

## 요구기능 

공통 사항 : 주어진 디자인 클론

1. 질환명 검색시 API 호출을 통해 검색어 추천 기능 구현
    - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리
    - 검색어가 없을 시 "검색어 없음" 표시
2. API 호출 최적화
    - API 호출별로 로컬 캐싱 구현(Lib 사용금지)
    - 입력마다 API가 호출되지 않도록 구현
3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 사용 스택

- React JS
- TypeScript
- ContextAPI
- TailwindCSS
- Tailwind-Styled-Component

## commit msg 규칙

⭐ feat : 새로운 기능에 대한 커밋

🎨 ui : 새로운 CSS관련 디자인에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 파일 이동, 파일명 수정, 변수 제거 등의 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

📝 style : 공백 제거와 같은, 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지 ⚠ 무엇을 했는지 명확하게 작성
