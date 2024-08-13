function test() {
  // 배열 구조 분해 할당
  const arr = ["apple", "rabbit"];
  const [first, second] = arr;
  console.log(first, second);

  // 객체 구조 분해 할당
  const obj = { name: "hyeonuk", publisher: "koko" };
  const { name, publisher } = obj;
  console.log(name, publisher);

  // 교환
  let a = 5;
  let b = 10;
  [a, b] = [b, a];
  console.log(a, b);

  // 비구조화 할당
  const makePerson = ({ familyName, givenName, address }) => {
    return {
      name: `${givenName} ${familyName}`,
      address,
    };
  };

  const person = makePerson({
    familyName: "Seo",
    givenName: "hyonuk",
    address: "seoul",
    country: "korea",
  });
  console.log(person);
}

function test2() {
  // 배열 병합
  const evenNumbers = [2, 4, 6, 8, 10];
  const oddNumbers = [1, 3, 5, 7, 9];
  const numbers = [...evenNumbers, ...oddNumbers];
  console.log(numbers);

  //객체 병합
  const person = {
    name: "hyeonuk seo",
    familyName: "seo",
    givenName: "hyeonuk",
    country: "usa",
  };
  const address = {
    country: "korea",
    city: "seoul",
  };
  const merge = { ...person, ...address };
  console.log(merge);
}

function test3() {
  const names = ["lee", "kim", "park", "lee", "kim"];
  const uniqueNames = [...new Set(names)];
  console.log(uniqueNames);
}

function test4() {
  const makeCompany = (showAddress) => {
    return {
      name: "hihi",
      ...(showAddress && { address: "seoul" }),
    };
  };
  console.log(makeCompany(false));
  console.log(makeCompany(true));
}

test4();
