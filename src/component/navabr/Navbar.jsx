function Navbar() {
  return (
    <div>
      <ul
        className="bg-gray-100 shadow-md rounded-[15px] flex items-center justify-start p-2 gap-4
     fixed top-0  w-full flex-row-reverse  "
      >
        <img
          src="src\assets\20250909_1656_لوگوی حروف اناشید_simple_compose_01k4qadx83f0ps7trqrezg63ej.png"
          className="  rounded-[50%] w-[65px] h-[65px] "
        ></img>
        <li>فهرست</li>
        <li>خدمات</li>
        <li>بلاگ</li>
        <li>تماس با ما</li>
        <li>درباره ما</li>
      </ul>
    </div>
  );
}

export default Navbar;
