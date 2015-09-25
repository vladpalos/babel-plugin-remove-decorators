export default function ({ Plugin, types: t }) {
  return new Plugin('remove-decorators', {
    visitor: {
      Decorator(node, parent) {
        return this.dangerouslyRemove();
      }
    }
  });
}