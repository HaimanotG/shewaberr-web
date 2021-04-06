import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export const Product = () => {

  return (
    <Card className="w-52 shadow-none">
      <CardActionArea>
        <CardMedia
          className="h-72"
          image="https://s3-alpha-sig.figma.com/img/4983/83ea/09d143a5be4ec917ae2d3f13ed7b0be3?Expires=1618790400&Signature=PaVoB3dQEDpo5A1LxgW1lYAwBhxlSE4k-5p9HnCz7TgwkudALtGPhnDBv1dOBLlME3cI5ACNm7T~YK-3cceCCfUnNvo~UsdgXs7~-YTK~mWu83-xgsgfz0p4zqPLkBW8vtB9dKTJEZ1sIIyjiBWZAXpdWVVOP3bJXvXKw~ZfJTlyrOUHROMjTquti05YIOwYJUEY0G1cgz7Bqpz-mY7aA1jL1qyfhfAweD2O2FKIAGiyDNc3f9g0ySDBdyXPrfiqore3eLXxV0ikFFEz0aKjSjFco6QlvhUZTjYQZEqRi58gfueGDXJcyzAZQ6nBXY3ET4lvu8pHae6YmSCKJtdGoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amar the Brave
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Matt Zhang
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Br 155
        </Button>
      </CardActions>
    </Card>
  );
}
