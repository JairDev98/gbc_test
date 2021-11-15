import { TopPage } from './TopPage_block';
import { Recepies } from './Recepies_block';
import { Services } from './Services_block';
import { Blog } from './Blog_block';
import { Footer } from '../../components/Footer';

function StartPage() {
  return (
    <>
      <TopPage />
      <Recepies />
      <Services />
      <Blog />
      <Footer />
    </>
  );
}

export default StartPage;
