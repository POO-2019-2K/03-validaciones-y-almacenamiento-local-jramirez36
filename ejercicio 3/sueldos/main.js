import sueldo from "./sueldo.js";
import Employee from "./Employee.js";
class Main {
    constructor() {

        this._sueldos = new sueldo(document.querySelector("#sueldos"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) {
                let trabajador = document.querySelector("#trabajador").value;
                let name = document.querySelector("#name").value;
                let sueldo = document.querySelector("#sueldo").value;
                let nacimientoI= document.querySelector("#nacimiento").value;
                nacimientoI = nacimientoI.split("-");
                let nacimiento = new Date(nacimientoI[0], nacimientoI[1] - 1, nacimientoI[2]);
                let contratacioni = document.querySelector("#contratacion").value;
                contratacioni = contratacioni.split("-");
                let contratacion = new Date(contratacioni[0], contratacioni[1] - 1, contratacioni[2]);
                let objEmployee = 
                {
                    trabajador: trabajador,
                    name: name,
                    sueldo: sueldo,
                    nacimiento: nacimiento,
                    contratacion: contratacion,
                };
                let employee = new Employee(objEmployee);
                this._sueldos.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
