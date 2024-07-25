pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install NodeJS if needed
                    def nodeVersion = '14' // Specify the Node.js version if needed
                    sh "nvm install ${nodeVersion}"
                    sh "npm install"
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    sh "cd client/TodoApp && npm run build"
                }
            }
        }
        stage('Deploy Node.js App') {
            steps {
                script {
                    sh "cd server && npm install"
                    sh "pm2 restart server" // or any deployment command you use
                }
            }
        }
        stage('Deploy React App') {
            steps {
                script {
                    // Example: Copy build to a web server directory
                    sh "aws s3 sync client/TodoApp/build s3://your-bucket-name --delete"
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            junit '**/target/test-*.xml'
        }
    }
}
