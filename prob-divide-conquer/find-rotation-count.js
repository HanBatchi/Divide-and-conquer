function findRotationCount(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {

    if (array[left] <= array[right]) {

      return left;

    }

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % array.length;
    let prev = (mid - 1 + array.length) % array.length;


    if (array[mid] <= array[next] && array[mid] <= array[prev]) {

      return mid;
      
    }


    if (array[left] <= array[mid]) {

      left = mid + 1;

    } else {

      right = mid - 1;
    }
  }
  return 0;
}

module.exports = findRotationCount;
