import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [dbLoaded, setDbLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Could not get tasks from DB.");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setDbLoaded(true);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setDbLoaded(true);
            })
        }, 500)
    }, [url]);

    return {data, dbLoaded, error}
}

export default useFetch