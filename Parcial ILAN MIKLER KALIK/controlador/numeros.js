import Servicio from '../servicio/numeros.js'

class Controlador {
constructor(){
    this.servicio = new Servicio()
}

    obtenerNumeros = (req,res)=>{
        const numeros = this.servicio.obtenerNumeros()
        res.json(numeros)
    }
    
    guardarNumero=(req,res)=>{
        const numero = req.body
        const numeroGuardado = this.servicio.guardarNumero(numero)
        res.redirect('/pagina-exito.html')
        res.json(numeroGuardado)
       
    }

    obtenerPromedio=(req,res)=>{
        const promedio = this.servicio.obtenerPromedio()
        res.json(promedio)
    }

    minMax=(req,res)=>{
        const minMax = this.servicio.minMax()
        res.json(minMax)
    }
    cantidad=(req,res)=>{
        const cantidad = this.servicio.cantidad()
        res.json(cantidad)
    }

   
    }



export default Controlador