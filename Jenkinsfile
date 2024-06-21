pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Git 리포지토리에서 소스를 체크아웃합니다.
                git branch: 'main', url: 'https://github.com/honggukim2/sprigReact.git'
            }
        }
        stage('Build') {
            steps {
                dir('TEST') {
                    // 소스 코드 경로에서 파일을 확인합니다.
                    sh 'echo "Listing TEST directory:"'
                    sh 'ls -al'
                    
                    sh 'echo "Listing test/public directory:"'
                    sh 'ls -al test/public || echo "Directory not found"'
                    
                    sh 'echo "Listing test/src directory:"'
                    sh 'ls -al test/src || echo "Directory not found"'
                    
                    // npm 설치를 진행합니다.
                    sh 'npm install'
                    
                    // 'public' 폴더를 루트로 이동
                    sh 'mkdir -p ./public && cp -r test/public/* ./public || echo "Failed to copy public directory"'
                    
                    // 'src' 폴더를 루트로 이동
                    sh 'mkdir -p ./src && cp -r test/src/* ./src || echo "Failed to copy src directory"'
                    
                    // 애플리케이션을 빌드합니다.
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('TEST') {
                    // 빌드된 파일을 Nginx 웹 루트 디렉토리로 복사합니다.
                    sh 'cp -r build/* /var/www/html/ || echo "Failed to copy build files"'
                }
            }
        }
    }
}
