interface TemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}

export const Template: React.FC<TemplateProps> = ({
  children,
  loading = false,
}: TemplateProps) => {
  return (
    <div>
      <Header />
      <div
        className={`${
          loading ? "animate-pulse" : ""
        } container mx-auto mt-8 px-4`}
      >
        <RenderIf condition={loading}>
          <div className="text-center">
            <Loading />
          </div>
        </RenderIf>
        {children}
      </div>
      <Footer />
    </div>
  );
};

interface RenderIfProps {
  condition?: boolean;
  children: React.ReactNode;
}
export const RenderIf: React.FC<RenderIfProps> = ({
  condition = true,
  children,
}) => {
  if (condition) {
    return children;
  }

  return false;
};

const Loading: React.FC = () => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3x1 font-bold">Armazem de imagens</h1>
      </div>
    </header>
  );
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-9">
      <div className="container mx-auto text-center">
        {" "}
        Desenvolvido por Vinicius Miguel
      </div>
    </footer>
  );
};
