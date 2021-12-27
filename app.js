// for (let i = 1; i <= 5; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// for (let i = 1; i <= 5; i++) {
//   let star = "";
//   for (let j = 5; j >= i; j--) {
//     star += "* ";
//   }
//   console.log(star);
// }

const tbody = document.querySelector("#tbody");

for (let i = 1; i <= 8; i++) {
  let td = "";

  if (i % 2 != 0) {
    for (let j = 1; j <= 8; j++) {
      if (j % 2 != 0) {
        td += "<td class='bg-dark'></td>";
      } else {
        td += "<td></td>";
      }
    }
  } else {
    for (let j = 1; j <= 8; j++) {
      if (j % 2 != 0) {
        td += "<td></td>";
      } else {
        td += "<td class='bg-dark'></td>";
      }
    }
  }

  tbody.innerHTML += `<tr>${td}</tr>`;
}
