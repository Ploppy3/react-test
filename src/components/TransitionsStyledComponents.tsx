import { CollapseTransition3 } from "components/CollapseTransition3";
import { Toggler } from "components/Toggler";
import { Fragment } from "react";

export const TransitionsStyledComponents = () => {
  return (
    <Fragment>
      <Toggler>
        {(state) =>
          <CollapseTransition3 visible={state}>
            <div>Test</div>
            <Toggler>
              {(state) =>
                state &&
                <div>child</div>
              }
            </Toggler>
          </CollapseTransition3>
        }
      </Toggler>
    </Fragment>
  );
};
