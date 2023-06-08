pipeline{
    agent any

    tools {nodejs “node”}
    
    stages{
        stage('clonar repositorio'){
            steps{
                git branch: 'main', url:'https://github.com/SrStricker/testes-e2e-ebac-shop.git'
            }
        }
        stage('instalar dependencias'){
            steps{
                sh 'npx cypress install'
                sh 'cypress verify'
            }
        }
        stage('executar testes'){
            steps{
              sh  'npm run cy:run | true'
            }
        }
    }
}
