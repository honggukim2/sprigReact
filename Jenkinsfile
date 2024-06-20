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
                // 소스 코드 경로에서 파일을 확인합니다.
                sh 'ls -al'
                sh 'ls -al public'
                // npm 설치를 진행합니다.
                sh 'npm install'
                // 애플리케이션을 빌드합니다.
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // 빌드된 파일을 Nginx 웹 루트 디렉토리로 복사합니다.
                sh 'cp -r build/* /var/www/html/'
            }
        }
    }
}
