import LayoutCss from './Layout.module.scss';
import Menu from './Menu';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={LayoutCss.container}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
