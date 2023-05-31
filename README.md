# pss-discord-bot-lambda

AWS Lambda function that works as a Discord bot. The command opens a Discord form modal
and then sends a formatted "Looking for Group" message based on values entered into the modal.

### Commands
- `/advertise self` to create a post in the same channel about you looking for a fleet
- `/advertise fleet` to create a post in the same channel about your fleet looking for members
- `/ping` to test if the bot is online

### How to deploy
- Clone this repo
- Create a new AWS Lambda function named `pss-discord-bot-master`, running on Node 18
  - Set the environment variables `DC_PUBLIC_KEY`, `DC_APP_ID` and `DC_SECRET` for the Lambda (from the Discord Dev Portal)
- Set your Discord bot webhook to the AWS function URL
- In the Github repository secrets, set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to fresh credentials
  - They must have permissions to invoke and modify Lambda functions, for the CI to work
- Rerun the Github Action
- Voila!

