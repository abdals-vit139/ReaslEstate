pipeline{
    agent any
    stages{
        stage('Clone repo')
        {
            steps{
                git branch:'main',url:'https://github.com/abdals-vit139/ReaslEstate.git'
            }
        }
        stage('install Dependencies')
        {
            steps{
                sh 'npm install'
            }   
        }
       
        stage('Start application'){
            input{
                message 'Do you really want to start?'
                ok 'clidk on ok'
                submitter 'Groot'
            }
            steps{
                sh 'npm start'
            }
        }
    }
}