import Encabezado from "../components/Encabezado";
import Planes from "../components/Planes";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <main>
      <Encabezado />
      <Planes />
      <Contacto />
    </main>
  );
}