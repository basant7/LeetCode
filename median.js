const median = (nums1, nums2) => {
    let arr = [];
    let i = 0, j = 0, k = 0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]>=nums2[j]){
            arr[k] = nums2[j]
            j++;
            k++;
        }
        if(nums1[i]<=nums2[j]){
            arr[k] = nums1[i];
            i++;
            k++;
        }
    }

    while(i<nums1.length){
        arr[k] = nums1[i];
        i++;
        k++;
    }

    while(j<nums2.length){
        arr[k] = nums2[j];
        j++;
        k++;
    }
    // console.log(arr)
    let med=0;
    let a = 0, b = arr.length-1;
    while(a<=b){
        if(a==b){
            med = arr[a];
        }else{
            med = (arr[a] + arr[b])/2;
        }
        a++;
        b--;
    }
    return med;
}
const array1 = [0,0];
const array2 = [0,0];
console.log(median(array1, array2));