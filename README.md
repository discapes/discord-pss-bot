# discord-pss-bot

Commands:
- `/advertise self` to create a post in the same channel about you looking for a fleet
- `/advertise fleet` to create a post in the same channel about your fleet looking for members
- `/ping` to test if the bot is online

How to deploy:
- Clone this repo
- Create a new AWS Lambda function named `pss-discord-bot-master` (!not `discord-pss-bot-master`), running on Node 18
  - Set the environment variables `DC_PUBLIC_KEY`, `DC_APP_ID` and `DC_SECRET` for the Lambda (from the Discord Dev Portal)
- In the Github repository secrets, set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to fresh credentials
  - They must have permissions to invoke and modify Lambda functions, for the CI to work
- Rerun the Github Action
- Voila!

Support:
- Contact `Discape#3042` on Discord
