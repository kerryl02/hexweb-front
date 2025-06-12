export function runMiddleware(req, res, middlewares) {
  return new Promise((resolve, reject) => {
    const next = (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    };

    let i = 0;
    const run = async () => {
      if (i < middlewares.length) {
        await middlewares[i](req, res, () => {
          i++;
          run();
        });
      } else {
        next();
      }
    };

    run();
  });
}
