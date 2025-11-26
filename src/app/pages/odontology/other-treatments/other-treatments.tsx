import image from "@assets/images/odontology/intraoral-scanner.jpg";
import { SectionBase } from "../section-base/section-base";

export function OtherTreatments() {
  const cardsInfo = [
    {
      title: "Clareamento Dentário",
      text: `O clareamento dental é um procedimento seguro e eficiente para recuperar a tonalidade natural dos dentes, eliminando manchas superficiais ou intrínsecas causadas por alimentos, bebidas ou medicamentos. Na WeCare, o tratamento começa com uma avaliação clínica completa para identificar a melhor técnica para seu caso — em consultório, com gel ativado por luz, ou um protocolo combinado com uso domiciliar supervisionado. O objetivo é proporcionar resultados perceptíveis e estáveis, respeitando a saúde do esmalte e acompanhando sensibilidade durante o processo. A equipe explica todas as etapas, cuidados pré e pós-procedimento e indicações para manter o resultado ao longo do tempo.`,
    },
    {
      title: "Facetas Cerâmicas",
      text: `As facetas cerâmicas são lâminas ultrafinas de porcelana aplicadas sobre a face visível dos dentes para corrigir cor, formato e pequenas deformidades. Esse tratamento é indicado para quem busca uma transformação estética com aspecto natural e alta durabilidade. O planejamento envolve análise da proporção facial e digitalização do sorriso, garantindo que o resultado respeite a harmonia e funcionalidade. A cimentação e acabamento são realizados com materiais de alta qualidade para integrar a faceta ao dente, reduzindo necessidade de manutenção e preservando a saúde dental.`,
    },
    {
      title: "Implantes e Próteses Digitais",
      text: `Implantes dentários substituem raízes perdidas através de parafusos de titânio que suportam próteses fixas ou removíveis. Com fluxo digital, o planejamento é feito por tomografia e softwares de planejamento 3D, aumentando a previsibilidade cirúrgica. A WeCare combina planejamento virtual, guia cirúrgico e próteses confeccionadas com precisão para garantir adaptação, conforto e estética. O processo inclui avaliação óssea, fase cirúrgica e reabilitação protética, sempre com foco em longevidade e função mastigatória adequada.`,
    },
    {
      title: "Próteses Fixas Dentárias",
      text: `As próteses fixas (coroas e pontes) substituem dentes ausentes ou restauram dentes muito desgastados, devolvendo função e estética. São projetadas para se integrar ao sorriso, com ajuste oclusal e acabamento que respeitam gengiva e dentes vizinhos. A escolha de materiais (cerâmica, zircônia, metalocerâmica) é baseada em resistência, estética e caso clínico. O processo inclui preparação, moldagem (ou escaneamento digital) e prova para garantir conforto e durabilidade.`,
    },
    {
      title: "Mockup Digital e Impressão 3D",
      text: `O mockup digital e a impressão 3D permitem visualizar e testar o resultado estético antes de qualquer desgaste dental. Através de planejamento digital, é possível projetar o novo contorno dos dentes e imprimir um protótipo para provas no consultório, ajudando o paciente a decidir com segurança. Essa abordagem reduz surpresas, alinha expectativas e facilita ajustes no projeto estético. Além disso, a impressão 3D agiliza a produção de guias, provisórios e modelos para comunicação entre clínica e laboratório.`,
    },
    {
      title: "Alinhadores Ortodônticos",
      text: `Os alinhadores são dispositivos transparentes e removíveis que corrigem desalinhamentos dentários sem a estética dos aparelhos fixos. Produzidos a partir de escaneamento intraoral e planejamento digital, cada molde aplica forças controladas para movimentação gradual dos dentes. Eles são indicados para quem busca discrição e maior conforto, além de facilitar a higiene diária. O acompanhamento periódico garante previsibilidade do tratamento e ajustes quando necessários.`,
    },
    {
      title: "Tratamento Ortodôntico Convencional",
      text: `O tratamento ortodôntico com aparelhos fixos ainda é a solução mais indicada para casos complexos de má oclusão, movimentações intensas ou quando é necessária maior precisão biomecânica. Com opção de braquetes estéticos ou metálicos, o plano é personalizado conforme as necessidades funcionais e estéticas do paciente. A WeCare combina diagnóstico completo, planejamento e acompanhamento para alcançar o alinhamento ideal, melhora da mordida e estabilidade a longo prazo.`,
    },
    {
      title: "Restaurações Estéticas com Resina",
      text: `As restaurações em resina composta permitem corrigir cáries, pequenas fraturas e imperfeições estéticas preservando mais estrutura dental. Utilizando técnicas adesivas e resinas de alta qualidade, o resultado fica com aspecto natural e elevada resistência. O procedimento é minimamente invasivo, com acabamento e polimento que imitam o brilho e textura do dente original. É uma excelente alternativa para reposição de forma e cor sem uso de restaurações metálicas.`,
    },
    {
      title: "Tratamento Endodôntico (Canal)",
      text: `O tratamento endodôntico remove a polpa comprometida do dente quando há infecção, dor intensa ou lesão profunda, preservando o dente na arcada. Realizado com instrumentação moderna, irrigação adequada e técnicas de obturação tridimensional, o procedimento busca eliminar a infecção e selar o sistema de canais. Na WeCare, o tratamento é planejado para reduzir desconforto, com uso de equipamentos que aumentam precisão e taxa de sucesso. Seguem-se recomendações para restauração final e manutenção do dente tratado.`,
    },
    {
      title: "Extração Dentária (inclui siso)",
      text: `A extração é indicada quando o dente não tem mais possibilidade de reabilitação, está impactado (como siso) ou coloca em risco saúde oral. O procedimento é realizado com anestesia adequada e técnicas que minimizam trauma tecidual. Há atenção especial ao planejamento do pós-operatório, orientações para cuidados, analgesia e prevenção de infecções. Em casos de dentes do siso, a avaliação indica se a remoção é necessária para evitar complicações futuras.`,
    },
    {
      title: "Dentes Altamente Destruídos ou Fraturados",
      text: `Para dentes com perda ampla de estrutura ou fraturas, são avaliadas soluções restauradoras que devolvam função e estética, como coroas totais, talonetes ou reabilitações protéticas. O objetivo é recuperar a saúde do dente, proteger remanescentes e integrar o resultado ao plano oclusal. O tratamento pode envolver endodontia prévia, reconstrução com pinos ou enxertos quando necessário, sempre priorizando longevidade e conforto.`,
    },
    {
      title: "Prevenção Dentária",
      text: `A prevenção é a base da odontologia: limpeza profissional, orientações de higiene, profilaxia e aplicação de flúor reduzem risco de cáries e doenças periodontais. Na clínica, o protocolo inclui análise de fatores de risco, instrução de escovação e uso de produtos complementares, além de visitas periódicas para manutenção. Investir em prevenção evita procedimentos maiores e mantém a saúde bucal ao longo da vida.`,
    },
    {
      title: "Hipersensibilidade Dentinária",
      text: `A sensibilidade dentária ocorre quando dentina exposta reage a estímulos térmicos ou químicos. O tratamento combina medidas de dessensibilização, aplicação de substâncias que selam túbulos dentinários, ajustes oclusais e, quando indicado, restaurações protetoras. O objetivo é eliminar a dor e proteger a estrutura dentária, devolvendo conforto nas atividades diárias.`,
    },
    {
      title: "Placas Digitais para Bruxismo e ATM",
      text: `As placas oclusais digitais são confeccionadas a partir de escaneamento e tecnologia CAD/CAM para proteger dentes e reduzir tensão muscular no bruxismo. Além de proteger os dentes do desgaste, promovem equilíbrio muscular e podem aliviar sintomas na articulação temporomandibular (ATM). A confecção digital garante ajuste preciso, conforto e facilidade de reprodução quando necessário.`,
    },
    {
      title: "Bruxismo",
      text: `O bruxismo envolve apertamento e ranger dos dentes, frequentemente durante o sono, e pode causar desgaste dental, dor muscular e problemas na ATM. O tratamento é multifacetado: uso de placas de proteção, orientação postural, terapia muscular e, se necessário, encaminhamento para avaliação do sono. A abordagem personalizada busca reduzir episódios, proteger a estrutura dentária e melhorar qualidade do sono e bem-estar.`,
    },
  ];

  return (
    <SectionBase
      id="treatments"
      title="Scanner Intraoral"
      image={{ src: image, alt: "Foto da médica", width: 1512, height: 850 }}
      cardsInfo={cardsInfo}
    />
  );
}
