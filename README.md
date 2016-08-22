Baby Pass
Aka: ClassPass.com for babies by Brian, Erica & Nick

Summary / tl;dr
Activity finder for parents. Will have buyers and sellers. API of 6 related models + plus a bonus model time permitting.

Problem / Solution
Parents / caregivers constantly need to find activities for their kids. Many class organizers want kids to sign up for a long time. Baby Pass, like ClassPass, will allow parents to sample a wider array of classes, without having to commit, for flat rate each month.

Type of Business / Product
This is a two-sided marketplace - like a newspaper (advertisers / subscribers) or a credit card (vendors / consumers(card holders)). Baby Pass will operate a subscription business model.

User Stories
A vendor will want to do these things, in order of importance:
As a vendor I want to be able to sign up to the site. 
I want to be able to then add (or list) an activity to the site. 
I want to be able to set the number of spaces available for booking.
As a vendor it would be nice if customers could find me based on:
geography
category
activity age

As a site user I want to do these things:
As a user I want to be able sign up to the site.
I want to be able to browse the activities and/or classes.
I want to be able to sign up for a class.
I want to be able to view a list of my class signups / bookings 
It would be nice to browse or search for classes based on:
location
category
activity age

MVP

MVP EOD Monday / Tuesday AM Goal
A mvp for us will be a basic node app that:
models the relationships between vendors and users
allows vendors to create activities
allows users to register for a activities
prints a text list of vendor activities (events)
prints a text list of a users registrations / booking.

MVP Features we’d like to add during the week (the bare minimum to get done):
a map view
user authentication ( Passport.js )
pretty front end - using framework (foundation or boostrap)
something ajaxy? maybe alerts on the page when a new activity is posted? or maybe a countdown showing spaces left in a class, like hotel sites do with rooms left.

Extra Features ranked by Priority / Importance:
HIGH Priority Features: 
Maximum number in class. Set a numerical limit on the capacity of a class.
Map view of classes / activities
User authentication 
Front end framework (bootstrap or foundation)
Responsive / mobile friendly site

MEDIUM - Nice to Haves / Need Ideas Still
Some cool jquery elements
Something that uses a bit of Ajax  

LOW - Extra Time Features / / Super duper bonus
Stripe / Payment integration (if we have time on the last day).
Waiting list for a class
Email or sms alert for a signup or class reminder using twilio



Models
We have identified 5 classes. For our Mvp we are aiming to use 4 (vendor, location, activity and user). If we have time we will build out the 5th- categories later in the week.

A Vendor can create activities, and this includes a venue (location) and an activity. A User (customer) can select many activities and add them to a profile page.

Vendor
Add location
Add activity

User
sign up for an activity
view activities on profile page

Table / Mongo Schema

1. Vendor (user type 1)
name: String
removed: >> address, as Location has address.
email: String
password: 

2. Location (can have many vendors and activities) bn > changed ‘location’ to ‘activities’
name: String
address: String
phone_number: String
location: Decimal (find out - geo mapping feature) 

3. Activity (belongs to location and vendor)
title: String
date: date
ageFrom: integer
ageTo: integer
description: String
activityCapacity: integer

4. Customer (user type 2 can have many children)
name: String
email: String
phone_number: String

5. CustomerChid
child_name: String
child_age: Integer

6. Category
category: String (read only - pre populated?)


7. ChildActivity
vendor id
child id
location id
activity id

https://www.gliffy.com/go/html5/8392929?app=1b5094b0-6042-11e2-bcfd-0800200c9a66



==== T R E L L O    B O A R D =======
Trello board: https://trello.com/b/2wLZiDLy/wdi-ga-group-project




