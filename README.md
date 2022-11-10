## [배포 주소](https://pre-onboarding-7th-3-1-9-eight.vercel.app/)

## Q1. 캐싱 구현 방법

>Q. 왜 cacheStorage인가 ?
>
>A. cacheStorage는 localStorage,sessionStorage와 비교하여 훨씬 많은 데이터를 저장할 수 있다.  적어도 수백 MB, 경우에 따라 수 GB 이상까지도 될 수 있습니다

cacheStorage에 특정 이름(sick)으로 cach를 open한다

- case 1. cacheStorage에 검색 결과가 없을 경우 
서버주소로 get요청을 보내서 받아온 데이터를 cacheStorage에  sickNm_like_keyword 항목을 생성하고 응답 결과를 저장한다.

- case 2. cacheStorage에 검색 결과가 존재할 경우 
캐시에서 항목을 찾기 위해 match 메서드를 사용하고 일치하는 항목이 발견되면 Promise를 반환한다. 반환한 프로미스를 리턴해준다.

## Q2. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 방법

```jsx
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) {
        const data = getSick(keyword)
        data.then((res) => setKeyItems(res))
      }
    }, 200)
    return () => {
      clearTimeout(debounce)
    }
  }, [keyword])
```
만약 setTimeout없이 계속 keyword가 있을때마다 getSick()함수를 호출한다면 예를들어 담낭를 검색한다면
ㄷ ㅏ ㅁ ㄴ ㅏ ㅇ 총 6번을 호출 하므로 딜레이(0.2초)를 두어  API 호출 횟수를 줄였다.


## Q3. 키보드로 추천 검색어로 이동하는 방법

input 요소에 onKeyUp 이벤트에 실행될 함수를   바인딩해준다. e.key 가 'ArrowUp'(키보드 위쪽 화살표)  또는 'ArrowDown'(키보드 아래쪽 화살표)의 경우로 나누어준다. 
maxIndex변수에  순회하는 추천검색어 배열 (keyItems)의 갯수 -1 을 할당한다. 그 이유는 Index로 접근하기 때문이다. 
useState로 선택된 추천 검색어의 Index를 저장한다. 초기값을 -1로 하여 위, 아래 화살표를 누르지 않을 경우 추천검색어들이 선택되지 않은 상태로 해준다.

- case 1. 'ArrowUp' 일 경우 
  - 최초에  'ArrowUp' 키를 누른 경우 가장 최하단 추천 검색어로 이동해야 하기 때문에 selectedIndex의 값을 maxIndex값으로 바꿔준다. 
  - 그 이외의 경우 자신보다 위의 인덱스 값이 있으므로 selectIndex 값을 이전 값에서 -1 해준다.

- case 1. 'ArrowDown' 일 경우 
  - 추천 검색어의 마지막에서  'ArrowDown' 키를 누른 경우 아무것도 선택하지 않은 경우(-1)로 만든다.
  - 그 이외의 경우 자신보다 아래의 인덱스 값이 있으므로 setSelectIndex의 값을 이전 값에서 +1 해준다.


##  commit msg 규칙

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

