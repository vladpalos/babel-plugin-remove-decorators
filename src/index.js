const env = process.env.NODE_ENV || 'development';

export default function ({ Plugin, types: t }) {
  return new Plugin('remove-decorators', {
    visitor: {
      Decorator(node, parent) {
        return (env == 'development') && this.dangerouslyRemove();
      }
    }
  });
}