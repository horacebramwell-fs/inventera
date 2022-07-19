export const setStatus = (board) => {
  if (board.name === 'To Do') {
    return 0;
  }

  if (board.name === 'In Progress') {
    return 1;
  }

  if (board.name === 'Done') {
    return 2;
  }

  return null;
};

export const setStatusText = (status) => {
  if (status === 0) {
    return 'To Do';
  }

  if (status === 1) {
    return 'In Progress';
  }

  if (status === 2) {
    return 'Done';
  }

  return null;
};
