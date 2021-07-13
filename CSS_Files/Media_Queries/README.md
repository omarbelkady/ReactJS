## Media Queries

```css
/*apply styling when body width >= 500px*/
@media(min-width: 500px){
	body{
		background: blue;
	}
}
```
### Orientation Query
```css
@media (orientation: landscape){
	body{
		flex-direction: row;
	}
}

@media (orientation: portrain){
	body{
		flex-direction: column;
	}
}
```

###  Range Based Media Query
```css
/*apply styling when 500px<body width<800px*/
@media(min-width: 500px) and (max-width: 800px){
	body{
		background: red;
	}
}
```


###  Max Size Media Query
```css
/*apply styling when the media size 
is less than or equal to 500*/
@media (max-width: 500px){
	body{
		background: red;
	}
}
```


### Screen Breakpoints And Resolutions

- 0px-480px: Small Smartphones
- 480px-768px: Tablets and Larger Smartphones
- 768px-1280px: Laptops, Larger Tablets in Landscape Mode and a small Desktop PC
- 1280px and greater: Larger Desktops and Monitors



1. 320px: Phone in Portrait Mode

2. 480px: Phone in Portrait and Landscape Mode

3. 600px: Small Tablet in Portrait Mode

4. 768px: Large Talet in Portrait Mode

5. 800px: Phone and Small Tablet in Landscape Mode

6. 1024px: Large Tablet in Landscape Mode

7. 1280px: Desktop

8. 1440px or greater: Wide screen Desktop



### When targeting Small Screens and big Screens
	
- Make A Plan For Both
- Use meta tags
- Use grid
- Use Media Queries and FlexBox
- Use REM, EM, VW instead of PX
- Try to stay away from negative spacing
- Try to find responsive images 