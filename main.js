function Telefone (ddd, numero){
  this.ddd = ddd
  this.numero = numero,

  Object.defineProperty(this, 'getTelefone', {
      get: function(){
          return `(${this.ddd}) ${this.numero}`
      }
  })

  Object.defineProperty(this, 'getDdd', {
      get: function(){
          return this.ddd
      }
  })

  Object.defineProperty(this, 'getNumero', {
      get: function(){
          return this.numero
      }
  })

  Object.defineProperty(this, 'setDdd', {
      set: function(ddd){
          this.ddd = ddd
      }
  })

  Object.defineProperty(this, 'setNumero', {
      set: function(numero){
          this.numero = numero
      }
  })
}

function Endereco (rua, numero, cidade, estado){
  this.rua = rua
  this.numero = numero
  this.cidade = cidade
  this.estado = estado

  Object.defineProperty(this, 'getRua', {
      get: function(){
          return this.rua
      }
  })

  Object.defineProperty(this, 'getNumero', {
      get: function(){
          return this.numero
      }
  })

  Object.defineProperty(this, 'getCidade', {
      get: function(){
          return this.cidade
      }
  })
  
  Object.defineProperty(this, 'getEstado', {
      get: function(){
          return this.estado
      }
  })

  Object.defineProperty(this, 'setRua', {
      set: function(rua){
          this.rua = rua
      }
  })

  Object.defineProperty(this, 'setNumero', {
      set: function(numero){
          this.numero = numero
      }
  })

  Object.defineProperty(this, 'setCidade', {
      set: function(cidade){
          this.cidade = cidade
      }
  })

  Object.defineProperty(this, 'setEstado', {
      set: function(estado){
          this.estado = estado
      }
  })
}

function Cliente (nome, ddd, numero, email, rua, numCasa, cidade, estado){
  this.nome = nome
  this.telefone = new Telefone(ddd, numero)
  this.email = email
  this.endereco = new Endereco(rua, numCasa, cidade, estado)

  Object.defineProperty(this, 'getNome', {
      get: function(){
          return this.nome
      }
  })

  Object.defineProperty(this, 'getEmail', {
      get: function(){
          return this.email
      }
  })

  Object.defineProperty(this, 'setNome', {
      set: function(nome){
          this.nome = nome
      }
  })

  Object.defineProperty(this, 'setEmail', {
      set: function(email){
          this.email = email
      }
  })

  this.Maiusculo = function(valor){
      return valor.toUpperCase()
  }

  this.Minusculo = function(valor){
      return valor.toLowerCase()
  }

  Object.defineProperty(this, 'descricao', {
      get: function (){
          return `------------
Informações do Cliente:
${this.nome}
------------
Telefone:
DDD: ${this.telefone.ddd}
Numero: ${this.telefone.numero}
------------
Endereço:
Rua: ${this.endereco.rua}
Numero: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
------------`
      }
  })

  

}

function ordenaClientes (clientes) {
  return clientes.sort((a, b) => a.nome.localeCompare(b.nome))
}

let clientes = [
  new Cliente(
      'Lucas Almeida Santos', '85', '923456789', 'lucas.santos@app.com', 'Av. Beira Mar', '250', 'Fortaleza', 'CE'
  ),
  new Cliente(
      'Gabriela Nunes Costa', '19', '912345678', 'gabriela.costa@app.com', 'Rua dos Girassóis', '789', 'Campinas', 'SP'
  ),
  new Cliente(
      'Felipe Rocha Martins', '48', '934567890', 'felipe.martins@app.com', 'Av. Hercílio Luz', '345', 'Florianópolis', 'SC'
  ),
  new Cliente(
      'Carolina Mendes Braga', '61', '945678901', 'carolina.braga@app.com', 'Rua das Laranjeiras', '678', 'Brasília', 'DF'
  ),
  new Cliente(
      'Bruno Oliveira Lima', '21', '956789012', 'bruno.lima@app.com', 'Av. Atlântica', '890', 'Rio de Janeiro', 'RJ'
  ),
  new Cliente(
      'Isabela Duarte Lopes', '27', '967890123', 'isabela.lopes@app.com', 'Rua das Acácias', '567', 'Aracaju', 'SE'
  ),
  new Cliente(
      'Henrique Vasconcelos Prado', '41', '978901234', 'henrique.prado@app.com', 'Av. Sete de Setembro', '432', 'Curitiba', 'PR'
  ),
  new Cliente(
      'Camila Tavares Ferreira', '31', '989012345', 'camila.ferreira@app.com', 'Rua Pernambuco', '234', 'Belo Horizonte', 'MG'
  ),
  new Cliente(
      'Rodrigo Silva Mendonça', '95', '990123456', 'rodrigo.mendonca@app.com', 'Av. Afonso Pena', '876', 'Campo Grande', 'MS'
  ),
  new Cliente(
      'Vanessa Campos Ribeiro', '71', '901234567', 'vanessa.ribeiro@app.com', 'Rua Bahia', '123', 'Salvador', 'BA'
  )
];

clientes = ordenaClientes(clientes);
clientes.forEach(cliente => console.log(cliente.descricao));
