function findFloor(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return arr[mid];
    } else if (arr[mid] < num) {
      floor = arr[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return floor;
}

module.exports = findFloor;
