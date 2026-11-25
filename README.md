# base-nest

Template de API em **NestJS** com **Prisma** e **PostgreSQL**, organizado em camadas inspiradas em Clean Architecture, com validação de domínio em Zod e testes sem banco de dados.

A entidade `User` e o CRUD servem de exemplo completo: para criar um novo recurso, basta seguir o mesmo caminho nas camadas.

## Estrutura

```
src/
├── app/      # Camada de aplicação: contratos de repositório, protocolos HTTP e erros
├── domain/   # Entidades e regras de negócio, validadas com Zod (sem dependência de framework)
└── infra/    # Detalhes técnicos
    ├── database/   # Prisma e a implementação dos repositórios
    └── http/       # Controllers, services e DTOs do NestJS
test/
└── repositories/   # Repositório em memória, usado nos testes unitários
```

Cada camada tem um `readme.md` explicando suas responsabilidades. A regra é: `domain` não conhece `infra`, e a `infra` implementa os contratos definidos em `app`.

## Stack

NestJS 10 · TypeScript · Prisma 5 · PostgreSQL · Zod · Jest e Supertest

## Endpoints de exemplo

| Método | Rota | Ação |
|---|---|---|
| `POST` | `/user/create` | Cria um registro |
| `GET` | `/user/find` | Lista os registros |
| `GET` | `/user/:id/find` | Busca por id |
| `PUT` | `/user/:id/edit` | Atualiza |
| `DELETE` | `/user/:id/delete` | Remove |

## Rodando localmente

```bash
npm install
cp .env.example .env      # defina DATABASE_URL (PostgreSQL)
npx prisma db push        # cria as tabelas a partir de prisma/schema.prisma

npm run start:dev         # API em modo watch
npm test                  # testes unitários (repositório em memória)
npm run test:e2e          # testes e2e
npm run test:cov          # cobertura
```
