import Link from "next/link";
import Links from "@/components/navbar/links/Links";

function Navbar() {
  return (
    <div>
      <div>
        <Link href={"/"}>HAITAR</Link>
      </div>
      <Links />
    </div>
  );
}
export default Navbar;
