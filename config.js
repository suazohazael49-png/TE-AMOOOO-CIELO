/*
  PERSONALIZA AQUÍ / PERSONALIZE HERE
  ---------------------------------------------------------
  - Cambia el nombre entre corchetes antes de compartir la página.
  - Agrega tus fotos reales a la carpeta /personal (mira LEEME.md).
  - Edita los recuerdos y cartas; ES y EN son independientes.
  - No necesitas instalar nada: esta página es HTML/CSS/JS puro.
*/
window.BIRTHDAY_CONFIG = {
  herName: '[Her Name]',
  yourName: '[Your Name]',
  photos: {
    garden: ['personal/foto-01.jpg', 'personal/foto-05.jpg', 'personal/foto-14.jpg', 'personal/foto-03.jpg'],
    reveal: 'personal/foto-03.jpg',
    memoryVideo: 'personal/clip-2.48.05 AM.mp4',
    finale: 'personal/foto-04.jpg'
  },
  memoryCaptions: [
    {en:'I love you so much', es:'te amo demasiado'},
    {en:'a day to remember', es:'un día para recordar'},
    {en:'the loveliest thing in the world', es:'lo más lindo del mundo'},
    {en:'more moments like this, please', es:'por muchos momentos más'}
  ],
  letters: [
    {chapter:'day', symbol:'♡', sticker:'i06', color:'peach',
      title:{en:'For the girl who brightens my mornings',es:'Para la chica que ilumina mis mañanas'},
      body:{en:'My love, this little page is for you. Not because a screen could ever hold all I feel, but because I wanted to give you a place where every click reminds you how special you are to me. Happy birthday. You deserve every beautiful thing.',es:'Mi amor, esta pequeña página es para ti. No porque una pantalla pueda guardar todo lo que siento, sino porque quería regalarte un lugar donde cada clic te recuerde lo especial que eres para mí. Feliz cumpleaños. Mereces todas las cosas bonitas.'}},
    {chapter:'day', symbol:'✿', sticker:'i05', color:'butter',
      title:{en:'A tiny promise',es:'Una pequeña promesa'},
      body:{en:'I hope we keep finding reasons to laugh, new places to explore, and quiet moments that feel like home. This is only one little way of saying: I choose you, over and over again.',es:'Espero que sigamos encontrando motivos para reír, lugares nuevos que descubrir y momentos tranquilos que se sientan como hogar. Esta es solo una forma pequeñita de decirte: te elijo una y otra vez.'}},
    {chapter:'sunset', symbol:'☼', sticker:'i23', color:'rose',
      title:{en:'If sunsets could speak',es:'Si los atardeceres hablaran'},
      body:{en:'They would tell you that some people bring warmth even when the day is ending. That is what you do to my world. Thank you for being part of my favorite memories, and for all the ones we have yet to make.',es:'Te dirían que hay personas que traen calidez incluso cuando el día está terminando. Eso haces tú con mi mundo. Gracias por formar parte de mis recuerdos favoritos y por todos los que todavía nos esperan.'}},
    {chapter:'night', symbol:'✦', sticker:'i62', color:'lavender',
      title:{en:'A note under the stars',es:'Una nota bajo las estrellas'},
      body:{en:'If you ever feel far away from the good things in life, look up at the night sky and remember: you are loved more than you know. I am cheering for every dream you carry in your heart.',es:'Si alguna vez sientes que las cosas bonitas están lejos, mira el cielo de noche y recuerda: eres más amada de lo que imaginas. Yo estaré apoyando cada sueño que guardas en tu corazón.'}},
    {chapter:'night', symbol:'☾', sticker:'i41', color:'blue',
      title:{en:'One last little secret',es:'Un último secretito'},
      body:{en:'There are a million wishes I could make, but today the biggest one is simple: that your life keeps surprising you with reasons to smile. Happy birthday, my love. I am so happy that you exist.',es:'Podría pedir un millón de deseos, pero hoy el más grande es sencillo: que la vida siga sorprendiéndote con motivos para sonreír. Feliz cumpleaños, mi amor. Me hace tan feliz que existas.'}}
  ],
  /* Preguntas basadas en la grabación del 5 de noviembre. La segunda respuesta sigue editable. */
  locks: [
    {question:{en:'What is our anniversary date?',es:'¿Qué fecha es nuestro aniversario?'}, answers:['15 de marzo','15 marzo','15/03','15-03','15/3','marzo 15','march 15','15th of march'], placeholder:{en:'e.g. 15 de marzo',es:'ejemplo: 15 de marzo'}, hint:{en:'Example: 15 de marzo',es:'Ejemplo: 15 de marzo'}},
    {question:{en:'What do I tell you most often?',es:'¿Qué es lo que más te digo?'},answers:['te quiero','i love you'],hint:{en:'Hint: it comes from the heart',es:'Pista: sale del corazón'}},
    {question:{en:'What was the first place where we were together?',es:'¿Cuál fue el primer lugar en el que estuvimos juntos?'},answers:['quiosco','el quiosco','quiosco del colegio','el quiosco del colegio','kiosco','el kiosco'],placeholder:{en:'e.g. el quiosco',es:'ejemplo: el quiosco'},hint:{en:'Hint: the school kiosk',es:'Pista: el quiosco del colegio'}}
  ],
  /* This is the LONG text that will be scratched away to reveal your photo. */
  scratchLetter: {
    en:'Some days go by like any other, and then there are moments that make everything feel more beautiful. You are in so many of my favorite memories. I love the little things: every laugh, every kind word, every unexpected memory. I made this surprise because I wanted you to feel, even if just for a moment, how much joy you bring into my life.\n\nToday, on your special day, I wish you so much health and life. May you keep smiling every day. May God give you reasons to smile every day and to enjoy the life He has given us. Today is your birthday, but I want you to know that you matter to me every single day, not just today. Have a beautiful day. Happy birthday, my love. I love you so much.',
    es:'Hay días que pasan como cualquier otro, y luego hay momentos que hacen que todo se sienta más bonito. Tú estás en tantos de mis recuerdos favoritos. Amo las pequeñas cosas: cada risa, cada palabra cariñosa, cada recuerdo inesperado. Hice esta sorpresa porque quería que sintieras, aunque fuera por un minuto, cuánta alegría traes a mi vida.\n\nHoy que es tu día, te deseo tanta, tanta salud y vida. Que sigas sonriendo todos los días, que Dios te dé motivos todos los días para sonreír, para vivir esta vida que Él nos ha dado. Hoy cumples años, pero quiero que sepas que para mí eres importante todos los días, no solo hoy. Ten un lindo día. Feliz cumpleaños, mi amor. Te amo mucho.'
  },
  finalMessage: {
    en:'This is not the end of our story. It is one more beautiful page. May today be full of laughter, kindness, sweet surprises and all the love you give to the world coming right back to you. Happy birthday, my favorite person. ♡\n\nOn this day, I wish you all the best. Happy birthday, my love. One day we will be together. With all my love for you. I hope you like this little surprise today. I love you.',
    es:'Este no es el final de nuestra historia. Es una página bonita más. Que hoy esté lleno de risas, ternura, sorpresas dulces y que todo el amor que le das al mundo regrese a ti. Feliz cumpleaños, mi persona favorita. ♡\n\nEn este día te deseo lo mejor. Feliz cumpleaños, mi amor. Un día estaremos juntos. Con todo mi amor para ti. Hoy espero te guste. Te amo.'
  }
};
