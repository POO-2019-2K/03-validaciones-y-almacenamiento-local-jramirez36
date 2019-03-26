import Employee from "./Employee.js";
export default class consulta {
    constructor(tablaCitas, tablainfo) {
        this._tablaCitas = tablaCitas;
        this._tablainfo = tablainfo;
        this._contadorL = 0;
        this._contadorM = 0;
        this._contadorMI = 0;
        this._contadorJ = 0;
        this._contadorV = 0;
        this._contadorS = 0;
        this._contadorD = 0;
        //variables localstorage
        this._employees = [];
        this._initTable();
    }

    _initTable() {
        //localStorage.removeItem("employees")
        let employees = JSON.parse(localStorage.getItem("employees"));
        if(employees === null)
        {
            return ;
        }
        employees.forEach((employee, index) => {
            employee.cita = new Date(employee.cita);
            this._showInTable(new Employee(employee));
        })
    }
    _showInTable(employee) 
    {
        let row = this._tablaCitas.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellHora = row.insertCell(1);
        let cellNombre = row.insertCell(2);
        let cellDias = row.insertCell(3);
        cellFecha.innerHTML = employee.getCitaAsString();
        cellHora.innerHTML = employee.hora;
        cellNombre.innerHTML = employee.name;
        cellDias.innerHTML = employee.getCita();
        let dia = employee.dia;
        //verificacion de salarios
        if (dia === "Lunes") 
            {
            this._contadorL++;
            } 
        else if (dia === "Martes") 
            {
            this._contadorM++;
            }
        else if (dia === "Miercoles") 
            {
            this._contadorMI++;
            } 
        else if (dia === "Jueves") 
            {
            this._contadorJ++;
            } 
        else if (dia === "Viernes") 
            {
            this._contadorV++;
            } 
        else if (dia === "Sabado") 
            {
            this._contadorS++;
            } 
        else if (dia === "Domingo") 
            {
            this._contadorD++;
            } 
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorL;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorM;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorMI;
        this._tablainfo.rows[4].cells[1].innerHTML = this._contadorJ;
        this._tablainfo.rows[5].cells[1].innerHTML = this._contadorV;
        this._tablainfo.rows[6].cells[1].innerHTML = this._contadorS;
        this._tablainfo.rows[7].cells[1].innerHTML = this._contadorD;
        let objEmployee = {
            cita: employee.cita,
            name: employee.name,
            hora: employee.hora,
        }
        this._employees.push(objEmployee);
    }
    addEmployee(employee) {
            this._showInTable(employee);
            localStorage.setItem("employees", JSON.stringify(this._employees));
        }
}