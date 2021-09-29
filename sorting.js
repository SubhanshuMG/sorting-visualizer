// Initialization
var arr=[];
var bar = document.querySelector("#bar");
var new_btn = document.querySelector("#new");
var bubble = document.querySelector(".bubble");
var selection =document.querySelector(".selection");
var quick = document.querySelector(".quick");
var merge = document.querySelector(".merge");
var check =document.querySelector(".check");
var insertion = document.querySelector(".insertion");
var arr_size=document.querySelector("#arr_sz");
var button = document.querySelectorAll("button");
var range=document.querySelector("range");
var speed=document.querySelector("#speed");
var count=0;

// To create the bars
function create_bars()
{
    // Make the array empty
    arr=[];
    // Make the visible bars empty
    bar.innerHTML="";
    // Take the no of bars from range
    var no_of_bar=arr_size.value;
    var arr_width_size =(500/no_of_bar);
    
    // Set the height
    // we will sort the bars on the basis of height
    for(var i=0;i<no_of_bar;i++)
      arr.push(Math.floor(Math.random()*100));


    //Set the height and width of visible bars 
    for(var i=0;i<no_of_bar;i++)
    {
        
        var div = document.createElement("DIV");
        var margin_size=0.1;
        div.classList.add("special");
        div.style="margin:0%" + margin_size + "%; width:" + (100/no_of_bar-(2*margin_size)) + "%;";
        var height = (arr[i]*5+10).toString();
        height = height+'px';
        div.style.height=height;
        bar.appendChild(div);
    }
}


    // Creating bars at first
    create_bars();

    // Generation of new bars
    new_btn.addEventListener("click",function(){
      create_bars();
    });


    // Range listener
    arr_size.addEventListener("input",create_bars);


    // Bubble sort button 
    bubble.addEventListener("click",async function(){
      this.classList.add("selected");
      for(var i=0;i<button.length;i++)
      button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
      this.classList.remove("unselected");
      arr_size.disabled=true;
      speed.disabled=true;
       await bubble_sort();
       for(var i=0;i<button.length;i++)
       button[i].disabled=false, button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
       arr_size.disabled=false;
       speed.disabled=false;
       this.classList.remove("selected");
    });


    // Insertion sort button
    insertion.addEventListener("click",async function(){
      this.classList.add("selected");
      for(var i=0;i<button.length;i++)
      button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
      arr_size.disabled=true; 
      speed.disabled=true;
      this.classList.remove("unselected");
      await insertion_sort();
      for(var i=0;i<button.length;i++)
      button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
      arr_size.disabled=false;
      speed.disabled=false;
      this.classList.remove("selected");
      
    });


    // Selection sort button
    selection.addEventListener("click",async function(){
      this.classList.add("selected");
      for(var i=0;i<button.length;i++)
      button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
      arr_size.disabled=true;
      speed.disabled=true;
      this.classList.remove("unselected");
      await selection_sort();
      for(var i=0;i<button.length;i++)
      button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
      arr_size.disabled=false;
      speed.disabled=false;
      this.classList.remove("selected");
    });


    // Quick sort button
    quick.addEventListener("click",async function(){
      this.classList.add("selected");
      for(var i=0;i<button.length;i++)
      button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
      arr_size.disabled=true;
      speed.disabled=true;
      this.classList.remove("unselected");
      await quick_sort();
      for(var i=0;i<button.length;i++)
      button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
      arr_size.disabled=false;  
      speed.disabled=false;
      this.classList.remove("selected");
    });


    // Merge sort button
    merge.addEventListener("click",async function(){
      this.classList.add("selected");
      var no_of_bar=arr_size.value;
      for(var i=0;i<button.length;i++)
      button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
      this.classList.remove("unselected");
      arr_size.disabled=true; 
      speed.disabled=true;
      await merge_sort(0,no_of_bar-1);
       for(var i=0;i<button.length;i++)
      button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
      arr_size.disabled=false;
      speed.disabled=false;
      this.classList.remove("selected");
    });
    










    //-------------------------------------------------------------------------------

