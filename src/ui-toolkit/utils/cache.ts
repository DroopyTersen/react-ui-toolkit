export interface CacheOptions {
  duration?: number;
  location?: Storage;
  key?: string;
}

const defaultConfig: CacheOptions = {
  // 86400000 = 1000 * 60 * 60 * 24 = 1 DAY
  duration: 86400000,
  location: typeof window !== "undefined" ? window.localStorage : null,
};

const _isExpired = (cacheValue) => {
  return cacheValue.expiration && Date.now() > cacheValue.expiration;
};

const getOptions = function (cacheOpts: CacheOptions | string): CacheOptions {
  if (typeof cacheOpts === "string") {
    cacheOpts = {
      key: cacheOpts as string,
    };
  }
  return { ...defaultConfig, ...cacheOpts };
};

export const getCache = (cacheOpts: CacheOptions | string) => {
  const opts = getOptions(cacheOpts);
  const { location } = opts;
  if (!opts.key) throw new Error("key is required");

  const valueStr = location.getItem(opts.key);
  try {
    if (valueStr) {
      const val = JSON.parse(valueStr);
      return !_isExpired(val) ? val.payload : null;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export const setCache = (cacheOpts: CacheOptions | string, payload: any) => {
  const opts = getOptions(cacheOpts);
  const { duration, location } = opts;

  if (!opts.key) throw new Error("key is required");

  const nowTicks = Date.now();
  const expiration = (duration && nowTicks + duration) || null;
  location.setItem(opts.key, JSON.stringify({ payload, expiration }));
  return getCache(opts);
};
