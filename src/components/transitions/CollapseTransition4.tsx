import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Div = styled.div<{ height: number; }>`
  &.enter{
    height: 0;
    opacity: 0;
  }
  &.enter-active{
    transition: height .25s ease, opacity .25s .25s ease;
    height: ${props => props.height}px;
    opacity: 1;
  }
  &.enter-done{
    height: auto;
    opacity: 1;
  }
  &.exit{
    height: ${props => props.height}px;
    opacity: 1;
  }
  &.exit-active{
    transition: height .25s .25s ease, opacity .25s ease;
    height: 0;
    opacity: 0;
  }
  &.exit-done{
    height: 0;
    opacity: 0;
  }
`;

export const CollapseTransition4 = (props: { visible: boolean; children: ReactNode; }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    calculateHeight();
  }, [props.visible]);

  const calculateHeight = () => {
    if (ref.current) {
      const _height = ref.current?.scrollHeight;
      console.log('calculate height', _height);
      setHeight(_height);
    }
  };

  return (
    <Fragment>
      <div>props.visible: {props.visible ? 'true' : 'false'}</div>
      <div>height: {height}</div>
      {
        <CSSTransition
          in={props.visible}
          timeout={500}
          nodeRef={ref}
        >
          <Div ref={ref} height={height}>
            {props.children}
          </Div>
        </CSSTransition>
      }
    </Fragment>
  );
};