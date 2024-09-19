import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebase'
import { onValue, push, ref, set } from 'firebase/database';
const useShuttle = () => {
    const [shuttles, setShuttles] = useState([])

    useEffect(() => {
        const readShuttles = ref(database, 'shuttles');
        // Esto se ejecutará siempre que haya un cambio en 'shuttles' en la base de datos
        const unsubscribe = onValue(readShuttles, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                
                const shuttlesArray = Object.keys(data).map((key) => ({
                  id: key,  // Incluye el ID como parte de cada shuttle
                  ...data[key]  // Incluye los datos del shuttle
                }));
        
                // Actualiza el estado con el array de shuttles
                setShuttles(shuttlesArray);
                console.log(shuttlesArray)
            }

           
        });

        // Limpiar la suscripción cuando el componente se desmonte
        return () => unsubscribe();
    }, []); // Ejecuta solo al montar el componente


    const addShuttle = async (newSshuttle) => {

        const shuttlesListRef = ref(database, 'shuttles');
        const newPostRef = push(shuttlesListRef);
        set(newPostRef, newSshuttle);
    }


    return (
        {
            addShuttle,
            database,
            shuttles
        }
    )
}

export default useShuttle