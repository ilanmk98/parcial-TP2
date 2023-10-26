import express from 'express'
import Controlador from '../controlador/numeros.js'

class Router{
    constructor(){
        this.router=express.Router()
        this.controlador=new Controlador()
    }

    start()
    {
        this.router.get('/entrada',this.controlador.obtenerNumeros)
        this.router.post('/entrada',this.controlador.guardarNumero)
        this.router.get('/promedio',this.controlador.obtenerPromedio)
        this.router.get('/minmax',this.controlador.minMax)
        this.router.get('/cantidad',this.controlador.cantidad)

        return this.router
    }
}

export default Router