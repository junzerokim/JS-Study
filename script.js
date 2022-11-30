let promise = new Promise((resolve, reject) => {
  $.get('https://codingapple1.github.io/hello.txt').done((result) => {
    resolve(result);
  });
});

promise
  .then((result) => {
    console.log(result);
    let promise2 = new Promise((resolve, reject) => {
      $.get('https://codingapple1.github.io/hello2.txt').done((result) => {
        resolve(result);
      });
    });
    return promise2;
  })
  .then((result) => {
    console.log(result);
  });
