import { DialogConfirm } from 'components/modals/DialogConfirm';
import { Modal } from 'components/modals/Modal';
import { useState } from 'react';

export const Modals = () => {

  const [dialogVisible, setDialogVisible] = useState(false);
  const [confirmed, setConfirmed] = useState('unknown');

  const onDialogClose = (confirmed: boolean) => {
    setDialogVisible(false);
    setConfirmed(confirmed ? 'true' : 'false');
  };

  return (
    <div>
      <div>Confirmed:{confirmed}</div>
      <button onClick={() => { setDialogVisible(true); }}>open dialog</button>
      {
        dialogVisible &&
        <Modal onClickBackdrop={() => { setDialogVisible(false); setConfirmed('unknown'); }}>
          <DialogConfirm closeDialog={onDialogClose}></DialogConfirm>
        </Modal>
      }
    </div>
  );
};