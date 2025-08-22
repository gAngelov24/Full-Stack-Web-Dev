# ILLINIplan
This is a Web App for UIUC students where they can make 4-6 year plans and then have it verfied that it meets all the requirements of their major, minor, and concentration.
│
├───.vscode
│       settings.json
│
├───illiniPlan_V1
│       courses.json
│       generateCourses.js
│       index.html
│       majors.js
│       minors.js
│       package-lock.json
│       package.json
│       script.js
│       style.css
│       university-of-illinois-1.svg
│
└───node_modules

## illiniPlan_V1
Documentation of `illiniPlan_V1`:
Firstly, you will need Node.js installed along with the npm bundles. On my local machine I am testing with node version v22.11.0, and npm version 10.9.0. 

If `courses.js` is not populated with all of the UIUC courses you can populate it yourself by calling the UIUC Course Explore API. Here are the steps you must use:
1. Run `npm init -y` this initializes a new Node.js project
2. Run `npm install axios xml2js` this is install the npm packages axios and xml2js. You will need these packages to properly run the `generateCourses.js` script.
3. Go into the `generateCourses.js` file and make any modifications to the year or semester variables depending on which year's course catalog you'd like to extract.
4. Run in your terminal `generateCourses.js` this will take a while as the API has a strict limiter to regulate the amount of requests it recieves. I found that waiting 5 minutes after being blocked is suffiecient. Feel free to experiment with different delays if you'd like.
5. Once the `generateCourses.js` has finished execuating, you can enter the `courses.js` file to see what has been loaded in and confirm it is as expected.

