let n=parseInt(prompt("Enter the number"));
c=0;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
       c=c+1;
       if(c%2==0){
        document.write("1 ");
       }
       else{
        document.write("0 ");
       }
        
    }
    document.write("<br>");
}