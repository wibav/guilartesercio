import { redirect } from "next/navigation";

export const metadata = {
  title: "Limpieza Profesional en Alicante | Guilarte & Servicios",
  description:
    "Accede a nuestros servicios de limpieza profesional en Alicante: fin de obra, turística y general.",
};

export default function LimpiezaRedirectPage() {
  redirect("/servicios-limpieza-alicante");
}
