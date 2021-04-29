## How The UseEffect Hook is Used?


### Beginner Mistake

1. I created the user variable which is an Obj. The User Object is brand new 

2. My Old User Object is different than my new User Object even though they have the same values

3. The reference of the two objects is different




### Professional Mistake

1. Using the useMemo Hook

2. This hook says here is an array of dependencies and whenever these dependencies change I want you to rerun the function and return what is inside of it
a. the second parameter passed in the useMemo hook is the things I want it to check

- In my case whenever theName or theAge changes I want to the hook to rerun and return to me a new object

In All, if both[theName and theAge] variables didn't useMemo will return the old Object we had when we rendered the component

This means that if they are the same theUser in useMemo and theUser in useEffect are both the same.