import { ReactComponent as IconHome } from '../assets/icon/icon-home.svg';
import { ReactComponent as IconAdd } from '../assets/icon/icon-add.svg';
import Layout from '../Layout/Layout';

const Nav = () => {
  return (
    <Layout>
      <IconHome />
      <IconAdd />
    </Layout>
  );
};

export default Nav;
