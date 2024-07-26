pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/AmanBits/todo_with_db.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Add your deployment steps here
            }
        }
    }
}
