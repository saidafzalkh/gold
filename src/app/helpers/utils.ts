let currentId = 0;
function generateId(): number {
  return currentId++;
}

export { generateId };
