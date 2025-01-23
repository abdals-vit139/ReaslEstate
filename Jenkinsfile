pipeline {
    agent any
    stages {
        stage('Clone repo') {
            steps {
                git branch: 'main', url: 'https://github.com/abdals-vit139/ReaslEstate.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Using bat for Windows to run commands in CMD
                bat 'npm install'
            }
        }
      
        stage('Start application') {
           
            steps {
                bat 'npm start'
            }
        }
    }
}