import Header from "./components/Header";
import Footer from "./components/Footer";
import Geracoes from "./components/Geracoes";
import Cards from "./components/Cards";


export default async function Home() {
  return (
    <div>
      <Header />
      <Geracoes />
      <Cards/>
      <Footer />
    </div>
  );
}