## DOM Events In React

#### Most Essential Events in React

1. onClick is an event handler used to handle click events usually for buttons
2. onChange is an event handler used to handle keyboard events
## Events

### Animation Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|animationcancel| *Stop abrubtly the CSS Animation*|
|animationend| *CSS Animation Has Finished Successfully*|
|animationiteration| *# of times you have to repeat our animation*|
|animationstart| *Beginning of the CSS Animation*|pl

<br />
<br />

### Clipboard Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|copy| *The selection you made has been copied to your clipboard*|
|cut| *You just cutted something in the document and it has been copied to your clipboard*|
|paste| *You just pasted the selection you copied*|


<br />
<br />

### Focus Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|blur| *Element Has Lost Focus(no bubbling)*|
|focus| *Element Has Gotten Focused(no bubbling)*|
|focusin| *Element Is About To Be Focused(bubbles)*|
|focusout| *Element Is About To Lose Focus(bubbles)*|

<br />
<br />


### Form Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|reset| *Reset Button has been pressed*|
|submit| *Submit Button Has just been pressed*|

<br />
<br />


### Keyboard Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|keydown| *When any key has been pressed*|
|keypress| *(excluding Fn, Shift and CapsLock) to register a full cycle of keys*|
|keyup| *When any key is released*|


<br />
<br />

### Mouse Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|auxclick| *Pointing device button has been pre and rel[excluding any primary-button*|
|click| *Pointing device button has been pressed and released*|
|contextmenu| *Right click*|
|dbclick| *When you click twice on an element*|
|mousedown| *Pointing device is pressed on an element*|
|mouseenter| *Pointing device is moved on an element that has a listener*|
|mouseleave| *Pointing device is moved off of an element that has a listener*|
|mousemove| *Pointing device is moved over an element*|
|mouseout| *Pointing device is moved off of an element that has a listener attached to its children*|
|mouseover| *Pointing device is moved over of an element that has a listener attached to its children*|
|mouseup| *Pointing device is moved off of the element*|
|select| *You selected some text*|
|wheel| *The wheel button of a pointing device is rotated in any direction*|

<br />
<br />


### Network Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|offline| *Browser lost access to the network*|
|online| *Browser gained access to the network*|

<br />
<br />

### Print Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|afterprint|*page diaglog has been closed*|
|beforeprint|*page is about to be printed*|

<br />
<br />


### Resource Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|abort| *You aborted the loading of a resource*|
|beforeunload| *window, document and resource are about to be unloaded*|
|error| *Some Resource Has Failed To Load*|
|load| *Some resource and its independent resources have finished loading*|
|unload| *A document or dependent resource is being unloaded* |

<br />
<br />

### Transition Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|transitioncancel| *Cancel the CSS transition*|
|transitionend| *CSS transition has finished*|
|transitiononrun| *CSS transition started running(before any delay)*|
|transitionstart| *CSS transition has actually started(after any delay)*|

<br />
<br />

### View Events

| Name |  When Is it Fired |
|-------------------|-------------------|
|fullscreenchange| *Element has caused to trigger fullscreen mode*|
|fullscreenerror| *Permission Denied or impossible to switch to fs mode because of technical difficulties*|
|resize| *You resized the view document*|
|scroll| *You just scrolled up or down the document*|

<br />
<br />



### Web Socket Events

| Name |  When Is it Fired i.e. WS= Web Socket|
|-------------------|-------------------|
|close| *Connection To A WS Is closed*|
|error| *Connection To A WS Is Closed Due To Some Error*|
|message| *A Message Has Just Been Received Through A WS*|
|open| *WS Connection has just been made*|