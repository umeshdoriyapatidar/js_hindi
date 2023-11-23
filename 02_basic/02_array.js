const marvel_heros = ["thor", "IronMan", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// marvel_heros.pop()
// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arry = another_array.flat(Infinity)
// console.log(real_another_arry);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));

// console.log(Array.from({name: "Hitesh"})) //interesting case we need to tell that from which it needs to convert like from key or from value

score1 = 100;
score2 = 102
score3 = 300
console.log(Array.of(score1, score2, score3));