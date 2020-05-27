# Recuperação de senha

**RF - Requisitos Funcionais**

- [x] O usuário deve poder recuperar sua senha informando o seu email;
- [x] O usuário deve receber um email com intruções de recuperação de senha;
- [x] O usuário deve poder resetar sua senha;

**RNF - Requisitos não funcionais**

- [x] Utilizar Mailtrap pra testar envios em ambiente de dev;
- [x] Utilizar o Amazon SES para envios em produção;
- [ ] O envio de emails deve acontecer em segundo plano (background job);

**RN - Regras de negócio**

- [x] O link enviado por email para resetar senha, deve expirar em 2h;
- [x] O usuário precisa confimrar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF - Requisitos Funcionais**

- [x] O usuário deve poder atualizar seu nome, email e senha;

**RNF - Requisitos não funcionais**

**RN - Regras de negócio**

- [x] O usuário não pode alterar seu email para um email já utilizado;
- [x] Para atualizar sua senha o usuário deve informar a senha antiga;
- [x] Para atualizar sua senha o usuário precisa confirmar sua nova senha;

# Painel do prestador

**RF - Requisitos Funcionais**

- [x] O usuário deve poder listar seus agendamentos de um dia específico;
- [x] O prestador deve receber uma notificação sempre que houver um novo agendamento;
- [ ] O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisitos não funcionais**

- [ ] Os agendamentos do prestador no dia devem ser armazenados em cache;
- [x] As notificações do prestador devem ser armazenadas no MongoDB;
- [ ] As notificações do prestador devem ser enviadas em tempo real com Socket.io;

**RN - Regras de negócio**

- [x] A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF - Requisitos Funcionais**

- [x] O usuário deve poder listar todos os prestadores de serviços cadastrados;
- [x] O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- [x] O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- [x] O usuário deve poder realizar um novo agendamento com um prestador;

**RNF - Requisitos não funcionais**

- [ ] A listagem de prestadores deve ser armazenada em cache;

**RN - Regras de negócio**

- [x] Cada agendamento deve durar 1h exatamente;
- [x] Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- [x] O usuário não pode agendar em um horário já ocupado;
- [x] O usuário não pode agendar em um horário que já passou;
- [x] O usuário não pode agendar serviços consigo mesmo;
