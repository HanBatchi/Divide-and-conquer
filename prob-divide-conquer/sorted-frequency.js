function sortedFrequency(arr, target) {
  let firstOccurrence = findFirstOccurrence(arr, target);

  // If the target is not found, return -1
  if (firstOccurrence === -1) {
    return -1;
  }

  let lastOccurrence = findLastOccurrence(arr, target);

  return lastOccurrence - firstOccurrence + 1;
}

// Helper function to find the first occurrence of the target in the sorted array
function findFirstOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let firstOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      firstOccurrence = mid;
      high = mid - 1; // Continue searching in the left half
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return firstOccurrence;
}

// Helper function to find the last occurrence of the target in the sorted array
function findLastOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let lastOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      lastOccurrence = mid;
      low = mid + 1; // Continue searching in the right half
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lastOccurrence;
}

module.exports = sortedFrequency;
