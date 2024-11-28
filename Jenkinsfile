pipeline {
    agent any

    stages {
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
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Dev') {
            steps {
                sh 'npm run deploy:dev'
            }
        }
        stage('Confirm Deploy to Prod') {
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
            }
        }
        stage('Deploy to Prod') {
            steps {
                sh 'npm run deploy:prod'
            }
        }
    }
}
