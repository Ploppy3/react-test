import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export const Form = () => {
  const [model, setModel] = useState({});

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, ...{ [event.target.name]: event.target.value } });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    console.log('submit', event, model);
  };

  const resetForm = () => {
    refForm.current?.reset();
    setModel({});
  };

  const refForm = useRef<HTMLFormElement>(null);

  return (
    <>
      <form ref={refForm} onSubmit={(event) => { submit(event); }}>
        <div>
          name: <input type="text" onChange={handleChangeInput} name="name" required />
        </div>
        <button>submit</button>
        <button onClick={resetForm} type="button">reset</button>
      </form>
      <div>Debug: {JSON.stringify(model)}</div>
    </>
  );
};