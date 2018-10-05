# Lunch Wait Bot

One problem that many Vanderbilt students and staff members face is
increasingly long lines and wait times during the lunch rush.  Speaking from
experience with friends or just by myself, oftentimes we receive our food with
so late that we are forced to take our food to class and eat.  All in all, the
lunch rush at Vanderbilt can end up being more stressful than relaxing.

This project aims to help students find places to eat during the lunch rush
on Vanderbit's main campus.  The project is not aimed at helping students who eat 
on Commons since Commons is far enough away from main campus that people have no choice 
but to eat there if they need to stay on Commons.  Furthermore, this app is not designed
to help students choose locations to eat based on their food preferences.  Vanderbilt 
publishes an official campus dining app which has the menu of each campus dining,
and a seperate service performing the same task would be redundant.

This project will provide a texting interface through which students can register 
for the service, and then will receive suggestions on the least busy dining locations 
around main campus.

# Questions:
  1. Do you eat on campus for lunch?  If so, where?
  2. How do you usually choose your campus dining location for lunch?
  3. Do you feel that long wait times hinder your ability to make it to get lunch between classes, especially Tuesday/Thursday (where the gap between classes is shorter)?  How do you usually overcome this hurdle?
  4. If you knew a dining location you do not usually frequent had a very short waiting time, would you be inclined to go there?  Why/why not?
  5. Would you be interested in a service that suggested where you should eat, based on waiting times on campus?
  6. Would you be willing to report to the program how long you waited for food on campus?
  7. Do you think that Vanderbilt students would be interested in a service such as this?  Why/why not?
  8. Do you trust that other people partaking in this service would accurately report their waiting time data?
  9. What information about dining locations during the lunch rush would you want to receive, if you could choose?
  10. What would be an acceptable margin of error for such a service? (ex, the texting service says wait will be 10 minutes and wait is actually 15 - is this acceptable? What is the acceptable error?)


# Answers:
## Question 1:
1. Yes, either in rand at the sauté spot, pub, or the library cafe
2. Library cafe always.
3. Yes, usually rand. Specifically the bowls or randwiches
## Question 2:
1. How much time I have to socialize
2. Based on wait time and on healthy option availability
3. I pick what I'm craving
## Question 3:
1. My lunch break is long enough that this is not an issue
2. Yes. I will try my best to get to the location as soon as possible after class is let out and often will eat on the way to class.
3. My shortest lunch break is two hours so I just try to eat at off hours so I don't need to wait in ridiculous lines
## Question 4:
1. Yes, but only if it were a busy day and the place had study spots nearby 
2. Yes. I would have more time to actually eat the food rather than slam it in as I walk to my next obligation.
3. Probably
## Question 5:
1. That would be fairly clutch 
2. Yes.
3. Yes.
## Question 6:
1. Possibly, depending on how easy it would be
2. Yes.
3. Yes.
## Question 7:
1. yes, but the idea might suffer from the tragedy of the commons
2. Yes, I think a lot of students try to just get something to eat between classes or their next obligation and knowing where this can be done with the least hassle is a service I think students would use. 
3. Yes because it would be helpful especially since the lines for things like bowls get really long
## Question 8:
1. honesty, not entirely
2. Yes.
3. Yes.
## Question 9:
1. waiting time would be ideal, potentially if there were items that were out of stock 
2. How crowded it is, availability of open seating, wait times.
3. I'd like to be able to pick which dining options I'd want to eat at and then receive the wait times for them. It also would be nice to be able to pick a wait time and receive a notification when the dining option of my choice has a wait time at or under my specified time.
## Question 10:
1. 10% error
2. I would say an error rate of anything greater than 10 minutes over would be unacceptable especially if I have increased my walking distance to find a location with a shorter wait time.
3. That's acceptable particularly during the beginning or end of lunch rush when the wait times are rapidly changing.


# Requirements
Here are the general requirements for my service.  

- The main interface will be through texting
- Users should be able to receive a list of all dining locations and wait times associated with them.
- Users should be able to enter the actual wait time at a location
- Users should be able 
- Users should be able to unregister at any time.

# Development Approach
### Requirement Gathering

There are two major influences that informed the requirements that I chose (and subsequently my design).  First, the initial interface must be done through text and second, that users should be provided a method to wait times for their preferred campus dining locations.

I choose these two requirements to be the guiding requirements of the project for the following reason.  The only commonality among all responses was that receiving wait times would be beneficial.  Other responses, such as the ability to choose certain locations to receive information from or to be able to query if there are locations to sit were individual responses.  I agree that responses would be convenient, but I will delegate them to a later time.

