import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div<{ height: number; visible: boolean; done: boolean; }>`
  overflow: hidden;
  transition: ${(props) => props.visible
    ? 'height .25s ease, opacity .25s .25s ease'
    : 'height .25s .25s ease, opacity .25s ease'
  };
  height: ${(props) => props.done ? 'auto' : props.visible ? props.height + 'px' : 0};
  opacity: ${(props) => props.visible ? 1 : 0};
`;

export const CollapseTransition3 = (props: { visible: boolean, children: ReactNode; }) => {

  const ref = useRef<HTMLDivElement>(null);
  const duration = 500;
  const [height, setHeight] = useState(0);
  const [mounted, setMounted] = useState(props.visible);
  const [visible, setVisible] = useState(props.visible);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (ref.current && mounted) {
      setHeight(ref.current?.scrollHeight);
    }
  }, [mounted, props.visible]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (props.visible) {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
      timeout = setTimeout(() => {
        setDone(true);
      }, duration);
    } else {
      setDone(false);
      requestAnimationFrame(() => setVisible(false));
      timeout = setTimeout(() => {
        setMounted(false);
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
      <div>done: {done ? 'true' : 'false'}</div>
      {
        mounted &&
        <Div ref={ref} visible={visible} height={height} done={done}>
          {props.children}
        </Div>
      }
      <hr />
    </Fragment>
  );
};