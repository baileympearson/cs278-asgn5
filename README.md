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

# Usage
There are five valid commands:

```
register
unregister
wait
report
halp
```

## register
The register commands allows a user to specify their preferred dining locations and to choose
times to be notified at automatically each day.  The syntax is easy:

```
register
```

which will then take you through an interactive process to register for the service.  Each command 
in the registration process must begin with the word register.

### Choosing locations
You will be prompted to choose which dining locations you prefer.  You must respond in the following format:
```
register <location1> ... <locationn>
```

If any of your locations are not a valid campus dining location or if you misspell a location, it will be
ignored by the program.

### Choosing times
You will next be prompted to choose the times to be notified at.  You must respond with a list of 5 times, corresponding
to Monday-Friday.

```
register <time monday> <time tuesday> ... <time friday>
```

For example:
```
register 11:00 10:00 12:15 1:10 2:08
```

You will then be successfully registered!  You can unregister at any time.

## Unregister
This command unregisters the user from the service.  The syntax is straightforward:
```
unregister
```

## report
This command allows the user to report a wait time for a particular dining location.  The user
does not need to be registered to report wait times.

```
wait <dining locaiton> <time in minutes>
```

If a dining location is specified that does not exist, the input will be ignored.

## wait
This command reports the wait time at a particular dining location. The syntax is:

```
wait <dining location>
```
