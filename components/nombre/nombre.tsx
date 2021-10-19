import * as React from 'react';

type NombreProps = {
  nombre: string
}

export const Nombre: React.FC<NombreProps> = (props) => {
  return (
    <div>
      <h1>NOMBRE: {true}</h1>
    </div>
  )
}
