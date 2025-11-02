function Navbar() {
  return (
    <div>
      <h1
        className=" flex justify-start p-4 gap-4
     fixed top-0  w-full flex-row-reverse  "
      >
        ریکت
      </h1>
      <ul
        className="bg-gray-100 shadow-md rounded-[15px] flex justify-start p-4 gap-4
     fixed top-0  w-full flex-row-reverse  "
      >
        <li>فهرست</li>
        <li>خدمات</li>
        <li>بلاک</li>
        <li>تماس با ما</li>
        <li>درباره ما</li>
      </ul>
    </div>
  );
}

export default Navbar;
