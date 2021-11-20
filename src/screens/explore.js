import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import axios from 'axios'
import { Button, makeStyles, Grid } from '@material-ui/core'
import '../App.css'

const usestyles = makeStyles({
    input: {
        padding: 15,
        width: 300,
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
    const [buttonselected, setButtonselected] = useState('button')
    const [bool, setbool] = useState(false)
    const [select, setSelect] = useState()
    const lists = [{ id: 1, title: '5k price' }, { id: 2, title: '10k price' }, { id: 3, title: '15k price' }, { id: 4, title: '20k price' }]
    const specs = [{id:1,title:'Gaming'},{id:2,title:'Non Gaming'},{id:3,title:'Camera'},{id:4,title:'Battery'}]
    const genders = [{id:1, title:'Sister or Women'},{id:2, title:'Parents'},{id:3,title:'Brother or Men'}]



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

    function selected(id) {
        setSelect(id)
    }

    function step4() {
        return (
            <div className={animation}>
                <p style={{ fontWeight: 'bold' }}> Step 4 </p>
                <input type="text" placeholder='Enter your Name' className={styles.input} />
                {button()}
            </div>
        )
    }

    function step5() {
        return (
            <div className={animation}>
                <p style={{ fontWeight: 'bold' }}> Step 5 </p>
                <input type="text" placeholder='Enter your email' className={styles.input} />
                {button()}
            </div>
        )
    }

    function step1() {
        return (
            <div className={animation}>
                <div >
                    <h3 style={{ fontWeight: 'bold' }} > Step 1 </h3>
                    <Grid container spacing={3} directon="row" style={{ flexGrow: 1 }} justifyContent="center" alignItems="center">
                        {
                            lists.map((list,index) => (
                                <div key={index}>
                                    <Grid item  >
                                        <button className={ select == list.id ? "buttonselected": "button" } onClick={() => { selected(list.id) }} >  {list.title} </button>
                                    </Grid>
                                </div>
                            ))
                        }
                    </Grid>
                    <br />
                    {button()}
                </div>
            </div>
        )
    }

    function step2() {
        return (
            <div className={animation}>
                <div >
                    <h3 style={{ fontWeight: 'bold' }} > Step 2 </h3>
                    <Grid container spacing={3} directon="row" style={{ flexGrow: 1 }} justifyContent="center" alignItems="center">
                    {
                        specs && specs.map( (spec,index) => (
                            <Grid item  key={index}>
                                <button className={ select == spec.id ? "buttonselected": "button" } onClick={() => { selected(spec.id) }}>  {spec.title} </button>
                            </Grid>   

                        ) )
                    }
                    </Grid>
                    <br />
                    {button()}
                </div>
            </div>
        )
    }

    function step3() {
        return (
            <div className={animation}>
                <div >
                    <h3 style={{ fontWeight: 'bold' }} > Step 3 </h3>
                    <Grid container spacing={3} directon="row" style={{ flexGrow: 1 }} justifyContent="center" alignItems="center">
                        {
                            genders && genders.map( (gender,index) => (
                                <Grid item key={index} >
                                    <button className={select == gender.id ? "buttonselected" : "button"}    onClick={() => selected(gender.id)} > {gender.title} </button>
                                 </Grid>   
                            ) )
                        } 
                    </Grid>
                    <br />
                    {button()}
                </div>
            </div>
        )
    }


    return (
        <div  >
            <Navbar />
            <div className='middle'>
                {step == 1 && step1()}
                {step == 2 && step2()}
                {step == 3 && step3()}
                {step == 4 && step4()}
                {step == 5 && step5()}
            </div>
        </div>
    )
}

