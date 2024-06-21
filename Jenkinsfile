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
        stage('Deploy') {
            steps {
                dir('test') {
                    sh 'ls -al build' // build 디렉토리 내용 확인
                    sh 'rm -rf /var/www/html/*'
                    sh 'cp -r build/* /var/www/html/'
                }
            }
        }
    }
}
