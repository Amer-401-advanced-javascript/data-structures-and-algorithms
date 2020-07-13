# Trees
<!-- Short summary or background information -->
Implement a binary tree and binary search tree

## Challenge
<!-- Description of the challenge -->
Implement a binary tree and binary search tree 
treverse through them using DF or BF
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
    preOrder,inOrder,postOrder
            BigO:
                Time O(n) the exection time increase linarly with the number of nodes
                Space O(h) the space increases depending on the height of the tree
    depthFirst
            BigO:
                Time O(n) the exection time increase linarly with the number of nodes
                Space O(w) the space increases depending on the width of the tree

    BST:
        BigO: 
            Time O(log n)the exection time increase in a logarithmic pattern because we don't need to treverse through the whole tree
            Space O(h) the space increases depending on the width of the tree
## API
<!-- Description of each method publicly available in each of your trees -->