import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function index({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && (
        <img
          src="https://avatars1.githubusercontent.com/u/34667046?s=460&u=82ad3be4c43ca8921be3a94da15cd1120e482e69&v=4"
          alt=""
        />
      )}
    </Container>
  );
}
