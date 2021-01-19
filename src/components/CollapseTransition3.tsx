import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div<{ height: number; visible: boolean; }>`
  overflow: hidden;
  transition: ${(props) => props.visible
    ? 'height .25s ease, opacity .25s .25s ease'
    : 'height .25s .25s ease, opacity .25s ease'
  };
  height: ${(props) => props.visible ? props.height + 'px' : 0};
  opacity: ${(props) => props.visible ? 1 : 0};
`;

export const CollapseTransition3 = (props: { visible: boolean, children: ReactNode; }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const duration = 500;
  const [mounted, setMounted] = useState(props.visible);
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.scrollHeight);
    }
  }, [mounted]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (props.visible) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      timeout = setTimeout(() => {
        setMounted(props.visible);
      }, duration);
    }
    return () => timeout && clearTimeout(timeout);
  }, [props.visible]);

  return (
    <Fragment>
      <div>height: {height}</div>
      <div>props.visible: {props.visible ? 'true' : 'false'}</div>
      <div>mounted: {mounted ? 'true' : 'false'}</div>
      <div>visible: {visible ? 'true' : 'false'}</div>
      {
        mounted &&
        <Div ref={ref} visible={visible} height={height}>
          {props.children}
        </Div>
      }
      <hr />
    </Fragment>
  );
};