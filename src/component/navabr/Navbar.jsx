function Navbar() {
  return (
    <div>
      <ul
        className="bg-gray-100 shadow-md rounded-[15px] flex items-center justify-start p-4 gap-4
     fixed top-0  w-full flex-row-reverse  "
      >
        <h1 className="font-extrabold text-[28px] bg-neutral-200 p-2 rounded-[20px]">
          ریکت
        </h1>
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
