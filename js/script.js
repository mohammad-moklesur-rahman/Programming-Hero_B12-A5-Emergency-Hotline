// * Create Function for finding Elements
const getElement = (id) => {
  return document.querySelector(id);
};

// * Create Function for Create Div Functionalities
const createHistoryDiv = (getTitle, getEmergencyNum) => {
  const showHistory = getElement("#history-item");
  const createDiv = document.createElement("div");
  const getTimes = new Date().toLocaleTimeString();
  createDiv.innerHTML = `
              <div id="delet-history">
                <div class="history-info bg-[#FAFAFA] rounded-2xl mt-2">
                  <div class="p-3 flex justify-between items-center">
                    <div class="history-left">
                      <h2 class="title text-[18px] text-[#111111] hind-madurai">${getTitle}</h2>
                      <p class="hotline-number text-[18px] text-[#5C5C5C] roboto">${getEmergencyNum}</p>
                    </div>
                    <div class="history-right">
                      <p class="time text-[18px] text-[#111111] inter">${getTimes}</p>
                    </div>
                  </div>
                </div>
              </div>
    `;
  showHistory.append(createDiv);

  // * Coin Count Functionalities
  const coin = getElement("#coin-count").innerText;
  getElement("#coin-count").innerText = Number(coin) - 20;
};

// * Create Function for Copy Buttons Functionalities
const copyFunctionalities = (getEmergencyNum) => {
  navigator.clipboard.writeText(getEmergencyNum);
  alert(`${getEmergencyNum} Emergency Hotline Number কপি করা হয়েছে।`);
  const copyCount = getElement("#copy-count").innerText;
  getElement("#copy-count").innerText = Number(copyCount) + 1;
};

// * Add Functionalities
getElement("#emergency-hotline-info").addEventListener("click", (e) => {
  // * Add Heart Icons Functionalities
  if (e.target.className.includes("fa-heart")) {
    const heart = getElement("#heart-click-count").innerText;
    getElement("#heart-click-count").innerText = Number(heart) + 1;
    e.target.classList.add("heart-style");
  }

  // * Add Call Buttons Functionalities
  if (e.target.className.includes("call-btn")) {
    // * Find Title and Emergency HotNumber
    const getTarget = e.target;
    const getTitle =
      getTarget.parentNode.parentNode.children[1].children[0].innerText;
    const getEmergencyNum =
      getTarget.parentNode.parentNode.children[2].children[0].innerText;

    if (getElement("#coin-count").innerText <= 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করেতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }
    alert(`${getTitle}  ${getEmergencyNum}`);
    createHistoryDiv(getTitle, getEmergencyNum);
  }

  // * Add Call Buttons Functionalities for phone Icon
  if (e.target.className.includes("fa-phone")) {
    // * Find Title and Emergency HotNumber
    const getTarget = e.target;
    const getTitleForIcon =
      getTarget.parentNode.parentNode.parentNode.children[1].children[0]
        .innerText;
    const getEmerNumForIcon =
      getTarget.parentNode.parentNode.parentNode.children[2].children[0]
        .innerText;

    if (getElement("#coin-count").innerText <= 0) {
      alert("আপনার পর্যাপ্ত কয়েন নেই। কল করেতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }
    alert(`${getTitleForIcon}  ${getEmerNumForIcon}`);
    createHistoryDiv(getTitleForIcon, getEmerNumForIcon);
  }

  // * Copy Buttons Functionalities
  if (e.target.className.includes("copy-btn")) {
    const getTarget = e.target;
    const getEmergencyNum =
      getTarget.parentNode.parentNode.children[2].children[0].innerText;
    copyFunctionalities(getEmergencyNum);
  }

  // * Copy Buttons Functionalities For Copy Icon
  if (e.target.className.includes("fa-copy")) {
    const getTarget = e.target;
    const getEmerNumForIcon =
      getTarget.parentNode.parentNode.parentNode.children[2].children[0]
        .innerText;
    copyFunctionalities(getEmerNumForIcon);
  }
});

// * Remove Functionalities
getElement("#history-clear").addEventListener("click", (e) => {
  getElement("#history-item").replaceChildren();
});
