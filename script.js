let btn = document.querySelector('.btn');

btn.addEventListener('click', async function click() {
  async function msg() {
    return '성공했어요';
  }
  let result = await msg();
  console.log(result);
});

async function add() {
  let prm = new Promise((resolve, reject) => {
    document.querySelector('.btn2').addEventListener('click', function () {
      resolve('성공2');
    });
  });

  let result = await prm;
  console.log(result);
}

add();
