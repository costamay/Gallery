function CopyLink() { 
   
    var copyText = document.getElementById("copy"); 
    
    
    copyText.select(); 
    

    document.execCommand("{{image.id}}.url"); 
    
    
    alert("Copied image link: " + copyText.value); 
    

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
  } 

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  // $(function() {
  //   $("input").click(function() {
  //   $(this).focus();
  //   $(this).select();
  //   document.execCommand('copy');
  //   $(this).after("Copied to clipboard");
  //   });
  //  });