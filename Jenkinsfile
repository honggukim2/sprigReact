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
                    sh 'echo "Build completed. Listing files:"'
                    sh 'ls -al'
                }
            }
        }
        stage('Verify Build') {
            steps {
                sh 'echo "Verifying build directory:"'
                sh 'ls -al test/build'
                sh 'ls -al build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/html/*'
                sh 'cp -r build/* /var/www/html/'  // 상위 디렉토리에서 build 폴더 복사
            }
        }
    }
}
