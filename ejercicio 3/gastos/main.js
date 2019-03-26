import gastos from "./gastos.js";
import Employee from "./Employee.js";
class Main {
    constructor() 
    {
        this._gasto = new gastos(document.querySelector("#gastos"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let Tipo = document.querySelector("#Tipo").value;
                let concepto = document.querySelector("#concepto").value;
                let precio = document.querySelector("#Precio").value;
                let fechai = document.querySelector("#Fecha").value;
                fechai = fechai.split("-");
                let fecha = new Date(fechai[0], fechai[1] - 1, fechai[2]);
                let objEmployee = 
                {
                    fecha: fecha,
                    Tipo: Tipo,
                    concepto: concepto,
                    precio: precio,
                };
                let employee = new Employee(objEmployee);
                this._gasto.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
