Explain what the simple List component does?

    1)List component renders all the texts that are available(in json file) and display it as an unordered list using Map function.
    2)displaying all texts,which are primarily in green colour.
    3)on clicking on every single element(texts) present on the screen,onClickHandler function gets executed and it will trigger  'handleClick' function,it will set the value of selectedIndex as the index of list element that was clicked.
    4)Then,BackgroundColor style will set the background color according to clicked event and the green colour will change to red colour for every element,and vice versa....



What problems / warnings are there with code?

     1) onClick={onClickHandler(index)} ----arrow function is missing in onClick event! it should be like, onClick={()=>onClickHandler(index)}
     2)useState hook should be defined with correct syntax.
     3)item.text should have some values to display!
     4)In WrappedListComponent.propTypes, array should be relaced with arrayOf and shapeOf shoud be replaced shape.



Please fix, optimize, and/or modify the component as much as you think is necessary.

    1)Content of items can be put inside one folder i.e.Itemdata/Data.js
    2)we can put List component inside App.js and can pass items={items} as a props!,so in case if we want to add more child-components we can add that below List component.


