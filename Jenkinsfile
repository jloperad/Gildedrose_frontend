pipeline{
    agent any
    stages{
        stage('Build frontend'){
            agent any
            steps{
                sh 'docker build -t jloperad/praxis-gildedrose_frontend .'
            }
        }   
        stage('Docker Push') {
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                sh 'docker push jloperad/praxis-gildedrose_frontend:latest'
                sh 'docker logout'
                }
            }
        }   
    }    
}