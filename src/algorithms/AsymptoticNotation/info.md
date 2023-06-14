Cheatsheet: https://www.codecademy.com/learn/paths/front-end-engineer-career-path/tracks/fecp-22-algorithms/modules/wdcp-22-asymptotic-notation/cheatsheet

## Why Asymptotic Notation? ##

### Learn why asymptotic notation is an essential tool for becoming an efficient programmer. ###

With asymptotic notation, we calculate a program's runtime by looking at how many instructions the computer
has to perform based on the size of the program's input. 
For example, if we are calculating the maximum element in a collection, I would need to examine each element in a collection 
That examining step is the same regardless of the the language used, or the CPU that’s performing the calculation. 
In asymptotic notation, we define the size of the input as N. 
I may be looking through a collection of 10 elements, or 100 elements, 
but we only need to know how many steps are performed relative to the input so N is used in place of a specific number. 
If there is a second input, we may define the size of that input as M.

There are varieties of asymptotic notation that focus on different concerns. Some will communicate the best case scenario for a program.
For example, if we were searching for a value within a collection, 
the best case would be if we found that element in the first place we looked. Another type will focus on the worst case scenario,
such as if we searched for a value, looked in the entire dataset and did not find it. 
Typically, programmers will focus on the worst case scenario so there is an upper bound of runtime to communicate. 
It’s a way of saying “things may get this bad, or slow, but they won’t get worse!”

In this next module, we will learn more about asymptotic notation, how to properly analyze the runtime of a program through asymptotic notation, and how to take into consideration the runtime of different data structures and algorithms when creating programs. Learning these skills will change the way you think when you design programs and it will prepare you for the software engineering world where creating efficient programs is an essential skill.


## Asymptotic Notation Conceptual ## 




Review

Let’s review what we learned:

 - We use asymptotic notation to describe the runtime of a program. The three types of asymptotic notation are big Theta, big Omega, and big O. 
 - We use big Theta (Θ) to describe the runtime if the runtime of the program is the same in every case.
   The different common runtimes from fastest to slowest are: Θ(1), Θ(log N), Θ(N), Θ(N log N), Θ(N2), Θ(2N), Θ(N!).
 - We use big Omega (Ω) to describe the best-case running time of a program. 
 - We use big O (O) to describe the worst-case running time of a program. 
 - We typically describe a program’s running time in terms of big O. 
 - When finding the runtime of a program with multiple steps, you can divide the program into different sections and add the runtimes of the various sections. 
   You can then take the slowest runtime and use that runtime to describe the entire program. 
 - When analyzing the runtime of a program, we care about which part of the program is the slowest.
