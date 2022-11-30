let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve();
  }, 5000);
});

promise
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('fail!');
  });
