pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/honggukim2/sprigReact.git'
            }
        }
        stage('Build') {
            steps {
                dir('test') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        stage('Verify Build') {
            steps {
                sh 'ls -al test/build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/html/*'
                sh 'cp -r test/build/* /var/www/html/'
            }
        }
    }
}
