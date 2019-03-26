import Employee from "./Employee.js";
export default class consulta {
    constructor(tablaCitas, tablainfo) {
        this._tablaCitas = tablaCitas;
        this._tablainfo = tablainfo;
        this._contadorT = 0;
        this._contadorH = 0;
        this._contadorA = 0;
        this._contadorO = 0;
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
            employee.fecha = new Date(employee.fecha);
            this._showInTable(new Employee(employee));
        })
    }
    _showInTable(employee) 
    {
        let row = this._tablaCitas.insertRow(-1);
        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);
        cellFecha.innerHTML = employee.getFechaAsString();
        cellTipo.innerHTML = employee.Tipo;
        cellConcepto.innerHTML = employee.concepto;
        cellMonto.innerHTML = employee.precio;
        let Tipo = employee.Tipo;
        let Gastos = employee.precio;
        //verificacion de salarios
        if (Tipo === "Transporte") 
            {
            this._contadorT = Number(this._contadorT) + Number(Gastos);
            } 
        else if (Tipo === "Hospedaje") 
            {
                this._contadorH = Number(this._contadorH) + Number(Gastos);
            }
        else if (Tipo === "Alimento") 
            {
                this._contadorA = Number(this._contadorA) + Number(Gastos);
            } 
        else if (Tipo === "Otros") 
            {
                this._contadorO = Number(this._contadorO) + Number(Gastos);
            } 
        
        //tabla pequeña de valores
        this._tablainfo.rows[1].cells[1].innerHTML = this._contadorT;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorH;
        this._tablainfo.rows[3].cells[1].innerHTML = this._contadorA;
        this._tablainfo.rows[4].cells[1].innerHTML = this._contadorO;
        let objEmployee = {
            fecha: employee.fecha,
            Tipo: employee.Tipo,
            concepto: employee.concepto,
            precio: employee.precio,
        }
        this._employees.push(objEmployee);
    }
    addEmployee(employee) {
            this._showInTable(employee);
            localStorage.setItem("employees", JSON.stringify(this._employees));
        }
}