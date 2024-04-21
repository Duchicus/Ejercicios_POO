// Ejercicio 1

class Persona {
    constructor(nombre, edad , género) {
        this.nombre = nombre;
        this.edad = edad;
        this.género = género;
    }
    obtDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}`);
    }  
}

let persona = new Persona("Manel","22","Hombre")
persona.obtDetalles()


class Estudiante extends Persona {
    constructor(nombre, edad , género, curso, grupo) {
        super(nombre, edad, género)
        this.curso = curso;
        this.grupo = grupo;
    }
    obtDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}, Curso: ${this.curso}, Grupo: ${this.grupo}`);
    }  
}

let estudiante = new Estudiante("Manel","22","Hombre","Fullstack", "Fulltime")
estudiante.obtDetalles()


class Profesor extends Persona {
    constructor(nombre, edad , género, asignatura, nivel) {
        super(nombre, edad, género)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    obtDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}, Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`);
    }  
}

let profesor = new Profesor("Manel","22","Hombre","Programacion", "Alto")
profesor.obtDetalles()


// Ejercicio 2

class Warrior {
    constructor(life, power){
        this.life = life
        this.power = power
    }
    attack(){
        return this.power
    }
    defend(damage){
        return this.life - damage
    }
}

class Maya extends Warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkColaCao(){
        return this.power + 10
    }
}

class Aztec extends Warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkNesquik(){
        return this.life + 10
    }
}


