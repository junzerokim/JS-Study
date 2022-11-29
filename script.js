function func1(a) {
  console.log(1);
  a();
}

function func2() {
  console.log(2);
}

func1(func2);
