import align from "@assets/images/odontology/align.jpg";
import { SectionBase } from "../section-base/section-base";

export function WeCareAlign() {
  const cardsInfo = [
    {
      title: "O sorriso que você quer, no tempo que você precisa",
      text: `Na WeCare, acreditamos que cada paciente merece um tratamento exclusivo, moderno e rápido. 
      Por isso, além de oferecermos a tecnologia mais avançada em odontologia digital, nós desenvolvemos nossa própria linha de alinhadores ortodônticos: o WeCare Align.`
    },
    {
      title: "A força de ter uma marca própria",
      text: `Diferente de clínicas que dependem de fornecedores externos, nós temos o conhecimento, a estrutura e a expertise para confeccionar alinhadores aqui mesmo, em nossa clínica.
      Isso significa que você recebe um tratamento ortodôntico com:
      Tempo recorde na entrega dos alinhadores.
      1. Controle total de qualidade em cada etapa.
      2.Ajustes rápidos sempre que necessário.
      3.Exclusividade de uma marca desenvolvida para você: WeCare Align.`
    },
    {
      title: "Conforto e estética em cada detalhe",
      text: `Com o WeCare Align, você corrige a posição dos dentes de forma:
      1.Discreta ? alinhadores praticamente invisíveis.
      2.Confortável ? sem fios ou bráquetes.
      3.Prática ? removíveis para alimentação e higiene.
      4.Previsível ? planejados digitalmente em 3D antes do início.`
    },
    {
      title: "Vantagens da WeCare Align",
      text: `Produção local exclusiva: entregamos seus alinhadores em tempo recorde.
      Planejamento digital personalizado: você acompanha o passo a passo do tratamento.
      Suporte direto da nossa equipe: qualquer ajuste é feito com rapidez e eficiência.
      Confiança de uma marca própria: feita na WeCare, feita para você.`
    },
    {
      title: "Um novo jeito de alinhar seu sorriso",
      text: `Com o WeCare Align, você não precisa esperar meses para iniciar seu tratamento.
      Aqui, tecnologia, rapidez e cuidado humano se unem para entregar resultados incríveis em menos tempo.

      Agende sua avaliação digital agora mesmo e descubra como o WeCare Align pode transformar o seu sorriso de forma discreta, ágil e personalizada.`
    }
  ];

  return (
    <SectionBase
      id="align"
      title="WeCare Align"
      image={{ src: align, alt: "Foto da médica", width: 1512, height: 850 }}
      cardsInfo={cardsInfo}
    />
  );
}
