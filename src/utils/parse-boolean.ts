export function parseBoolean(value: string): boolean {
  if(typeof value === 'boolean') {
    return value;
  }
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else {
    throw new Error(`Invalid boolean value: ${value}`);
  }
}