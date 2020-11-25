# double_sync-social_network

Double Sync

Email para contato: vini.espinosa1@gmail.com
WhatsApp: 15 99782-6699

**Link de um documento mais explicativo:** https://drive.google.com/file/d/1tr_edMBTESaS8eZN3TRZlG3CLK9cjaY5/view?usp=sharing

Como executar o site – Double Sync

**1º Passo: Tenha instalado em sua máquina o Node JS e Git Bash**
- Link do NodeJS: https://nodejs.org/pt-br/download/
- Link do Git Bash: https://git-scm.com/downloads


**2º Passo: Git Hub**
- Acesse: https://github.com/ViniEspinosaDev/double_sync-social_network
- Clique no botão verde “Code” e copie o link.


**3º Passo: Clone o repositório**
- Link do clone: https://github.com/ViniEspinosaDev/double_syncsocial_network.git


**4º Passo: Abra a pasta do projeto**
- O git clone criará a seguinte pasta "double_sync-social_network"
- Abra a pasta
- Abra o CMD nessa pasta:


**5º Passo: Digite e execute os seguintes comandos em sequencia**
Comando: cd server
- Para o seguinte comando é necessário ter o NodeJS instalado
Comando: npm install
(Aguarde...)
- Finalizando a instalações das dependências, execute
Comando: cd ..
- Após executar “cd ..”, execute:
Comando: cd web
- Dentro da pasta web faça o mesmo procedimento...
Comando: npm install


**6º Passo: Criar o banco de dados sqlite3**
- No mesmo terminal digite e execute:
Comando: cd ..
Comando: cd server
Comando: npm knex:migrate
- Após criar, temos que rodar nosso backend, execute:
Comando: npm run dev
- Caso apareça um erro:
- Pare o processo do CMD apertando CTRL + C e digitando s
- E execute o seguinte comando:
Comando: npm install @types/uuid
Espere instalar e execute novamente o comando:
- Comando: npm run dev
Com o backend rodando, abra outro terminal dentro da pasta WEB
E digite o seguinte comando:
- Comando: npm start

PRONTO!! 
