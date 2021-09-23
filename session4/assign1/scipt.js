function unique(arr) {
    return [... new Set(arr)];
   }
   
   let values = ["green", "green", "red", "red",
     "yellow", "pink", "pink", "yellow"
   ];
   console.log(values)
   let arr=values;
   
   console.log("Unique values are", unique(arr));