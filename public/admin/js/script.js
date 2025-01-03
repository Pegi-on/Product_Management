// Bộ lọc
const boxFilter = document.querySelector("[box-filter]");
if (boxFilter) {
  let url = new URL(location.href); //nhân bản url

  //bắt sự kiện onchange
  boxFilter.addEventListener("change", () => {
    const value = boxFilter.value;

    if (value) {
      url.searchParams.set("status", value);
    } else {
      url.searchParams.delete("status");
    }
    location.href = url.href;
  });

  //Hiển thị lựa chọn mặc định
  const statusCurrent = url.searchParams.get("status");
  if (statusCurrent) {
    boxFilter.value = statusCurrent;
  }
}
//end bộ lọc
