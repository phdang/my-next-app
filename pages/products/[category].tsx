import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProductCategory = () => {
  const router = useRouter();
  const category = router.query.category;
  return (
    <Layout>
      <h1>Category {category}</h1>
      <button onClick={() => router.push('/')}>Home Page</button>
    </Layout>
  );
};

export default ProductCategory;
