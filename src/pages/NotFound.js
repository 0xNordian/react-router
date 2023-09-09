import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    // let count = useRef(0);

    const [counter, setCounter] = useState(0);

    const counterHandler = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        document.title = '404 Not Found'
        // console.log("Not Found mounted")
        return () => {
            document.title = 'Jobarouter'
            // console.log("Not Found unmounted")
        }
    }, [])

    return (
        <div className="not-found">
            <img src="/john-travolta-tra-jt-transparent.gif" alt="404-error-page-not-found" />
            {/* <img src="/crying-cowbow-emoji.gif" alt="crying-emoji"/> */}
            <h2>Ups! Page Not Found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, harum.</p>

            {/* <button type="button" onClick={() => count.current += 1}>Test</button>
            <p>{count.current}</p> */}

            <button type="button" onClick={counterHandler}>Test</button>
            <p>{counter}</p>

            <div>Please go back to the <Link to="/"><span>Homepage</span></Link>.</div>
        </div>
    )
}

export default NotFound