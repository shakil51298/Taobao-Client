import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Admin = () => {

    const classes = useStyles();

    return (
        <div className='container App d-flex justify-content-center align-items-center mt-5' >
            <div className='row'>
                <div className="col">
                    <Link to="/manageProduct">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<AddShoppingCartIcon />}
                        >
                            manage
                        </Button>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/addproducts">
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<AddIcon/>}
                        >
                            upload
                        </Button>
                    </Link>
                </div>
                <div className="col">
                    <Link  to="/editProducts">
                    <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            save
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Admin;