# BILLING AND INVOICE AUTOMATION PLATFORM
## Description

This project is a Billing and Invoice Automation platform for SaaS customers. It allows users to log in using Google OAuth, view their usage details, and access billing and invoice information. The platform integrates with Zapier.com to automate billing processes based on usage data.

## Features

### Backend (Node.js)
1. **User Authentication**: Enables users to log in using Google OAuth.
2. **Usage Details**: Allows users to view their SaaS usage details, including relevant metrics.
3. **Billing Information**: Provides billing details based on usage, including the current billing cycle and cumulative usage.
4. **Invoice Generation**: Generates invoices for cumulative usage.
5. **Zapier Integration**: Automates billing processes by triggering actions based on SaaS usage metrics.

### Frontend (React.js)

1. **Google OAuth Integration**: A user interface for users to log in using their Google accounts.
2. **Usage Details**: Displays SaaS usage details, including relevant metrics.
3.**Billing Information**: Shows the current billing cycle details and cumulative usage for the user.
4. **Invoice Generation**: Provides an option for users to generate invoices.

## Setup Instructions

### Prerequisites

1. Node.js and npm installed on your machine.
2. React installed globally.
3. A Google Developer Console account for OAuth configuration.
4. A Zapier.com account for automation.


### Backend Setup

1. Navigate to the server/ directory:
```
cd server
```
2. Install dependencies:
```
npm install
npm install express
npm install passport passport-google-oauth20
npm install dotenv
npm install @zapier/platform-core
npm install cors
npm install express-session
npm install pdfkit
npm install form-data
```
3. Create a .env file from the .env.example file and configure the environment variables:
```
CLIENT_ID=309521074156-h0ecaht5b4npmishbeshgt2vpnpjptjp.apps.googleusercontent.com
CLIENT_SECRET=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
CLIENT_URL=http://localhost:3000/
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/21688374/2w2hz9p/

```
### Frontend Setup


1. Navigate to the client/ directory:
```
cd client
```
2. Install dependencies:
```
npm install
npm i axios
npm i react-icons
npm i react react-dom react-router-dom
```
3.Start the react development server
```
npm start
```

## Demonstration

The project supports the following end-to-end flow:

1. Log in using Google OAuth.
2. View SaaS usage details.
3. Trigger automated billing using Zapier.com.
4. Generate invoices(will sent to the mail automatically).

### Resources Used

1. **Passport.js Documentation** (For implementing Google OAuth using passport-google-oauth20)
2. **Google Developer Console** (To configure Google OAuth credentials (Client ID and Secret).)
3. **Zapier Platform Documentation** (For automating workflows and integrating billing actions based on SaaS usage.)
4. **Express.js & Node.js Documentation** (To know about new middlewares like pdfkit, form data etc)

## By
### Vinay Kumar Polepelly


