# JPMC Task 3
Starter repo for task 3 of JPMC's Forage program

Introduction
Experience Technology at JPMorgan Chase
Try out what real work is like in the technology team at JPMorgan Chase & Co. Fast track to the tech team with your work.

Module 3 Task Overview
Display data visually for traders. Use Perspective to create the chart for the trader’s dashboard.
Aim: Use Perspective to generate a chart that displays the data feed in a clear and visually appealing manner for traders to monitor this trading strategy. Basically, you have to modify the existing live chart to be able to (1) track and display the ratio between the two stock prices (2) show the historical upper and lower bounds of the stocks' ratio (3) and finally, show 'alerts' whenever these bounds are crossed by the ratio.

Please clone this repository to start the task
From the existing live graph, update it to track the ratio between two stocks over time and NOT the two stocks’ top_ask_price over time.
Update the graph to also track the historical upper and lower bounds of the stocks' ratio
Trigger 'alerts' (i.e. draw red lines) on the graph whenever the bounds are crossed by the calculated ratio in a specific time period
Upload a git patch file as the submission to this task
Upload a video detailing your process and work
Setup / Installation
In order to get the server and client application code working on your machine, follow the setup here

How to Run
Similar to Task 2, start the data feed server by running the python server

Make sure your terminal / command line is in the repository first before doing any of this.

If you are using Windows, make sure to run your terminal/command prompt as administrator.

python datafeed/server.py

If you encounter an issue with datautil.parser, run this command:

pip install python-dateutil
If you don't have pip, you can install it from: https://pip.pypa.io/en/stable/installing/

Run npm install && npm start to start the React application.

It's okay to have audit warnings when installing/running the app.

If you don't have npm (although you should if you followed the setup / installation part), you can install the recommended version alongside NodeJS from: https://nodejs.org/en/

The recommended version are node v11.0.0 and npm v6.4.1

Open http://localhost:3000 to view the app in the browser. The page will reload if you make edits.