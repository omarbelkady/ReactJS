### Redux
- Redux is a central data store for all the app data
- Any component within my application can access data from the central data store
- Dealing with state management is very easy to cope with


### The component Structuree of Our React Application
```
Top Of The Hierarchy: App.js
Attached to the Root Component is Blog Component and Homepage Component
Blog Has Two Components: Latest Blogs and Comments
Homepage Has Two Components: Sidebar and Main Content

```

### What I want
```
I want to show the latest blogs on my Blogs and I want to show on the sidebar also
the latest blogs as well
```

### Sharing Data Bottom Line
```
I want to share the latest data between Sidebar and Latest Blogs
```


### How Can This Be Done With Data Passed To Blogs but I want to share with the Sidebar in Homepage
```
Go To My Blog Component and reach out to grab data from an external source
store it in the state of the Blog Component pass it down as props to Latest Blogs
and Comments.

Now How can I send the data to my Sidebar which is in the Homepage Component do I have to
rewrite the same code? NO!

I use Redux which is the central data store and can help me send data from one component
to other. This data stored in the data store is going to be shared between components

So if Blog Component wants data(Latest Blogs) it can reach to the central data store aka 
Redux listen to it and grab the data and pass it down to the component (Blog)

If Sidebar wants the latest posts as well it can reach out to the Redux Central Store 
and grab the data.
```

### How Does The Architecture of Redux Look Like
![redux](https://user-images.githubusercontent.com/31806568/98481240-371aab00-21f9-11eb-8fc1-3f888bb40490.png)
```
If in a component I want to access some data, the component subscribes to changes to that
data, then redux passes the component of the data as props to the component. This gives me 
access to the data.

So If I want to make any change I cannot just go and tell react change it. There is a process
I must follow for this to happen to ensure that my application is predictable.
```
- Step 1: Come up with a change
- Step 2: Dispatch an action(describe the changes I want to make e.g. addPost to add a new item
to the data )
- Step 3: With the action dispatched, I can pass along an optional payload(any kind of data I 
want to pass along the action). I pass along the data of the new post along with the dispatch 
- Step 4: Once the action is dispatched the action is passed to a reducer. A reducer takes an
 action as an input and looks at the type and knows that it is a addacstsfpost action
- Step 5: The reducer takes the data given to it and goes to the central data store aka
the state and updates 