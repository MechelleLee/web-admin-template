// eslint-disable-next-line
const series = (sources, initial) => {
  return sources.reduce(
    (promise, func) => promise.then(func),
    Promise.resolve(initial),
  );
};

export default {
  series,
};
