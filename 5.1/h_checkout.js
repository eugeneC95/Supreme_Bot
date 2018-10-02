function h_checkout(){
   if(document.querySelector("[class='button checkout']").href.includes("checkout")){
      
      document.querySelector("[class='button checkout']").click();
   };
}
h_checkout();
