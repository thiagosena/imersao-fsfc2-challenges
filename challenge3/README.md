# Desafio 2 - Backend e frontend

## Rodando o projeto

Execute os seguintes comandos e acessar o endereço: http://localhost:3001

```sh
kubectl apply -f k8s/nest-api/deployment.yaml
kubectl expose -f k8s/nest-api/deployment.yaml

# Aguardar o pod subir para executar esse comando
kubectl port-forward service/nest-api 3000

kubectl apply -f k8s/react-front/deployment.yaml
kubectl expose -f k8s/react-front/deployment.yaml

# Aguardar o pod subir para executar esse comando
kubectl port-forward service/react-front 3001:80
```