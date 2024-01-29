function findRotatedIndex(array, val) {
  start = 0;
  end = array.length - 1;
  notFound = -1;
  
  while( start <=  end){
    let mid = Math.floor((start + end) / 2);
    if(array[mid] === val){
      
      return mid;
    }

    if (arr[start] <= arr[mid]) {

      if (arr[start] <= target && target < arr[mid]) {

        end = mid - 1;
      } else {

        start = mid + 1;
      }
    } else {

      if (arr[mid] < target && target <= arr[end]) {

        start = mid + 1;
      } else {

        end = mid - 1;
      }
    }

  }
  return notFound;
}

module.exports = findRotatedIndex