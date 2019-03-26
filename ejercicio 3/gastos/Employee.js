export default class Employee
{
    constructor(employee)
    {
        this._fecha = employee.fecha;
        this._Tipo = employee.Tipo;
        this._concepto = employee.concepto;
        this._precio = employee.precio;
        this._months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octtubre",
            "Noviembre",
            "Diciembre"
        ];
        this._dias = [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo"
        ];
    }
    //retorna dia faltante
    getFechaAsString() 
    {
        let dateN = this._dias[this._fecha.getDay()-1] +" "+ this._fecha.getDate() + " de " + this._months[this._fecha.getMonth()] + " del " + this._fecha.getFullYear();
        return dateN;
    }
    get fecha()
    {
        return this._fecha;
    }
    get Tipo()
    {
        return this._Tipo;
    }
    get concepto()
    {
        return this._concepto;
    }
    get precio()
    {
        return this._precio;
    }
}