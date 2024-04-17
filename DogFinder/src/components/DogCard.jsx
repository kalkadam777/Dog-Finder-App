import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DogCard({el}) {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={el}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dog
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}