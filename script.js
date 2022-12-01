async function add() {
  async function calc() {
    return Promise.reject();
  }
  try {
    let result = await calc();
    console.log('성공');
  } catch {
    console.log('실패');
  }
}

add();
