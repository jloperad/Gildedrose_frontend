pipeline {
    agent any
    stages {
        // stage('Run database and backend'){
        //     steps{
        //         sh 'docker run --name my-postgres -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres'
        //         sh 'docker run --name my-postgres -e POSTGRES_PASSWORD=secret -p 8080:8080 -d postgres'
        //     }
        // }
        stage('Frontend') {
            environment{
                // DB_HOST = """${sh(
                //     returnStdout: true,
                //     script: 'docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" my-postgres'
                // )}"""
                BE_HOST = """${sh(
                    returnStdout: true,
                    script: 'docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" backend'
                )}"""

            }
            steps {
                sh 'docker build --build-arg BACKEND_HOST=${BE_HOST} -t fsalazarr/praxis-gildedrose_frontend:latest .'
                // sh 'docker run -p 4200:4200 -d fsalazarr/praxis-gildedrose_frontend'
            }
        }
    }
}

