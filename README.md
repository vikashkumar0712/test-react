# Following Steps I have done to deploy React UI Application in Docker Container

### Provisioning The server
1: 
Create a EC2 Instance

2:
Modify the Security Groups And allow 3000 port traffic

3: 
SSH into the instance 

### Dependencies
 Install Docker, Node and npm

$ `sudo apt install npm`

$ `sudo apt install docker.io`

$ `sudo apt install nodejs`

### Installation
4: 
Clone the code from github remote repo

$ `git clone https://github.com/vikashkumar0712/react-movie-app`

$ `cd react-movie-app`

### Containerization

5:
Create a Dockerfile

$ `sudo vi Dockerfile`

6:

Build the Image from the Dockerfile

$ `sudo docker build -t vikashkumar07/react-movie-app:latest .`

### Pushing the Image on DockerHub

$ `sudo docker push vikashkumar07/react-movie-app:latest`

### Pulling Back the image & Running the Container

$ `sudo docker pull vikashkumar07/react-movie-app:latest`

### Pulling the Image from DockerHub & Running the Container

7:
Run the image in Detach and restart mode by which Container will run even after the restart of EC2 Instance

$ `sudo docker run -d -p 3000:3000 --restart always my-react-app:latest`

### Now Check the App Up and Running

8:

Now hit the url of EC2 Instance along with port 3000

<instance-url>:3000



