```java 
class Solution
{
    String UncommonChars(String A, String B)
    {
        
        if(A.equals(B))
        {
            return "-1";
        }
        
        
        
        
        HashSet<Character> s1 = new HashSet<>();
        HashSet<Character> s2 = new HashSet<>();
        HashSet<Character> s3 = new HashSet<>();
        for(char a : A.toCharArray())
        {
            s1.add(a);
        }
         for(char a : B.toCharArray())
        {
            s2.add(a);
        }
        
        s3.addAll(s1);
        s3.addAll(s2);
        s1.retainAll(s2);
        s3.removeAll(s1);
        if(s3.size()==0) return "-1";
        
        String ans = "";
     
        for(char a:s3)
        {
            ans+=a;
        }
        char arr[] = ans.toCharArray();
        Arrays.sort(arr);
        return new String(arr);
        
        
        
    }
}
