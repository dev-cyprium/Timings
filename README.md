# About
`Timings` (this name is a placeholder) is an idea for a open-source project about self-improvement for programmers.
It's primary purpose is to train the programmers in various fields like:

  - Improving overall code structure
  - Improve knowledge of a particular language
  - Get consulting from expoerts
  - Improve typing speed
  - Improve commit messages

The platform itself is inspierd by many websites like CodinGame, KhanAcademy, but the idea is to allow free mentorship for programmers.

The platform itself will be organized into several parts which will provide the nesesarry functionality.
Also the final goal is to aid in **interviewing** which will provide an interesting twist for both users and HR departments.
Interviewers will be able to see the scores of candidates and their results so far. Other then that, they'll be able to give them tasks and the then later review them.
The candidates might choose weather or not they want their evaluation results displayed on their profile or not.

# Platform Sections
## Tasks
The tasks will a part of the platform responsible for monitoring over candidates past and current tasks. A candidate might do one task at a time. One the task is marked as complete / the time is up. Candidate will get the last 10 minutes to upload a `.zip` file of their project.
( Or push to the git repository opened up by the server )

Task does have a difficulty associated with it, and the user can't do difficult tasks unless he achieves more proffisent scores at less difficult ones.

A task is associated with a set of programming languages that are required to accomplish the given task.

Once this has been completeed, their mentor is notified and he can begin his evaluation of the project. Evaluation has the following criteria (each criteria being a grade from 0.0 to 10.0):

- Overall project accuracy ( is the functionality covered or not )
- Time it took for completition (speed)
- Code patterns and project structure (codebase)
- Test covearge (if any)

Once a mentor completes his/shes review the user is notified with his results and he can choose weather or not would he like to display his evaluation

## Users
An user is a free user of the application. He may seek out any of the free available mentor. A mentor is considered free when he set his status to accepting new users. (more on that in the mentor section)

The user might ask for a new task from a mentor or just wait for one. ( or choose one of the public available tasks)

The user then starts doing the task they've choosen, and he may only do one task at a point in time.

## Mentors
Any user of the website can become a mentor if he has a overage score higher then `8.5`. If the user decides to become a mentor anyway, he may do so by **applying for the mentorship possition**. His application will then get reviewed and then after a short back and forth of messages it will be decided weather or not should a user become a mentor.

A mentor may: **assign tasks to a specific user**, **add tasks to the global public list of tasks** edit their posted tasks and do a code review for a given user.

A mentor himself is getting reviews from a senior mentor which will give him an average score. If the mentor average score drops bellow at some point, he'll loose the mentor position and may re-apply in the future.