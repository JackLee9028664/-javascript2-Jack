let container = document.querySelector("#container")
// propiety van eigenschappen
let rekening = {
    eigenaar: "jaden",
    Saldo: 20,
    nummer: "nling",
    geblokkeerd: false,
    pincode: "8575",
    dagLimit: 500,
    transacties: [],
    toonSaldo() {
        return this.Saldo
    },

    changeSaldo(amount) {
        this.Saldo += amount
 this.transacties.push(amount)
        return `het bedrag ${amount} is toegevoegd aan uw saldo`
    }


}

const {eigenaar, saldo} = rekening

console.log(rekening.transacties)

rekening.changeSaldo(1000) 
rekening.changeSaldo(1000) 


console.log (rekening.changeSaldo())

container.innerHTML = `<h2>${rekening.eigenaar}</h2>
<h3> ${rekening.Saldo}</h3>
<p>${rekening.nummer}</p>

`