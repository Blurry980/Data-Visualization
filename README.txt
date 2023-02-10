README.TXT

==============================
STRUCTURE OF THIS FILE
==============================

This files describes the major sections of the site, including the data visualizations created by each member of the group.

Subheadings describe each file for the major sections.


====================
    MAIN PAGE
====================
The index page for the site contains links to all visualizations.

main.html - The main HTML page contains a table with a description of each member's data visualization, and links to their page.
main.css - The CSS stylesheet defines the styles used on the main page.

========================================
    VISUALIZATION 1: MALACHI COAN
========================================

    Visualization: Chloropleth Map of the world
    Data: Population Density data from the United Nations

Visualization1/index.html - This page loads the D3.js files and my javascript and style sheet. It contains an SVG element where the SVG map will be drawn, form inputs to select a year, and a container where information for each country will be written by a mouseover function.
Visualization1/map.js - Javascript code to load and parse the data, draw the SVG map, color each country based on its population density, and create a mouseover effect to show each country's data.
Visualization1/styles.css - Contains styles for the HTML elements on the index page.
Visualization1/WPP2019_POP_F06_POPULATION_DENSITY.csv - Contains population density for the countries of the world from 1955 to 2020. Downloaded from the United Nations website, converted to CSV.

========================================
    VISUALIZATION 2: DAVID VINCI
========================================

    Visualization: In my folder, there is a files folder that contains "d22a6e9c4b47d398faffbefad669e5b807a0c8bc3eaf4d28edfd52330fa48ac1"
    which is the name of the files SHA256 hash for my csv data.

The file named "75faaaca1f1a4f415145b9db520349a3a0b93a53c1071346a30e6824586a7c251f45367d9262ed148b7a2b5c2694aa7703f3ac88051abc65066fd0074fdf9c9e" contains all of the data
that creates the map of the USA.
The file named "438813e85a5cfb28@205.js" is the javascript file containing the data, color, scale, and map.
The file named "a33468b95d0b15b0@703" also handles color but seems like it is the intensity of the color. It also handles the scale and legend.
The file named "index.html" imports different files."index.js" exports from "438813e85a5cfb28@205.js", im not really sure what that accomplishes.
"inspector.css" formats the main page.
"package.json" looks like it just shows what all of the files in the original file does.
Im not 100% sure what "runtime.js" does but i think that may be the reason why i cant just simply change the file names to something more readable.
I think it might be checking is see if the file type is what they want etc.

========================================
    VISUALIZATION 3: Rocco Ranallo
========================================
Visualization: Chloropleth Map of the world
    Data: Life expectancy of a citizen of specific country at birth. File name "C0F2665702539EC9EC71434E8D87FE7C285F5D6489AAE0B8E0CC1E8C271DAF32" the SHA256 of the hale202.csv file. It is in the files folder and it was the data form the WHO website.

Visualization3/index.html - This page loads the D3.js files and my javascript and style sheet.
Visualization3/dc2651aa8659de97@285.js - Javascript code to load and parse the data, draw the map, and color each country based on the map key and the average life expectancy of the, and create a mouseover effect to show each country's life expectacy at birth.
Visualization3/a33468b95d0b15b0@703.js - Javascript code creates a simple legend for the colors and is used in all the visualizations as it contains javascript code for all visualizations. 
Visualization3/runtime.js - Javascript code which contains runtime instructions
Visualization3/index.js- Javascript code exports defalut from dc2651aa8659de97@285.js
Visualization3/package.json - calls the specific dependancy and reverts to the main dc2651aa8659de97@285.js.
Visualization3/inspector.css - Contains styles for the HTML elements on the index page.


========================================
    VISUALIZATION 4: Shannon Sosebee
========================================
Data: "e0e620f19380f12ec2c4a1bc4b3089f8cb04d1093611d4a8a9201390d8c9489c" is the SHA256 hash for my data file, originally lotr_characters.csv.

The index.html file connects the css and javascript files to one page in order to create the display.
The inspector.css file contains all the code to style the page.
The package.json file provides more information and sources for the project.
The runtime.js file is the library that allows all of this code to be executed.
The "70f8856cb0e05d56%40224.js" javascript file connects the data and contains the code that produces the visuals.
The "a33468b95d0b15b0@703.js" javascript file works more to manipulate the colors and visual aesthetic of the data visual.


========================================
    VISUALIZATION 5: ANDREW SU
========================================

    Visualization: Population By Age: State Demographic Distributions
    Data: https://www.census.gov/data/developers/data-sets/acs-5year.2018.html
    Source: https://observablehq.com/@omert7376/stacked-normalized-horizontal-bar-chart

Andrew Su - data visualization (USA_Population_Distribution.html) with embedded JavaScript on population per state in the USA. 
The user interacts with this by mouse-hovering over the bars to display the results, which have numbers per age range in each state. If the mouse moves to a new bar, the data for that bar will display its own results. 
If the user mouse-hovers off any bar, no data is shown. The entire code is contained in the <html> tags and within those tags, there is the <head> and <body> tags. 

The <head> tag is larger and contains the embedded JavaScript, where the window.onload method is called and contains the function. 
Within the function is the chart variable which calls on CanvasJS as chart format, enables animation of the bars, and sets the theme. 
This is followed by the title with the text, the X and Y axis, the toolTip feature (with shared set as true), and lastly, the data feature where the type has been set to "stackedBar100", the toolTipContent has set the percentage in percentages, and the showInLegend method has been set to true. 
The names and dataPoints vary as they are repeated throughout the code due to different numbers in different states and age groups. This is repeated nine times with numbers and names (where the age ranges are specified) have variance. 
Finally, the chart.render() method is used to render the chart and the canvas has a mouse hover feature that enables user to view data when the cursor hovers over the bars. 
The end </script> tag for script contains the JavaScript code followed by the end tag </head> for head to contain the head. 
The <body> tag utilizes the id chartContainer and stylized the height to 900px in height and sets the width to 100% of the screen. 
The script source cites the source of the script. Lastly, the <div> tag has a class "myDiv" for reference and then the <a href> tag links the page to main.html with the text, "Back to Main Webpage" followed by a closing </div> tag. 
This ensures that if the user wants to return to the main webpage, the user clicks on the text "Back to Main Webpage" to take themselves back to the main webpage. 
The </body> tag closes and the entire code is concluded by the closing </html> tag. 
As for the information, all of this is entered manually as the numbers have variance.