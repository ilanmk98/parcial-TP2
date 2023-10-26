class Model{
    constructor(){
        this.numeros=[]
    }

    obtenerNumeros=()=>
    {
        return this.numeros
    }

    guardarNumero=(numero)=>
    {
        console.log(numero);
        console.log(Number(numero.numero));
        try
        {
            this.numeros.push(Number(numero.numero))
            console.log(this.numeros);
        }
        catch(error)
        {
            console.log(error);
        }
        
    }


}

export default Model
