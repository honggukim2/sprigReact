pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/honggukim2/sprigReact.git'
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
        stage('Deploy') {
            steps {
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r test/build/* /var/www/html/'
            }
        }
    }
}
