import React from 'react'
import { Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Grid } from '@material-ui/core'
import '../App.css'
import Realme from '../RealmeNarzo.jpg'
import Redmi from '../redmi.jpeg'

const useStyles = makeStyles({
    card: {
        maxWidth: 350,
    },
    media: {
        height: 350,

    },

})

export default function product() {
    const styles = useStyles()

    return (
        <div style={{ textAlign: 'center', alignItems: 'center', marginTop: 100}}>
            <Typography variant='h3' style={{ fontWeight: 'bold' }} gutterBottom >  Best Smartphone under 10k </Typography>

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

    )
}
