function capitalize(string: string) {
  return `${string.trim().slice(0, 1).toLocaleUpperCase()}${string.trim().slice(1)}`;
}

export { capitalize };
