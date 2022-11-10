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
          console.log('지운다', decodeURI(key));
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

function parseExpires(expires: string) {
  return new Date(Date.parse(expires));
}

function isExpire(date: Date) {
  // NOTE: 유효하지 않은 날짜는 만료로 처리합니다.
  if (isNaN(date.getTime())) {
    return true;
  }

  // 현재 날짜가 더 크면 만료 -> true
  return Date.now() > date.getTime();
}

function getExpires(seconds: number) {
  return new Date(Date.now() + seconds * 1000).toUTCString();
}

export const cacheStorage = createCacheStorage();
