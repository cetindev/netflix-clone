const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});

function selectItem(e) {
  removeBorder();
  removeContents();

  this.classList.add("tab-border");

  const tabItemContent = document.querySelector(`#${this.id}-content`);
  tabItemContent.classList.add("show");
}

function removeContents() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}
