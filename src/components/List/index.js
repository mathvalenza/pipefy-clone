import React from 'react';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function index() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
      </header>
      <button type="button">
        <MdAdd size={24} color="#fff" />
      </button>
    </Container>
  );
}
