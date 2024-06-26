import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { H1, TextButton, Container } from "../ui/";

function Layout() {
  return (
    <div className="flex items-center min-h-screen">
      <Nav />
      <Container className="flex flex-col gap-5 items-center justify-center">
        <H1>Page Not Found</H1>
        <Link to="/">
          <TextButton>Back Home</TextButton>
        </Link>
      </Container>
    </div>
  );
}

export default Layout;
