pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Git 리포지토리에서 소스를 체크아웃합니다.
                git branch: 'main', url: 'https://github.com/honggukim2/sprigReact.git'
            }
        }
        stage('Verify Checkout') {
            steps {
                // 작업 디렉토리 확인
                sh 'echo "Workspace directory:"'
                sh 'ls -al $JENKINS_HOME/workspace'
                sh 'ls -al $JENKINS_HOME/workspace/NewProject || echo "NewProject directory not found"'
                sh 'ls -al $JENKINS_HOME/workspace/NewProject/test || echo "test directory not found"'
                sh 'ls -al $JENKINS_HOME/workspace/NewProject/test/public || echo "test/public directory not found"'
                sh 'ls -al $JENKINS_HOME/workspace/NewProject/test/src || echo "test/src directory not found"'
            }
        }
        stage('Build') {
            steps {
                dir('test') {
                    // 소스 코드 경로에서 파일을 확인합니다.
                    sh 'echo "Listing test directory after checkout:"'
                    sh 'ls -al'
                    sh 'ls -al public || echo "Directory public not found"'
                    sh 'ls -al src || echo "Directory src not found"'
                    // npm 설치를 진행합니다.
                    sh 'npm install'
                    // 'public' 폴더를 루트로 이동
                    sh 'mkdir -p ../public && cp -r public/* ../public || echo "Failed to copy public directory"'
                    // 'src' 폴더를 루트로 이동
                    sh 'mkdir -p ../src && cp -r src/* ../src || echo "Failed to copy src directory"'
                    // 애플리케이션을 빌드합니다.
                    sh 'cd .. && npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                dir('test') {
                    // 빌드된 파일을 Nginx 웹 루트 디렉토리로 복사합니다.
                    sh 'rm -rf /var/www/html/*'
                    sh 'cp -r build/* /var/www/html/ || echo "Failed to copy build files"'
                }
            }
        }
    }
}
