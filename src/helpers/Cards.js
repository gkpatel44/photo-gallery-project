import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards(props) {

  return (
    <Card sx={{ width: 'max-content', margin: '0 auto' }}>

      <CardMedia
        alt="profile"
        component="img"
        height="auto 100"
        border-radius="0px"
        image={props.images}
      />
      
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.data.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.data.userID}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>

    </Card>
  );
}
