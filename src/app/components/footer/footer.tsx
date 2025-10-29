import style from './footer.module.scss';

export function Footer() {
  return (
    <footer className={`${style.container} grid-pattern`}>
      <div className={style.footer}>
        <p>&copy; {new Date().getFullYear()} We Care Saúde. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/hortenciacortes/">Hortência Côrtes</a></p>
      </div>
    </footer>
  );
}
