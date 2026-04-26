# Portfolio Backend Server

This is the backend server for the portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
REACT_APP_URL=http://localhost:3000
PORT=5000
```

### Setting up Gmail SMTP:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use this 16-character password as `SMTP_PASS`

## Running the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /api/health` - Check if server is running
- `POST /api/contact` - Send contact form email

### Contact Endpoint Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

## Deployment

Deploy to Railway:
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on push
