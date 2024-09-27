export const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    // Khi hàm debounce được gọi, xóa timeout trước đó (nếu có)
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Tạo một timeout mới
    timeoutId = setTimeout(() => {
      // Gọi hàm func với các đối số được truyền vào
      func(...args);
    }, delay); 
  };
};
