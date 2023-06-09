pipeline{
    agent any

    
    stages{
        stage('clonar repositorio e instalar dependencias'){
            steps{
                git branch: 'main', url:'https://github.com/SrStricker/testes-e2e-ebac-shop.git'
                sh 'npm install'
                sh 'npx cypress verify'
            }
        }
        stage('executar testes e gerar relatório'){
            steps{
              sh  'NO_COLOR=1 npx cypress run'
            }
        }
        
    }
}