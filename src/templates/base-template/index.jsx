import Footer from "../../components/footer";
import Header from "../../components/header";

export default function BaseTemplate(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
