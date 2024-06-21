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
                // Ensure the target directory exists and deploy the build files
                sh 'mkdir -p /var/www/html'
                sh 'rm -rf /var/www/html/*'
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}
