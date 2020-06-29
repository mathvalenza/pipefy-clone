import React, { useState } from 'react';

import BoardContext from './context';

import produce from 'immer';

import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to, fromList) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[fromList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} listIndex={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
