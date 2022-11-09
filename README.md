## **✨ 배포링크**

<!-- ## [데모 페이지 바로가기](https://pre-onboarding-7th-2-2-9.vercel.app) -->

## ‼️ 주요 기능 구현

### [3️⃣ API 호출 캐싱](#3️⃣-assignment)

### [4️⃣ API 호출 횟수 줄이기](#4️⃣-assignment)

### [6️⃣ 키보드만으로 추천 검색어 이동](#6️⃣-assignment)

## 📝 목차

- [📰 프로젝트 설명](#-프로젝트-설명)
- [🛠️ Dev Tools](#-dev-tools)
- [🖥 프로젝트 실행 방법](#-프로젝트-실행-방법)

## **📰 프로젝트 설명**

- 검색창 구현 + 검색어 추천 기능 구현 서비스입니다.

## **🛠 Dev Tools**

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) ![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/redux_toolkit-764ABC?style=flat-square&logo=redux&logoColor=black) ![badge](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styled%20components&logoColor=white) ![badge](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)

## **🖥 프로젝트 실행 방법**

```sh
### Installation
# Repositorie Clone
git clone https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9.git

# npm으로 설치 진행
pre-onboarding-7th-3-1-9 %  % npm install

### Usage
# Local Dev Server 실행
pre-onboarding-7th-3-1-9 % npm start

# Build
pre-onboarding-7th-3-1-9 % npm build
```

## **✏ 토의 내용 및 선정**

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/1)

[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-3-1-9/discussions/2)

<!-- [🖍 3차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/8) -->

<!-- [🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-2-9/pull/15) -->

## **📝 디렉토리 구조**

```sh
📂 pre-onboarding-7th-3-1-9
┣ 📂 public
┣ 📂 src
┃   ┣ 📂 apis             # axios 호출 관련
┃   ┣ 📂 assets           # 파일들 (이미지 파일 등)
┃   ┣ 📂 hooks            # custom hook
┃   ┣ 📂 pages            # 페이지 단위로 구분
┃   ┣   ┣ 📂 Main         # 메인 페이지
┃   ┣ 📂 redux            # redux/toolkit, store 디렉토리
┃   ┣   ┗ 📂 reducer      # reducer/slice 디렉토리
┃   ┣ 📂 styles           # global style
┗ 📄 README.md
```

## **💡 Assignment 목차**

- [1️⃣ Assignment](#1️⃣-assignment)
- [2️⃣ Assignment](#2️⃣-assignment)
- [3️⃣ Assignment](#3️⃣-assignment)
- [4️⃣ Assignment](#4️⃣-assignment)
- [5️⃣ Assignment](#5️⃣-assignment)
- [6️⃣ Assignment](#6️⃣-assignment)

### **1️⃣ Assignment**

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  - 사용자가 입력한 텍스트와 일치하는 부분 볼드처리

<img width="537" alt="search" src="https://user-images.githubusercontent.com/74575497/200851310-d8d964fc-5e51-4b17-aca4-211d7f09c8cc.png">

```sh
💡 # 검색된 결과 문자열에서 "검색한 단어"를 기준으로 split을 하고, array를 map으로 반복하면서
# split된 부분마다 "검색한 단어"를 삽입하여 bold 처리 하였습니다.
```

```js
const textArray = sickNm.split(searchWord);
{
  textArray.map((item, i) => (
    <span key={i} className="search_text">
      {item}
      {i !== textArray.length - 1 && <span className="font_bold">{searchWord}</span>}
    </span>
  ));
}
```

### **2️⃣ Assignment**

- - 검색어가 없을 시 “검색어 없음” 표출

<img width="528" alt="empty" src="https://user-images.githubusercontent.com/74575497/200851832-41b84cc0-e62e-4d6d-b2ea-9515c94069bc.png">

```sh
💡 # 검색된 문자열이 없을경우 검색어 없음 표출하였습니다.
```

```js
{
  items.length === 0 && (
    <DropDownItem>
      <span className="search_text">검색어가 없습니다</span>
    </DropDownItem>
  );
}
```

### **3️⃣ Assignment**

- API 호출 최적화
  - API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술

<img width="420" alt="cache" src="https://user-images.githubusercontent.com/74575497/200842174-e1b72327-5569-4b5e-b7d7-594ec5499587.png">
```sh
💡 # 브라우저의 Cache Storage에 queryString을 저장하고,  
💡 # API 호출전에 Cache Storage에 queryString이 존재하면 해당 데이터 리턴 하도록 사용  
💡 # Cache Storage에 없을경우 API 호출 진행
```

```js
const URL_SICK = 'sick';
const queryStr = new URLSearchParams(payload).toString();
const cacheStorage = await caches.open(URL_SICK);
const cachedResponse = await cacheStorage.match(queryStr);

// cache storage에 해당 queryString값이 없을경우 API 요청 후 cache storage에 저장
if (!cachedResponse || !cachedResponse.ok) {
  const config = {
    params: payload,
  };
  const { data } = await instance.get(`/${URL_SICK}`, config);
  const resultData = data.slice(0, 7);
  cacheStorage.put(queryStr, new Response(JSON.stringify(resultData)));
  return resultData;
}

// cache storage에 값이 있으면 cache된 데이터 리턴
const cached = await cachedResponse?.json();
return cached;
```

### **4️⃣ Assignment**

- - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    - README에 전략에 대한 설명 기술

```sh
💡 # API 요청에 300ms의 debounce를 적용하였고,
💡 # 사용자의 입력마다 API 호출 하는것이 아닌 사용자의 입력이 해당 시간동안 없을때만 호출하게 하여 횟수를 줄였습니다.
```

```js
useEffect(() => {
  const getSickName = async () => {
    try {
      dispatch(setIsLoading(true));
      const searchResult = await getSick(searchWord);
      dispatch(setItems(searchResult));
      dispatch(setIsLoading(false));
    } catch (err) {
      dispatch(setIsLoading(false));

      if (err instanceof AxiosError) {
        console.error(err.response?.data);
      } else {
        console.error(err);
      }
    }
  };
  const delay = setTimeout(() => getSickName(), 300);

  return () => clearTimeout(delay);
}, [searchWord, dispatch]);
```

### **5️⃣ Assignment**

- - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

<img width="384" alt="console" src="https://user-images.githubusercontent.com/74575497/200847063-91f2c08f-9871-4c3c-bac6-6a2dd94a48ba.png">

```sh
💡 # axios instance의 인터셉터에서 request 전에 console.info('calling api'); 를 추가했습니다.
```

```js
instance.interceptors.request.use(
  config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
```

### **6️⃣ Assignment**

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
  - 사용법 README에 기술

```sh
💡 # 검색창의 input box의 onKeyDown 이벤트에 ArrowDown, ArrowUp 이벤트가 발생했을때 selectIndex값을 변경하였고,
💡 # selectIndex값과 아이템의 index 값이 같으면 over className을 추가하였습니다.
```

```js
const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if(!e.nativeEvent.isComposing) {
    if(e.key === "ArrowDown" && items.length - 1 > selectIndex) {
      dispatch(setSelectIndex(selectIndex + 1))
    }
    if(e.key === "ArrowUp" && selectIndex >= 0) {
      dispatch(setSelectIndex(selectIndex - 1))
    }
  }
}

map.(_, index) => (
  <DropDownItem key={index} className={selectIndex === index ? 'over' : ''}>
)
```
