# Detalhes

1. `http/controller/UserController`:

   - Esta classe atua como um controlador HTTP responsável por lidar com as requisições relacionadas aos fornecedores. Ela contém métodos que correspondem às operações CRUD (create, read, update, delete) para gerenciar fornecedores.
   - Os métodos são decorados com anotações do NestJS, como `@Controller`, `@Post`, `@Get`, `@Put` e `@Delete`, que definem os endpoints da API e os tipos de solicitações HTTP que eles aceitam.
   - Os métodos fazem uso do serviço `UserService` para executar a lógica de negócios associada a cada operação CRUD.
   - Esta classe está na camada de interface externa, já que é responsável por lidar com as requisições HTTP externas e rotear essas requisições para as camadas subjacentes.

2. `http/dto`:

   - Esta pasta contém os Data Transfer Objects (DTOs) utilizados pela API. Os DTOs são estruturas de dados usadas para transferir dados entre o cliente e o servidor. Eles definem a estrutura dos dados que são enviados e recebidos nas solicitações HTTP.
   - No caso, temos o `createUserDTO` que define a estrutura esperada para criar um fornecedor, e `EditUserDTO` que define a estrutura esperada para editar um fornecedor. Ambos são interfaces TypeScript que representam os dados enviados nos corpos das requisições HTTP.

3. `http/service/UserService`:

   - Esta classe representa um serviço responsável por executar a lógica de negócios associada às operações CRUD dos fornecedores.
   - Ela faz uso do repositório `UserRepository` para acessar e manipular os dados dos fornecedores.
   - Cada método nesta classe corresponde a uma operação CRUD relacionada aos fornecedores e chama os métodos correspondentes no repositório para executar a operação no banco de dados.
   - Esta classe está na camada de aplicativo, pois contém a lógica de negócios associada à entidade de fornecedor.

Em termos da arquitetura Clean:

- O `UserController` representa a camada de interface externa, que é responsável por lidar com as interações externas com o sistema, neste caso, as requisições HTTP.
  
- Os DTOs na pasta `http/dto` são usados para definir os contratos de dados entre a camada de interface externa e a camada de aplicativo.

- O `UserService` representa a camada de aplicativo, que contém a lógica de negócios da aplicação relacionada aos fornecedores.

- A interação entre a camada de interface externa e a camada de aplicativo é intermediada pelo controlador e pelo serviço, mantendo uma separação clara de responsabilidades entre as diferentes camadas da aplicação.