//  function print()
//  {
//    console.log(arr_width_size);
//  }
//  window.onload=print();

// swap

// function swap(el1,el2)
//     {

//            const style1 = window.getComputedStyle(el1);
//            const style2 = window.getComputedStyle(el2);
        
//           //  window.setTimeout(function(){
//     const transform1 = style1.getPropertyValue("height");
//     const transform2 = style2.getPropertyValue("height");
//   // } ,delay);

//     el1.style.height = transform2;
//     el2.style.height = transform1;

    
//     }

    // selection sort

// async function selection_sort(delay1=10,delay2=100)
// {
//   var special = document.querySelectorAll(".special");
//   var no_of_bar=arr_size.value;
  
  
//   for(var i=0;i<no_of_bar-1;i++)
//   {
//     var min_idx=i;
//     special[i].style.background="red";
//     special[min_idx].style.background="red";
//     for(var j=i+1;j<no_of_bar;j++)
//     {
//       special[j].style.background="blue";
//       await new Promise(resolve =>
//         setTimeout(() => {
//           resolve();
//         }, delay1)
//        );
//       //  special[j].style.background="yellow";
//         // special[min_idx].style.background="yellow";
//       if(arr[j]<arr[min_idx])
//        {
//         if(min_idx!=i)
//           special[min_idx].style.background="yellow";
//         min_idx=j;
//         special[min_idx].style.background="red";
//        }
//        if(j!=min_idx)
//        special[j].style.background="yellow";
//     }
//     special[min_idx].style.background="red";

//     // special[i].style.background="green";
//     await new Promise(resolve =>
//       setTimeout(() => {
//         resolve();
//       }, delay2)
//      );
//      await swap(special[min_idx],special[i]);
//      special[min_idx].style.background="yellow";
//      special[i].style.background="green";
//     var temp=arr[min_idx];
//     arr[min_idx]=arr[i];
//     arr[i]=temp;
//     special = document.querySelectorAll(".special");
//   }
//   console.log(no_of_bar);
//   special[no_of_bar-1].style.background="green";
// }

// selection sort

// bubble sort


// async function bubble_sort(delay2=1)
// {
//   var special = document.querySelectorAll(".special");
//   var no_of_bar=arr_size.value;
//     for(var i=0;i<no_of_bar-1;i++)
//      {
//        for(var j=0;j<no_of_bar-1-i;j++)
//         {
        
          
//           special[j].style.background="red";
//           special[j+1].style.background="red";
//           await new Promise(resolve =>
//             setTimeout(() => {
//               resolve();
//             }, delay2)
//            );
          
          
//           if(arr[j]>arr[j+1])
//           {
//           await swap(special[j],special[j+1]);
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             special = document.querySelectorAll(".special");
//           }
       
        
//           special[j].style.background="yellow";
//           special[j+1].style.background="yellow";
//           await new Promise(resolve =>
//             setTimeout(() => {
//               resolve();
//             }, delay2)
//            );
         
//         }
//         special[no_of_bar-i-1].style.background="green";
     
//      }
//      special[0].style.background="green";
    
// }
// bubble sort

// async function partition(low,high,delay2=1)
// {
//   var special = document.querySelectorAll(".special");
  
//     special[high].style.background="red";
//     await new Promise(resolve =>
//       setTimeout(() => {
//         resolve();
//       }, delay2)
//      );
       
//   var pivot = arr[high];
//   var i=low-1,temp;
//   for(var j=low;j<=high-1;j++)
//    {
    
//       special[j].style.background="red";
//       await new Promise(resolve =>
//         setTimeout(() => {
//           resolve();
//         }, delay2)
//        );
        
    
//      if(arr[j]<=pivot)
//      {
//        i++;
//        // swap between i and j
     
      
//         await swap(special[i],special[j]);
          
//        temp=arr[i];
//        arr[i]=arr[j];
//        arr[j]=temp;
//        special=document.querySelectorAll(".special");
      
      
//         special[i].style.background="blue";
//      }
   
//     if(i!=j)
//     {
    
