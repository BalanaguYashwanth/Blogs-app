import React from 'react'
import { Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Grid, Button } from '@material-ui/core'
import '../App.css'
import Realme from '../RealmeNarzo.jpg'
import Redmi from '../redmi.jpeg'
import Navbar from '../screens/navbar'

const useStyles = makeStyles({
    card: {
        maxWidth: 350,
    },
    media: {
        height: 350,
    },
    tags: {
        border: '2px solid black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 1,
        background: 'linear-gradient(-15deg, #ff7a18 10%, #af002d 92.07%, #af002d 99.07%)',
        color: 'white',
        fontWeight: "bold",
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

    function tags(name1, name2, name3, name4) {
        return (
            <Grid container justifyContent='center' spacing={1} style={{ flexGrow: 1 }}>
                <Grid item xs={6}>
                    <Typography vairant='contained' className={styles.tags}> {name1} </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography vairant='contained' className={styles.tags}> {name2} </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography vairant='contained' className={styles.tags}> {name3} </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography vairant='contained' className={styles.tags}> {name4} </Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <div>
            
            <Navbar />
            

            <div style={{ marginTop: 100 }}>
                <div style={{ textAlign: 'center', alignItems: 'center', }} >

                    <Typography variant='h3' style={{ fontWeight: 'bold', }} gutterBottom >  Best Smartphone under 10k </Typography>

                    <div style={{ padding: 20, overflowX: 'hidden' }} >

                        <Grid container justifyContent='center' spacing={3} style={{ flexGrow: 1 }}>

                            <Grid item md={3} >

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
                            </Grid>


                        </Grid>
                        <Typography variant='h3' style={{ fontWeight: 'bold', margin: 40 }} gutterBottom >  Best Smartphone under 20k </Typography>

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
