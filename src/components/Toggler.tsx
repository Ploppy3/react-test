import { Fragment, ReactNode, useState } from 'react';

export const Toggler = (props: { children: (state: boolean) => ReactNode; }) => {
  const [state, setState] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setState(!state)}>Toggle</button> ({state ? 'true' : 'false'})
      { props.children(state)}
    </Fragment>
  );
};