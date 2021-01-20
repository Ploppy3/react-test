import { useParams } from 'react-router-dom';

export function User() {
  let id = +useParams<{ id: string; }>().id;
  return <div>User: {id}</div>;
}