import React, { useEffect, useState } from 'react';

const ClockFuncional = () => {
    //El constructor se sustituye por un objeto.
    const user = { 
        fecha: new Date(), 
        edad: 0, 
        nombre:"Alex", 
        apellidos: "EC" 
    };

    /**
     * Los métodos de ciclo de vida DidMount y WillUnmount que manejan los años se 
     * incluyen en un useEffect().
    */
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        // Asignamos a la constante id, el resultado devuelto por setInterval, 
        // sirve como identificador unico para la funcion (setInterval en este caso)
        const id = setInterval(() => {
            // En el intervalo descrito por el segundo parametro de setInterval (1000)
            // se ejecuta la function setTime haciendo un increment del valor previo de time en 1
            setTime(prev => parseInt(prev) + 1);
        }, 1000);

        // Cuando se desmonte el componente, useEffect ejecutara la funcion que devuelve
        // el return () => { clearInterval }
        // Utilizamos esa funcion (clearInterval) para indicarle al navegador que
        // puede destruir la funcion setInterval antes declarada y dejar de actualizar 
        // el contador
        return () => {
            clearInterval(id);
        };
    }, []);


    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {user.nombre} {user.apellidos}
            </h3>
            <h1>
                Edad: {time}
            </h1>
        </div>
    )
};

export default ClockFuncional;
