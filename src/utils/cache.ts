export const addDataIntoCache = (cacheName: any, url: any, response: any) => {
  const data = new Response(JSON.stringify(response));
  if ('caches' in window) {
    caches.open('Clinical_information_' + cacheName).then(cache => {
      cache.put(url, data);
    });
  }
};

export const getSingleCacheData = async (cacheName: string, url: string) => {
  if (typeof caches === 'undefined') return false;
  const cacheStorage = await caches.open('Clinical_information_' + cacheName);
  const cachedResponse = await cacheStorage.match(url);
  if (!cachedResponse || !cachedResponse.ok) {
    return [];
  }

  return cachedResponse?.json().then(item => item);
};

export const clearCacheData = () => {
  caches.keys().then(names => {
    names.forEach(name => {
      if (name.includes('Clinical_information_')) {
        caches.delete(name);
      }
    });
  });
};
