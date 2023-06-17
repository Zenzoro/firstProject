
let userAmount = document.getElementById("user-amount");
const computeButton = document.getElementById("compute");
const nameTitle = document.getElementById("name-title");
const nameTitleError = document.getElementById("name-title-error");
const totalValue = document.getElementById("amount");
const totalBunch = document.getElementById("bunch-amount");
const list = document.getElementById("list");
const errorMessage = document.getElementById("name-title-error");
let totalBunchCount = 0;

//disable buttons function
  const disableButtons = (bool) =>{
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach ((element) =>{
   element.disabled = bool;
  });
  }
  //list creator
const listCreator = (nameList, bunchValue) => {
  let modifyMode = bunchValue * 3;
  let subListContent = document.createElement("div");
  subListContent.classList.add("sublist-content", "flex-space");
  list.appendChild(subListContent);
  subListContent.innerHTML = `<p class="product">${nameList}</p> <p class="amount">${modifyMode}</p>`;
  totalBunchCount += parseInt(bunchValue);
  totalBunch.innerText = totalBunchCount;
};
  computeButton.addEventListener("click", () => {
  if (!userAmount.value || !nameTitle.value) {
    errorMessage.classList.remove("hide");
    return false;
  } else {
    errorMessage.classList.add("hide");
  }
  let userValue = parseInt(userAmount.value);
  let modifyValue = userValue * 3;
  let sum = parseInt(totalValue.innerText) + modifyValue;
  totalValue.innerText = sum;
  listCreator(nameTitle.value, userAmount.value);
  nameTitle.value = "";
  userAmount.value = "";
});
