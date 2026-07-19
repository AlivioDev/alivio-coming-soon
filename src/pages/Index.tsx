import { Mail } from "lucide-react";
import alivioLogo from "@/assets/alivio-logo.png";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <img src={alivioLogo} alt="Alivio Apps" className="mb-8 h-24 w-auto" />

      <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        alivioweb.nl
      </h1>

      <div className="mb-6 flex items-center gap-2">
        <span className="inline-block h-2 w-2 animate-pulse-slow rounded-full bg-primary" />
        <p className="text-lg font-medium text-muted-foreground">
          Under construction
        </p>
      </div>

      <p className="max-w-md text-muted-foreground">
        We werken hard aan onze nieuwe website. Kom binnenkort terug voor meer informatie!
      </p>

      <a
        href="mailto:info@alivioweb.nl"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Mail className="h-4 w-4" />
        Neem contact op
      </a>

      <p className="mt-16 text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} alivioweb.nl
      </p>
    </div>
  );
};

export default Index;
