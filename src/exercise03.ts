export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  let filteredInventory = inventory.filter((item) => item[1] > 5);
  let data: number[] = filteredInventory.map((item) => item[1] * item[2])
  let sum: number = data.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
}