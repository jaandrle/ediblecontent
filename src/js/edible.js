(function() {
  //Utiltity Functions for finding Parent elements
  // http://stackoverflow.com/a/14234618/4435293
  function collectionHas(a, b) {
    for(var i = 0, len = a.length; i < len; i ++) {
      if(a[i] == b) return true;
    }
    return false;
  }
  function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }
  //Make Edible main function
  function makeEdible(editors) {
    //If the DOM elements we want exists
    if(editors.length > 0) {
      for (var i = 0; i < editors.length; i++) {
        var container = editors[i];
        //Get the format buttons
        var buttons = container.querySelectorAll('button[data-tag]');
        var editor = container.querySelector('[contenteditable]');
        //For each of them...
        for(var b = 0; b < buttons.length; b++) {
          //We bind the click event
          buttons[b].addEventListener('click',function(e) {
            e.preventDefault();
            //Find the button and it's parent
            var button = e.target,
                buttonParent = findParentBySelector(button, '[data-edible]'),
                //Find the selection and the editor
                selection = document.getSelection(),
                selectionParent = findParentBySelector(selection.anchorNode, '[contenteditable]');
            //Make sure the button we pressed is for the editor we want
            if (buttonParent.querySelector('[contenteditable]') == selectionParent) {
              var tag = this.getAttribute('data-tag');
              switch(tag) {
                case 'createLink':
                  var link = prompt('Please specify the link.');
                  if(link) {
                    document.execCommand('createLink', false, link);
                  }
                  break;
                case 'insertImage':
                  var src = prompt('Please specify the link of the image.');
                  if(src) {
                    document.execCommand('insertImage', false, src);
                  }
                  break;
                default:
                  document.execCommand(tag, false, this.getAttribute('data-value'));
              }
            }
          });
        }
      }
    }
    return editors;
  }
  makeEdible(document.querySelectorAll('[data-edible]'));
})();
