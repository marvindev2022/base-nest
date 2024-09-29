# detalhes

1. `DatabaseModule`:

   - Este módulo é responsável por fornecer a configuração relacionada ao banco de dados para o aplicativo. Ele importa e registra outros módulos relacionados ao banco de dados, como `UserDatabaseModule`, que é responsável pela configuração específica do fornecedor.

2. `PrismaService`:

   - Esta é uma classe de serviço que estende o PrismaClient e implementa o método `onModuleInit` para inicializar o PrismaClient quando o módulo é inicializado. Além disso, há o método `enableShutdownHooks`, que lida com o fechamento adequado do aplicativo e desconexão do PrismaClient quando o aplicativo é encerrado.

3. `prisma/repositories`:

   - `PrismaUserRepository`:
     - Esta classe é uma implementação concreta do `UserRepository`, que é um contrato definido na camada de aplicativo. Isso significa que `PrismaUserRepository` atua como um "portão" ou "gateway" para acessar os dados relacionados ao fornecedor no banco de dados usando o Prisma.
     - Ela faz uso do `PrismaService` para interagir com o banco de dados.
     - Cada método nesta classe corresponde a uma operação CRUD (create, read, update, delete) relacionada a fornecedores.
     - A classe manipula exceções e lança `BadRequestException` em caso de erro, o que é uma prática comum para lidar com erros no NestJS.
  
4. `module`:

   - `UserDatabaseModule`:
     - Este módulo é responsável por fornecer a instância de `PrismaService` e `PrismaUserRepository` para o aplicativo.
     - Ele declara `PrismaService` como um provedor, garantindo que haja apenas uma instância do serviço em todo o módulo.
     - Também declara `PrismaUserRepository` como um provedor para que possa ser injetado em outras partes do aplicativo onde for necessário acesso aos dados do fornecedor.

Em termos da arquitetura Clean:

- `PrismaService` e `PrismaUserRepository` estão localizados na camada de infraestrutura, pois lidam com detalhes técnicos específicos, como acesso ao banco de dados usando o Prisma.
  
- `UserDatabaseModule` atua como um adaptador externo, fornecendo uma interface para acessar os dados do fornecedor, mas mantendo a implementação específica do Prisma encapsulada dentro da camada de infraestrutura.

- `PrismaUserRepository` implementa a interface `UserRepository`, definida na camada de aplicativo, agindo como um adaptador que conecta a camada de aplicativo à camada de infraestrutura.

Essa estrutura mantém a separação de preocupações entre as diferentes camadas da aplicação, seguindo os princípios da arquitetura Clean.
