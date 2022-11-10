import { SickItem } from '../model/SickItem';

const prefixKey = 'cache-storage-';

function createCacheStorage() {
  const cacheStorage = {
    get: (key: string) => {
      try {
        const cached = JSON.parse(localStorage.getItem(`${prefixKey}-${decodeURI(key)}`) || '');

        if (cached == null) {
          return null;
        }

        const expiresDate = parseExpires(cached.expireDate);
        if (isExpire(expiresDate)) {
          console.log('remove', decodeURI(key));
          cacheStorage.remove(`${prefixKey}-${decodeURI(key)}`);

          return null;
        }

        return cached.value;
      } catch (e) {
        return null;
      }
    },
    set: async (key: string, value: SickItem, expireSeconds: number) => {
      const expireDate = getExpires(expireSeconds);

      localStorage.setItem(`${prefixKey}-${decodeURI(key)}`, JSON.stringify({ expireDate, value }));
    },
    remove: (key: string) => {
      localStorage.removeItem(`${prefixKey}-${decodeURI(key)}`);
    },
  };

  return cacheStorage;
}

// > isExpire(new Date(Date.now()))
// false
// > isExpire(new Date(Date.now() - 1))
// true
function isExpire(date: Date) {
  // NOTE: 유효하지 않은 날짜는 만료로 처리합니다.
  if (isNaN(date.getTime())) {
    return true;
  }

  return Date.now() > date.getTime();
}

// > parseExpires('Fri, 07 Oct 2022 06:07:56 GMT');
// => UTC 문자열을 파싱하여 구한 Date 객체
// 2022-10-07T06:07:56.000Z
function parseExpires(expires: string) {
  return new Date(Date.parse(expires));
}

// > getExpires(100)
// => 100초 뒤를 의미하는 Date 의 UTC 문자열
// => Fri, 07 Oct 2022 06:07:56 GMT
function getExpires(seconds: number) {
  return new Date(Date.now() + seconds * 1000).toUTCString();
}

export const cacheStorage = createCacheStorage();
