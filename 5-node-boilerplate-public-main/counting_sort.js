
let arr = [1,0,0,1,1,0,0,1,1,0,0,0,1,1,0];
let len = arr.length
let sorted_array = []

function sorting(arr, len){
     let count = 0
     for(let i=0 ; i < len; i++){
          if( arr[i] == 0)
          count ++
     }
     for( let i = 0;  i < count; i++){
          arr[i] = 0;
     }
     for( let i = count; i < len; i++ ){
          arr[i] = 1;
     }
}
function sorted(arr, len){
     for( let i=0; i < len; i++){
          sorted_array.push((arr[i]))
          
     }
     console.log(sorted_array)
}
sorting(arr, len);
sorted(arr,len);