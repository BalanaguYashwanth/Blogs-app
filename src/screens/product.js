import React, { useState, useEffect } from 'react'
import { Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Grid, Button, CircularProgress } from '@material-ui/core'
import '../App.css'
import Realme from '../RealmeNarzo.jpg'
import Redmi from '../redmi.jpeg'
import Navbar from '../screens/navbar'
import axios from 'axios'

const useStyles = makeStyles({
    card: {
        maxWidth: 350,
    },

    media: {
        height: 350,
    },

    container: {
        backgroundColor: 'rgb(192, 192, 192)',
        borderRadius: 10,
    },


    tags: {
        border: '2px solid black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 1,
        background: 'linear-gradient(-15deg, #ff7a18 10%, #af002d 92.07%, #af002d 99.07%)',
        color: 'white',
        fontWeight: "bold",
        backgroundRepeat: 'no-repeat',
        // backgroundImage: 'linear-gradient( -45deg , rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent )',
        // animation: 'move 2s linear infinite',
    },


    litags: {
        margin: '0.5em 0.2em',
        textDecoration: 'none',
        color: 'inherit',
    },

    glass: {
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
        borderRadius: '5px',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: ' blur(5)',
    }

})

export default function product() {
    const styles = useStyles()
    const [datas, setDatas] = useState('')

    useEffect(async () => {
        await axios.get('http://127.0.0.1:8000/api/product/')
            .then(res => {
                setDatas(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    function tags(tags) {
        //console.log('tags',tag)
        return (
            <Grid container justifyContent='center' spacing={1} style={{ flexGrow: 1 }}>
                {
                    tags && Object.keys(tags).map((key, index) => (

                        <Grid key={index} item xs={6}  >
                            <div className='container'>
                                <div variant='contained'  className='skill' style={{ width : tags[key]  }} > <Typography > {key}   </Typography>  </div>
                            </div>
                        </Grid>

                    ))
                }

                {/* 
                <Grid item xs={6}  >
                    <div className='container'>
                        <div vairant='contained' className='skill ' style={{ width: '96%' }} > <Typography className='skill1'> {tags.Camera} </Typography>  </div>
                    </div>
                </Grid>
                <Grid item xs={6}  >
                    <Typography vairant='contained' className={styles.tags}> {tags.Display} </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography vairant='contained' className={styles.tags}> {tags.Software} </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography vairant='contained' className={styles.tags}> {tags.Performance} </Typography>
                </Grid> */}
            </Grid>
        )
    }

    return (
        <div>
            <Navbar />

            <div style={{ marginTop: 50 }}>
                <div style={{ textAlign: 'center', alignItems: 'center', }} >

                    <Typography variant='h3' style={{ fontWeight: 'bold', }} gutterBottom >  Best Smartphone under 10k </Typography>
                    {/* Rating Scale: 1 = Poor, 2 = Below Average, 3 = Average, 4 = Above Average, 5 = Excellent */}

                    <div style={{ padding: 20, overflowX: 'hidden' }} >


                        {/* <Grid container justifyContent='center' spacing={3} style={{ flexGrow: 1 }}> */}

                            {/* <Grid item md={3} >

                                <Card className={styles.card} >
                                    <CardActionArea >
                                        <CardMedia
                                            className={styles.media}
                                            image={Realme}
                                            title='realme'
                                        />
                                        <CardContent  >
                                            <Typography gutterBottom variant="h5" style={{ fontWeight: 'bold' }} component="h2">
                                                Realme Narzo 30
                                            </Typography>
                                            {tags('Gaming', 'Camera', 'Low price', 'No ads')}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid> */}

                            <Grid container justifyContent='center' spacing={3} style={{ flexGrow: 1 }}>
                            {
                                datas && datas.map((data, index) => (
                                    <div key={index}>
                                            <Grid item  style={{margin:10}} >
                                                <Card className={styles.card}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={styles.media}
                                                            image={data.images}
                                                            tile={data.modelname}
                                                        />
                                                        <CardContent>
                                                            <Typography style={{ fontWeight: 'bold', }} gutterBottom variant="h5" component="h2">
                                                                {data.modelname}
                                                            </Typography>
                                                            {tags(data.tags)}
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        
                                    </div>
                                ))
                            }
                            </Grid>

                            {/* <Grid item md={3} >
                                <Card className={styles.card} >
                                    <CardActionArea >
                                        <CardMedia
                                            className={styles.media}
                                            image={Redmi}
                                            title='redmi'
                                        />
                                        <CardContent>
                                            <Typography style={{ fontWeight: 'bold', }} gutterBottom variant="h5" component="h2">
                                                Redmi Note 9 Prime
                                            </Typography>
                                            {tags('Gaming', 'Camera', 'Low price', 'No ads')}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item md={3} >
                                <Card className={styles.card} >
                                    <CardActionArea >
                                        <CardMedia
                                            className={styles.media}
                                            image={Realme}
                                            title='realme'
                                        />
                                        <CardContent>
                                            <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
                                                Realme 9
                                            </Typography>
                                            {tags('Gaming', 'Camera', 'Low price', 'No ads')}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid> */}

                        {/* </Grid> */}

                        <Typography variant='h3' style={{ fontWeight: 'bold', marginTop: 30, marginBottom: 30, }} gutterBottom >Best Smartphone under 20k</Typography>

                        <Grid container justifyContent="center" spacing={3} style={{ flexGrow: 1 }} >
                            <Grid item md={3} >
                                <Card className={styles.card} >
                                    <CardActionArea >
                                        <CardMedia
                                            className={styles.media}
                                            image={Realme}
                                            title='realme'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item md={3} >
                                <Card className={styles.card} >
                                    <CardActionArea >
                                        <CardMedia
                                            className={styles.media}
                                            image={Redmi}
                                            title='redmi'
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>

    )
}