//       special[j].style.background="yellow";
//       await new Promise(resolve =>
//         setTimeout(() => {
//           resolve();
//         }, delay2)
//        );
        
//     }
    
    
//    }
  

//    // swap between i+1 and high
//    if(i+1!=high)
//    { await swap(special[i+1],special[high]);
    
//    temp=arr[i+1];
//    arr[i+1]=arr[high];
//    arr[high]=temp;
//    }

//    special=document.querySelectorAll(".special");
//    for(var k=low;k<=i;k++)
//      special[k].style.background="yellow";
//      await new Promise(resolve =>
//       setTimeout(() => {
//         resolve();
//       }, delay2)
//      );
//    special[high].style.background="yellow";
//    special[i+1].style.background="green";
//    count++;
//    await new Promise(resolve =>
//     setTimeout(() => {
//       resolve();
//     }, delay2)
//    );
    
    
//     return i+1;
// }


// async function quick_sort_helper(low,high)
// {

//   if(low<=high)
//   {
//      var pi=await partition(low,high);
     
//     await quick_sort_helper(low,pi-1);
//     await quick_sort_helper(pi+1,high);
   
//   }
  
// }


// async function quick_sort()
// {
//     var no_of_bar=arr_size.value;
//     await quick_sort_helper(0,no_of_bar-1,10,10);
//     console.log(count);
     
// }




// quick sort


// merge sort
// function swap(el1,el2)
//     {

//            const style1 = window.getComputedStyle(el1);
//            const style2 = window.getComputedStyle(el2);
        
//           //  window.setTimeout(function(){
//     const transform1 = style1.getPropertyValue("height");
//     const transform2 = style2.getPropertyValue("height");
//   // } ,delay);

//     el1.style.height = transform2;
//     el2.style.height = transform1;

    
//     }

//     function change(el1,el2)
//     {
//       const style2 = window.getComputedStyle(el2);
//       const transform2 = style2.getPropertyValue("height");
//       el1.style.height = transform2;

//     }

// async function merge_arr(low,mid,high,delay2=1)
// {
//   var no_of_bar=arr_size.value;
//   var i=low,j=mid+1,temp,tempi,tempj;
//   var special = document.querySelectorAll(".special");
//   while(i<=mid&&j<=high)
//   {
//     special = document.querySelectorAll(".special");
//     tempi=i,tempj=j;
//     special[tempi].style.background="red";
//     special[tempj].style.background="red";
//     await new Promise(resolve =>
//       setTimeout(() => {
//         resolve();
//       }, delay2)
//      );


//     if(arr[i]>arr[j])
//      {
//        temp=arr[j];
//        temp_special=special[j];
//        const style2 = window.getComputedStyle(special[j]);
//        const transform2 = style2.getPropertyValue("height");
//        for(var k=j;k>i;k--)
//        {
//          await change(special[k],special[k-1]);
//          arr[k]=arr[k-1];
//          special = document.querySelectorAll(".special");
//        }
//       //  await change(special[i],temp_special);
//       special[i].style.height=transform2;
//       await new Promise(resolve =>
//         setTimeout(() => {
//           resolve();
//         }, delay2)
//        );

//        special = document.querySelectorAll(".special");
//        arr[i]=temp;
//        j++;
//        mid++;
//      }
//      special[tempj].style.background="yellow";
//      special[tempi].style.background="yellow";
//      if(low==0&&high==no_of_bar-1) special[i].style.background="green";
//      i++;
    
//   }
//   if(low==0&&high==no_of_bar-1)
//    {
//      for(var k=0;k<=no_of_bar-1;k++)
//       special[k].style.background="green";
//    }
// }









// async function merge_sort(low,high,delay2=1000)
// {
//    if(low<high)
//    {
//      var mid = Math.floor(low+(high-low)/2);
//     //  console.log(mid);
//       await merge_sort(low,mid);
//       await merge_sort(mid+1,high);
//       await merge_arr(low,mid,high);
     
       
//    }
 

// }

