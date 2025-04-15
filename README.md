# Prova de back-end Escola

## Tecnologias 
- Node.js (Framework)
- VsCode (IDE)
- Insomnia (IDE de testes)
- Prisma (ORM)
- XAMPP (IDE) SGBD MySQL

## Passo a passo para testar
- 1 Clone este repositório
- 2 Abrir com Vscode
- 3 Criar o arquivo **.env** na pasta API contendo:
```js
DATABASE_URL="mysql://root@localhost:3306/escola"
PORT=3001
```
- Obs: certifique-se de não ter um banco de dados chamado **escola** no seu MySQL.
- 4 Abrir o XAMPP e dar start em MySQL
- 5 No VsCode abra um terminal **CTRL + '** cmd ou bash e digite os seguintes comandos para baixar as dependências e instalar o Banco de dados
```bash
cd api
npm install
npm i prisma -g
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
```

## Prints dos testes
![Print01](i1.png)
![Print02](i2.png)
![Print03](i3.png)
![Print04](i4.png)
![Print04](i5.png)
![Print04](i6.png)