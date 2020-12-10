import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  customDiv: {
    backgroundColor: 'red',
  }
});

function Jss() {
  const classes = useStyles();
  return (
    <div className={classes.customDiv}>Jss</div>
  );
}

export default Jss;