import React, { useContext } from 'react';
import { userContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';




const UserProfile = () => {
    const [loggedInuser, setloggedInuser] = useContext(userContext)
    console.log(loggedInuser);

    const useStyles  = {
        maxWidth: "345px",
        margin:'auto',
    }

    const center =  {
        margin: "auto",
        padding: "10px"
      }
    return (
        <div className="container ">
            <h3 className="text-danger text-center mt-3">
                Profile
            </h3>
            <Card style={useStyles } className="mt-3">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="280"
                        image={loggedInuser.photo}
                        title="Profille Picture"
                        borderRadius="50%"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {loggedInuser.name}  <CheckCircleIcon style={{color:'green'}}/>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {loggedInuser.email} 
                        </Typography> 
                        <Typography variant="body2" color="secondary" component="p">
                            Verified
                        </Typography> 
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to="someting" size="small" color="primary"> share</Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link to="someting" size="small" color="primary"> more</Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link to="login" size="small" color="primary"> sign-out</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default UserProfile;