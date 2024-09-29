# Detalhes

1. `errors`:

   - `InvalidParamError` e `MissingParamError`: Esses são erros específicos da aplicação que estendem as exceções fornecidas pelo NestJS. Eles representam problemas que podem ocorrer durante a execução da lógica de negócios, como parâmetros inválidos ou ausentes. Esses erros estão intimamente ligados à lógica de aplicação e, portanto, são componentes da camada de aplicativo.

2. `protocols`:

   - `HttpRequest` e `HttpResponse`: Essas são interfaces que representam os contratos para requisições e respostas HTTP. Esses contratos são independentes da tecnologia ou da implementação específica da camada de infraestrutura. Eles definem como os dados devem ser estruturados ao atravessar os limites da aplicação. Portanto, eles fazem parte da camada de interface externa, também conhecida como "adapters externos" na Clean Architecture.

3. `repositories`:

   - `UserRepository`: Este é um contrato que define operações comuns para manipular entidades de fornecedores (suppliers). Ele representa a interface entre a camada de aplicativo e a camada de infraestrutura relacionada a operações de persistência de dados. Portanto, está na fronteira entre a camada de aplicativo e a camada de infraestrutura, como um "portão" ou "gateway" para acesso a dados.

Em resumo, os elementos fornecidos na pasta `app` parecem estar bem alinhados com os conceitos da arquitetura limpa:

- `errors` representa problemas específicos da aplicação.
- `protocols` define contratos para comunicação externa.
- `repositories` define contratos para acesso a dados, atuando como interfaces entre a camada de aplicativo e a camada de infraestrutura.
