import consulta from "./consulta.js";
import Employee from "./Employee.js";
class Main {
    constructor() 
    {
        this._consulta = new consulta(document.querySelector("#citas"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            if (form.checkValidity() === true) 
            {
                let name = document.querySelector("#name").value;
                let hora = document.querySelector("#hora").value;
                let citai = document.querySelector("#cita").value;
                citai = citai.split("-");
                let cita = new Date(citai[0], citai[1] - 1, citai[2]);
                let objEmployee = 
                {
                    name: name,
                    hora: hora,
                    cita: cita,
                };
                let employee = new Employee(objEmployee);
                this._consulta.addEmployee(employee);
            }
        })
    }
}
let m = new Main();
