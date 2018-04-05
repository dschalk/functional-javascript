'lang sweet.js';

operator >>= left 12 = (left, right) => {
  return #`${right}(${left}.x)`;
};

export default {>>=}
