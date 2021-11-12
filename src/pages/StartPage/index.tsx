import { TopPage } from './TopPage';
import { Recepies } from './Recepies';
import { Services } from './Services';
import { Blog } from './Blog';
import { Footer } from '../../components/Footer';

function StartPage() {
  return (
    <div>
      <TopPage />
      <Recepies />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
}

export default StartPage;
