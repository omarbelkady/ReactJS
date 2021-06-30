## Keyframes Usage


#### Pulse Keyframe

```js
<span class="wrapper">
    <span class="badge">3532</span>
</span>
<span>
    @keyframes pulse{
        0%{
            opacity: 0.5s;
            transform: scale(0.5);
        }

        100%{
            opacity: 0;
            transform: scale(2.75);
        }
    }
</span>
```

#### Spin Keyframe

```js
<button>
    <span class="text">
        Reloading 227243    
    </span>
    <span class="uil uil-sync">
    </span>

</button>
<span>
    @keyframes spin{
        0%{
            transform: rotate(0);
        }

        100%{
            transform: rotate(360deg);
        }
    }
</span>
```


#### Shake Keyframe

```js
<span class="wrapper">    
        <span class="uil uil-sync" />
</span>

<style>
    @keyframes shake{
        0%{  transform: rotate(-8deg); }

        8%{  transform: rotate(8deg); }
        
        16%{  transform: rotate(-8deg); }
        
        24%{  transform: rotate(8deg); }

        32%{  transform: rotate(-8deg); }

        40%{  transform: rotate(8deg); }
        
        48%{  transform: rotate(0); }
        
        100%{  transform: rotate(0); }
   }
</style>
```


#### Move Keyframe

```js
<button class="button">    
        <span>Hold On Please</span>
</button>

<style>
    @keyframes move{
        0%{  transform: translateX(25px); }

        100%{  transform: translateX(-20px); }
   }
</style>
```