import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';

export const Modal = (props: { children: ReactNode; onClickBackdrop?: () => void; }) => {

  const node =
    <Overlay onClickBackdrop={() => { if (props.onClickBackdrop) { props.onClickBackdrop(); } }}>
      {props.children}
    </Overlay>;

  return createPortal(node, document.body);
};

const useStyles = createUseStyles({
  overlay: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});

const Overlay = (props: { children: ReactNode; onClickBackdrop?: () => void; }) => {

  const classes = useStyles();

  return (
    <div className={classes.overlay} onClick={() => { if (props.onClickBackdrop) { props.onClickBackdrop(); } }}>{props.children}</div>
  );
};