The next requirement was that users should be able to report the wait time at a particular location.  This is necessary for two reasons.  First, in the initial version of the service, wait times will be crowd-sourced, meaning that the wait time that is reported to the user will be based on others' reported wait times.  Second, by recording the actual wait time, it becomes possible to compare the expected wait time to the actual wait time.

The last requirement is that users can unsubscribe at any time.  While this was not explicitly stated by any of the interviewees, from personal experience, I know that receiving unwanted texts can be annoying.  Furthermore, a potential feature would be time-based automatic suggestions, where the user enters their lunch schedule and they receive notifications automatically at their lunch time.  If this feature were to be implemented, then users would want the ability to turn off these notifications.

### Features
I create a seperate features section to talk about features that I plan on implementing in the project, as well as ideas for features in the future.

1. Wait Time List
	- returns a list of wait times for all of the campus dining locations that are open
2. Report Wait Time
	- A user will be able to report the wait time at a particular dinint location on campus.
3. User Registration
	- A user can register for the app.  If they choose to do this, they will input their schedule MON-FRI and their typical lunch times.  If the user chooses to to register, they will receive texts at their chosen time MON-FRI.
4. User Unregistration
	- If a user is registered, they can unregister at any time.  This will stop the daily texts.

### Design
The design for this application will be similar to the application built in class.  The main interface will be through texting, so the framework 
built in class to receive a text and parse the input will need to be modified only slightly.  Once the message is parsed and the correct information obtained, then it will be routed to the correct route handler.

The following are the commands that I envision the service implementing:
- wait
	- returns the wait times of all open campus dining locations, in alphabetical order
- report <dining location> <actual time in minutes>
	- associates the wait time with the dining location and stores the results
- register
	- launches the registration lambda function
- unregister
	- removes the current user from the subscribed users
	
The crux of the application will be reporting accurate wait times.  I realize that the current method for resolving wait times is not the most accurate method.  It would be beneficial if, in the future, it were possible to easily change the manner in which the waiting time is calculated.
To accomidate this, the wait time will be built seperately and exposed to the rest of the application through a small API.  This allows the 
implementation of the API to change, but the use can remain unchanged.


#### Rationale
This service revolves around reporting the wait time to Vanderbilt students during the lunch rush.  I chose to keep the actual functionality slim 
so that I could build a working prototype for the demo in class.  

### Implementation and Estimation
#### Time Estimation System
This portion of the service will be built first.  The time estimation will initially consist of a simple module that accesses a store of wait 
times for each dining location.  The program will be able calculate the estimated waiting time for each dining location and expose these values to the rest of the application through a small API (yet to be defined).
###### Estimation
I estimate this portion of the project to take about two days of work.  The majority of the time will be spent understanding the kvstore code from assignments 1-4 and designing an implementation that stores data for each dining location.

#### Build application logic flow
This portion of the development process will focus on building a framework for the application.  Since we have already built an example texting
program, this portion of the program will consist mainly of adapting the existing framework to handle the specific commands I desire.
###### Estimation
I estimate this portion of the project to take about half a day of work.  This portion of the project mainly involves adjusting the existing 
outline to work for my specific service.

#### Parse Input
This portion of the project is mostly finished.  I plan to add additional functionality, including case insensitivity to the commands passed by 
the user and some sort of fuzzy matching for the campus dining locations.
###### Estimation
I estimate this portion of the project will take about half a day to complete.

#### Wait Command
This portion of the project involves implementing the wait command.  The wait command is responsible for querying for the wait time for each command entered by the user and responding with a list of wait times for all campus dining locations.  This command should be easy to implement, since it simply needs to retrieve data from the kvstore and send it to the user.
###### Estimation
I estimate this will take roughly a day to complete.

#### Report Command
This portion of the project involes storing the wait time the user sent into the kvstore.
###### Estimation
I estimate this portion of the application will take about a day of work as well.

#### Daily Update
Both this module and the below module need to be designed together since they must work with the same interface to the data.  This portion 
will involve writing a second AWS Lambda function to periodically check and send texts to users.  
###### Estimation
This portion of the project will be the most time consuming.  The initial design period will take the most time.  Once the design for the 
kvstore holding the list of people to text, the implementation will be straightforward.  I estimate this portion of the project to take roughly 
2 days to complete once the design is complete.

#### User Registration / Unregister
This portion of the assignment is concerned with the user registering / unregistering for daily updates.  This portion must access the same kvstore 
as the previous section.
###### Estimation
Since this portion of the assignment simply adds or removes a user from the kvstore, I expect this portion of the assignment to take no more than a
day to complete.

### Testing
All of the testing for the project will be done in a manner similar to assignments 1-4.  I will use lein test-refresh to run the grading script as each change is made to ensure accuracy.
