import { useTranslation } from "react-i18next";

interface Menu {
  routePath: string;
  name: string;
}

function TheHeader() {
  const { t } = useTranslation();

  const menus: Menu[] = [
    {
      routePath: "/",
      name: t("Home"),
    },
    {
      routePath: "/about",
      name: t("About"),
    },
  ];

  return (
    <header className="fixed z-50 flex items-center justify-between w-full px-4 py-2 bg-white shadow-md h-header-s lg:h-header-lg">
      <div>React</div>
      <nav>
        <ul className="flex gap-4">
          {menus.map((menu, index) => (
            <li key={index}>{menu.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;
