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
                // Ensure the target directory exists
                sh 'sudo mkdir -p /var/www/html'
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r build/* /var/www/html/'
            }
        }
    }
}
