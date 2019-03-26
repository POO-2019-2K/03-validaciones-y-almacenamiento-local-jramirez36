import Employee from "./Employee.js";
export default class sueldo {
    constructor(tablasueldo, tablainfo) {
        this._tablasueldo = tablasueldo;
        this._tablainfo = tablainfo;
        this._contadorp = 0;
        this._contadorm = 0;
        this._contadorg = 0;
        this._contadorSueldo = 0;
        this._contadorEmpleados = 0;
        //variables edad promedio
        this._edad = 0;
        this._edadPromedio = 0;
        this._trabajadores = 0;
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
            employee.nacimiento = new Date(employee.nacimiento);
            employee.contratacion = new Date(employee.contratacion);
            this._showInTable(new Employee(employee));
        })
    }
    _showInTable(employee) 
    {
        let row = this._tablasueldo.insertRow(-1);
        let cellTrabajador = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellFechaNacimiento = row.insertCell(2);
        let cellFechaContratacion = row.insertCell(3);
        let cellSueldo = row.insertCell(4);
        let cellEdad = row.insertCell(5);
        let cellAntiguedad = row.insertCell(6);
        cellTrabajador.innerHTML = employee.trabajador;
        cellName.innerHTML = employee.name;
        cellFechaNacimiento.innerHTML = employee.getNacimientoAsString();
        cellFechaContratacion.innerHTML = employee.getContratacionAsString();
        cellSueldo.innerHTML = employee.sueldo;
        cellEdad.innerHTML = employee.getNacimiento();
        cellAntiguedad.innerHTML = employee.getAntiguedad();
        let sueldo = employee.sueldo;
        let edadPromedio = employee.getNacimiento();
        let sueldoPromedio = 0;
        //verificacion de salarios
        if (sueldo <= 10000) {
            this._contadorp++;
            this._contadorSueldo = Number(this._contadorSueldo) + Number(sueldo);
            this._contadorEmpleados++;
        } else if (sueldo <= 20000) {
            this._contadorm++;
            this._contadorSueldo = Number(this._contadorSueldo) + Number(sueldo);
            this._contadorEmpleados++;
        } else if (sueldo > 20000) {
            this._contadorg++;
            this._contadorSueldo = Number(this._contadorSueldo) + Number(sueldo);
            this._contadorEmpleados++;
        } 
            sueldoPromedio =  this._contadorSueldo / this._contadorEmpleados;
        //sacar edadPromedio
        this._edad += Number(edadPromedio);
        this._trabajadores++;
        this._edadPromedio = this._edad / this._trabajadores;
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorp;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorm;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorg;
        this._tablainfo.rows[4].cells[1].innerHTML = sueldoPromedio;
        this._tablainfo.rows[5].cells[1].innerHTML = this._edadPromedio;
        let objEmployee = {
            trabajador: employee.trabajador,
            name: employee.name,
            sueldo: employee.sueldo,
            nacimiento: employee.nacimiento,
            contratacion: employee.contratacion,
        }
        this._employees.push(objEmployee);
    }
    addEmployee(employee) {
            this._showInTable(employee);
            localStorage.setItem("employees", JSON.stringify(this._employees));
        }
}