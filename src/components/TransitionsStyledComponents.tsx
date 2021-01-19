import { CollapseTransition3 } from "components/CollapseTransition3";
import { Toggler } from "components/Toggler";
import { Fragment } from "react";

export const TransitionsStyledComponents = () => {
  return (
    <Fragment>
      <div>it works!</div>
      <Toggler>
        {(state) =>
          <CollapseTransition3 visible={state}>
            <div>Test</div>
          </CollapseTransition3>
        }
      </Toggler>
    </Fragment>
  );
};
