
# Drum Pad

##Task #1
### Create a div for each letter in the "Rows" Object. 
   
-  A Helper method has already been created for you. Once in the loop you only need to call "createButtonDiv" with the parameter of the letter value.  
-  Once completed our index.html page should render a div similar to the following:

```
...
<div class="pad">
  <div class="box pad-1">R</div>
  ...
</div> 
```


##Task #2
### Update our drum buttons to include our Audio Attributes
   
-  A Helper method has already been created for you. Once in the loop you only need to call "updateAudioAttribute" with two parameters: the name of the beat button (Ex. "pad-1") and the URL of the MP3  
-  Once completed our index.html page should render a div similar to the following:

```
...
<div class="pad">
  <div class="box pad-1" data-audio="https://s3-us-west-2.a...mp3">
    R
  </div
  ...
</div> 
```

##Task #3
### Update our divs to include the key codes so we can use our keyboard to selected the drums
   
-  A Helper method has already been created for you. Once in the loop you only need to call "updateKeyCodeAttribute" with two parameters: the name of the beat button (Ex. "pad-1") and the keycode relating to the letter on the beat button.
-  Once completed our index.html page should render a div similar to the following:

```
...
<div class="pad">
  <div class="box pad-1" data-audio="https://s3-us-west-2.a...mp3" data-code="82">
    R
  </div
  ...
</div> 
```


## Survey
[https://goo.gl/forms/Wf0saCxrHwRz2c6D2]()


