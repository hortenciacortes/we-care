import image from "@assets/images/odontology/intraoral-scanner.jpg";
import { SectionBase } from "../section-base/section-base";

export function IntraoralScanner() {
  const cardsInfo = [
    {
      title: "Diga adeus às moldagens antigas",
      text: `Quem já precisou fazer uma moldagem tradicional sabe o quanto pode ser incômodo: aquela massa na boca, a sensação de engasgo e a demora do processo.
      Na WeCare, você não passa mais por isso.
      Com o nosso scanner intraoral de última geração, em poucos minutos criamos uma imagem 3D perfeita da sua boca, sem desconforto e com precisão máxima.`
    },
    {
      title: "Benefícios para você",
      text: `Mais conforto: sem massas, sem engasgos, sem traumas.
      Mais rapidez: escaneamento feito em minutos.
      Mais segurança: imagens em alta definição, com riqueza de detalhes.
      Mais confiança: você acompanha junto conosco o seu sorriso em 3D.`
    },
    {
      title: "O diferencial da WeCare",
      text: `Na WeCare, acreditamos que tecnologia só faz sentido quando melhora a experiência do paciente.
      Por isso, além de termos o scanner intraoral mais moderno, nossa equipe é treinada para transformar cada consulta em uma experiência positiva, segura e agradável.
      Aqui, você não é apenas atendido(a) ? você participa ativamente do seu tratamento, entendendo cada etapa e visualizando o resultado antes mesmo de começar.`
    },  
  ];

  return (
    <SectionBase
      title="Scanner Intraoral"
      image={{ src: image, alt: "Foto da médica", width: 1512, height: 850 }}
      cardsInfo={cardsInfo}
    />
  );
}
