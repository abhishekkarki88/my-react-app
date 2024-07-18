**************My React App ************
Installation
***************Clone the repository*************
git clone https://github.com/your-username/my-react-app.git
cd my-react-app
//Install dependencies//
Using npm:
npm install
Running the App
//Start the development server// Using npm:
npm start
(The app should now be running on http://localhost:3000.)
//Project Structure//
Here's an overview of the project's structure:
my-react-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .github/workflows/
│   ├── deploy.yml
├── .gitignore
├── package.json
├── README.md
└── ...

************Backend Setup******************8
Clone the backend repository:
git clone https://github.com/your-username/my-backend.git
cd my-backend
//Install dependencies//
npm install
//Create a server.js file to handle API requests://
const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

app.get('/api', (req, res) => {
  db.query('SELECT * FROM your-table-name', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*****************Start the backend server locally******************
npm start
The server will run at http://localhost:5000.

************Frontend Docker Setup**************
Create a Dockerfile in the frontend project root directory (my-react-app/Dockerfile):

# Dockerfile for frontend
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
Build the frontend Docker image:

docker build -t my-react-app-frontend .
Run the frontend Docker container:

docker run -d --name frontend-container --network host my-react-app-frontend


********Backend Docker Setup*************
Create a Dockerfile in the backend project root directory (my-backend/Dockerfile):

# Dockerfile for backend
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
Build the backend Docker image:

docker build -t my-backend .
Run the backend Docker container:

docker run -d --name backend-container --network host my-backend

*********Database Setup*************
Install MySQL and start the MySQL server.

Create a new database:

CREATE DATABASE your-database-name;

Create a new table:
CREATE TABLE your-table-name (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
Insert sample data into the table:
INSERT INTO your-table-name (name, email) VALUES ('John Doe', 'john@example.com'), ('Jane Doe', 'jane@example.com');


Great! It sounds like you've set up an AWS EC2 instance and integrated GitHub Actions for continuous integration and continuous deployment (CI/CD). Here's how you can update your README to reflect these configurations:



******Clone the frontend repository:************

git clone https://github.com/your-username/my-react-app.git
cd my-react-app
Install dependencies:

npm install

Running the App
Start the development server:
npm start
The app will run at http://localhost:3000.

Build the app for production:

npm run build


*****Clone the backend repository:*****

git clone https://github.com/your-username/my-backend.git
cd my-backend
Install dependencies:

npm install

Create a server.js file to handle API requests:


const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 5000;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

app.get('/api', (req, res) => {
  db.query('SELECT * FROM your-table-name', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

******Start the backend server:*********


npm start

The server will run at http://localhost:5000.



******dockerfile for backend and frontend*********

Frontend Docker Setup
Create a Dockerfile in the frontend project root directory (my-react-app/Dockerfile):

# Dockerfile for frontend
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

Build the frontend Docker image:
docker build -t my-react-app-frontend .

Run the frontend Docker container:
docker run -d --name frontend-container --network host my-react-app-frontend
Backend Docker Setup
Create a Dockerfile in the backend project root directory (my-backend/Dockerfile):

dockerfile
# Dockerfile for backend
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
Build the backend Docker image:

docker build -t my-backend .
Run the backend Docker container:

docker run -d --name backend-container --network host my-backend
Database Setup

*******Install MySQL and start the MySQL server.*****

Create a new database:


CREATE DATABASE your-database-name;
Create a new table:


CREATE TABLE your-table-name (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
Insert sample data into the table:


INSERT INTO your-table-name (name, email) VALUES ('John Doe', 'john@example.com'), ('Jane Doe', 'jane@example.com');


********Continuous Integration and Deployment********

GitHub Actions Setup
Create GitHub Secrets:

Create a new repository for both frontend and backend.
Inside each repository, navigate to Settings > Secrets > New repository secret.
Add the necessary secrets like AWS credentials (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY), Docker Hub credentials (DOCKER_USERNAME, DOCKER_PASSWORD), and any other secrets required for your CI/CD pipeline.
Configure GitHub Actions Workflow:

Create .github/workflows/deploy.yml in both frontend and backend repositories to define your CI/CD workflow.

*****Example configuration for frontend (my-react-app/.github/workflows/deploy.yml):******

name: Build, Push Docker Image and Deploy to EC2
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-dockerhub-username/my-react-app-frontend:latest
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Deploy code to EC2
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_SSH_KEY }}
          port: ${{ secrets.EC2_PORT }}
          script: |
            sudo docker pull my-dockerhub-username/my-react-app-frontend:latest
            sudo docker stop frontend || true
            sudo docker rm frontend || true
            sudo docker run -d --name frontend -p 4000:80 my-dockerhub-username/my-react-app-frontend:latest
            echo "Deployment completed successfully"

******Example configuration for backend (my-backend/.github/workflows/deploy.yml):****

name: Build, Push Docker Image and Deploy to EC2
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-dockerhub-username/my-backend:latest
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Deploy code to EC2
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_SSH_KEY }}
          port: ${{ secrets.EC2_PORT }}
         
******To map your AWS EC2 instance's IP address to domain names like abhishek.learn.cloudlaya.com for the frontend and api-abhishek.learn.cloudlaya.com for the API, you'll need to follow these general steps://***

1. Obtain a Domain Name
If you haven't already, register a domain name (e.g., cloudlaya.com) through a domain registrar like Namecheap, GoDaddy, or AWS Route 53.

2. Configure DNS Records
Once you have your domain name registered, you'll need to configure DNS records to point to your EC2 instance's IP address. Here’s how you can do it:

Route 53 Configuration (AWS)
If you're using AWS Route 53 for DNS management:

Create a Hosted Zone:

Log in to the AWS Management Console and navigate to Route 53.
Create a new hosted zone for cloudlaya.com.
Create Records:

Inside the hosted zone, create two records:
Record Set 1:
Type: A - IPv4 address
Name: abhishek.learn.cloudlaya.com
Value: IP address of your EC2 instance
TTL: Leave as default or set according to your preference
Record Set 2:
Type: A - IPv4 address
Name: api-abhishek.learn.cloudlaya.com
Value: IP address of your EC2 instance
TTL: Leave as default or set according to your preference
Save Changes:

Save the changes to update DNS records.
Other DNS Providers
If you're using a different DNS provider:

Login to DNS Management Portal:

Log in to your DNS provider's management portal.
Add DNS Records:

Add two A records:
abhishek.learn.cloudlaya.com pointing to your EC2 instance's IP address.
api-abhishek.learn.cloudlaya.com pointing to your EC2 instance's IP address.
Save Changes:

Save the changes. DNS changes may take some time (up to 24 hours) to propagate across the internet.


******Nginx Configuration for Subdomains*******
Assuming your frontend application runs on port 3000 and your API runs on port 5000, here’s a step-by-step guide to configure Nginx:

Install Nginx (if not already installed):


sudo apt update
sudo apt install nginx
Create Nginx Configuration Files:

Create a new configuration file for abhishek.learn.cloudlaya.com:


sudo nano /etc/nginx/sites-available/abhishek.learn.cloudlaya.com
Add the following configuration (replace placeholders with your actual setup):

server {
    listen 80;
    server_name abhishek.learn.cloudlaya.com;

    location / {
        proxy_pass http://localhost:3000;  # Assuming React app runs on port 3000
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Add additional configuration as needed, such as SSL/TLS settings
}
Create another configuration file for api-abhishek.learn.cloudlaya.com:

sudo nano /etc/nginx/sites-available/api-abhishek.learn.cloudlaya.com
Add the following configuration (replace placeholders with your actual setup):


server {
    listen 80;
    server_name api-abhishek.learn.cloudlaya.com;

    location / {
        proxy_pass http://localhost:5000;  # Assuming API runs on port 5000
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Add additional configuration as needed, such as SSL/TLS settings
}
Enable the Nginx Sites:

Create symbolic links from sites-available to sites-enabled:


sudo ln -s /etc/nginx/sites-available/abhishek.learn.cloudlaya.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/api-abhishek.learn.cloudlaya.com /etc/nginx/sites-enabled/
Test Nginx Configuration:


sudo nginx -t
If the configuration test is successful, you should see syntax is ok and test is successful.

Restart Nginx:


sudo systemctl restart nginx
Verifying the Configuration
Open a web browser and navigate to http://abhishek.learn.cloudlaya.com and http://api-abhishek.learn.cloudlaya.com. Ensure that you can access your frontend application and API respectively.
