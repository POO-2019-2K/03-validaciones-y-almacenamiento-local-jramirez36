export default class Employee
{
    constructor(employee)
    {
        this._cita = employee.cita;
        this._name = employee.name;
        this._hora = employee.hora;
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
    getCitaAsString() 
    {
        let dateN = this._dias[this._cita.getDay()-1] +" "+ this._cita.getDate() + " de " + this._months[this._cita.getMonth()] + " del " + this._cita.getFullYear();
        return dateN;
    }
    getCita()
    {
        let oneDays = 86400000;
        let differenceMs = new Date() - this._cita;
        if(differenceMs < 0 )
        {
            return Math.round(differenceMs / oneDays * -1);
        }
        else
        {
            return "-";
        }
        
    }
    get name()
    {
        return this._name;
    }
    get hora()
    {
        return this._hora;
    }
    get cita()
    {
        return this._cita;
    }
    get dia()
    {
        return this._dias[this._cita.getDay()-1];
    }
}