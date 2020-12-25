import { Children } from 'react';

export const MapChildren = (props: { children: any; }) => {
  return (
    <>
      {
        Children.map(props.children, (child) => {
          return child;
        })
      }
    </>
  );
};