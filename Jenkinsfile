pipeline{
    agent any

    
    stages{
        stage('clonar repositorio'){
            steps{
                git branch: 'main', url:'https://github.com/SrStricker/testes-e2e-ebac-shop.git'
            }
        }
        stage('instalar dependencias'){
            steps{
                sh 'npm install'
            }
        }
        stage('executar testes'){
            steps{
              sh  'npx cypress run | true'
            }
        }
    }
}
