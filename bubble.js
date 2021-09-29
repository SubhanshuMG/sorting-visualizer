
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

    



async function bubble_sort(delay2=2000/(arr_size.value*speed.value))
{
  console.log(speed.value);
  var special = document.querySelectorAll(".special");
  var no_of_bar=arr_size.value;
    for(var i=0;i<no_of_bar-1;i++)
     {
       for(var j=0;j<no_of_bar-1-i;j++)
        {
        
          
          special[j].style.background="red";
          special[j+1].style.background="red";
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );
          
          
          if(arr[j]>arr[j+1])
          {
          await swap(special[j],special[j+1]);
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            special = document.querySelectorAll(".special");
          }
       
        
          special[j].style.background="yellow";
          special[j+1].style.background="yellow";
          await new Promise(resolve =>
            setTimeout(() => {
              resolve();
            }, delay2)
           );
         
        }
        special[no_of_bar-i-1].style.background="green";
     
     }
     special[0].style.background="green";
    
}
