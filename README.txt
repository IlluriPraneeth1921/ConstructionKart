# Construction Kart

## Project Structure
construction-kart/ ├── backend/ │ ├── app/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ └── server.js ├── frontend/ │ ├── public/ │ │ └── index.html │ ├── src/ │ │ ├── components/ │ │ │ ├── Home.js │ │ │ ├── Products.js │ │ │ └── Contact.js │ │ └── index.js │ ├── package.json │ └── webpack.config.js ├── database/ │ └── schema.sql └── README.md
## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Create a `.env` file with the following content:
MONGO_URI=mongodb://your-rds-instance-url:27017/construction_kart
4. Start the server: `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

### Database

1. Execute the SQL script in `database/schema.sql` to set up the database schema.

### Deployment

1. Follow the deployment script provided in `deploy.sh` to deploy the application on AWS.
