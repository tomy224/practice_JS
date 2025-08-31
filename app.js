// const array = [1,2,3]
// console.log(array)

// console.log(array[2]);

// const firstPokemons = ["nyaoha","hoge-ta"]
// console.log(firstPokemons)
// console.log(firstPokemons[1]);

// const questions = [
//   "What is your name?",
//   "What is your favorite color?",
//   "What is your quest?"
// ];

// for (let i = 0; i < questions.length; i++) {
//   console.log(questions[i]);
// }

let isLogin = true;

if (!isLogin) {
  alert('ログインしてください');

} else {
  console.log('ログイン成功しています');
}

// if (foo === 0 || foo === 1) {


// }

// else

// const userType = "member";
// if(userType === "member"){
//   alert('ログインしてください');
// }else if(userType === "admin"){
//   alert('管理者用の処理');
// }else{
//   alert('ゲスト用の処理');
// }

// const myMoney = 1000;
// let isShipping = false;
// if (myMoney >= 500) {
//   isShipping = true;
// }
//   console.log(isShipping);

// const 関数名 = (引数) => {
//   // 処理内容
// }

// const sonicBoom = () => {
//   // ソニックブームの処理内容
//   return 20;
// }
// console.log(sonicBoom()); //20


// const metalBurst = (lastDamage) => {

//   return lastDamage * 1.5;
// }
// console.log(metalBurst(50)); //75

// const hornDrill = (thrirHp) => {
//   if (Math.random() <= 0.3) {
//     return thrirHp;
//   }
//   else {
//     return 0;
//   }
// }

// console.log(hornDrill(100)); // 100 or 0



const snsUser = {
  id: 1,
  userName: "Taro",
  gender: "male",
  like: function () {
    console.log("いいねしました");
  },
  // post
}

console.log(snsUser.id);

const snsUser2 = {
  id: 1,
  userName: "Taro",
  gender: "male",
  // like: const like = () => {

}

console.log(snsUser.id);

const pikachu = {
  name: "ピカチュウ",
  level: 18,
  types: ["でんき"],
  skills: ["10万ボルト", "でんこうせっか", "たいあたり"],
  levelUp: function () {
    this.level++;
    if (this.level >= 20) {
      this.skills.push("スパーク");
    }
  }
};

console.log(pikachu.level, pikachu.skills); // 18
pikachu.levelUp();
console.log(pikachu.level, pikachu.skills); // 19
pikachu.levelUp();
console.log(pikachu.level, pikachu.skills); // 20  
pikachu.levelUp();




// for (let i = pikachu.level; i < 20; i++) {
//   console.log(pikachu.skills[i]);
// }

console.log(Math.ceil(6.7)); // 7

const myPokemons = ["サンダー","ホウオウ","スイクン","ラティアス","パルキア"];
myPokemons.push("ミュウツー");

console.log(myPokemons.length);  

const oldVersions = ["赤", "緑", "青"];
const newVersions = ["ピカチュウ", "リザードン", "ゲンガー"];
// oldVersions.push(newVersions);
// console.log(oldVersions); // ["赤", "緑", "青", Array(3)]
console.log(oldVersions.concat(newVersions)); // ["赤", "緑", "青", "ピカチュウ", "リザードン", "ゲンガー"]
