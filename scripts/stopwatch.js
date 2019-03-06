
// https://codepen.io/_Billy_Brown/pen/dbJeh?editors=1010



class Cronometro {
    constructor(mostrar, resultados) {
        console.log("El constructor anda bien.");
        this.mostrar = mostrar;
        this.resultados = resultados;
        this.funcionando = false;
        this.vueltas = [];
        this.reinicio();
        this.imprimir(this.tiempos);
    }    

    reinicio(){
        this.tiempos = [ 0, 0, 0];
    }
    comenzar()  {
//        if(!this.tiempo) this.tiempo = this.performance.now();
        console.log("funcionando es " + this.funcionando);
        if(!this.funcionando) {
            this.funcionando = true;
            // CHEQUEAR LINEA QUE ES RARISIMA
//            requestAnimationFrame(this.step.bind(this));
            console.log("funcionando es " + this.funcionando);

        }
    }
    vuelta() {
        let tiempo = this.tiempos;
        let li = document.createElement('li');
        li.innerText = this.darFormato(times);
        this.resultados.appendChild(li);

    }
    parar() {
        console.log("funcionando es " + this.funcionando);
        this.funcionando = false;
        console.log("funcionando es " + this.funcionando);
    }

    imprimir() {
        this.mostrar.innerText = this.darFormato(this.tiempos);
    }
    darFormato(tiempos) {
        
        return `\
        ${pad0(tiempos[0], 2)}:\
        ${pad0(tiempos[1], 2)}:\
        ${pad0(Math.floor(tiempos[2]), 2)}`;
    }
    
}



let objetoCronometro = new Cronometro();

objetoCronometro.comenzar();
objetoCronometro.parar();
