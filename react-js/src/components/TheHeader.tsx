function TheHeader() {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full px-4 py-2 bg-white shadow-md h-header-s lg:h-header-lg">
      <div>React</div>
      <nav>
        <ul className="flex gap-4">
          {/* <li v-for="menu in menus">
        <NuxtLink :to="menu.routePath">
          {{ menu.name }}
        </NuxtLink>
      </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;
