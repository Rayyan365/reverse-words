// Good Luck 💪🏾
function reverse(str, start, end)
{
    let temp;       
         
    while (start <= end)
    {
        
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}
 
function reverseWords(s)
{
    
    s = s.split("");
    let start = 0;
    for (let end = 0;
             end < s.length; end++)
    {
        
        if (s[end] == ' ')
        {
            reverse(s, start, end);
            start = end + 1;
        }
    }
  
    reverse(s, start, s.length - 1);
   
    reverse(s, 0, s.length - 1);
    return s.join("");
}
     

var s =
"I am from Hargiesa,Somaliland";
     
document.write(reverseWords(s));