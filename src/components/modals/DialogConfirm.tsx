import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dialog: {
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
  }
});

export const DialogConfirm = (props: { closeDialog: (confirmed: boolean) => any; }) => {

  const classes = useStyles();

  return (
    <div className={classes.dialog} onClick={(event) => { event.stopPropagation(); }}>
      <div>Confirm?</div>
      <button onClick={() => { props.closeDialog(true); }}>true</button>
      <button onClick={() => { props.closeDialog(false); }}>false</button>
    </div>
  );
};