// insertion sort
   
  // async function insertion_sort(delay2=1)
  // {
  //   var i,key,j;
  //   var no_of_bar=arr_size.value;
  //   var special=document.querySelectorAll(".special");
  //   for(i=1;i<no_of_bar;i++)
  //   {
  //     key=arr[i];
  //     special[i].style.background="blue";
  //     await new Promise(resolve =>
  //       setTimeout(() => {
  //         resolve();
  //       }, delay2)
  //      );
  //     j=i-1;
  //     while(j>=0&&arr[j]>key)
  //     {
  //       special[j].style.background="red";
  //       if(j+1!=i)
  //       special[j+1].style.background="red";
  //       await new Promise(resolve =>
  //         setTimeout(() => {
  //           resolve();
  //         }, delay2)
  //        );
  //       await swap(special[j+1],special[j]);
  //       special=document.querySelectorAll(".special");
  //       arr[j+1]=arr[j];
  //       special[j].style.background="yellow";
  //       if(j+1!=i)
  //       special[j+1].style.background="yellow";

  //       j=j-1;
  //     }
  //     arr[j+1]=key;
  //     // special[j+1].style.background="green";
  //     await new Promise(resolve =>
  //       setTimeout(() => {
  //         resolve();
  //       }, delay2)
  //      );

  //   }
  //   var inc=0.1;
  //   for(var i=no_of_bar-1;i>=0;i--)
  //   { special[i].style.background="green";
  //     await new Promise(resolve =>
  //       setTimeout(() => {
  //         resolve();
  //       }, delay2+=inc)
  //     );
  //   }
     
  // }






// insertion sort






// bubble.addEventListener("click",async function(){
//   for(var i=0;i<button.length;i++)
//    button[i].disabled=true,button[i].style.pointerEvents = "none";
//   arr_size.disabled=true;
//    await bubble_sort();
//    for(var i=0;i<button.length;i++)
//    button[i].disabled=false, button[i].style.pointerEvents = "auto";
//    arr_size.disabled=false;
// });

// selection.addEventListener("click",async function(){
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=true,button[i].style.pointerEvents = "none";
//   arr_size.disabled=true;
//   await selection_sort();
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=false,button[i].style.pointerEvents = "auto";
//   arr_size.disabled=false;
// });

// quick.addEventListener("click",async function(){
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=true,button[i].style.pointerEvents = "none";
//   arr_size.disabled=true;
//   await quick_sort();
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=false,button[i].style.pointerEvents = "auto";
//   arr_size.disabled=false;  
//   // for(var i=0;i<100;i++)
//     //  console.log(arr[i]);
// });

// merge.addEventListener("click",async function(){
//   var no_of_bar=arr_size.value;
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=true,button[i].style.pointerEvents = "none";
//   arr_size.disabled=true; 
//   await merge_sort(0,no_of_bar-1);
//    for(var i=0;i<button.length;i++)
//   button[i].disabled=false,button[i].style.pointerEvents = "auto";
//   arr_size.disabled=false;
//   // for(var i=0;i<100;i++)
//   //  console.log(arr[i]);
// });

// insertion.addEventListener("click",async function(){
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=true,button[i].style.pointerEvents = "none";
//   arr_size.disabled=true; 
//   await insertion_sort();
//   for(var i=0;i<button.length;i++)
//   button[i].disabled=false,button[i].style.pointerEvents = "auto";
//   arr_size.disabled=false;
//   // for(var i=0;i<100;i++)
//   //  console.log(arr[i]);
// });


// check.addEventListener("click",function(){
//   for(var i=0;i<100;i++)
//    console.log(arr[i]);
// });





// async function func1()
// {
//   var x=1;
//   return x;
// }


// check.addEventListener("click",function(){

//   func2();
  
  // var special = document.querySelectorAll(".special");
  // var delay=0,inc_delay=20;
  // special.forEach((item)=>{
  //     window.setTimeout(()=>{
  //       item.style.background="red";
  //   },delay+=inc_delay);
      
  // });      
   
// });


// -------------------------------------------------------------------







 
 