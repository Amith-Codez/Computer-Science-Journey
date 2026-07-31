# 📚 DSA Notes

> "Learn patterns, not solutions."

---

# Table of Contents

1. Problem Solving Framework
2. Time Complexity
3. Space Complexity
4. Arrays
5. Strings
6. Two Pointers
7. Sliding Window
8. Prefix Sum
9. Hashing
10. Binary Search
11. Sorting
12. Stack
13. Queue
14. Linked List
15. Trees
16. Binary Search Trees
17. Heap / Priority Queue
18. Recursion
19. Backtracking
20. Dynamic Programming
21. Graphs
22. Greedy
23. Bit Manipulation
24. Math
25. Common Patterns
26. Mistakes Log
27. Interview Tips

---

# Problem Solving Framework

Before coding, answer these:

- What is the input?
- What is the output?
- Constraints?
- Brute Force?
- Better Approach?
- Optimal Approach?
- Time Complexity?
- Space Complexity?
- Edge Cases?

---

# Time Complexity

| Complexity | Name |
|------------|------|
| O(1) | Constant |
| O(log n) | Logarithmic |
| O(n) | Linear |
| O(n log n) | Linearithmic |
| O(n²) | Quadratic |
| O(n³) | Cubic |
| O(2ⁿ) | Exponential |
| O(n!) | Factorial |

Rules:

- Nested loops → often multiplication
- Consecutive loops → addition
- Binary Search → O(log n)
- Merge Sort → O(n log n)

---

# Space Complexity

Includes:

- Extra arrays
- HashMaps
- Recursion stack
- Queues
- Stacks

---

# Arrays

## Characteristics

- Contiguous memory
- O(1) random access

### Operations

Access: O(1)

Search: O(n)

Insert End: O(1)

Insert Middle: O(n)

Delete: O(n)

### Common Patterns

- Traversal
- Prefix Sum
- Sliding Window
- Two Pointers

---

# Strings

Remember:

- Java Strings are immutable.
- StringBuilder is mutable.

Useful methods

```java
length()
charAt(i)
substring()
indexOf()
split()
equals()
```

---

# Two Pointers

Used when:

- Sorted array
- Reverse traversal
- Pair problems
- Palindrome

Typical template

```java
int left = 0;
int right = n - 1;

while(left < right){

}
```

---

# Sliding Window

Useful when:

- Subarray
- Substring
- Contiguous elements

Typical template

```java
int left = 0;

for(int right = 0; right < n; right++){

}
```

---

# Prefix Sum

Definition

```
prefix[i] = prefix[i-1] + nums[i]
```

Applications

- Range Sum
- Subarray Sum

---

# Hashing

Common Structures

```java
HashMap<K,V>
HashSet<T>
```

Applications

- Frequency counting
- Duplicate detection
- Fast lookup

---

# Binary Search

Requirements

- Usually sorted

Template

```java
while(low <= high){

    int mid = low + (high-low)/2;

}
```

Remember

Avoid overflow.

---

# Sorting

Common Algorithms

- Bubble
- Selection
- Insertion
- Merge
- Quick
- Heap

Java

```java
Arrays.sort(arr);
Collections.sort(list);
```

---

# Stack

LIFO

Useful for

- Parentheses
- Monotonic Stack
- DFS

Java

```java
Stack<Integer> stack = new Stack<>();
```

---

# Queue

FIFO

Useful for

- BFS
- Scheduling

Java

```java
Queue<Integer> q = new LinkedList<>();
```

---

# Linked List

Know

- Singly
- Doubly
- Circular

Patterns

- Slow Fast Pointer
- Reverse
- Merge

---

# Trees

Terminology

- Root
- Parent
- Child
- Leaf
- Height
- Depth

Traversals

- Preorder
- Inorder
- Postorder
- Level Order

---

# Binary Search Tree

Property

```
Left < Root < Right
```

Operations

Search

Insert

Delete

---

# Heap

Types

- Min Heap
- Max Heap

Java

```java
PriorityQueue<Integer> pq = new PriorityQueue<>();
```

---

# Recursion

Questions

- Base Case?
- Recursive Relation?

Remember

Every recursive call must move closer to the base case.

---

# Backtracking

Template

```
Choose

Explore

Undo
```

Applications

- Subsets
- Permutations
- N Queens

---

# Dynamic Programming

Steps

1. Identify State
2. Transition
3. Base Case
4. Memoization
5. Tabulation
6. Space Optimization

---

# Graphs

Representations

- Adjacency List
- Adjacency Matrix

Algorithms

- BFS
- DFS
- Dijkstra
- Topological Sort
- Union Find

---

# Greedy

Idea

Take the best local choice.

Need proof of correctness.

---

# Bit Manipulation

Useful Operators

```java
&
|
^
~
<<
>>
```

Common Tricks

Odd Even

```java
n & 1
```

Power of Two

```java
(n & (n-1)) == 0
```

---

# Math

Topics

- GCD
- LCM
- Prime
- Sieve
- Modular Arithmetic

---

# Common Patterns

- Two Pointers
- Sliding Window
- Prefix Sum
- Binary Search on Answer
- Fast Slow Pointer
- Monotonic Stack
- BFS
- DFS
- Greedy
- Dynamic Programming

---

# Mistakes Log

| Date | Problem | Mistake | Lesson |
|------|---------|----------|---------|
| | | | |

Always write:

- Why did I fail?
- What pattern did I miss?
- How will I avoid this next time?

---

# Interview Tips

Before coding

- Clarify constraints
- Discuss brute force
- Optimize
- Explain while coding
- Test manually

After coding

- Dry run
- Analyze complexity
- Discuss edge cases

---

# Personal Pattern Library

Whenever you solve a problem, add:

## Problem

Name:

Difficulty:

Pattern:

Key Idea:

Time Complexity:

Space Complexity:

What I learned:

Mistakes:

---

# Revision Checklist

- [ ] Arrays
- [ ] Strings
- [ ] Hashing
- [ ] Two Pointers
- [ ] Sliding Window
- [ ] Prefix Sum
- [ ] Binary Search
- [ ] Sorting
- [ ] Stack
- [ ] Queue
- [ ] Linked List
- [ ] Trees
- [ ] BST
- [ ] Heap
- [ ] Recursion
- [ ] Backtracking
- [ ] DP
- [ ] Graphs
- [ ] Greedy
- [ ] Bit Manipulation
- [ ] Math

---

# Golden Rule

> Never memorize solutions.
>
> Memorize the thought process.