import QuestionModel from "@/src/model/question";
import ResponseModel from "@/src/model/response";

const questions: QuestionModel[] = [
   new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
      ResponseModel.incorrectAsk('Abelha'),
      ResponseModel.incorrectAsk('Barata'),
      ResponseModel.incorrectAsk('Pulga'),
      ResponseModel.correctAsk('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
      ResponseModel.incorrectAsk('Caju'),
      ResponseModel.incorrectAsk('Côco'),
      ResponseModel.incorrectAsk('Chuchu'),
      ResponseModel.correctAsk('Abóbora'),
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
      ResponseModel.incorrectAsk('Manada'),
      ResponseModel.incorrectAsk('Alcateia'),
      ResponseModel.incorrectAsk('Rebanho'),
      ResponseModel.correctAsk('Matilha'),
  ],),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      ResponseModel.incorrectAsk('Equilátero'),
      ResponseModel.incorrectAsk('Isóceles'),
      ResponseModel.incorrectAsk('Trapézio'),
      ResponseModel.correctAsk('Escaleno'),
  ],),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
      ResponseModel.incorrectAsk('Castro Alves'),
      ResponseModel.incorrectAsk('Manuel Bandeira'),
      ResponseModel.incorrectAsk('Carlos Gomes'),
      ResponseModel.correctAsk('Dom Pedro I'),
  ],),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
      ResponseModel.incorrectAsk('Perder'),
      ResponseModel.incorrectAsk('Fracassar'),
      ResponseModel.incorrectAsk('Desprezar'),
      ResponseModel.correctAsk('Conseguir'),
  ],),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
      ResponseModel.incorrectAsk('Argentina'),
      ResponseModel.incorrectAsk('Espanha'),
      ResponseModel.incorrectAsk('Brasil'),
      ResponseModel.correctAsk('Portugal'),
  ],),
  new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
      ResponseModel.incorrectAsk('Costa e Silva'),
      ResponseModel.incorrectAsk('Emílio Médici'),
      ResponseModel.incorrectAsk('Ernesto Geisel'),
      ResponseModel.correctAsk('João Figueiredo'),
  ],),
  new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
      ResponseModel.incorrectAsk('Ás'),
      ResponseModel.incorrectAsk('Nove'),
      ResponseModel.incorrectAsk('Rei'),
      ResponseModel.correctAsk('Valete'),
  ],),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
      ResponseModel.incorrectAsk('Vela'),
      ResponseModel.incorrectAsk('Vento'),
      ResponseModel.incorrectAsk('Vênia'),
      ResponseModel.correctAsk('Veia'),
  ],),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
      ResponseModel.incorrectAsk('Abrupção'),
      ResponseModel.incorrectAsk('Abolição'),
      ResponseModel.incorrectAsk('Abnegação'),
      ResponseModel.correctAsk('Ablução'),
  ],),
  new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
      ResponseModel.incorrectAsk('Monte Branco'),
      ResponseModel.incorrectAsk('Monte Fuji'),
      ResponseModel.incorrectAsk('Monte Carlo'),
      ResponseModel.correctAsk('Monte Everest'),
  ],),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
      ResponseModel.incorrectAsk('Estômago'),
      ResponseModel.incorrectAsk('Pâncreas'),
      ResponseModel.incorrectAsk('Rim'),
      ResponseModel.correctAsk('Pescoço'),
  ],),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
      ResponseModel.incorrectAsk('Déficit'),
      ResponseModel.incorrectAsk('Indexação'),
      ResponseModel.incorrectAsk('Indébito'),
      ResponseModel.correctAsk('Indenização'),
  ],),
  new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
      ResponseModel.incorrectAsk('Cuca'),
      ResponseModel.incorrectAsk('Curupira'),
      ResponseModel.incorrectAsk('Boitatá'),
      ResponseModel.correctAsk('Saci-pererê'),
  ],),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
      ResponseModel.incorrectAsk('Marechal Deodoro'),
      ResponseModel.incorrectAsk('Barão de Mauá'),
      ResponseModel.incorrectAsk('Marquês de Pombal'),
      ResponseModel.correctAsk('Duque de Caxias'),
  ],),
];

export default questions;