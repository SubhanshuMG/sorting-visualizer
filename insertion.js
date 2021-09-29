var speed=document.querySelector("#speed");
var arr_size=document.querySelector("#arr_sz");
function swap(el1,el2)
    {

           const style1 = window.getComputedStyle(el1);
           const style2 = window.getComputedStyle(el2);
        
          //  window.setTimeout(function(){
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
  // } ,delay);

    el1.style.height = transform2;
    el2.style.height = transform1;

    
    }




async function insertion_sort(delay2=2000/(arr_size.value*speed.value))
{
  var i,key,j;
  var no_of_bar=arr_size.value;
  var special=document.querySelectorAll(".special");
  for(i=1;i<no_of_bar;i++)
  {
    key=arr[i];
    special[i].style.background="blue";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );
    j=i-1;
    while(j>=0&&arr[j]>key)
    {
      special[j].style.background="red";
      if(j+1!=i)
      special[j+1].style.background="red";
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay2)
       );
      await swap(special[j+1],special[j]);
      special=document.querySelectorAll(".special");
      arr[j+1]=arr[j];
      special[j].style.background="yellow";
      if(j+1!=i)
      special[j+1].style.background="yellow";

      j=j-1;
    }
    arr[j+1]=key;
    // special[j+1].style.background="green";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2)
     );

  }
  var inc=0.1;
  for(var i=no_of_bar-1;i>=0;i--)
  { special[i].style.background="green";
    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, delay2+=inc)
    );
  }
   
}
