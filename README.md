# Marinahacks3.0Project
**This project won first place in the Social Goods category**

## Inspiration
We were inspired by the experiences of friends and family members in school and how their grasp of a subject wasn't always reflected in a final grade. A student can do fantastically on coding labs, or write compelling essays and still do poorly in a class because the grading criteria relies heavily on exam scores. As particularly poignant examples, Bonnie's boyfriend struggles with severe ADHD and her mother with dyslexia, and as a result both of them struggled in the education system because its emphasis on high-stakes testing rather than true comprehension. It's no secret that students in school today are often disillusioned and struggle to find their motivation under the current system. Our project aims to start a change in the way we view academic progress by evaluating students and their progress over time, not just in letter grades but also in their strong and weak learning styles, intelligence types, and teamwork personality as well as assisting teachers in moving towards this new style of assessment. Our hope is that by evaluating students on a more comprehensive metric, they will be able to see their growth over time, particularly outside of letter grades, and they will be more motivated to continue to progress and learn.

## What it does
There are three main components of this project: student/teacher evaluations, learning type assessments, and lesson plan assistance. The home-page of our website functions as a student overview, summarizing important information about a student, including their grade trends over time and their average scores in the learning type assessments. 

**Student/Teacher Evaluations:** This component allows teachers and students both to evaluate the student on their perceived strengths and weaknesses. These evaluations cover a variety of topics including their learning type, types of intelligence, and teamwork personality scored from "Strongly Disagree" to "Strongly Agree" and encourage teacher interaction with students as well as student reflection on their performance. 

**Assessments:** This component allows students to engage with a set of assessments, covering types of intelligence, teamwork personality, and learning types. At present, only the types of intelligence quiz is available. These assessments are drawn from peer-reviewed sources and scored on a scale from "Strongly Disagree" to "Strongly Agree." 

**Teacher Lesson Plan Assistance:** This component adapts the Microsoft Bot Framework using Azure's Power Virtual Agent to interact with educators and allow them to ask questions regarding site function.

## How we built it
Bonnie worked primarily on the main website structure. Megan worked on the sample database and data virtualization. Carla worked on developing the Cindy bot. Analicia worked on the code and research for the intelligence quizzes. We developed the charts using chart.js.

## Challenges we ran into
Going into this project, our team wasn't particularly familiar with git and we learned quite a lot on the job. We had several issues with losing our main branch while we worked through this project as well as with losing progress and accidentally overwriting one another's work. One of the most difficult parts while creating this project was implementing an AI chatbot API. Originally, we were going to use OpenAI's API access to implement ChatGPT as our chatbot, however we were unable to due to licensing issues. Alternatively, we were able to implement Microsoft's Bot Framework using Azure's Power Virtual Agent to build our own AI chatbot from scratch. Since it was open source, licensing wasn't an issue and we were able to imitate the ChatGPT-3 experience by creating our own "Cindy" chatbot.

## Accomplishments that we're proud of
We are proud of the many features we were able to research and build out in this short amount of time. The teammate were all eager to help and equally shared the workload. This included work through issues with github, paywall roadblocks, challenging libraries, and interactive components in building a webpage from scratch. Each of my teammates were new to each of those topics and confidently tackled each issue. We are really proud of the quality of our output page and the amount of diligence shown throughout the whole project

## What we learned
We learned how to use github, as well as new skills in frontend development, largely through Vue. Consequently, we also learned how to utilize Axios in Vue.js to have API access for our AI chatbot. Additionally, we learned how to implement different JS libraries such as chart.js to extract and display the data on the student's progress.

## What's next for ProgressPath
Next steps for our team include expanding the Lesson Plan Assistance to be able to draw from peer-reviewed sources when a teacher has questions regarding constructing a lesson plan, such as "Help me create a kinaesthetic English lecture on Candide." We also intend to continue working to improve the appearance of the website and to implement the other two intelligence tests that we expect the final version to include.
