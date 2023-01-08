                                                                     TINDER 

1.	Signup.js
-	Sign up helps the new user to register to the application by filling all the required details. All the fields of the form are mandatory.
-	One email id can be registered only once. If the user is already registered then navigate to login page and fill the credentials to move to login page.
-	After clicking on the register button the user will be navigated to login page where they have to enter their email id and password to login.

2.	Login.js
-	User have to use their email id and password which they used at the time of signup.
-	Entering the wrong email id will show he message User not found.
-	Entering the wrong password after entering correct email id will show the message Password is incorrect.

3.	Home.js
-	User when clicks on the profile button in nav bar ,it opens an offcanvas  which consists of the details of the current login user.
-	 If the user wants to change the account to premium there is a button(upgrade to premium) inside the offcanvas which inturn opens  a modal and changes the account to premium.
-	Home page also contains a button (Click to view profile) ,this it navigates to profile page.

4.	profile.js
-	Here user can view profile of all the other person. Every time user enters profile page,  there is a person's picture. On bottom of that picture, there’s some basic information about them, including their name, age, occupation and Interests. If user likes them, he can swipe right.
-	At this point, user have to wait for a little while, as user will only be able to chat with them if they like user back. If they already swiped right on user,  user can chat with them through the app.
-	For Premium Account current user can do only 2 swipes and for normal account its restricted to 1.

5.	ChatList.js
•	This component shows the list of all the people that the user has matched with.
•	Once the user and their match both have swiped right, they each get added to the list.
•	Each user has their own personal matches which appear in chat list and once they click   on that person’s email, they get access to their chat and can start conversing.



6.	ChatRoom.js
•	Once the user clicks on the username that they want to talk to, they get redirected to their particular private chat room.
•	On this page, the users can converse with each other in real time.
•	The messages get stored in the mysql database and are displayed onto the screen based on the sender and receiver names.
•	The user can go back to the chatlist screen to select and talk to a different user.

Github Repository Link
https://github.com/mayankkedia501/CapstoneTinder

