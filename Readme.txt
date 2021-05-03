1)For Running project follow below steps
    - cd descriptionInReactJs
    - run "npm install"
    - run "npm start"

2)Folder structure

below is reusable component for drop down
    src\components\ReusableDropdown.js
main component file
    src\index.js

3) Calling reusable component from index.js file
example :
 <SelectDropdown data={{ theme: 'white', description: false, data: normalList }} />

 above the example of calling reusable component repetitively by changing the data
 below are the props we are using for different purpose
 
    i)   theme : this parameter using for theme if you want black theme then your dropdown will be balck or white
    ii)  description : this parameter using if we want normal dropdown list then need to set value "false" and 
         if you want menu dropdownlist then you need to set value "true"
    iii) data : this is use for the data you are sending
          
          
