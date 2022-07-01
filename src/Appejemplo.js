
import{useState} from"react";

const Primercomponente =() =>{
//React tiene una funcion interna llamada useState
//el nombre de la funcion debe empezar con mayuscula
//para poder usar useState debemos importarla desde react
//Al usar useState la forma en la cual creamos una variable y segundo
//la funcion que se encarga de cambiar el estado
//count = es la variable que usaremos para poder demostrar el valor
//setCount = funcion que se encarga de asignar el valor

const [ count, setCount] = useState(0);
   //esta funcion retorna una vista
   //en react usamos return () para indicar lo que esta dentro del parentesis
   const sumar = () => setCount(count +1);
   const restar = () =>setCount(count -1);

    return(
        <div>
            <h1>hola mundo{count}</h1>
            <h3>hola grupo8</h3>
        <button onClick ={sumar}>sumar</button>
        <button onClick ={restar}>restar</button>
        
        </div>
    )
    }
    export default (Primercomponente);