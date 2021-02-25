import _ from 'lodash';

export const delayTime = (ms, fn) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const result = fn();
      try {
        res(result);
      } catch {
        rej('Error', result);
      }
    }, ms);
  });
}

