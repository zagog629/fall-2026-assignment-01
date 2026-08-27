export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
    if (middleName) {
    return `${lastName}, ${firstName} ${middleName.charAt(0)}.`;
  }
  return `${lastName}, ${firstName}`;
}
