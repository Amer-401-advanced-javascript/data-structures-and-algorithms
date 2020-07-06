Initial Array [8,4,23,42,16,15]


### Pass 1 

first we compare the first index with second one then we replace the 4 with 8 so the resulting array
[8,4,23,42,16,15] ====> [4,8,23,42,16,15]

### Pass 2
Then we will compare the 8 with 23 the array will still be the same because 23 is larger than 8 
[4,8,23,42,16,15]

### Pass 3
Then we will compare the 23 with 42 the array will still be the same because 23 is larger than 8 
[4,8,23,42,16,15]

### Pass 3 
Then we will compare the 16 with 42 and replace the two values and then keep comparing until we reach the 8
[4,8,23,42,16,15] ====>[4,8,23,16,42,15] ====> [4,8,16,23,42,15]

### Pass 4
Then will comapre the 15 with each previous number until the 15 is larger than the previous number
[4,8,16,23,42,15] ====> [4,8,16,23,15,42] ====> [4,8,16,15,23,42] ====> [4,8,15,16,23,42]

## Efficency
Time: O(n^2)
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
Space: O(1)
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).



