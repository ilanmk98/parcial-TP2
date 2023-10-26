import Model from '../model/numeros.js'

class Servicio {
    constructor(){
        this.model = new Model()
    }
    
        obtenerNumeros = ()=>{
           const numeros = this.model.obtenerNumeros()
            return {numeros}
        }
        
        guardarNumero=(numero)=>{
            const numeroGuardado = this.model.guardarNumero(numero)
            return numeroGuardado
        }

        obtenerPromedio=()=>{
            const numeros = this.model.obtenerNumeros()
            const cantNumeros = numeros.length
            let totalNumeros=0
            numeros.forEach(numero=>{
                totalNumeros+=numero
            })
            if(cantNumeros>0)
            { 
                const promedio=totalNumeros/cantNumeros
                return {promedio}
            }
            else
            return "No hay numeros cargados"
        }

        minMax=()=>{
            const numeros = this.model.obtenerNumeros()
            let respuesta={}
            respuesta.min = Math.min(...numeros)
            respuesta.max = Math.max(...numeros)
            return respuesta
        }

        cantidad=()=>{
            return this.model.obtenerNumeros().length
        }
    
    }
    
    export default Servicio