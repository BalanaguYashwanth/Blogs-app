import React, { useState } from 'react'
import Navbar from './navbar'
import { Button, makeStyles } from '@material-ui/core'
import '../App.css'

const usestyles = makeStyles({
    input: {
        padding: 15,
        width: 600,
        borderRadius: 5,
        display: 'block',
        margin: 5
    }
})

export default function explore() {

    const styles = usestyles()
    const [step, setStep] = useState(1)
    const [animation, setAnimation] = useState('animation')
    const [buttonAnimation, setButtonAnimation] = useState('button')

    function button() {
        return (
            <Button variant='contained' onClick={() => {
                setAnimation('animation1')
                setTimeout(function () {
                    setAnimation('animation')
                    setStep(step + 1)
                }, 1000);

            }} > Next </Button>
        )
    }

    function step1() {
        return (
            <div className={animation}>
                <p> Step 1 </p>
                <button className={buttonAnimation} onClick={ () => setButtonAnimation('buttonanimation') } > 5K price </button>
                <input type="text" placeholder='enter your name' className={styles.input} />
                {button()}
            </div>
        )
    }

    function step2() {
        return (
            <div className={animation}>
                <p> Step 2 </p>
                
                <input type="text" placeholder='enter your email' className={styles.input} />
                {button()}
            </div>
        )
    }

    function step3() {
        return (
            <div className='animation'>
                <p> Step 3 </p>
                <input type="text" placeholder='what you are looking for' className={styles.input} />
                {button()}
            </div>
        )
    }

    return (
        <div >
            <Navbar />
            <div className='middle'>
                <div>
                    {step == 1 && step1()}
                    {step == 2 && step2()}
                    {step == 3 && step3()}
                </div>
            </div>

        </div>
    )
}

