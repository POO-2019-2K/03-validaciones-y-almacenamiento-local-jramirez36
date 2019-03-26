export default class Employee
{
    constructor(employee)
    {
        this._name = employee.name;
        this._trabajador = employee.trabajador;
        this._sueldo = employee.sueldo;
        this._nacimiento = employee.nacimiento;
        this._contratacion = employee.contratacion;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }
    //retorna nacimiento
    getNacimientoAsString() 
    {
        let dateN = this._nacimiento.getDate() + "/" + this._months[this._nacimiento.getMonth()] + "/" + this._nacimiento.getFullYear();
        return dateN;
    }
    getContratacionAsString() 
    {
        let dateC = this._contratacion.getDate() + "/" + this._months[this._contratacion.getMonth()] + "/" + this._contratacion.getFullYear();
        return dateC;
    }
    getNacimiento()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._nacimiento;
        return Math.round(differenceMs / oneyears);
    }
    //retorna antiguedad
    getAntiguedad()
    {
        let oneyears = 31540000000;
        let differenceMs = new Date() - this._contratacion;
        return Math.round(differenceMs / oneyears);
    }
    get name()
    {
        return this._name;
    }
    get trabajador()
    {
        return this._trabajador;
    }
    get sueldo()
    {
        return this._sueldo;
    }
    get nacimiento()
    {
        return this._nacimiento;
    }
    get contratacion()
    {
        return this._contratacion;
    }
}