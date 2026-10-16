const container = document.getElementById('container');
 
const rekening = {
  eigenaar: 'Herman de Vries',
  saldo: 100,
  rekeningnummer: 'NL10INGB1231234123',
  geblokkeerd: false,
};

console.log(rekening.eigenaar)

 
const rekeningen = [
  {
    eigenaar: 'Sanne de Vries',
    saldo: 100,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Ahmed Yilmaz',
    saldo: 2500,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Lisa Bakker',
    saldo: 0,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: true,
  },
  {
    eigenaar: 'Tom Jansen',
    saldo: 750,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
];

// for(let rekening of rekeningen) {
    // destructering
 //   console.log(rekening.eigenaar)
 //   const [eigenaar, saldo] = rekeningen
  //  container.innerHTML += `<h2>${eigenaar}</h2>
 //   <h3>${saldo}</h3>
  //  `
//}

//spread
const kopie = [...rekeningen]
kopie.eigenaar = "herman brood"
kopie.saldo = 1000
console.log(kopie.eigenaar)
console.log(kopie.saldo)

const nieuweName = {...rekeningen, eigenaar: "herman de jong"}
console.log(nieuweName)

//const nieuweRekening = rekeningen.map((rekeningen) => {
//return[...rekeningen, saldo:  1000]
//})
