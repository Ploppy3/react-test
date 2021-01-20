import { Fragment, useEffect, useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';

const Div = styled.div`
  overflow: hidden;
`;

export const SpringCollapse3 = (props: { visible: boolean; }) => {

  const [mounted, setMounted] = useState(props.visible);

  const from = { height: props.visible ? 'auto' : 0 };
  const to = { height: props.visible ? 0 : 'auto' };

  useEffect(() => {
    setMounted(props.visible);
  }, [props.visible]);

  return (
    <Fragment>
      {
        mounted &&
        <Spring
          from={from}
          to={to}
        >
          {
            props => <Div style={props}>test</Div>
          }
        </Spring>
      }
    </Fragment>
  );
};