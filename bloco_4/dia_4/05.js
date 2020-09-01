let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Montain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

let recorrentes = "";
if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
  recorrentes = "Ambos recorrentes";
} else {
  recorrentes = "Somente um é recorrente";
}
console.log(
  `${info.personagem} e ${info2.personagem}\n${info.origem} e ${info2.origem}\n${info.nota} principal nos quadrinhos do ${info.origem} e ${info2.nota}\n${recorrentes}`
);
