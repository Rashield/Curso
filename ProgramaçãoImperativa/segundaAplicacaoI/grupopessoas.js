let pessoa = require("./pessoa");

let grupopessoa = [];
grupopessoa.push(new pessoa("M",1.5),new pessoa("M",1.5),new pessoa("M",1.78),new pessoa("M",1.8),new pessoa("F",1.9),
new pessoa("M",1.4),new pessoa("F",1.5),new pessoa("M",1.65),new pessoa("F",1.58),new pessoa("M",1.5),new pessoa("M",1.5),
new pessoa("M",1.55),new pessoa("F",1.5),new pessoa("M",1.5),new pessoa("F",1.6));

console.log(grupopessoa);
module.exports = grupopessoa;