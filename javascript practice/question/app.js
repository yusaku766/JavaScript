//section5
// Q1 変数
let nickname = '田中 裕作';
let age = 27;
let message = '私の名前は' + nickname + 'で、年齢は' + age + '歳です。';

console.log(message);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let favoriteLanguage = languages[0];
let languageToLearn = languages[3];
let message2 = `私の好きな言語は${favoriteLanguage}です。次は${languageToLearn}を勉強してみたいです。`;

console.log(message2);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);
console.log(playerList.find(player => player.favorites.includes('The Legend of Zelda')) ? 'The Legend of Zelda' : '');

// Q5 四則演算
let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
  totalAge += playerList[i].age;
}
let numberOfPlayers = playerList.length;
let averageAge = totalAge / numberOfPlayers;

console.log(averageAge);

// Q6 関数
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};

user.sayHello();

// Q8 引数
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.divide(25, 5);

// Q9 返り値
function remainder(x, y) {
  return x % y;
}
let result = remainder(5, 3);

console.log('5 を 3 で割った余りは ' + result + ' です。');

// Q10 スコープ
//変数 x は関数 foo のスコープ内でのみ定義されており、関数外から参照できないため、x is not defined エラーが発生する。
let x = 0;
foo();

function foo() {
  x = 1;
  console.log(x);
}
console.log(x);

//section6
//Q1 標準組み込みオブジェクト
let randomInteger = Math.floor(Math.random() * 10);
console.log(randomInteger);

//Q2 コールバック関数
setTimeout(() => {
  console.log('Hello World!');
}, 3000);

//Q3 if
let num = 3;

if (num > 0) {
  console.log(num + ' is greater than 0');
} else if (num < 0) {
  console.log(num + ' is less than 0');
} else {
  console.log(num + ' is 0');
}

//Q4 for
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

//Q5 if+for
let mixed = [4, '2', 5, '8', '9', 0, 1];
let length = mixed.length;

for (let i = 0; i < length; i++) {
  let item = mixed[i];

  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log(item + ' is even');
    }
    else if(item % 2 === 1) {
      console.log(item + ' is odd');
    }
    else {
    console.log(item + ' is not number');
    }
  }
}