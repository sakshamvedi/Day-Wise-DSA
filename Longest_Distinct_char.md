```java
class Solution{
    static int longestSubstrDistinctChars(String S){
       HashSet<Character> h1 = new HashSet<>();
       int acquire = 0;
       int release = 0;
       int max =0;
       while(acquire<S.length())
       {
           char ch  = S.charAt(acquire);
           if(h1.contains(ch))
           {
               h1.remove(S.charAt(release));
               release++;
               
           }
           else
           {
               h1.add(S.charAt(acquire));
               max  = Math.max(max,h1.size());
               acquire++;
           }
        
    }
    return max;
}
}



this is my personal favourite question ❤️❤️
